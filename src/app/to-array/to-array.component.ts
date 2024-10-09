import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { interval, Subscription, take, toArray } from 'rxjs';

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
  }

  ngOnDestroy(): void {
    this.intervaldataSub.unsubscribe();
  }
}
