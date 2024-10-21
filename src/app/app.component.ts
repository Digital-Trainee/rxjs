import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiserviceService } from './apiservice.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjsCreationOperators';
  namea:any;
  h2ds:any;
  constructor(private api:ApiserviceService)
  {
    this.api.suhas.subscribe((res:any)=>{
      this.namea = res;
    })

      this.api.show.subscribe((res:any)=>{
        this.h2ds = res;
      })

}

}
