import { ContactProfileEntity } from 'src/modules/contact_profile/entities/contact_profile.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'branch' })
export class BranchEntity extends BaseEntity {
  @PrimaryColumn({ name: 'branch_id', length: 45 })
  id: string;

  @Column({ name: 'branch_no', length: 45 })
  branchNo: string;

  @Column({ name: 'business_id', length: 45 })
  businessId: string;

  @Column({ length: 100 })
  name: string;

  @Column({ name: 'create_date' })
  @CreateDateColumn()
  createDate: Date;

  @Column({ name: 'update_date' })
  @UpdateDateColumn()
  updateDate: Date;

  @Column({ name: 'create_by', length: 45 })
  createBy: string;

  @Column({ name: 'update_by', length: 45 })
  updateBy: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @OneToMany(
    () => ContactProfileEntity,
    (contactProfile) => contactProfile.branch,
  )
  contactProfiles: ContactProfileEntity[];
}
