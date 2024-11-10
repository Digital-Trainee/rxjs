import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { concatMap, delay, exhaustMap, fromEvent, takeLast, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  standalone: true,
  imports: [],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss'
})
export class ExhaustMapComponent implements AfterViewInit {
  countclick:number = 0;
  @ViewChild('clickBtn') clickBtn?:ElementRef;
  constructor(private http:HttpClient){}
  ngAfterViewInit(): void {
    fromEvent(this.clickBtn?.nativeElement,'click').pipe(
      exhaustMap(()=>this.onSave() ), // exhaustmap help for api to complete one time only one request some time user can click to many time if we use exhaust map that time extra click has ignore by exhaust map
      tap( ()=> this.countclick++ )
    ).subscribe((res:any)=>{
      console.log(res);
    })
  }

  onSave()
  {
    return this.http.post('http://localhost:3000/user',{}).pipe(delay(200))
  }
}
