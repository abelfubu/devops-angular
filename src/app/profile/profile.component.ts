import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = {
    nombre: 'Mr Potato',
    image:
      'url(https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg)',
    trabajos: [
      'Mc Donalds',
      'Burguer king',
      'Pans & company',
      'Kentucky fried chiken',
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
