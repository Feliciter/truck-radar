import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './components/main-section/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    PopupModalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupModalComponent 
   ]
})
export class AppModule { }
