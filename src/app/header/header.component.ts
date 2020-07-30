import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor() { }
  @Output() featureSelected = new EventEmitter<string>();

  ngOnInit(): void {
  }

  Onselect(feature:string){
    this.featureSelected.emit(feature);

  }

}
