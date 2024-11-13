import { Component } from '@angular/core';

@Component({
  selector: 'app-clist-courses',
  templateUrl: './clist-courses.component.html',
  styleUrl: './clist-courses.component.css'
})
export class ClistCoursesComponent {
  courses = [
    { title: 'Curso de Angular', description: 'Aprende Angular desde cero' },
    { title: 'Curso de JavaScript', description: 'Domina JavaScript en profundidad' },
    { title: 'Curso de CSS', description: 'Crea sitios web con diseño responsivo' }
  ];
}
