import { Component } from '@angular/core';
import { IntervalComponent } from './interval/interval.component';
import { Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';

export const routes: Routes = [
  {path:'',component: IntervalComponent },
  {path:'timer',component:TimerComponent}
];
