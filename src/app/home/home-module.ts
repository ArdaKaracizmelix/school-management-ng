import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home.component';
import {Button, ButtonDirective} from 'primeng/button';
import {Card} from 'primeng/card';
import {IftaLabel} from 'primeng/iftalabel';
import {InputText} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import {Sidebar} from 'primeng/sidebar';
import {Toolbar} from 'primeng/toolbar';
import {Avatar} from 'primeng/avatar';
import {HomeRoutesModule} from './home-routes.module';
import {Drawer} from 'primeng/drawer';
import {LayoutComponent} from "../layout/components/layout.component";

@NgModule({
  declarations: [HomeComponent],
    imports: [
        Button,
        Card,
        HomeRoutesModule,
        IftaLabel,
        InputText,
        ReactiveFormsModule,
        Sidebar,
        Toolbar,
        ButtonDirective,
        Avatar,
        Drawer,
        LayoutComponent
    ],
  exports: [HomeComponent]
})
export class HomeModule {}
