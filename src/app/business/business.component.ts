import { Component, OnInit } from '@angular/core';
import {SerieanewsapiService} from '../service/serieanewsapi.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api: SerieanewsapiService) { }

  businessDataNews: any = []

  ngOnInit(): void {

    this.api.serieaBusinessNews()
    .subscribe((news) => {
      console.log(news)
      this.businessDataNews =news.articles 
    })

  }

}
