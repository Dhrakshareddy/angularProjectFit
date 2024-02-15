  import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [WebsiteComponent],
})
export class AppServerModule {}
