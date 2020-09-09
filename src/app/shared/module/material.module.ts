import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

const tableModule = [
  CommonModule,
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
export class MaterialModule {
}
