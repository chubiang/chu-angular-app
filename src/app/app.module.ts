import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule,
         MatCardModule,
         MatInputModule,
         MatIconModule,
         MatCheckboxModule,
         MatSelectModule,
         MatFormFieldModule,
         MatSliderModule,
         MatButtonToggleModule,
         MatMenuModule,
         MatSidenavModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SuccessDialogComponent } from './component/dialog/success-dialog.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ListComponent } from './component/list/list.component';
import { BoardFooterComponent } from './component/board-footer/board-footer.component';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SuccessDialogComponent,
    NavbarComponent,
    ListComponent,
    BoardFooterComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule
  ],
  entryComponents: [
    SuccessDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
