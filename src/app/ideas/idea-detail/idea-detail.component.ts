import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css']
})
export class IdeaDetailComponent implements OnInit {

  ideaState: string;

  constructor() {
    this.ideaState = 'inactive';
  }

  ngOnInit() {
  }

  toggleState() {
    this.ideaState = this.ideaState === 'active' ? 'inactive' : 'active';
  }

}
