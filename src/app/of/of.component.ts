import { Component } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-of',
  standalone: true,
  imports: [],
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss'
})
export class OfComponent {
  ofsubscription:Subscription | undefined;
  objectdata:any;

  constructor()
  {
    // this.ofsubscription = of(1,2,3,4,5,6,7,8,9).subscribe((arg:any)=>{
    //   console.log(arg);
    // })

  }

  ngOnInit(): void {
    this.ofsubscription = of('angular','react','json','python').subscribe((res:any)=>{
      console.log(res);
      let ofc = document.createElement('li');
      ofc.innerHTML = res;
      document.getElementById('hellojs')?.appendChild(ofc)
    })


    // let object example because object store key and value
    of({a:'angular',b:'bsdk',c:'chutiya'}).subscribe((res:any)=>{
      console.log(res);
      this.objectdata = res;
    })
  }


}
