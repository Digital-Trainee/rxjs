import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry-when-scan-delay',
  standalone: true,
  imports: [],
  templateUrl: './retry-when-scan-delay.component.html',
  styleUrl: './retry-when-scan-delay.component.scss'
})
export class RetryWhenScanDelayComponent implements OnInit {
  constructor(private http:HttpClient){

    // // here we are try retry operators
    // this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(retry(4)).subscribe((res:any)=>{
    //   console.log(res)
    // })



    // // here we are see retrywhen  operator using own pipe and scan, delay operator in that pipe
    // // this how retry is work
    this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
      retryWhen(res=>res.pipe(
        delay(2000), // heer every retry delay for 2 seconds
        scan((retryCount:any)=>{
          if(retryCount >= 5 )  // here we are set count of retrycount for check next retry or mot
          {
              throw res; // if retry countreach there limit that time he will show error
          }else{
              retryCount = retryCount + 1; // here retrycount count every retry
              console.log(retryCount);
              return retryCount;
          }
        },0)
      ))
    ).subscribe((res:any)=>{
      console.log(res);


    })
  }

  ngOnInit(): void {
  }

}
