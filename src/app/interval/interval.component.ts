import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit {
  firstsubscriptin:Subscription | undefined;

  ngOnInit(): void {
    this.firstsubscriptin = interval(1000).subscribe(res=>{
      console.log(res);
      let first = document.createElement('li')
      first.innerText = <any>res ;
      document.getElementById('firstvideo')?.appendChild(first)
      if(res == 5 )
      {

          this.firstsubscriptin?.unsubscribe();
      }
    })
  }
}
