import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {

  ngOnInit(): void {
    let sub : Subscription;
    let sub1 : Subscription;
    let inter = interval(1000)
    sub = inter.pipe(map( res => 'Map '+res
    )).subscribe((res:any)=>{
      console.log('sub '+res);
      if(res == 'Map 5'){
        sub.unsubscribe();
      }
    })

    // we can any thing can do with map operator
    sub1 = inter.pipe(take(10),map( res => res * 10 )).subscribe((res:any)=>{
      console.log( 'sub1 '+res);
    })

    const members = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ];

  let memFrom = from(members)
  memFrom.pipe( map(res => [ res.name , (res.age >= 20) ? '20' : res.age  ] ) ).subscribe((res:any)=>{
      console.log(res);

      let mem = document.createElement('li')
      mem.innerHTML = 'name: '+ res[0] + '<br> Age: '+ res[1]
      document.getElementById('members')?.appendChild(mem);
    })

  }

}
