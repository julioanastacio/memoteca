import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought-card',
  templateUrl: './thought-card.component.html',
  styleUrls: ['./thought-card.component.css'],
})
export class ThoughtCardComponent implements OnInit {
  @Input()
  thought: Thought = {
    id: 1,
    content: 'I love Angular',
    authorship: 'Julio',
    model: 'modelo3',
  };

  constructor() {}

  thoughtWidth(): string {
    if (this.thought.content.length >= 256) {
      return 'thought-g';
    }
    return 'thought-p';
  }

  ngOnInit(): void {}
}
