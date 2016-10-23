import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PingslistComponent } from './pingslist/pingslist.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pings', component: PingslistComponent }
];
