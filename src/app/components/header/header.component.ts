import { Component, OnInit } from '@angular/core';
import { Imagenes } from 'src/app/interfaces/imagenes.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imagenes: Imagenes[] = [
    {
      nombre: "slide1",
      img: "assets/slides/slide1.jpg"
    },
    {
      nombre: "slide2",
      img: "assets/slides/slide2.jpg"
    },
    {
      nombre: "slide3",
      img: "assets/slides/slide3.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  portafolio() {
    document.getElementById("portafolio")?.scrollIntoView({behavior:"smooth"});
  }
  
  acercaDe() {
    document.getElementById("acercaDe")?.scrollIntoView({behavior:"smooth"});
  }

  contacto() {
    document.getElementById("contacto")?.scrollIntoView({behavior:"smooth"});
  }
}
