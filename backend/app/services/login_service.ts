import User from '#models/user'
import { ServiceResponse } from '#interfaces/service_response'
import Token from '#interfaces/token'
import bcrypt from 'bcrypt'
import Jwt from '#utils/jwt'

export default class LoginService {
  constructor(
    private user = User,
    private hash = bcrypt,
    private jwt = Jwt
  ) {}

  async store(email: string, password: string): Promise<ServiceResponse<Token>> {
    try {
      if (!email || !password) {
        return { status: 'BAD_REQUEST', data: { message: 'Email and password are required' } }
      }

      const user = await this.user.findBy('email', email)

      if (!user || (await this.hash.compare(password, user.password))) {
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } }
      }

      const { id } = user
      const token = this.jwt.sign({ id, email })

      return { status: 'SUCCESSFUL', data: { token } }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred'
      return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
    }
  }
}
