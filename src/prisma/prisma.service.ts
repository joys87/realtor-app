import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    //extends는 이 클래스 내부의 모든 클래스와 모든 메서드 및 모든 속성을 의미합니다.
    async onModuleInit() {
        await this.$connect;
    }

    async onModuleDestroy() {
        await this.$disconnect;
    }
}
//prisma client는 api 서버의 기존 orm을 대체하는 자동생성 라이브러리다. 
//데이터베이스 맨 위에 있는 prisma server에 연결된다.
//prisma client 이해도 높이기
//OnModuleInit, OnModuleDestroy/ prisma 인지 nest의 lifecycle 문제인지 확인하고 이해도 높이기 
//이게 뭐시다냐 ㅠㅠ