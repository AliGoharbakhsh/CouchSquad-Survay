import { Component } from '@angular/core';
import { Survey } from '../model/survey.model';
import { Cart } from '../model/cart.model';
import { SurveyRepository } from './../model/survey.repository';



@Component({
  selector: 'app-survey-store',
  templateUrl: './survey-store.component.html',
  styleUrls: ['./survey-store.component.css']
})
export class SurveyStoreComponent {
  public selectedTitleSurvey = null;
  public surveysPerPage = 4;
  public selectedPage = 1;


  constructor(private repository: SurveyRepository,
    private cart: Cart) { }



  ngOnInit(): void {
  }

  get surveys(): Survey[] {
    const pageIndex = (this.selectedPage - 1) * this.surveysPerPage;
    return this.repository.getSurveys(this.selectedTitleSurvey)
      .slice(pageIndex, pageIndex + this.surveysPerPage);
  }

  get titleSurveys(): string[] {
    return this.repository.getTitleSurveys();
  }

  changeTitleSurvey(newTitleSurvey?: string): void {
    this.selectedTitleSurvey = newTitleSurvey;
  }

  changePage(newPage: number): void {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void {
    this.surveysPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getSurveys(this.selectedTitleSurvey).length / this.surveysPerPage);
  }

  addSurveyToCart(survey: Survey): void {
    this.cart.addLine(survey);
  }

}




