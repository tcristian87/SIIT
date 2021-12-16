import { Component, Input, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

// @Input() content: ContentComponent

  onNavigate(){
    window.open("https://github.com/tcristian87/SIIT/tree/main/project/Personal-Website", "_blank");
  }


  scrollTo(el: HTMLElement) {
    el.scrollIntoView()
    }

  

  constructor() {  
  }

  ngOnInit(): void {
  }
}

