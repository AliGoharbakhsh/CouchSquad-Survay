import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private surveys: Survey[] =
    [
      new Survey(1, 'Survey 1', 'TitleSurvey 1', 'Short Description 1', 10),
      new Survey(2, 'Survey 2', 'TitleSurvey 1', 'Short Description 2', 10),
      new Survey(3, 'Survey 3', 'TitleSurvey 1', 'Short Description 3', 10),
      new Survey(4, 'Survey 4', 'TitleSurvey 1', 'Short Description 4', 10),
      new Survey(5, 'Survey 5', 'TitleSurvey 2', 'Short Description 6', 10),
      new Survey(6, 'Survey 6', 'TitleSurvey 2', 'Short Description 6', 10),
      new Survey(7, 'Survey 7', 'TitleSurvey 2', 'Short Description 7', 10),
      new Survey(8, 'Survey 8', 'TitleSurvey 2', 'Short Description 8', 10),
      new Survey(9, 'Survey 9', 'TitleSurvey 3', 'Short Description 9', 10),
      new Survey(10, 'Survey 10', 'TitleSurvey 3', 'Short Description 10', 10),
      new Survey(11, 'Survey 11', 'TitleSurvey 3', 'Short Description 11', 10),
      new Survey(12, 'Survey 12', 'TitleSurvey 4', 'Short Description 12', 10),
      new Survey(13, 'Survey 13', 'TitleSurvey 4', 'Short Description 13', 10),
      new Survey(14, 'Survey 14', 'TitleSurvey 4', 'Short Description 14', 10),
      new Survey(15, 'Survey 15', 'TitleSurvey 4', 'Short Description 15', 10),
    ];

  getSurveys(): Observable<Survey[]> {
    return from([this.surveys]);
  }
}
