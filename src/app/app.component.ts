import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  url: string;
  lists = [];

  addArticle() {
    this.lists.push({title: this.title, url: this.url});
    // this.title = '';
    // this.url = '';
  }

  deleteArticle(){
    this.lists.pop();
  }

  updateArticle() {
    this.title = (document.getElementById('title') as HTMLInputElement).value;
    this.url = (document.getElementById('url') as HTMLInputElement).value;
  }
}
