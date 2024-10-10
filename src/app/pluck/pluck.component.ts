import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-plucj',
  standalone: true,
  imports: [],
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.scss'
})
export class PlucjComponent implements OnInit {

  ngOnInit(): void {
    let USER = [
      {name:'acd',age:27},
      {name:'akd',age:28},
      {name:'are',age:26},
      {name:'atd',age:25},
      {name:'art',age:24},
      {name:'ads',age:23},
      {name:'abc',age:21}
    ];

    from(USER).pipe(pluck('name')).subscribe((res:any)=>{
      console.log(res);
      let hs = document.createElement('h4')
      hs.innerHTML = res
      document.getElementById('sdas')?.appendChild(hs);
    })

    let USERDET = [
      {name:'acd',age:27,city:{name:'pune',pincode:'212-122'} },
      {name:'akd',age:28,city:{name:'mumbai',pincode:'212-122'} },
      {name:'are',age:26,city:{name:'goa',pincode:'212-122'} },
      {name:'atd',age:25,city:{name:'nagpur',pincode:'212-122'} },
      {name:'art',age:24,city:{name:'amravati',pincode:'212-122'} },
      {name:'ads',age:23,city:{name:'anagar',pincode:'212-122'} },
      {name:'abc',age:21,city:{name:'snagar',pincode:'212-122'} }
    ];

    from(USERDET).pipe(pluck('city','name')).subscribe((res:any)=>{
      console.log(res);
      let dsa = document.createElement('h3')
      dsa.innerHTML = res
      document.getElementById('sdad')?.appendChild(dsa)
    })
  }
}
