import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

const tableModule = [
  CommonModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [
    ...tableModule
  ],
  exports: [
    ...tableModule
  ]
})
export class MaterialModule {}
