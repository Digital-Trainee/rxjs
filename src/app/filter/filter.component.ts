import { filter, from } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  user = [
    {'id': 1 ,name:'diusnac','age':32,gender:'male'},
    {'id': 2 ,name:'snadcds','age':22,gender:'female'},
    {'id': 3 ,name:'sna','age':12,gender:'female'},
    {'id': 4 ,name:'snac','age':42,gender:'male'},
    {'id': 5 ,name:'dsaac','age':31,gender:'male'},
    {'id': 6 ,name:'ac','age':23,gender:'female'},
    {'id': 7 ,name:'dslsnac','age':25,gender:'female'},
    {'id': 8 ,name:'ljbsnac','age':39,gender:'male'},
    {'id': 9 ,name:'jkvsnac','age':20,gender:'male'},
    {'id': 10 ,name:'ouisnac','age':45,gender:'female'},
    {'id': 11 ,name:'lklsnac','age':58,gender:'female'},
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    from(this.user).pipe( filter(res => res.name.length < 4) ).subscribe((res:any)=>{
      // console.log(res);
      this.print(res.name,'namelength');
    })

    from(this.user).pipe(filter(res => res.gender == 'male')).subscribe((res:any)=>{
      // console.log(res);
      let data  = res.gender + ' - ' + res.name + ' - ' + res.age;
      this.print(data,'genderData')
    })

    from(this.user).pipe(filter(res => res.id < 6  )).subscribe((res:any)=>{
      console.log(res)

      this.print(res.id,'usingid');
    })
  }





  print(res:any,res1:any)
  {
    let da = document.createElement('li')
    da.innerHTML = res
    document.getElementById(res1)?.appendChild(da)
  }
}
