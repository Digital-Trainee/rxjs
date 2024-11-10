import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap, filter, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-reply',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './share-reply.component.html',
  styleUrl: './share-reply.component.scss'
})
export class ShareReplyComponent implements OnInit {
  allproducts:any;
  mobileproducts:any;
  laptopproducts:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    // here we are try sharereply operator it's use for calling api only one time if api is use for multiple perpose or multiple time calling him.
    this.allproducts = this.http.get('http://localhost:3000/product').pipe(shareReplay())  // here we call api 1st time

    this.mobileproducts = this.allproducts.pipe(   // here we are call this api second time
      map((res:any) => res.filter( (mobiledata:any) =>{ return mobiledata['type'] == 'mobile' } ))
    )

    this.laptopproducts = this.allproducts.pipe(   // here we call api 3rd time
      map((res:any) => res.filter( (mobiledata:any) =>{ return mobiledata['type'] == 'pc' } ))
    )
  }

}
