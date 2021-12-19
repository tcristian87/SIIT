import { trigger, transition, style, animate } from '@angular/animations' ;

export const fadeAnimation = trigger('fade', [
      transition('void =>*', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ])
