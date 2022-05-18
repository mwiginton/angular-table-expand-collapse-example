import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table-expand-collapse',
  templateUrl: './table-expand-collapse.component.html',
  styleUrls: ['./table-expand-collapse.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableExpandCollapseComponent implements OnInit { 
  public bossColumns: string[] = ['image', 'name', 'region'];
  public bosses: Boss[] = [];
  public bossesDataSource = new MatTableDataSource(this.bosses)

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.getBosses();
  }

  getBosses() {
    this.tableService.getBosses().subscribe(data => {
      // this.bosses = data.data;
      this.bosses = data.data.filter((boss: Boss) => {
        return boss.name === `Malenia, Blade Of Miquella` || boss.name === `Fire Giant` || boss.name === `Mohg, The Omen` || boss.name === `Ancestor Spirit` || boss.name === `Astel, Stars Of Darkness`
      });

      this.bosses = this.bosses.map((element) => ({
        ...element,
        isExpanded: false
      }));

      console.log('bosses');
      console.log(this.bosses);

      this.bossesDataSource = new MatTableDataSource(this.bosses);
    }, error => {
      console.log(error);
    });
  }
}

export interface Boss {
  name: string;
}
