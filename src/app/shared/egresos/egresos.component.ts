import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TazaService } from '../../services/taza.service/taza.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['calidad', 'color', 'alto', 'ancho', 'altoAgarre', 'modelo', 'material', 'costoVenta', 'stock', 'compra'];

  constructor(private service: TazaService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllTaza().subscribe(data => {
      this.dataSource = data;
    });
  }

  onClickButtonCompra(e: any): void {
    this.router.navigate([`/form-egresos/${e.id}`]);
  }

}
