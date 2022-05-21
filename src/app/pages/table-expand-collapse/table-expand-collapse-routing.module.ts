import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableExpandCollapseComponent } from './table-expand-collapse.component';

const routes: Routes = [
    {
        path: '',
        component: TableExpandCollapseComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TableExpandCollapseRoutingModule {}