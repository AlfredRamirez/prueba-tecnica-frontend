import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { OrdenCompraService } from '../../services/orden-compra/orden-compra.service';

import { TazaService } from '../../services/taza.service/taza.service';

@Component({
  selector: 'app-form-egresos',
  templateUrl: './form-egresos.component.html',
  styleUrls: ['./form-egresos.component.css']
})
export class FormEgresosComponent implements OnInit {

  idTaza: Number = 0;
  tazaById: any;
  displayedColumns: string[] = ['calidad', 'color', 'alto', 'ancho', 'altoAgarre', 'modelo', 'material', 'costoVenta', 'stock'];

  txtCalidad: string = "";
  txtColor: string = "";
  txtAlto: string = "";
  txtAncho: string = "";
  txtAltoAgarre: string = "";
  txtModelo: string = "";
  txtMaterial: string = "";
  txtCostoVenta: string = "";
  txtStock: string = "";
  txtCantidadVenta: string = "";
  txtRegaloOferta: string = "";

  disabledBtn: any = true;

  constructor(
    private router: ActivatedRoute, 
    private serviceTaza: TazaService, 
    private _snackBar: MatSnackBar, 
    private router2: Router,
    private serviceOrdenCompra: OrdenCompraService) {

    this.router.paramMap.subscribe(async (params) => {
      if (params.has('id')) {
        this.idTaza = Number(params.get('id'));

        this.serviceTaza.getTazaById({ id: this.idTaza }).subscribe(response => {
          this.tazaById = response.res;
          this.txtCalidad = response.res.calidad;
          this.txtColor = response.res.colorTxt;
          this.txtAlto = response.res.alto;
          this.txtAncho = response.res.ancho;
          this.txtAltoAgarre = response.res.altoAgarre;
          this.txtModelo = response.res.modelo;
          this.txtMaterial = response.res.material;
          this.txtCostoVenta = response.res.costoVenta;
          this.txtStock = response.res.stock;
        });
      }
    });
  }

  ngOnInit(): void {
    this.txtCalidad = "";
    this.txtColor = "";
    this.txtAlto = "";
    this.txtAncho = "";
    this.txtAltoAgarre = "";
    this.txtModelo = "";
    this.txtMaterial = "";
    this.txtCostoVenta = "";
    this.txtStock = "";
    this.txtCantidadVenta = "";
    this.txtRegaloOferta = "";

    this.disabledBtn = true;
  }

  onClickValidate(): void {
    if (Number(this.txtCantidadVenta) > Number(this.txtStock)) {
      this.openSnackBar("La cantidad es mas grande que el stock", "Cerrar");
    } else {
      if (this.txtCalidad === "Alta") {
        let numeroEntero = Math.floor(Number(this.txtCantidadVenta));
        this.txtRegaloOferta = String(((numeroEntero - (numeroEntero%10))/10) * 3);
        this.disabledBtn = false;
        console.log(numeroEntero);
      } else if (this.txtCalidad === "Baja") {
        let numeroEntero = Math.floor(Number(this.txtCantidadVenta));
        this.txtRegaloOferta = String(((numeroEntero - (numeroEntero%10))/10) * 2);
        this.disabledBtn = false;
        console.log(this.txtRegaloOferta);
      }
    }
  }

  onClickNewOC(): void {
    let data = {
      idTaza: this.idTaza,
      cantidad: Number(this.txtCantidadVenta),
      oferta: Number(this.txtRegaloOferta)
    }

    this.serviceOrdenCompra.postNewOrdenCompra(data).subscribe(response => {
      console.log('OrdenCompra', response);
      this.router2.navigate(['/egresos']);
    });
  }

  onClickReturn(): void {
    this.router2.navigate(['/egresos']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
