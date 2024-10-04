import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmsListPageRoutingModule } from './films-list-routing.module';

import { FilmsListPage } from './films-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmsListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FilmsListPage]
})
export class FilmsListPageModule {}
