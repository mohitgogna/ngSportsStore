import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template:`<div class="bg-success p-2 text-center text-white">
  This is SportsStore
</div>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportsStore';
}