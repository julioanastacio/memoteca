import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought: Thought = {
    content: '',
    authorship: '',
    model: 'modelo1',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ThoughtService
  ) {}

  createThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  }

  cancelThought() {
    this.router.navigate(['/listThought']);
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');

      this.service.listById(parseInt(id!)).subscribe((thought) => {
        this.thought = thought;
      });
    }
  }

  editThought() {
    this.service.edit(this.thought).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  }
}
