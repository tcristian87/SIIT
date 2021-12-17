import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {


  onNavigate(){
    window.open("https://github.com/tcristian87/SIIT/tree/main/project/Personal-Website", "_blank");
  }

 scrollTo(el: HTMLElement) {
       el.scrollIntoView();
 }
  constructor() {  
  }

  ngOnInit(): void {
  }
} 
