import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule(
{
  	declarations:
	[
    	AppComponent
  	],
  	imports:
	[
		BrowserModule,
		AppRoutingModule,
		MatTreeModule,
		MatIconModule,
		MatButtonModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})



export class AppModule { }