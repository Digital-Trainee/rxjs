import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [NgClass],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit {
  hellored:any = 'blue';
  ngOnInit(): void {
    let observ = new Observable((observel:any)=>{
      // setTimeout(()=>{
      //   observel.next('hello')
      // },1000)
      let hello = interval(1000);

      hello.pipe(take(10)).subscribe((res:any)=>{
        observel.next('hello'+res)
        if(res == 8)
        {
          observel.error(new Error('Limit Extced'))
        }
        if(res == 10 )
        {
          observel.complete();
        }
      })
    })

    observ.subscribe((res:any)=>{
        let hellod = document.createElement('li');
        hellod.innerHTML = res
        document.getElementById('hellodata')?.appendChild(hellod)
      },(err)=>{
        this.hellored = 'red'
      },()=>{
        this.hellored = 'green'
      }
    )
  }
}
