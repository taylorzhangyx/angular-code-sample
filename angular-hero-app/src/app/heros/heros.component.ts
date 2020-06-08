import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.sass']
})
export class HerosComponent implements OnInit {

  public selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
