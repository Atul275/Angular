import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  router: Router= inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  popularCourses = [
    { title: 'Angular', rating: 5, price: 100, image: '../../assets/courses/course2.jpg' },
    { title: 'React', rating: 4, price: 50, image: '../../assets/courses/course4.jpg' },
    { title: 'Vue', rating: 3, price: 25, image: '../../assets/courses/course6.jpg' },
    { title: 'Phython', rating: 4, price: 30, image: '../../assets/courses/course7.jpg' },
  ];

  goToCourses() {
    this.router.navigate(['/courses'], {relativeTo: this.activeRoute}); //absolute path
  }
}
