import { Component } from '@angular/core';
import { HeroSection } from "../../shared/home-comp/hero-section/hero-section";
import { Stats } from "../../shared/home-comp/stats/stats";
import { HowWork } from "../../shared/home-comp/how-work/how-work";
import { Explore } from "../../shared/home-comp/explore/explore";
import { CTA } from "../../shared/home-comp/cta/cta";
import { Footer } from "../../shared/home-comp/footer/footer";

@Component({
  selector: 'app-home',
  imports: [HeroSection, Stats, HowWork, Explore, CTA, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
