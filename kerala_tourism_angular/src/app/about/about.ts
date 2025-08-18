
import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: []
})
export class About {
  title = 'About Us';
  description = `
    Welcome to our website! We are passionate about providing the best services 
    and creating meaningful experiences for our users.
  `;
  
  team = [
    { name: 'Alice Johnson', role: 'Founder & CEO' },
    { name: 'Rahul Kumar', role: 'Lead Developer' },
    { name: 'Sophia Lee', role: 'UI/UX Designer' }
  ];
member: any;
}
