import { Component, OnInit } from '@angular/core';
import {SerieanewsapiService} from '../service/serieanewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api: SerieanewsapiService) { }

// Display headlines data
topHeadlinesData: any = [];

  ngOnInit(): void {

    this.api.serieaHeadlines()
      .subscribe((result) => {
        console.log(result)
        this.topHeadlinesData = result.articles
      })

  }



}
