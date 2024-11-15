import type { HttpContext } from '@adonisjs/core/http'
import UserService from '#services/user_service'
import mapStatusHTTP from '#utils/map_status_http'
import User from '#models/user'

export default class UsersController {
  constructor(private userService = new UserService()) {}

  async store({ request, response }: HttpContext) {
    const { email, password, fullName } = request.all()
    const { status, data } = await this.userService.store({ email, password, fullName } as User)
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async update({ request, response, params }: HttpContext) {
    const { id } = params

    const { email, password, fullName } = request.all()
    const { status, data } = await this.userService.update(id, {
      email,
      password,
      fullName,
    } as User)
    return response.status(mapStatusHTTP(status)).json(data)
  }
}
