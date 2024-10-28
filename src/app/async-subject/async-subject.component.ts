import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss'
})
export class AsyncSubjectComponent implements OnInit  {
  lastValue:any;
  constructor(private async:ApiserviceService){}

  ngOnInit(): void {
    this.async.asyncSu.subscribe((res:any)=>{
      this.lastValue = res;
    })
  }

  updateAsyncValue(value:any){
    console.log(value);
    this.async.asyncSu.next(value);
  }


  subscibeLastValue()
  {
    this.async.asyncSu.complete();
  }



}
