import { Component, OnInit } from '@angular/core';
import {SerieanewsapiService} from '../service/serieanewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api: SerieanewsapiService) { }

  techNewsData: any = [];

  ngOnInit(): void {
    this.api.serieaTechNews()
      .subscribe((result) => {
        console.log(result)
        this.techNewsData = result.articles;
      })

  }

}
