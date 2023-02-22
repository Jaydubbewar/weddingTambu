import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogSignComponent } from './components/log-sign/log-sign.component';
import { ShowDataComponent } from './components/show-data/show-data.component';

// const routes: Routes = [{ path: '', component: ShowDataComponent, pathMatch: 'full' },
// { path: 'login', component: LogSignComponent }];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
