import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-concat-merge',
  standalone: true,
  imports: [],
  templateUrl: './concat-merge.component.html',
  styleUrl: './concat-merge.component.scss'
})
export class ConcatMergeComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    //  console.log(this.interval1.subscribe((res:any)=>{
      //   console.log(res);
      //  }));
      let interval1 = interval(1000).pipe(map((res)=>{ return 'interval1 '+ (res+1) }),take(5))
      let interval2 = interval(1000).pipe(map((res)=>{ return 'interval2 '+ (res+1) }),take(2))
      let interval3 = interval(1000).pipe(map((res)=>{ return 'interval3 '+ (res+1) }),take(5))
      let concatdata = concat(interval1,interval2,interval3);  // concat show data after by after hi can end first interval after hi can print second interval same as
      // concat Example
      concatdata.subscribe((res:any)=>{
        console.log("concat: " + res);
      })

      // Merge Example
      merge(interval1,interval2,interval3).subscribe((res:any)=>{    // merge is print data same time when its time to that time he can print his not wait for first one print in this all data print at same time
        console.log("merge: "+res);
      })

  }
}
