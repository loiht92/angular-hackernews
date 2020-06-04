import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  title: string;
  url: string;
  article: Array<{title: string, url: string}> = [];
  constructor() { }

  ngOnInit(): void {
  }
  addArticle(){
    this.article.push({title: this.title, url: this.url});
    this.title = '';
    this.url = '';
  }

}
