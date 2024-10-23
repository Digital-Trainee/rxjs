import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reply-subject',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reply-subject.component.html',
  styleUrl: './reply-subject.component.scss'
})
export class ReplySubjectComponent {
  constructor(private api:ApiserviceService){}
  data:any = [];
  sub1:any = [];
  sub2:any;
  subSub1!: Subscription;
  submode1:boolean = false;
  Adddata(data:any)
  {
    this.data.push(data.value);
    this.api.addNewData.next(data.value);
  }

  subscibeSub1()
  {
    this.submode1 =! this.submode1;
    if(this.submode1)
    {
      this.subSub1 = this.api.addNewData.subscribe((res:any)=>{
        this.sub1.push(res);
      })
    }else{
      this.subSub1?.unsubscribe();
    }
  }





}
