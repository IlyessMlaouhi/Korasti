import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly features = signal<Feature[]>([
    {
      icon: 'bi-journal-text',
      title: 'Digital Class Journal',
      description: 'Teachers log what was taught, homework, and notes per session — no more paper notebooks that get lost.',
    },
    {
      icon: 'bi-calendar-check',
      title: 'Attendance Tracking',
      description: 'Mark presence and absence in seconds. Parents get notified automatically the same day.',
    },
    {
      icon: 'bi-clipboard-data',
      title: 'Course Planning',
      description: 'Plan the term ahead of time, track progress against it, and adjust as the year goes.',
    },
    {
      icon: 'bi-people',
      title: 'Parent Visibility',
      description: "Parents see exactly what's being taught, when, and how their kid is doing — in real time.",
    },
  ]);
}
