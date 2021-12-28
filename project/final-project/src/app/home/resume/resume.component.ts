import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  public executeSelectedChange = (event: any) =>{
    console.log(event)
  }
  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
    if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) 
       {
          (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
       }
     }
  }
}
