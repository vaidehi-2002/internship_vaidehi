import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Home } from './home/home';
import { Card } from './card/card';

import { Nav } from './common/nav/nav';
import { Contact } from './contact/contact';
import { About } from "./about/about";
import { District } from './district/district';




@Component({
  selector: 'app-root', //app-root used to select app.html beacause it is a selector
  imports: [RouterOutlet, Home, Card, Nav, About,Contact,District],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Vaidehi');
}
