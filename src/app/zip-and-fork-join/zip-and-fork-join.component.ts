import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, map, take, zip } from 'rxjs';

@Component({
  selector: 'app-zip-and-fork-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zip-and-fork-join.component.html',
  styleUrl: './zip-and-fork-join.component.scss'
})
export class ZipAndForkJoinComponent implements AfterViewInit {
  colors:any = ['red','yellow','green','pink','black','silver'];
  names:any = ['suhas','rupa','maya','nilesh','suvarna','nilbor','a2zithub'];

  @ViewChild('colorsId') colorsId?:ElementRef;
  @ViewChild('namesId') namesId?:ElementRef;

  ngAfterViewInit(): void {
    const nameOps = fromEvent<any>(this.namesId?.nativeElement,'change').pipe(map(res => res.target.value))
    const colorOps = fromEvent<any>(this.colorsId?.nativeElement,'change').pipe(map(res => res.target.value))

    zip(nameOps,colorOps).subscribe((res:any)=>{
      console.log(res); // when both value change that time this zip operator has work
      this.createBox(res[1],res[0],'zipid')
    })


    const nameFlokJoin = fromEvent<any>(this.namesId?.nativeElement,'change').pipe(map(res => res.target.value),take(2))
    const colorFlokJoin = fromEvent<any>(this.colorsId?.nativeElement,'change').pipe(map(res => res.target.value),take(3))

    forkJoin(nameFlokJoin,colorFlokJoin).subscribe((res:any)=>{
      console.log('FlokJoin ',res); // when file take operator take that last value of both observables that time this forkjoin has work and this is only one time execute
      this.createBox(res[1],res[0],'forkJoinId');
    })
  }

  createBox(color:any,name:any,containerId:any)
  {
    let li = document.createElement('div');
    li.innerText = name;
    li.style.background = color;
    document.getElementById(containerId)?.appendChild(li);
  }
}
