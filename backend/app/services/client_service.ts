import Client from '#models/client'
import { ServiceResponse } from '#interfaces/service_response'

export default class ClientService {
  constructor(private client = Client) {}

  async index(): Promise<ServiceResponse<Client[]>> {
    try {
      const clients = await this.client.query().orderBy('id', 'asc')

      return { status: 'SUCCESSFUL', data: clients }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred'
      return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
    }
  }

  async store(data: Client): Promise<ServiceResponse<Client>> {
    try {
      if (!data.name || !data.email || !data.cpf || !data.phone) {
        return this.badRequest('Missing required fields')
      }

      if (await this.verifyIfClientAlreadyExists(data)) {
        return this.conflict('Client already exists')
      }

      const newClient = await this.client.create(data)

      return { status: 'SUCCESSFUL', data: newClient }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async update(id: number, data: Client): Promise<ServiceResponse<Client>> {
    try {
      let client = await this.client.find(id)

      if (!client) {
        return this.badRequest('Client not found')
      }

      if (await this.verifyIfClientAlreadyExists(data)) {
        return this.conflict('Client already exists')
      }

      client = await this.changeClient(client, data)

      await client.save()

      return { status: 'SUCCESSFUL', data: client }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async destroy(id: number): Promise<ServiceResponse<Client>> {
    try {
      const client = await this.client.find(id)

      if (!client) {
        return this.badRequest('Client not found')
      }

      client.status = 'Desativado'

      await client.save()

      return { status: 'SUCCESSFUL', data: client }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private async changeClient(client: Client, data: Client): Promise<Client> {
    if (data.name) {
      client.name = data.name
    }

    if (data.email) {
      client.email = data.email
    }

    if (data.cpf) {
      client.cpf = data.cpf
    }

    if (data.phone) {
      client.phone = data.phone
    }

    if (data.status) {
      client.status = data.status
    }

    return client
  }

  private async verifyIfClientAlreadyExists(data: Client): Promise<boolean> {
    let isExistingClient = false
    isExistingClient = (await this.client.findBy('email', data.email)) !== null
    isExistingClient = isExistingClient || (await this.client.findBy('cpf', data.cpf)) !== null
    isExistingClient = isExistingClient || (await this.client.findBy('phone', data.phone)) !== null

    return isExistingClient
  }

  private handleError(error: unknown): ServiceResponse<Client> {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
  }

  private badRequest(message: string): ServiceResponse<Client> {
    return { status: 'BAD_REQUEST', data: { message } }
  }

  private conflict(message: string): ServiceResponse<Client> {
    return { status: 'CONFLICT', data: { message } }
  }
}
