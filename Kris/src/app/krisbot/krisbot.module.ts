import { KrisbotComponent } from './krisbot.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KrisbotRoutingModule } from './krisbot-routing.module';

@NgModule({
  declarations: [KrisbotComponent],
  imports: [
    CommonModule,
    KrisbotRoutingModule
  ]
})
export class KrisbotModule { }
