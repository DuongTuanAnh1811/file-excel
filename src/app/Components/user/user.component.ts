import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public dataUser: any;
  constructor(private data: DataServiceService) {}

  ngOnInit(): void {
    this.data.getRandomUser().subscribe((dataUser) => {
      if (dataUser && dataUser.results) {
        this.dataUser = dataUser.results;
      }
    });
  }
}
