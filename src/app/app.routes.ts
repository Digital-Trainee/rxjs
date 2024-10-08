import { Component } from '@angular/core';
import { IntervalComponent } from './interval/interval.component';
import { Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { OfComponent } from './of/of.component';

export const routes: Routes = [
  {path:'',component: IntervalComponent },
  {path:'timer',component:TimerComponent},
  {path : 'of',component:OfComponent}
];
