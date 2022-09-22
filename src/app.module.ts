import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/* SIGNUP LOGIC */ 
// 유저로부터 받은 데이터를 검증
// 이메일이 사용된 적 있는지 검증
// 패스워드 해시
// 유저를 DB에 저장

// SIGNIN LOGIC


// ME LOGIC