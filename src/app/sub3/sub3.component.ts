import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-sub3',
  standalone: true,
  imports: [],
  templateUrl: './sub3.component.html',
  styleUrl: './sub3.component.scss'
})
export class Sub3Component {
  nameA:any;
  constructor(private apiu:ApiserviceService){
    this.apiu.nameS.subscribe((Res:any)=>{
      this.nameA = Res;
    })
  }


  updatenameS(name:any)
  {
    this.apiu.nameS.next(name);
  }

}
