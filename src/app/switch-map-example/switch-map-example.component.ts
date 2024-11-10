import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, empty, filter, from, map, of, pluck, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map-example',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './switch-map-example.component.html',
  styleUrl: './switch-map-example.component.scss'
})
export class SwitchMapExampleComponent implements AfterViewInit {
  url:any = "http://localhost/bizregistro/bizregistro/?formName=";
  getdata(name:any)
  {
    if(this.formdata.valid)
      {
        return this.http.get<any>(`${this.url}${name}`).pipe(map(res => res.data));
      }else{
        return from([{}]);
      }
  }
  formdata = new FormGroup({
    formvalue:new FormControl('',[Validators.required])
  })
  constructor(private http:HttpClient){}

  ngAfterViewInit()
  {
    const formda = this.formdata.valueChanges;
    formda.pipe(pluck('formvalue'),debounceTime(500),distinctUntilChanged(),switchMap(Res=> this.getdata(Res))).subscribe((res:any)=>{
      console.log(res.length)
    })
  }
}
