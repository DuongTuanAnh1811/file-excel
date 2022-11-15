import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public doc =
    'https://docs.google.com/spreadsheets/d/1s1Tax3KAWtlJI6C2SGTQamhM1Ng6_-gw/edit#gid=1182268152';
  constructor(private data: DataServiceService) {}

  ngOnInit(): void {}
}
