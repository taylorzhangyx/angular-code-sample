import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hero: Hero = {
    id: 1,
    name: 'Storm'
  }

}