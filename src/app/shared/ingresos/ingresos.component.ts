import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TazaService } from '../../services/taza.service/taza.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['calidad', 'color', 'alto', 'ancho', 'altoAgarre', 'modelo', 'material', 'costoVenta', 'stock'];

  constructor(private service: TazaService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllTaza().subscribe( data => {
      this.dataSource = data;
      console.log(data);
    });
  }

  onClickAddNew(): void {
    this.router.navigate(['/form-taza']);
  }

}
