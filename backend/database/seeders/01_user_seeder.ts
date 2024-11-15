import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import bcrypt from 'bcrypt'

export default class extends BaseSeeder {
  private SALT_ROUNDS = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10)

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT_ROUNDS)
  }
  async run() {
    await User.createMany([
      {
        fullName: 'Admin',
        email: 'admin@admin.com',
        password: await this.hashPassword('admin'),
      },
    ])
  }
}
