import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from "primeng/toolbar";
import { KooienComponent } from './kooien/kooien.component';
import { DierenComponent } from './dieren/dieren.component';
import { CreateKooiComponent } from './create-kooi/create-kooi.component';
import { CreateDierComponent } from './create-dier/create-dier.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/Authenticationservice';
import { CallbackComponent } from './callback/callback.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KooienComponent,
    DierenComponent,
    CreateKooiComponent,
    CreateDierComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    RouterModule.forRoot([
      { path: "Kooien", component: KooienComponent},
      { path: "Dieren", component: DierenComponent},
      { path: "Createkooi", component: CreateKooiComponent},
      { path: "CreateDier", component: CreateDierComponent},
      { path: "Home", component: AppComponent},
      { path: "Login", component: LoginComponent},
      { path: "Callback", component: CallbackComponent},
      { path: "", redirectTo: "home", pathMatch: "full"}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
