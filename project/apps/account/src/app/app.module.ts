import { Module } from '@nestjs/common';
import { BlogUserModule } from '@project/blog-user';
import { AuthenticationModule } from '@project/authentication';
import { AccountConfigModule, getMongooseOptions } from '@project/account-config';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    BlogUserModule,
    AuthenticationModule,
    AccountConfigModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
