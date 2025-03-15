import { Component } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  country: string = 'India';
  message: string = '';
  isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;
  }
  canExit() {
    if ((this.firstName || this.lastName || this.message) && !this.isSubmitted) {
      return confirm('You have unsaves changes. Do you want to exit this page.');
    } else {
      return true;
    }
  }

  canDeactivate(component: ContactComponent, nextState: RouterStateSnapshot) {
    return component.canExit();
  }
}
