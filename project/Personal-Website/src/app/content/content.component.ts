import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  longText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi consectetur
   ratione beatae quia. Culpa eius sapiente id consequatur 
   error reiciendis earum non sunt praesentium. Rem vero eaque eum iure?
  `;

  value:String='';


   constructor() {;
}


  ngOnInit(): void { }
}


