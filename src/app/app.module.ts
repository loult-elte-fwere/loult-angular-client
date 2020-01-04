import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { MessagesLogComponent } from './components/messages-log/messages-log.component';
import { MenuComponent } from './components/menu/menu.component';
import { ConfigPanelComponent } from './components/config-panel/config-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    TextareaComponent,
    MessagesLogComponent,
    MenuComponent,
    ConfigPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
