import { Module } from '@nestjs/common';
import { TermAndCondService } from './term-and-cond.service';
import { TermAndCondController } from './term-and-cond.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermAndCondEntity } from './entities/term-and-cond.entity';

@Module({
  controllers: [TermAndCondController],
  imports: [TypeOrmModule.forFeature([TermAndCondEntity])],
  providers: [TermAndCondService],
  exports: [TermAndCondService],
})
export class TermAndCondModule {}
