import Knex from 'knex';

export async function up(knex: Knex){
    // CRIA TABELA
    return knex.schema.createTable('items', table => {
        table.increments('id').primary(); //AUTO INCREMENT E CHAVE PRIMÁRIA
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex){
    //REVERTER TABELA
    return knex.schema.dropTable('items');
}