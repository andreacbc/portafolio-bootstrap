import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortafolioComponent,
    AcercaComponent,
    FormularioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
