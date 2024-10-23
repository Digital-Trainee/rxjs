import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-sub2',
  standalone: true,
  imports: [],
  templateUrl: './sub2.component.html',
  styleUrl: './sub2.component.scss'
})
export class Sub2Component {
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
