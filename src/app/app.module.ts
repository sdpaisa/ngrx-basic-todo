import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './todos/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule, StoreModule.forRoot({
    todosState: todosReducer,
  }), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
