import { Component } from '@angular/core';
import { IntervalComponent } from './interval/interval.component';
import { Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { ObservableComponent } from './observable/observable.component';
import { MapComponent } from './map/map.component';
import { PlucjComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapdoComponent } from './tapdo/tapdo.component';

export const routes: Routes = [
  {path:'',component: IntervalComponent },
  {path:'timer',component:TimerComponent},
  {path : 'of',component:OfComponent},
  {path : 'from',component:FromComponent},
  {path : 'to-array',component:ToArrayComponent},
  {path : 'custom-observable',component:ObservableComponent},
  // Transformation Operators
  {path : 'map',component:MapComponent},
  {path : 'pluck',component:PlucjComponent},
  {path : 'filter',component:FilterComponent},
  {path : 'tapdo',component:TapdoComponent}


];
