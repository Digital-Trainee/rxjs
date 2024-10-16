import { Component, OnInit } from '@angular/core';
import { from, take, takeLast } from 'rxjs';

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
  }

}
