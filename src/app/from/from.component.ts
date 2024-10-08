import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [],
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss'
})
export class FromComponent {

  ngOnInit(): void {

    // here array example
    let arrayName = ['angular','react','json','py','js'];
    from(arrayName).subscribe((res:any)=>{
      console.log(res);
      let arraN = document.createElement('li')
      arraN.innerHTML = res;
      document.getElementById('arrayExample')?.appendChild(arraN)
    })

    // this a string Example
    let stringName = "Suhas The Boss";
    from(stringName).subscribe((res:any)=>{
      console.log(res);
      let stringN = document.createElement('li')
      stringN.innerHTML = res
      document.getElementById('stringexample')?.appendChild(stringN)
    })


    // promise example
    let dataPromise = new Promise((res,err)=>{
      if(true)
        {
          res('promis data Found')
        }else{
          err('data not found')
        }
      })

    from(dataPromise).subscribe((res:any)=>{
      console.log(res);
      document.getElementById('promiseresponse')?.append(res)
    })
  }

}
