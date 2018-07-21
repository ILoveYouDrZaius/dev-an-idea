import { IdeasService, Idea } from './ideas.service';
import { Component, OnInit } from '@angular/core';
import { stateAnimation } from '../animations';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  animations : [stateAnimation]
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
