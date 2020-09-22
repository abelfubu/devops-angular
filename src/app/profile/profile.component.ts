import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = {
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
