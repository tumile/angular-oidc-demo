import { NgModule } from "@angular/core";
import { AuthModule, LogLevel } from "angular-auth-oidc-client";

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: "http://localhost:8081",
        redirectUrl: "http://localhost:4200/auth/callback",
        silentRenewUrl: "http://localhost:4200/auth/silent-callback",
        postLogoutRedirectUri: "http://localhost:4200",
        clientId: "testme",
        scope: "openid profile offline_access",
        responseType: "code",
        autoUserInfo: true,
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
