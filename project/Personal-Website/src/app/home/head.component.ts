import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})

export class HeadComponent implements OnInit {

  goToPage(pageName:string): void {
    this.router.navigate([`${pageName}`])
  }

  onNavigate(){
    window.open("https://github.com/tcristian87/SIIT/tree/main/project/Personal-Website", "_blank");
  }


  constructor(private router:Router) {  
  }

  ngOnInit(): void {
  }
} 
