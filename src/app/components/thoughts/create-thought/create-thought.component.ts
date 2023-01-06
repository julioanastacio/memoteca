import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thought } from '../thought';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought: Thought = {
    id: 1,
    content: 'Aprendendo Angular',
    authorship: 'Dev',
    model: 'model1',
  };

  constructor(private router: Router) {}

  createThought() {
    alert('Kappa');
  }

  cancelThought() {
    this.router.navigate(['/listThought']);
    return false;
  }

  ngOnInit(): void {}
}
