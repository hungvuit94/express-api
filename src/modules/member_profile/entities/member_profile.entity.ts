import { ContactProfileEntity } from 'src/modules/contact_profile/entities/contact_profile.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Roles {
  superAdmin = 'SUPER ADMIN',
  member = 'MEMBER',
}

export enum MemberStatus {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
  pending = 'PENDING',
}

@Entity({ name: 'member_profile' })
export class MemberProfileEntity extends BaseEntity {
  @PrimaryColumn({ name: 'member_id', length: 45 })
  id: string;

  @OneToOne(() => UserEntity, (user) => user.memberProfile)
  @JoinColumn({ name: 'user_id' })
  @Index('idx_user')
  user: UserEntity;

  @Column({ name: 'branch_id' })
  @Index('idx_branch')
  branchId: string;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.member,
  })
  role: Roles;

  @Column({
    type: 'enum',
    enum: MemberStatus,
    default: MemberStatus.pending,
  })
  status: MemberStatus;

  @Column({ name: 'create_date', default: () => 'CURRENT_TIMESTAMP' })
  @CreateDateColumn()
  createDate: Date;

  @Column({ name: 'update_date' })
  @UpdateDateColumn()
  updateDate: Date;

  @Column({ name: 'update_by', length: 45 })
  updateBy: string;
}
