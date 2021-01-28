import { Component, OnInit } from '@angular/core';

import { CalidadTazaService } from '../../services/calidad-taza.service/calidad-taza.service';
import { ColorTazaService } from '../../services/color-taza/color-taza.service';
import { DimensionTazaService } from '../../services/dimension-taza.service/dimension-taza.service';
import { CapacidadTazaService } from '../../services/capacidad-taza.service/capacidad-taza.service';
import { MaterialTazaService } from '../../services/material-taza.service/material-taza.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  dataSourceCalidadTaza: any;
  displayedColumnsCalidadTaza: string[] = ['id', 'calidad'];
  txtCalidadTaza: string = "";

  dataSourceColorTaza: any;
  displayedColumnsColorTaza: string[] = ['id', 'color'];
  txtColorTaza: string = "";

  dataSourceDimensionTaza: any;
  displayedColumnsDimensionTaza: string[] = ['id', 'alto', 'ancho', 'altoAgarre'];
  txtDimensionTaza: string = "";
  txtDimensionTazaAncho: string = "";
  txtDimensionTazaAltoAgarre: string = "";

  dataSourceCapacidadTaza: any;
  displayedColumnsCapacidadTaza: string[] = ['id', 'capacidad'];
  txtCapacidadTaza: string = "";

  dataSourceMaterialTaza: any;
  displayedColumnsMaterialTaza: string[] = ['id', 'material'];
  txtMAterialTaza: string = "";

  constructor(
    private serviceCalidadTaza: CalidadTazaService,
    private serviceColorTaza: ColorTazaService,
    private serviceDimensionTaza: DimensionTazaService,
    private serviceCapacidadTaza: CapacidadTazaService,
    private serviceMaterialTaza: MaterialTazaService
  ) { }

  ngOnInit(): void {
    this.getCalidadTaza();
    this.getColorTaza();
    this.getDimensionTaza();
    this.getCapacidadTaza();
    this.getMaterialTaza();
  }

  /** Calidad */
  getCalidadTaza(): void {
    this.serviceCalidadTaza.getAllCalidadTaza().subscribe(data => {
      this.dataSourceCalidadTaza = data;
    });
  }

  onClickSaveCAlidadTaza(): void {
    const data = {
      id: 0,
      calidad: this.txtCalidadTaza
    };

    this.serviceCalidadTaza.postNewCalidadTaza(data).subscribe(response => {
      this.txtCalidadTaza = "";
      this.getCalidadTaza();
    });
  }

  /** Color */
  getColorTaza(): void {
    this.serviceColorTaza.getAllColorTaza().subscribe(data => {
      this.dataSourceColorTaza = data;
    });
  }

  onClickSaveColorTaza(): void {
    const data = {
      id: 0,
      colorTxt: this.txtColorTaza,
      colorHex: ""
    };

    this.serviceColorTaza.postNewColorTaza(data).subscribe(response => {
      this.txtColorTaza = "";
      this.getColorTaza();
    });
  }

  /** Dimension */
  getDimensionTaza(): void {
    this.serviceDimensionTaza.getAllDimensionTaza().subscribe(data => {
      this.dataSourceDimensionTaza = data;
    });
  }

  onClickSaveDimensionTaza(): void {
    const data = {
      id: 0,
      alto: Number(this.txtDimensionTaza),
      ancho: Number(this.txtDimensionTazaAncho),
      altoAgarre: Number(this.txtDimensionTazaAltoAgarre)
    };

    this.serviceDimensionTaza.postNewColorTaza(data).subscribe(data => {
      this.txtDimensionTaza = "";
      this.txtDimensionTazaAncho = "";
      this.txtDimensionTazaAltoAgarre = "";
      this.getDimensionTaza();
    });
  }

  /** Capacidad */
  getCapacidadTaza(): void {
    this.serviceCapacidadTaza.getAllCapacidadTaza().subscribe(data => {
      this.dataSourceCapacidadTaza = data;
    });
  }

  onClickSaveCapacidadTaza(): void {
    const data = {
      id: 0,
      capacidad: Number(this.txtCapacidadTaza)
    };

    this.serviceCapacidadTaza.postNewCapacidadTaza(data).subscribe(data => {
      this.txtCapacidadTaza = "";
      this.getCapacidadTaza();
    });
  }

  /** Material */
  getMaterialTaza(): void {
    this.serviceMaterialTaza.getAllMaterialTaza().subscribe(data => {
      this.dataSourceMaterialTaza = data;
    });
  }

  onClickSaveMaterialTaza(): void {
    const data = {
      id: 0,
      material: this.txtMAterialTaza
    };

    this.serviceMaterialTaza.postNewMaterialTaza(data).subscribe(data => {
      this.txtMAterialTaza = "";
      this.getMaterialTaza();
    });
  }

}
