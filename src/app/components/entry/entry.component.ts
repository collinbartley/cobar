import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

  @Input() entryType: 'work' | 'school' = 'work';
  @Input() title: string = '';
  @Input() set startDate(val: string) {
    if(val) {
      this.start = formatDate(val, this.format, 'en-US');
    }
  };
  @Input() set endDate(val: string) {
    if(val) {
      this.end = formatDate(val, this.format, 'en-US');
    }
  };
  @Input() iconPath: string = '';

  public start: string = '';
  public end: string = 'Present';

  public format: string = 'MMMM yyyy';

  constructor() { }

  amountOfTime(start: string, end: string){
    end == 'Present' ? end = new Date().toString() : end = end;
    let startingDate = new Date(start);
    let endingDate = new Date(end);

    return ((Date.UTC(endingDate.getFullYear(), endingDate.getMonth(), endingDate.getDate()) - Date.UTC(startingDate.getFullYear(), startingDate.getMonth(), startingDate.getDate()) ) /(1000 * 60 * 60 * 24) / 365).toFixed(1);
  }

}
