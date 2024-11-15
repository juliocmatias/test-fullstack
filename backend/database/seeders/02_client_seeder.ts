import Client from '#models/client'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Client.createMany([
      {
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '26587633790',
        phone: '1234567890',
        status: 'Ativo',
      },
      {
        name: 'Jane Doe',
        email: 'jane_doe@test.com',
        cpf: '50568483529',
        phone: '0987654321',
        status: 'Inativo',
      },
      {
        name: 'John Smith',
        email: 'john_smith@test.com',
        cpf: '14836393809',
        phone: '1234567890',
        status: 'Aguardando ativação',
      },
      {
        name: 'Jane Smith',
        email: 'jane_smith@test.com',
        cpf: '79763886813',
        phone: '0987654321',
        status: 'Desativado',
      },
    ])
  }
}
