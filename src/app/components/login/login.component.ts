import { Component } from '@angular/core';

import countries from '../../../assets/countries.json';
import { CountryData } from './../../models/country.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  contries = countries as CountryData[];
  selectedCountry: CountryData = this.contries[0];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(countries[0].flag);
  }
}
