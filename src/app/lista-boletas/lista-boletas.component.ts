import { ViewChild, AfterViewInit, Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import { ItemBoleta } from '../Clases/ItemBoleta.class';
import {BoletaService} from '../Servicios/boleta.service'


@Component({
  selector: 'app-lista-boletas',
  templateUrl: './lista-boletas.component.html',
  styleUrls: ['./lista-boletas.component.css']
})
export class ListaBoletasComponent implements AfterViewInit, OnInit {

  items_offline: ItemBoleta[] = [];
  displayedColumns: string[] = ['URI', 'Fecha_Visita', 'Solo_Externa', 'Valoracion_Realizada' ];
  searching: boolean = false;
  dataSource = new MatTableDataSource<ItemBoleta>();

  constructor(private _liveAnnouncer: LiveAnnouncer, private boletaService: BoletaService) { }

  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort)  sort!: MatSort;

  ngAfterViewInit() {    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getItems();
    this.dataSource = new MatTableDataSource<ItemBoleta>(this.items_offline);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }  

  getItems(): void 
  {
      if(localStorage.getItem('Lista_Boletas') !== null)
      {
        this.items_offline = JSON.parse(localStorage.getItem('Lista_Boletas') || '{}');
      }    
  }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      // This example uses English messages. If your application supports
      // multiple language, you would internationalize these strings.
      // Furthermore, you can customize the message to add additional
      // details about the values being sorted.
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }
  
    public doFilter = (value: String) => {
  
      //let value1 = (event.target as HTMLInputElement).value;
      this.dataSource.filter = value.trim().toLocaleLowerCase();
      this.searching = true;
    }



}
