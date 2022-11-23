import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let clip = document.getElementById('placeholder1');

    clip?.addEventListener('mouseover', function (e) {
      clip?.onplay;
    });
  }
}
