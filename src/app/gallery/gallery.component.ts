import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos:any;
  currentPage: number=1;
  sizePages: number=5;
  totalPages: number;
  pages: Array<number>=[];
  motCleModel: string='';
  constructor(private _galleryService:GalleryService) { 

  }

  ngOnInit() {
  }

  onSearch(dataForm){
    this._galleryService.searchPhoto(dataForm.motCle,this.sizePages,this.totalPages)
                    .subscribe(data => {
                                        console.log(data);
                                        this.photos = data;
                                        this.totalPages = data.totalHits / this.sizePages;
                                        if(data.totalHits % this.sizePages != 0) ++this.totalPages;
                                        this.pages = new Array(this.totalPages);
                                      }, 
                              error => {
                                        console.log('ERROR')
                                        });
    
  }
  goToPage(index){
    //console.log(index);
    this.currentPage=index + 1;
    this.onSearch({motCle:this.motCleModel});
  }
}
