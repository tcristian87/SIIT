import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior: "smooth", block: "end"});
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior: "smooth", block: "center"});
  }
  toResume() {
    document.getElementById("resume")?.scrollIntoView({behavior: "smooth", block: "center"});
  }
  toContact() {
    document.getElementById("contact")?.scrollIntoView({behavior: "smooth", block: "center"});
  }
}
