import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css'],
})
export class ExpComponent implements OnInit {
  public chart: any;
  constructor() {}

  ngOnInit(): void {
    this.createChart();
    this.createChart_mobile();
  }
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        labels: [
          'Python',
          'C#',
          'HTML/CSS',
          'JavaScript',
          'PHP',
          'SQL',
          'Typescript',
          'Personality',
        ],
        datasets: [
          {
            label: 'My experience from 0 - 10',
            data: ['3', '2', '5', '4', '3', '3', '4', '10'],
            backgroundColor: 'rgb(116,119,219)',
            borderRadius: 50,
          },
        ],
      },
      options: {
        aspectRatio: 3.5,

        responsive: true,
      },
    });
  }

  // mobile
  createChart_mobile() {
    this.chart = new Chart('MyChart2', {
      type: 'bar', //this denotes tha type of chart

      data: {
        labels: [
          'Python',
          'C#',
          'HTML/CSS',
          'JavaScript',
          'PHP',
          'SQL',
          'Typescript',
          'Personality',
        ],
        datasets: [
          {
            label: 'My experience from 0 - 10',
            data: ['3', '2', '5', '4', '3', '3', '4', '10'],
            backgroundColor: 'rgb(116,119,219)',
            borderRadius: 50,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        scales: {
          x: {
            display: true,
            grid: {
              color: 'rgb(25,25,25',
            },
          },
        },
      },
    });
  }
}
