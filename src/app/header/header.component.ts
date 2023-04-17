import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  //  this.onfetch();
  }
  // onsave(){
  //   console.log("onSave");
  //   this.backendService.saveData();
    
  // }
  // onfetch(){
  //   this.backendService.fetchData();
  // }
}
