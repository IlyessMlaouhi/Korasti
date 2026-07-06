import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Statistique {
  icon: string;
  label: string;
  value: string;
  subtitle: string;
  progress?: number;
}
interface Lesson {
  startTime:string;
  date:string;
  subject:string;
  group:string;
  location:string;
  duration:number;
  recorded:boolean;
}

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

  username = "hamoud";
  male = true;

  schoolName = "Khaznadar Bardo";

  todaysLessonsNumber = 1;

  year = "2026/2027";
  todaysDate="06/07/2026";

  recorded = 128;

  protected readonly stats = signal<Statistique[]>([
    {
      icon: 'bi-journal-text',
      label: 'Séances enregistrées',
      value: this.recorded.toString(),
      subtitle: '+12 cette semaine'
    },
    {
      icon: 'bi-people',
      label: 'Classes assignées',
      value: '6',
      subtitle: '18 h / semaine'
    },
    {
      icon: 'bi-bar-chart-line',
      label: 'Progression moyenne',
      value: '82%', ///will have to change along with progress to stay updated - not ideal (dog aalaha)
      subtitle: '3ème Maths : 92%',
      progress:82
    },
    {
      icon: 'bi-exclamation-circle',
      label: 'Séances à compléter',
      value: '3',
      subtitle: this.todaysLessonsNumber.toString() +' aujourd\'hui'
    }
  ]);
  protected readonly lessons =signal<Lesson[]>([
    {
      startTime:"8:00",
      date:this.todaysDate,
      subject:"Mécanique",
      group:"3éme Tech.s2",
      location:"Labo GM-1",
      duration:4,
      recorded:true,
    },
    {
      startTime:"14:00",
      date:this.todaysDate,
      subject:"Mécanique",
      group:"3éme Tech.s1",
      location:"Labo GM-3",
      duration:4,
      recorded:false,
    }
  ])

}