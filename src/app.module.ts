import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './shared/shared.module';
import { ORMModule } from './config/orm/orm.module';
import { AuthModule } from './modules/auth/auth.module';
import { IORedisModule } from './config/bootstrap/redis';
import {
  AcceptLanguageResolver,
  I18nJsonLoader,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import { BusinessProfileModule } from './modules/business_profile/business_profile.module';
import { ContactProfileModule } from './modules/contact_profile/contact_profile.module';
import { DeviceModule } from './modules/device/device.module';
import { MemberProfileModule } from './modules/member_profile/member_profile.module';
import { AddressProfileModule } from './modules/address_profile/address_profile.module';
import { BranchModule } from './modules/branch/branch.module';
import { GuestProfileModule } from './modules/guest_profile/guest_profile.module';
import { UserSessionModule } from './modules/user_session/user_session.module';
import { TermAndCondModule } from './modules/term-and-cond/term-and-cond.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './core/http-error.filter';
import { LoggingInterceptor } from './core/logging.interceptor';

@Module({
  imports: [
    ORMModule,
    IORedisModule,
    ConfigModule,
    AuthModule,
    UserModule,
    SharedModule,
    I18nModule.forRoot({
      fallbackLanguage: 'th',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    BusinessProfileModule,
    ContactProfileModule,
    DeviceModule,
    MemberProfileModule,
    AddressProfileModule,
    BranchModule,
    GuestProfileModule,
    UserSessionModule,
    TermAndCondModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
  ],
})
export class AppModule {}
