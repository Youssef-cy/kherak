import { Component } from '@angular/core';

import { HeroSection } from './home-comp/hero-section/hero-section';
import { Stats } from './home-comp/stats/stats';
import { HowWork } from './home-comp/how-work/how-work';
import { Explore } from './home-comp/explore/explore';
import { CTA } from './home-comp/cta/cta';
import { Footer } from './home-comp/footer/footer';

@Component({
  selector: 'app-home',
  imports: [HeroSection, Stats, HowWork, Explore, CTA, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
