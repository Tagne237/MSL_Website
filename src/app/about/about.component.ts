import { ElementRef, QueryList } from '@angular/core';
import { Component, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @ViewChildren('carouselSlide') carouselSlides!: QueryList<ElementRef>;
  slides = [
    {
      img: '../../assets/img/accueil/cardoussel1.png',
      alt: 'Service Vente',
      text: 'Service Vente',
    },
    {
      img: '../../assets/img/accueil/caroussel2.png',
      alt: 'Service Facturation',
      text: 'Service Facturation',
    },
    {
      img: '../../assets/img/accueil/caroussel3.png',
      alt: 'Service Comptabilité',
      text: 'Service Comptabilité',
    },
    {
      img: '../../assets/img/accueil/cardoussel1.png',
      alt: 'Service Gestion',
      text: 'Service Gestion',
    },
    {
      img: '../../assets/img/accueil/caroussel2.png',
      alt: 'Service Facturation',
      text: 'Service Facturation',
    },
  ];

  currentIndex: number = 0;
  translateX: string = 'translateX(0px)';

  slideWidth: number = 0;
  totalSlides: number = 0;
  visibleSlides: number = 3; // Ajusté à 3 pour permettre plus de déplacements

  constructor() {}

  ngOnInit(): void {
    this.totalSlides = this.slides.length;
  }

  ngAfterViewInit(): void {
    if (this.carouselSlides && this.carouselSlides.length > 0) {
      const slide = this.carouselSlides.first.nativeElement as HTMLElement;
      this.slideWidth = slide.clientWidth + 24; // 24px de marge
    }
  }

  moveCarousel(direction: number): void {
    const maxIndex = this.totalSlides - this.visibleSlides;

    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = maxIndex;
    } else if (this.currentIndex > maxIndex) {
      this.currentIndex = 0;
    }

    this.translateX = `translateX(-${this.currentIndex * this.slideWidth}px)`;
  }
}
