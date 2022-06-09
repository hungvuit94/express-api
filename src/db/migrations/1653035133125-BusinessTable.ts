import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class BusinessTable1653035133125 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'business',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'business_name',
            type: 'varchar',
          },
          {
            name: 'selected_value',
            type: 'varchar',
          },
          {
            name: 'createdAt',
            type: 'datetime',
            isNullable: true,
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'datetime',
            isNullable: true,
            default: 'NULL',
          },
        ],
      }),
    );

    queryRunner.clearSqlMemory();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
