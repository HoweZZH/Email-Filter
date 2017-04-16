import { Injectable } from '@angular/core';


import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//The HeroService could get Hero data from anywhere—a web service, local storage, or a mock data source. 
@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}





















