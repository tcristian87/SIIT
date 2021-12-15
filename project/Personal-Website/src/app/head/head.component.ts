import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentComponent } from '../content/content.component';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  onNavigate(){
    window.open("https://github.com/tcristian87/SIIT/tree/main/project/Personal-Website", "_blank");
  }
//   scrollToResume(){
//     console.log("this is working")
//     let element = document.getElementsByClassName(".resume")
// }
 
  constructor() {  
  }

  ngOnInit(): void {
  }
}
