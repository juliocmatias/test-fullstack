import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        fullName: 'Admin',
        email: 'admin@admin.com',
        password: await hash.make('admin'),
      },
    ])
  }
}
