import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table-expand-collapse',
  templateUrl: './table-expand-collapse.component.html',
  styleUrls: ['./table-expand-collapse.component.css']
})
export class TableExpandCollapseComponent implements OnInit {
  public bossesDataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([])
  public bossColumns: string[] = ['name'];
  public bosses: any[] = []

  constructor(private tableService: TableService,) { }

  ngOnInit(): void {
    this.getBosses();
  }

  getBosses() {
    this.tableService.getBosses().subscribe(data => {
      this.bosses = data.data;
      this.bossesDataSource = new MatTableDataSource(this.bosses);
    }, error => {
      console.log(error);
    });
  }
}
