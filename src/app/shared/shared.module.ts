import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MsgFormValidationService } from './msg-form-validation.service';
import { MatInputModule,
         MatIconModule,
         MatButtonModule,
         MatCheckboxModule,
         MatSelectModule,
         MatFormFieldModule,
         MatButtonToggleModule,
         MatMenuModule,
         MatListModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SuccessDialogComponent } from './dialog/success-dialog.component';
import { ListComponent } from './list/list.component';
import { BoardFooterComponent } from './board-footer/board-footer.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    SuccessDialogComponent,
    ListComponent,
    TableComponent,
    BoardFooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    SuccessDialogComponent,
    ListComponent,
    TableComponent,
    BoardFooterComponent
  ],
  entryComponents: [
    SuccessDialogComponent,
  ],
  providers: [MsgFormValidationService]
})
export class SharedModule { }
