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

import { AgmCoreModule } from '@agm/core';
import { TruckService } from './services/truck.service';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    PopupModalComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAi6kfDRrAg9cK3bJ7fdBUUgUWH6cwIQug',
    }),
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [TruckService],
  bootstrap: [AppComponent],
  entryComponents: [PopupModalComponent],
})
export class AppModule {}
