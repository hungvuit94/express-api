import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid4 } from 'uuid';

@Entity({ name: 'term_cond' })
export class TermAndCondEntity extends BaseEntity {
  @PrimaryColumn({ name: 'term_cond_id', length: 45, type: 'varchar' })
  id: string;

  @Column({ name: 'content_th', nullable: true, length: 45, type: 'varchar' })
  contentTh: string;

  @Column({ name: 'content_en', nullable: true, length: 45, type: 'varchar' })
  contentEn: string;

  @Column({ name: 'version_code', nullable: true, length: 10, type: 'varchar' })
  versionCode: string;

  @Column({ name: 'express_web_ver', length: 10, type: 'varchar' })
  expressWebVer: string;

  @Column({ name: 'express_app_ver', length: 10, type: 'varchar' })
  expressAppVer: string;

  @Column({ name: 'type' })
  type: string;

  @Column({ name: 'create_date' })
  @CreateDateColumn()
  createDate: Date;

  @Column({ name: 'update_date' })
  @UpdateDateColumn()
  updateDate: Date;

  @Column({ name: 'create_by', nullable: true })
  createBy: string;

  @Column({ name: 'update_by', nullable: true })
  updateBy: string;

  @BeforeInsert()
  generateId() {
    const uuid = uuid4();
    const randomNumber = Math.random().toString().slice(2, 11);
    this.id = uuid + randomNumber;
  }
}
