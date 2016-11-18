import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { testRoutes } from './components/tests/test-routing.module';

import { HomeComponent } from './components/home/home.component';
import { BookComponent }    from './components/book/book.component';
import { BookDetailComponent }    from './components/book/book-detail.component';
import { TestComponent }    from './components/tests/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  { path: 'books', component: BookComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'tests', component: TestComponent },
  ...testRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}