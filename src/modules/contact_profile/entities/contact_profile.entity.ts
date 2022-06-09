import { BranchEntity } from 'src/modules/branch/entities/branch.entity';
import { MemberProfileEntity } from 'src/modules/member_profile/entities/member_profile.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'contact_profile' })
export class ContactProfileEntity extends BaseEntity {
  @PrimaryColumn({ name: 'contact_id', length: 45 })
  contactId: string;

  @Column({ name: 'first_name', length: 300 })
  firstName: string;

  @Column({ name: 'last_name', length: 300 })
  lastName: string;

  @Column({ name: 'tel', length: 10, unique: true })
  tel: string;

  @OneToOne(() => MemberProfileEntity)
  @JoinColumn()
  @Index('idx_member')
  memberProfile: MemberProfileEntity;

  @Column({ name: 'email', unique: true, length: 300 })
  email: string;

  @ManyToOne(() => BranchEntity, (branch) => branch.contactProfiles)
  @Index('idx_branch')
  branch: BranchEntity;

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
}
