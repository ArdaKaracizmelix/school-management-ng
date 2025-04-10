import {NgModule} from "@angular/core";
import {LayoutComponent} from "../../layout/components/layout.component";
import {TableModule} from 'primeng/table';
import {ExamResultsModule} from '../../exam-results/exam-results-module';
import {NgIf} from '@angular/common';
import {InstructorCoursesComponent} from './components/instructor-courses.component';
import {InstructorCoursesRoutesModule} from './instructor-courses-routes.module';
import {Accordion, AccordionPanel, AccordionTab} from 'primeng/accordion';
import {FormsModule} from '@angular/forms';
import {Button, ButtonLabel} from 'primeng/button';
import {GradeModule} from "../../grade/grade-module";
import {Dialog} from 'primeng/dialog';
import {InputNumber} from 'primeng/inputnumber';
import {ExamAddModule} from "../../adminAddPage/exam-add/exam-add-module";
import {Toast} from "primeng/toast";
import {MessageService} from 'primeng/api';

@NgModule({
  declarations:[InstructorCoursesComponent],
    imports: [
        LayoutComponent,
        InstructorCoursesRoutesModule,
        TableModule,
        ExamResultsModule,
        NgIf,
        Accordion,
        AccordionTab,
        FormsModule,
        AccordionPanel,
        Button,
        GradeModule,
        ButtonLabel,
        Dialog,
        InputNumber,
        ExamAddModule,
        Toast

    ],
  providers:[MessageService],
  exports:[InstructorCoursesComponent]
})
export class InstructorCoursesModule {}
