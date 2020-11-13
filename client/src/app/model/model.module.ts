import { NgModule } from '@angular/core';
import { SurveyRepository } from './survey.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [SurveyRepository, StaticDataSource, Cart,
    { provide: StaticDataSource, useClass: RestDataSource }]
})
export class ModelModule { }