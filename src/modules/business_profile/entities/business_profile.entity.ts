import { AddressProfileEntity } from 'src/modules/address_profile/entities/address_profile.entity';
import {
  BaseEntity, BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid4 } from 'uuid';

export enum AccountStatus {
  applicationSubmitted = 'Application submitted',
  pendingForApprove = 'Pending for approve',
  approved = 'Approved',
  rejected = 'Rejected',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity({ name: 'business_profile' })
export class BusinessProfileEntity extends BaseEntity {
  @PrimaryColumn({ name: 'business_id', length: 45 })
  id: string;

  @Column({ unique: true, length: 100 })
  name: string;

  @Index('idx_type')
  @Column({ name: 'type_id', length: 100 })
  typeId: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ unique: true, length: 10 })
  tel: string;

  @ManyToOne(() => AddressProfileEntity, (mainAddress) => mainAddress.business)
  mainAddress: AddressProfileEntity;

  @ManyToOne(() => AddressProfileEntity, (subAddress) => subAddress.business)
  subAddress: AddressProfileEntity;

  @Column({ name: 'tax_no', nullable: true })
  taxNo: number;

  @Column({ name: 'create_date' })
  @CreateDateColumn()
  createDate: Date;

  @Column({ name: 'update_date' })
  @UpdateDateColumn()
  updateDate: Date;

  @Column({ name: 'create_by', length: 45, nullable: true })
  createBy: string;

  @Column({ name: 'update_by', length: 45, nullable: true })
  updateBy: string;

  @Column({ name: 'status', type: 'enum', enum: Status, nullable: true })
  status: string;

  @Column({
    name: 'account_status', nullable: true
  })
  accountStatus: AccountStatus;

  @BeforeInsert()
  generateId() {
    const uuid = uuid4();
    const randomNumber = Math.random().toString().slice(2, 11);
    this.id = uuid + randomNumber;
  }
}
