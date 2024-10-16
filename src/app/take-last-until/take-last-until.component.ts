import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of, Subject, take, takeLast, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-last-until',
  standalone: true,
  imports: [],
  templateUrl: './take-last-until.component.html',
  styleUrl: './take-last-until.component.scss'
})
export class TakeLastUntilComponent implements OnInit {
  user:any = ['abcd','xyz','pqr','lmn','erw','synt','dj','babu','rao'];

  ngOnInit(): void {
    // here we are use take operator and take first five streams
    from(this.user).pipe(take(5)).subscribe((res:any)=>{
      console.log('take:- '+ res)
    })


    // here takelast is focus on last  log/stream
    from(this.user).pipe(takeLast(5)).subscribe((res:any)=>{
      console.log( 'takelast:- '+res);
    })


    let timerr = timer(5000);

    let interv = interval(1000);

    let hell = true;
    interv.pipe(takeUntil(timerr)).subscribe((res:any)=>{
      console.log(res);
    })
  }

  button = new Subject<void>() ;
  ngAfterViewInit(): void {
    let interv = interval(1000);
    interv.pipe(takeUntil(this.button)).subscribe((res:any)=>{
      console.log(res)
    })
  }

  stopbtn()
  {
    this.button.next();
  }
}
