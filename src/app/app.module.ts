import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** Own Component */
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { ConfigurationComponent } from './shared/configuration/configuration.component';
import { IngresosComponent } from './shared/ingresos/ingresos.component';
import { FormTazaComponent } from './shared/form-taza/form-taza.component';
import { EgresosComponent } from './shared/egresos/egresos.component';
import { FormEgresosComponent } from './shared/form-egresos/form-egresos.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ConfigurationComponent,
    IngresosComponent,
    FormTazaComponent,
    EgresosComponent,
    FormEgresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    HttpClientModule,

    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
