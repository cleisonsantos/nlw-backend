import Knex from 'knex';

export async function up(knex: Knex){
    // CRIA TABELA
    return knex.schema.createTable('points', table => {
        table.increments('id').primary(); //AUTO INCREMENT E CHAVE PRIMÁRIA
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
}

export async function down(knex: Knex){
    //REVERTER TABELA
    return knex.schema.dropTable('points');
}