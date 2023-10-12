import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from '../entities/boardEntity.entity';
import { EmotionEntity } from '../entities/emotionEntity.entity';
import { UserEntity } from 'src/entities/userEntity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity, UserEntity, EmotionEntity])],
  providers: [BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
