import { SubjectSubjectBehaviourComponent } from './subject-subject-behaviour/subject-subject-behaviour.component';
import { RetryWhenScanDelayComponent } from './retry-when-scan-delay/retry-when-scan-delay.component';
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
import { TakeLastUntilComponent } from './take-last-until/take-last-until.component';
import { DebouncetimeDistinctUntilChangedComponent } from './debouncetime-distinct-until-changed/debouncetime-distinct-until-changed.component';
import { ReplySubjectComponent } from './reply-subject/reply-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { MapMergeComponent } from './map-merge/map-merge.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { SwitchMapExampleComponent } from './switch-map-example/switch-map-example.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ShareReplyComponent } from './share-reply/share-reply.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { ZipAndForkJoinComponent } from './zip-and-fork-join/zip-and-fork-join.component';

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
  {path : 'tapdo',component:TapdoComponent},
  {path : 'take',component:TakeLastUntilComponent},
  {path : 'retry',component:RetryWhenScanDelayComponent},
  {path : 'debounceTime',component:DebouncetimeDistinctUntilChangedComponent},
  {path : 'subject',component:SubjectSubjectBehaviourComponent},
  {path : 'reply', component:ReplySubjectComponent },
  {path : 'asyncs', component:AsyncSubjectComponent},
  // flatning operator
  {path : 'concat-merge',component:ConcatMergeComponent},
  {path : 'map-merge',component:MapMergeComponent},
  {path : 'map-concat',component:ConcatMapComponent},
  {path : 'map-switch',component:SwitchmapComponent},
  {path : 'map-switch-example',component:SwitchMapExampleComponent},
  {path : 'map-exhaust',component:ExhaustMapComponent},
  {path : 'share-reply',component:ShareReplyComponent},
  {path : 'combine-latest',component:WithLatestFromComponent},
  {path : 'zip-forkjoin',component:ZipAndForkJoinComponent}

];

