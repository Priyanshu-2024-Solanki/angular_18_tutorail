import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { StructuralDirComponent } from './component/structural-dir/structural-dir.component';
import { AttributeComponentComponent } from './component/attribute-component/attribute-component.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'structural-dir',
        component: StructuralDirComponent
    },
    {
        path: 'attribute-dir',
        component: AttributeComponentComponent
    }
];
