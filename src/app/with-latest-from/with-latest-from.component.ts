import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './with-latest-from.component.html',
  styleUrl: './with-latest-from.component.scss'
})
export class WithLatestFromComponent implements AfterViewInit {
  colors:any = ['red','yellow','green','pink','black','silver'];
  names:any = ['suhas','rupa','maya','nilesh','suvarna','nilbor','a2zithub'];

  @ViewChild('colorsId') colorsId?:ElementRef;
  @ViewChild('namesId') namesId?:ElementRef;

  ngAfterViewInit(): void {
    const colorObs = fromEvent<any>(this.colorsId?.nativeElement,'change').pipe(map(Res => Res.target.value));
    const nameObs =fromEvent<any>(this.namesId?.nativeElement,'change').pipe(map(Res => Res.target.value));

    combineLatest(colorObs,nameObs).subscribe((res:any)=>{
      // console.log(res); // here Only one time value change both select option after that every any change the provide changes
      this.createBox(res[0],res[1],'combineLatest');
    })



    const colorObsWith = fromEvent<any>(this.colorsId?.nativeElement,'change').pipe(map(Res => Res.target.value));
    const nameObsWith =fromEvent<any>(this.namesId?.nativeElement,'change').pipe(map(Res => Res.target.value));

    nameObsWith.pipe(withLatestFrom(colorObsWith)).subscribe((res:any)=>{
      console.log( 'with letest', res); // in this withLatestFrom operator can check both value are changed after that they provide value
      this.createBox(res[1],res[0],'withLatestFrom');
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
