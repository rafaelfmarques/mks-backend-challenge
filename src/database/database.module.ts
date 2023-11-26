import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './typeorm/typeorm.service';

@Module({
  providers: [TypeOrmConfigService],
  exports: [TypeOrmConfigService],
})
export class DatabaseModule {}
