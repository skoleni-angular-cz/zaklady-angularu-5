import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos/todos.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyTextFieldComponent } from './my-text-field/my-text-field.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppComponent } from './app.component';
import { ParkingPriceComponent } from './parking-price/parking-price.component';
import { HttpClientModule } from '@angular/common/http';
import { FileSizeComponent } from './file-size/file-size.component';
import { AddressUtilsComponent } from './address-utils/address-utils.component';
import { FileSizePipe } from './file-size/file-size.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    TodosComponent,
    MyButtonComponent,
    MyTextFieldComponent,
    TodoItemComponent,
    AppComponent,
    ParkingPriceComponent,
    FileSizeComponent,
    FileSizePipe,
    AddressUtilsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
