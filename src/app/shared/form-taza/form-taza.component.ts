import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CalidadTazaService } from '../../services/calidad-taza.service/calidad-taza.service';
import { ColorTazaService } from '../../services/color-taza/color-taza.service';
import { DimensionTazaService } from '../../services/dimension-taza.service/dimension-taza.service';
import { CapacidadTazaService } from '../../services/capacidad-taza.service/capacidad-taza.service';
import { MaterialTazaService } from '../../services/material-taza.service/material-taza.service';
import { TazaService } from '../../services/taza.service/taza.service';

import { TazaI } from '../../models/taza.interface';

@Component({
  selector: 'app-form-taza',
  templateUrl: './form-taza.component.html',
  styleUrls: ['./form-taza.component.css']
})
export class FormTazaComponent implements OnInit {

  calidadTaza: any;
  colorTaza: any;
  dimensionTaza: any;
  capacidadTaza: any;
  materialTaza: any;

  calidadTazaValue: number = 0;
  colorTazaValue: number = 0;
  dimensionTazaValue: number = 0;
  capacidadTazaValue: number = 0;
  materialTazaValue: number = 0;
  modelo: string = "";
  precioVenta: string = "";
  stock: string = "";

  // TazaData: TazaI = ;

  constructor(
    private serviceCalidadTaza: CalidadTazaService,
    private serviceColorTaza: ColorTazaService,
    private serviceDimensionTaza: DimensionTazaService,
    private serviceCapacidadTaza: CapacidadTazaService,
    private serviceMaterialTaza: MaterialTazaService,
    private router: Router,
    private serviceTaza: TazaService
  ) { }

  ngOnInit(): void {
    this.serviceCalidadTaza.getAllCalidadTaza().subscribe( data => {
      this.calidadTaza = data;
    });

    this.serviceColorTaza.getAllColorTaza().subscribe( data => {
      this.colorTaza = data;
    });

    this.serviceDimensionTaza.getAllDimensionTaza().subscribe( data => {
      this.dimensionTaza = data;
    });

    this.serviceCapacidadTaza.getAllCapacidadTaza().subscribe( data => {
      this.capacidadTaza = data;
    });

    this.serviceMaterialTaza.getAllMaterialTaza().subscribe( data => {
      this.materialTaza = data;
    });
  }

  onChangeCalidadTaza(event: any) {
    this.calidadTazaValue = event.value;
  }

  onChangeColorTaza(event: any) {
    this.colorTazaValue = event.value;
  }

  onChangeDimensionTaza(event: any) {
    this.dimensionTazaValue = event.value;
  }

  onChangeCapacidadTaza(event: any) {
    this.capacidadTazaValue = event.value;
  }

  onChangeMaterialTaza(event: any) {
    this.materialTazaValue = event.value;
  }

  onClickAddNewRegister() {
    const data = {
      id: 0,
      modelo: this.modelo,
      costoVenta: Number(this.precioVenta),
      idCalidadTaza: this.calidadTazaValue,
      calidad: "",
      idColorTaza: this.colorTazaValue,
      colorTxt: "",
      idDimensionTaza: this.dimensionTazaValue,
      alto: 0,
      ancho: 0,
      altoAgarre: 0,
      idCapacidadTaza: this.capacidadTazaValue,
      capacidad: 0,
      idMaterialTaza: this.materialTazaValue,
      material: "",
      stock: Number(this.stock)
    };

    console.log(data);
    this.serviceTaza.postNewIngreso(data).subscribe(data => {
      this.router.navigate(['/ingresos']);
    });
  }

  onClickAddNew(): void {
    this.router.navigate(['/ingresos']);
  }

}
