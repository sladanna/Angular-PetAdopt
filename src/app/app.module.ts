import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { PetsComponent } from './pets/pets.component';
import {HttpClientModule} from '@angular/common/http';
import { PetListItemComponent } from './pets/pet-list-item/pet-list-item.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './core/toast/toast.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SideBarComponent,
    AdoptionsComponent,
    PetsComponent,
    PetListItemComponent,
    ToastComponent,
    PetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
