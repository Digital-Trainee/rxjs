import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catch-error',
  standalone: true,
  imports: [],
  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.scss'
})
export class CatchErrorComponent implements OnInit {
  baseUrl:any = 'http://localhost:3000'; // Replace with your server's URL

  constructor(private http:HttpClient){}

  ngOnInit(): void {
      this.http.get('http://localhost:3000/simulate-error').pipe(
        tap(res => console.log(res))).subscribe((res)=>{})
  }
}
