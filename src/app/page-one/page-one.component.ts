import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  e = new Array(200).fill(37).map((itemIter, index) => index + 1);

  constructor() { }

  ngOnInit(): void {
  }

}
