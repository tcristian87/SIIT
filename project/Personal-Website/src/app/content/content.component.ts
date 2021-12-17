import { animate, style, transition } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    trigger('fade', [
      transition('void =>*', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ])
  ]
})

export class ContentComponent implements OnInit {
  longText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi consectetur
   ratione beatae quia. Culpa eius sapiente id consequatur 
   error reiciendis earum non sunt praesentium. Rem vero eaque eum iure?
  `;

  // @Input() scroll: any;
 

  ngOnInit(): void { }
}

 
  

