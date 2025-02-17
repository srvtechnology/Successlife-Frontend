import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpRequestService, } from '../../../services/http-request.service';
@Component({
  selector: 'app-cookiepolicy',
  templateUrl: './cookiepolicy.component.html',
  styleUrls: ['./cookiepolicy.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CookiepolicyComponent implements OnInit {

  constructor( private http: HttpRequestService) { }
  title: any;
  content: any;
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('cms-page/cookie-policy').subscribe((response) => {
      if (response['status'] === 'success') {
        this.title = response['data'].title;
        this.content = response['data'].content;
      }
    });
  }

}
