import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PortfolioV2';
  isCooldown: boolean = false;

  ngOnInit() {
    AOS.init();
  }

  Display_chat() {
    var x = document.getElementById('Chat-Box');
    if (x?.style.display === 'flex') {
      x.style.display = 'none';
    } else {
      if (x != undefined) {
        x.style.display = 'flex';
      }
    }
  }

  lastCallTime: number = 0;

  createDiv_Hi() {
    const now = Date.now();

    if (now - this.lastCallTime >= 1000) {
      const container: HTMLDivElement = document.getElementById(
        'Chat-Box-Main'
      ) as HTMLDivElement;
      var div: HTMLDivElement = document.createElement('div');
      div.classList.add('Chat-Box-Question');
      div.innerText = (<HTMLElement>(
        document.getElementById('Hi_Question')
      )).innerText;
      container.appendChild(div);

      setTimeout(() => {
        var div: HTMLDivElement = document.createElement('div');
        div.classList.add('Chat-Box-Answer');
        div.innerText = (<HTMLElement>(
          document.getElementById('Hi_Answer')
        )).innerText;
        container.appendChild(div);

        container.scrollTop = container.scrollHeight - container.clientHeight;
      }, 1000);

      const Question_Button =
        document.getElementsByClassName('Question_Button');
      for (let i = 0; i < Question_Button.length; i++) {
        const button = Question_Button[i];
        if (!button.classList.contains('clicked')) {
          button.classList.add('clicked');
          setTimeout(function () {
            button.classList.remove('clicked');
          }, 1000);
        }
      }

      this.lastCallTime = now;
    } else {
    }
  }

  createDiv_Contact() {
    const now = Date.now();

    if (now - this.lastCallTime >= 1000) {
      const container: HTMLDivElement = document.getElementById(
        'Chat-Box-Main'
      ) as HTMLDivElement;
      var div: HTMLDivElement = document.createElement('div');
      div.classList.add('Chat-Box-Question');
      div.innerHTML = (<HTMLElement>(
        document.getElementById('Contact_Question')
      )).innerHTML;
      container.appendChild(div);

      setTimeout(() => {
        var div: HTMLDivElement = document.createElement('div');
        div.classList.add('Chat-Box-Answer');
        div.innerHTML = (<HTMLElement>(
          document.getElementById('Contact_Answer')
        )).innerHTML;
        container.appendChild(div);

        container.scrollTop = container.scrollHeight - container.clientHeight;
      }, 1000);

      const Question_Button =
        document.getElementsByClassName('Question_Button');
      for (let i = 0; i < Question_Button.length; i++) {
        const button = Question_Button[i];
        if (!button.classList.contains('clicked')) {
          button.classList.add('clicked');
          setTimeout(function () {
            button.classList.remove('clicked');
          }, 1000);
        }
      }

      this.lastCallTime = now;
    } else {
    }
  }

  createDiv_Hobby() {
    const now = Date.now();

    if (now - this.lastCallTime >= 1000) {
      const container: HTMLDivElement = document.getElementById(
        'Chat-Box-Main'
      ) as HTMLDivElement;
      var div: HTMLDivElement = document.createElement('div');
      div.classList.add('Chat-Box-Question');
      div.innerText = (<HTMLElement>(
        document.getElementById('Hobby_Question')
      )).innerText;
      container.appendChild(div);

      setTimeout(() => {
        var div: HTMLDivElement = document.createElement('div');
        div.classList.add('Chat-Box-Answer');
        div.innerHTML = (<HTMLElement>(
          document.getElementById('Hobby_Answer')
        )).innerHTML;
        container.appendChild(div);

        container.scrollTop = container.scrollHeight - container.clientHeight;
      }, 1000);

      const Question_Button =
        document.getElementsByClassName('Question_Button');
      for (let i = 0; i < Question_Button.length; i++) {
        const button = Question_Button[i];
        if (!button.classList.contains('clicked')) {
          button.classList.add('clicked');
          setTimeout(function () {
            button.classList.remove('clicked');
          }, 1000);
        }
      }

      this.lastCallTime = now;
    } else {
    }
  }
}
