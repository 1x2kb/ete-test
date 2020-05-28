import { Component, OnInit } from '@angular/core';
import { of, asyncScheduler, Observable } from 'rxjs';
import { map, observeOn, delay } from 'rxjs/operators';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  items$: Observable<number[]> = of(new Array(200) as number[]).pipe(
    observeOn(asyncScheduler),
    delay(300),
    map(items => items.fill(37)),
    map(items => items.map((itemIter, index) => index + 1)),
  );

  constructor() { }

  ngOnInit(): void {
  }

}
