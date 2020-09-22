import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  usuarios= [{
    imagen:'https://www.simplyrecipes.com/wp-content/uploads/2007/04/HT-Cook-Artichokes-LEAD-1.jpg',
    lenguajes:' HTML/CSS',
    bio: 'Alcachofa: especialista en colores, especialmente en verde'

  },
{
  imagen: 'https://tiendakiva.es/wp-content/uploads/2018/10/puerro.jpg',
  lenguajes: 'TypeScript',
  bio: 'Puerro: no hay tipo que se le resista'
},
{
  imagen: 'https://images.unsplash.com/photo-1540994587294-487f2ffe18f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80',
  lenguajes: 'JavaScript',
  bio: 'Pimiento: no sé si cumpliré todas la promesas'
}]
  constructor() { }

  ngOnInit(): void {
  }

}
