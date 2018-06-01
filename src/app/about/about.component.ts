import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  commentaire = {date: null, message:""};
  info:any;
  comments = [];
  constructor(private _aboutService:AboutService) { 
    this.info = this._aboutService.getInfo();
    this.comments = this._aboutService.getAllComments();
  }

  ngOnInit() {
  }

  onAddCommentaire(c){
    this._aboutService.addComment(c);
    this.commentaire.message="";
  }
}
