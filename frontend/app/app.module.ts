import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { services } from './shared/services';
import { routes, components as routingComponents } from './app.routing';

@Component({ 
    selector: 'app-component',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent
{
    constructor()
    { }
}

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routes ],
  declarations: [ AppComponent, routingComponents ],
  providers:    [ services ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }