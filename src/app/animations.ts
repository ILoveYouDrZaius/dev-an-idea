import { trigger, state, style, animate, transition } from "../../node_modules/@angular/animations";

export const stateAnimation = 
  trigger('state', [
    state('inactive', style({
      opacity: 0
    })),
    state('active',   style({
      opacity: 100
    })),
    transition('inactive => active', animate('0.2s ease-in')),
    transition('active => inactive', animate('0.1s ease-out'))
  ])