import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { DettagliClientiComponent } from './dettagli-clienti/dettagli-clienti.component';
import { HomeComponent } from './home/home.component';
import { InputClientiComponent } from './input-clienti/input-clienti.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { TabellaFattureComponent } from './tabella-fatture/tabella-fatture.component';
import { DettagliFattureComponent } from './dettagli-fatture/dettagli-fatture.component';
import { EditFatturaComponent } from './edit-fattura/edit-fattura.component';
import { InputFatturaComponent } from './input-fattura/input-fattura.component';
import { InputProvinciaComponent } from './input-provincia/input-provincia.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabellaClientiComponent,
    DettagliClientiComponent,
    HomeComponent,
    InputClientiComponent,
    EditClienteComponent,
    TabellaFattureComponent,
    DettagliFattureComponent,
    EditFatturaComponent,
    InputFatturaComponent,
    InputProvinciaComponent,
    FattureClienteComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
