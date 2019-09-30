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
         MatSliderModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SuccessDialog } from './dialog/success-dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SuccessDialog,
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
    MatDialogModule
  ],
  entryComponents: [
    SuccessDialog,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
