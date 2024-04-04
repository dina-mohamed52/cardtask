import { NgClass } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { BackcardComponent } from '../backcard/backcard.component';
import { FrontcardComponent } from '../frontcard/frontcard.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass,SvgComponent,BackcardComponent,FrontcardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  isFlipped = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
