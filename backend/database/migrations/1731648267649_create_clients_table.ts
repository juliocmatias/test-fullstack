import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.string('name').notNullable()
      table.string('email').notNullable().unique()
      table.string('cpf').notNullable().unique()
      table.string('phone').notNullable()
      table
        .enu('status', ['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'])
        .defaultTo('Aguardando ativação')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
