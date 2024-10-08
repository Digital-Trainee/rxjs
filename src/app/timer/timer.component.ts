import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  timers = timer(5000,1000);

  timerSubscriptions: Subscription | undefined;
  constructor()
  {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.timerSubscriptions = this.timers.subscribe((Res:any)=>{
      console.log(Res);
      let pages  = <any>document.createElement('p');
      pages.innerHTML = Res;
      document.getElementById('page')?.append(pages);

      if(Res >= 5 )
      {
        this.timerSubscriptions?.unsubscribe();
      }
    })
  }

}
