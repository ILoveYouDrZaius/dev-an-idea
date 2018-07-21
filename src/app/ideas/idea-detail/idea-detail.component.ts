import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeasService, Idea } from '../ideas.service';
import { stateAnimation } from '../../animations';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css'],
  animations: [stateAnimation]
})
export class IdeaDetailComponent implements OnInit {

  ideaState: string;
  loaderState: string;
  idIdea: number;
  idea: Idea;

  constructor(
    private route: ActivatedRoute,
    private ideaService: IdeasService
  ) {
    this.loaderState = 'active';
    this.ideaState = 'inactive';
    this.idIdea = route.snapshot.params.id;
  }

  ngOnInit() {
    this.ideaService.getIdea(this.idIdea)
      .subscribe((idea) => {
        this.idea = idea;
        this.toggleState();
      });
  }

  toggleState() {
    this.ideaState = this.ideaState === 'active' ? 'inactive' : 'active';
    this.loaderState = this.loaderState === 'active' ? 'inactive' : 'active';
  }

}
