import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-map-merge',
  standalone: true,
  imports: [],
  templateUrl: './map-merge.component.html',
  styleUrl: './map-merge.component.scss'
})
export class MapMergeComponent implements OnInit {

  ngOnInit(): void {
    const users = from(['suhas','abcd','xyz','pqr','yzw']);

    // example 01 :- map for multiple subscribe
    // here we are only use map operator for multisubscription
    users.pipe(map(res=> this.getdata(res))).subscribe((res:any)=>{
      console.log(res); // here we are get a observable strem
      res.subscribe((res2:any)=>{
        console.log(res2); //  here we get data from getdata(user) function
      })
    })


    // example 02 :- map + margeAll
    // here we are use of merge all operator for skip inner subscribe.
    users.pipe(map(res => this.getdata(res)),mergeAll()).subscribe((res:any)=>{
      console.log(res); // Here, we obtain direct value from the getdata() function.
    })

    console.clear()
    // example 03 :- margeMap
    //  here we go and we get direct inner data of getdata function which we call in mergeMap operator
    users.pipe(mergeMap(res=> this.getdata(res))).subscribe((Res:any)=>{
      console.log(Res); //  this is a best way for get data using mergeMap
    })
  }

  getdata(user:any)
  {
    return of(`return data of ${user}`);
  }
}
