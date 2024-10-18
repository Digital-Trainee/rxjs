import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime-distinct-until-changed',
  standalone: true,
  imports: [],
  templateUrl: './debouncetime-distinct-until-changed.component.html',
  styleUrl: './debouncetime-distinct-until-changed.component.scss'
})
export class DebouncetimeDistinctUntilChangedComponent implements AfterViewInit {
  Search_Data:any = null;
  @ViewChild('searchName') searchName!:ElementRef;

  ngAfterViewInit(): void {
      // // here add <any> for map error
      const Sedata = fromEvent<any>(this.searchName.nativeElement,'keyup');

      // // this example of debouncetime
      Sedata.pipe(map(res => res.target.value), debounceTime(1000)).subscribe((res:any)=>{
        console.log( 'This is DebounceTime => '+ res);
      })

      // // this example of Distinct Until Changed
      Sedata.pipe(map(res => res.target.value),debounceTime(1000),distinctUntilChanged()).subscribe((res:any)=>{
        console.log('This Is Distinct Until Changed => '+ res);
      })
  }


}
