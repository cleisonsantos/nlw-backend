import Knex from 'knex';

export async function up(knex: Knex){
    // CRIA TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary(); //AUTO INCREMENT E CHAVE PRIMÁRIA

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items');
    })
}

export async function down(knex: Knex){
    //REVERTER TABELA
    return knex.schema.dropTable('point_items');
}