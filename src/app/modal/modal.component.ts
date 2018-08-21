import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BroadcasterModalService } from '../service/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modal', [
      state('show', style({ opacity: 1, display: 'block' })),
      state('hide', style({ opacity: 0, display: 'none' })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ]),
    trigger('modalBackdrop', [
      state('show', style({ opacity: .8, display: 'block' })),
      state('hide', style({ opacity: 0, display: 'none' })),
      transition('show => hide', animate('200ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ]),
  ]
})

export class ModalComponent implements OnInit {

  @Input() time;
  private show;
  showBack = true;
  public index;
  public slides;

  constructor(private _broadcaster: BroadcasterModalService) { }

  ngOnInit() {
    this.delayOpening();
    this.index = this.time.index;
    this.slides = this.time.hours;
    console.log('time: ', this.slides);
  }

  get modalState() {
    return this.show ? 'show' : 'hide';
  }
  get modalBackdropState() {
    return this.showBack ? 'show' : 'hide';
  }

  delayOpening() {
    setTimeout(() => {
      this.show = 'show';
      if (this.slides.length) {
        this.slides[this.index].state = 'show';
      }
    }, 100);
  }

  closeModal() {
    this.show = !this.show;
    this.showBack = !this.showBack;
    for (const slide of this.slides) {
      slide.state = 'hide';
    }
    this._broadcaster.sendModalUpdate(false);
  }

  forwardSlide() {
    if (this.slides[this.index + 1]) {
      this.index += 1;
      const i = this.index;
      this.slides[i].state = 'show';
      this.slides[i - 1].state = 'hide';
    }
  }
  reverseSlide() {
    if (this.slides[this.index - 1]) {
      this.index -= 1;
      const i = this.index;
      this.slides[i + 1].state = 'hide';
      this.slides[i].state = 'show';
    }
  }

}
