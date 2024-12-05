import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { BusComponent } from './bus/bus.component';
import { CarComponent } from './car/car.component';
import { TrainComponent } from './train/train.component';
import { FlightComponent } from './flight/flight.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hotel', component: HotelComponent },
    { path: 'bus', component: BusComponent },
    { path: 'car', component: CarComponent },
    { path: 'train', component: TrainComponent },
    { path: 'flight', component: FlightComponent },
    { path: '**', component: ErrorComponent },

];
