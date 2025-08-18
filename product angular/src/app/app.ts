import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./common/navbar/navbar";
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Card } from './card/card';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('secondproject');
}
