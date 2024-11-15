import type { HttpContext } from '@adonisjs/core/http'
import mapStatusHTTP from '#utils/map_status_http'
import ClientService from '#services/client_service'
import Client from '#models/client'

export default class ClientController {
  constructor(private clientService = new ClientService()) {}

  async index({ response }: HttpContext) {
    const { status, data } = await this.clientService.index()
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async store({ request, response }: HttpContext) {
    const { name, email, cpf, phone, status } = request.all()
    const { status: serviceStatus, data } = await this.clientService.store({
      name,
      email,
      cpf,
      phone,
      status,
    } as Client)
    return response.status(mapStatusHTTP(serviceStatus)).json(data)
  }

  async update({ request, response, params }: HttpContext) {
    const { name, email, cpf, phone, status } = request.all()
    const { status: serviceStatus, data } = await this.clientService.update(params.id, {
      name,
      email,
      cpf,
      phone,
      status,
    } as Client)
    return response.status(mapStatusHTTP(serviceStatus)).json(data)
  }

  async destroy({ response, params }: HttpContext) {
    const { status, data } = await this.clientService.destroy(params.id)
    return response.status(mapStatusHTTP(status)).json(data)
  }
}
