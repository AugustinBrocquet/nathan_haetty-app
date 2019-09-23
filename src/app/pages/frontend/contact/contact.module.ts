import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google.maps_api_key,
      libraries: ['geometry']
    }),
  ]
})
export class ContactModule { }
