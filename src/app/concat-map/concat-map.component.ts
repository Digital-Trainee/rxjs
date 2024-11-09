import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
export class ConcatMapComponent implements OnInit {
  users = from(['hello','abcd','what','are','you','on','sunday']);
  getdata(user:any){
    return of(`data of ${user}`).pipe(delay(2000))
  }
  ngOnInit(): void {

    // Example 01 : Map
    // here we use map and use dubble subscribe for get inner value which is come from getdata function
    this.users.pipe(map((res:any)=>  this.getdata(res))).subscribe((res2:any)=>{
      // console.log(res2);
      res2.subscribe((res4:any)=>{
        // console.log(res4); // in this map operator showing data at once after 2 seconds delay
      })
    })

    // console.clear();
    // Example 02 : Map + ConcatAll
    this.users.pipe(map(res => this.getdata(res)),concatAll()).subscribe((Res:any)=>{
      console.log('map + concatAll ' +Res); // here we skip inner subscribe but we can get data one by one
                                            // here every data after 2 seconds gap on them
    })


    // Example 03 : ConcatMap
    this.users.pipe(concatMap(res => this.getdata(res))).subscribe((Res:any)=>{
      console.log('concatMap ' +Res); // here we skip inner subscribe but we can get data one by one
                                            // here every data after 2 seconds gap on them
    })
  }

}
