import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  lat: number |undefined;
  lon: number | undefined;
  weather: any;
    
  constructor(private weatherService: WeatherService) {
  }

  today:string = moment().format('DD/MM/YYYY');


  ngOnInit(): void {

    this.getLocation()
     }

    getLocation(){
      if("geolocation" in navigator) {
        navigator.geolocation.watchPosition((succes)=> {
          this.lat = succes.coords.latitude; 
          this.lon= succes.coords.longitude;
          
        this.weatherService.getWeatherDataByCoords(this.lat, this.lon ).subscribe(data=>{
          this.weather = data;
        })
        console.log(this.weather)
      })
    }
   
  }
 

}
