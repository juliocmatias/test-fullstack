import User from '#models/user'
import { ServiceResponse } from '#interfaces/service_response'
import { UserWithPassword } from '#interfaces/users/user_with_pass'

export default class UserService {
  constructor(private userModel = User) {}

  async store(data: User): Promise<ServiceResponse<UserWithPassword>> {
    try {
      if (!data.email || !data.password) {
        return this.badRequest('Email and password are required')
      }

      const user = await this.userModel.findBy('email', data.email)

      if (user) {
        return this.conflict('User already exists')
      }

      const newUser = await this.userModel.create({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
      })

      return { status: 'CREATED', data: this.userWithPassword(newUser) }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async update(id: number, data: User): Promise<ServiceResponse<UserWithPassword>> {
    try {
      const user = await this.userModel.find(id)

      if (!user) {
        return this.badRequest('User not found')
      }

      if (data.email && (await this.userModel.findBy('email', data.email))) {
        return this.conflict('Email already exists')
      }

      if (data.email) {
        user.email = data.email
      }

      if (data.password) {
        user.password = data.password
      }

      if (data.fullName) {
        user.fullName = data.fullName
      }

      await user.save()

      return { status: 'SUCCESSFUL', data: this.userWithPassword(user) }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private userWithPassword(user: User): UserWithPassword {
    return user.serialize({
      fields: { omit: ['password'] },
    }) as UserWithPassword
  }

  private handleError(error: unknown): ServiceResponse<any> {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
  }

  private badRequest(message: string): ServiceResponse<any> {
    return { status: 'BAD_REQUEST', data: { message } }
  }

  private conflict(message: string): ServiceResponse<any> {
    return { status: 'CONFLICT', data: { message } }
  }
}
