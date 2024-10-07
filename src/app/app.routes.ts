import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { StructuralDirComponent } from './component/structural-dir/structural-dir.component';
import { AttributeComponentComponent } from './component/attribute-component/attribute-component.component';
import { IfelseComponent } from './component/control-flow/ifelse/ifelse.component';
import { ForComponent } from './component/control-flow/for/for.component';
import { SwitchComponent } from './component/control-flow/switch/switch.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { TemplateComponent } from './component/forms/template/template.component';
import { ReactiveComponent } from './component/forms/reactive/reactive.component';
import { GetApiComponent } from './component/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './component/apiIntegration/post-api/post-api.component';

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
    },
    {
        path: 'if-else',
        component: IfelseComponent
    },
    {
        path: 'for',
        component: ForComponent
    },
    {
        path: 'swith-case',
        component: SwitchComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    },
    {
        path: 'template',
        component: TemplateComponent
    },
    {
        path: 'reactive',
        component: ReactiveComponent
    },
    {
        path: 'get-api',
        component: GetApiComponent
    },
    {
        path: 'post-api',
        component: PostApiComponent
    }
];
