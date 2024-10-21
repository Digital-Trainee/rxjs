import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Sub1Component } from '../sub1/sub1.component';
import { Sub2Component } from '../sub2/sub2.component';
import { Sub3Component } from '../sub3/sub3.component';

@Component({
  selector: 'app-subject-subject-behaviour',
  standalone: true,
  imports: [Sub1Component,Sub2Component,Sub3Component],
  templateUrl: './subject-subject-behaviour.component.html',
  styleUrl: './subject-subject-behaviour.component.scss'
})
export class SubjectSubjectBehaviourComponent implements OnInit {
  constructor(private api:ApiserviceService){}
  ngOnInit(): void {
    this.api.nameS.next('darling');
    this.api.nameS.subscribe((res:any)=>{
      this.suhasname = res;
    })


  }
suhasname:any = '';

  ngAfterViewInit(): void {
   }
  changen(name:any)
  {
    if(this.suhasname == 'show')
      {
        this.api.hidesuhas();
      }else{
        this.api.showsuhas();
      }
  }
}
