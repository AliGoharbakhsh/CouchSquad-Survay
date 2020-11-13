import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { SurveyStoreComponent } from '../survey-store/survey-store.component';
import { CounterDirective } from './counter.directive';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
//import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [SurveyStoreComponent, CounterDirective, CartDetailComponent],
  exports: [SurveyStoreComponent, CounterDirective]
})
export class SurveyStoreModule { }
