import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-sub1',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sub1.component.html',
  styleUrl: './sub1.component.scss'
})
export class Sub1Component {
  nameA:any;
  constructor(private apiu:ApiserviceService){
    this.apiu.suhas.subscribe((res:any)=>{
      this.nameA = res
    })
  }
}
