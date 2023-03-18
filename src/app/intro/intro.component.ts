import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

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
    document.onreadystatechange = function () {
      if (document.readyState == 'complete') {
        AOS.init();
      }
    };
  }
}
