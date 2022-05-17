import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'table',
        loadChildren: () => import('./pages/table-expand-collapse/table-expand-collapse.module').then((m) => m.TableExpandCollapseModule)
    },
    {
        path: '',
        redirectTo: '/table',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}