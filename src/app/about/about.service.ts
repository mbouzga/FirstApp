import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  info = {
    nom: "Mountassir BOUZGA",
    email: "bouzga@gmail.com",
    telephone: "0123456789",
  };

  comments = [
    {date: new Date(), message:"A"},
    {date: new Date(), message:"B"},
    {date: new Date(), message:"C"},

  ];

  constructor() { }

  addComment(c){
    c.date = new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }

  getInfo(){
    return this.info;
  }
  
}
