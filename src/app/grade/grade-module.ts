import { NgModule } from "@angular/core";

import { LayoutComponent } from "../layout/components/layout.component";
import {Tab} from 'primeng/tabs';
import {TableModule} from 'primeng/table';
import {GradeComponent} from './component/grade.component';
import {GradeRoutesModule} from './grade-routes.module';
import {Button, ButtonLabel} from 'primeng/button';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations:[GradeComponent],
  imports: [
    GradeRoutesModule,
    LayoutComponent,
    Tab,
    TableModule,
    Button,
    ButtonLabel,
    FormsModule,


  ],
  exports:[GradeComponent]
})
export class GradeModule {




}
