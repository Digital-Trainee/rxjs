import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent implements OnInit {
  intervaldataSub!:Subscription;
  constructor(){}

  ngOnInit(): void {
    let intervaldata = interval(1000);

    this.intervaldataSub = intervaldata.pipe(take(6),toArray()).subscribe((res:any)=>{
      console.log(res);
    })

    of(12,3,23,4,3,4,343,4,3,4,34,'-',211).pipe(toArray()).subscribe((re:any)=>{
      console.log(re);
    })
    let USERS = [
      {name:'abcd',age:24},
      {name:'efgh',age:25},
      {name:'ijk',age:26},
      {name:'lmn',age:27},
      {name:'opqr',age:28},
      {name:'stuv',age:29},
      {name:'wxyz',age:30},
      {name:'axwp',age:31}
    ]
    from(USERS).pipe(toArray()).subscribe((Res:any)=>{
      console.log(Res);
    })
  }

  ngOnDestroy(): void {
    this.intervaldataSub.unsubscribe();
  }
}
