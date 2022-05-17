import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableExpandCollapseComponent } from './table-expand-collapse.component';

const routes: Routes = [
    {
        path: '',
        component: TableExpandCollapseComponent,
        // data: { icon: 'home', name: 'Home', disabled: true, tags: ['login'] }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TableExpandCollapseRoutingModule {}