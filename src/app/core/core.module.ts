import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [SharedModule,CommonModule, RouterModule.forChild([])],
  exports: [NavBarComponent]
})
export class CoreModule { }
