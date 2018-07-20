import { IdeasService, Idea } from './ideas.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  animations: [
    trigger('ideasState', [
      state('inactive', style({
        opacity: 0
      })),
      state('active',   style({
        opacity: 100
      })),
      transition('inactive => active', animate('0.2s ease-in')),
      transition('active => inactive', animate('0.2s ease-out'))
    ])
  ]
})
export class IdeasComponent implements OnInit {

  ideasState: string;
  loaderState: string;
  ideas: Idea[];

  constructor(private ideasService: IdeasService) {
    console.log('Constructor ideas component');
    this.ideasState = 'inactive';
    this.loaderState = 'active';
  }

  ngOnInit() {
    this.ideasService.getIdeas().subscribe((ideas) => {
      this.ideas = ideas;
      this.toggleState();
    });
  }

  toggleState() {
    this.ideasState = this.ideasState === 'active' ? 'inactive' : 'active';
    this.loaderState = this.loaderState === 'active' ? 'inactive' : 'active';
  }
}
