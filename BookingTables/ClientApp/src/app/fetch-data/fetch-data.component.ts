import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public tables: Table[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Table[]>(baseUrl + 'api/table').subscribe(result => {
      this.tables = result;
    }, error => console.error(error));
  }
}

interface Table {
  id: string;
  userCount: number;
  tableNumber: number;
}
