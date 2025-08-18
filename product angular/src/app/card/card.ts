import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
// @Input() title='';
// @Input() description=" ";
// @Input() imgLink=".."
@Input() card: any={
  image:'',
  title:'',
  description:'',
  price:0
};


}
