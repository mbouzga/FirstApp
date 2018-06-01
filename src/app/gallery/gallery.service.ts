import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:Http) { }

  searchPhoto(motCle: string, size: number, page: number){
    return this.http.get('https://pixabay.com/api/?key=9127902-6841fe9ac4051084576418dc7&q='
                  +motCle+'&per_page='+size+'&page='+page)
                 .map(response => response.json());
    
  }
}
