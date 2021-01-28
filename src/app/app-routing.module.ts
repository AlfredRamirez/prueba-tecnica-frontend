import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurationComponent } from './shared/configuration/configuration.component';
import { IngresosComponent } from './shared/ingresos/ingresos.component';
import { EgresosComponent } from './shared/egresos/egresos.component';
import { FormTazaComponent } from './shared/form-taza/form-taza.component';
import { FormEgresosComponent } from './shared/form-egresos/form-egresos.component';

const routes: Routes = [
  { path: 'configuration', component: ConfigurationComponent},
  { path: 'ingresos', component: IngresosComponent},
  { path: 'egresos', component: EgresosComponent},
  { path: 'form-taza', component: FormTazaComponent },
  { path: 'form-egresos/:id', component: FormEgresosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
