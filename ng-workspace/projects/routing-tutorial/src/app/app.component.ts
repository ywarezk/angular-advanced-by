import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
    <nav>
      <ul>
        <li>
          <a routerLink="/settings/user">settings user</a>
        </li>
        <li>
          <a routerLink="/settings/dashboard">settings dashboard</a>
        </li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-tutorial';
}
