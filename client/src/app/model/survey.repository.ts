import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class SurveyRepository {
  private surveys: Survey[] = [];
  private titleSurveys: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getSurveys().subscribe(data => {
      this.surveys = data;
      this.titleSurveys = data.map(b => b.titleSurvey)
        .filter((a, index, array) => array.indexOf(a) === index).sort();
    });
  }

  getSurveys(titleSurvey: string = null): Survey[] {
    return this.surveys
      .filter(b => titleSurvey == null || titleSurvey === b.titleSurvey);
  }

  getSurvey(id: number): Survey {
    return this.surveys.find(b => b._id === id);
  }

  getTitleSurveys(): string[] {
    return this.titleSurveys;
  }
}
