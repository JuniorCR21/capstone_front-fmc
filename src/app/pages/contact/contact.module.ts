import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ContactService } from './shared/services/contact.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
