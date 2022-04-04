import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
titulo: string="App list (titulo desde el component/header.ts)";
  constructor() { }

  ngOnInit(): void {
  }
  toogleAddTask(){
    console.log("toogle activado")
  }
}
