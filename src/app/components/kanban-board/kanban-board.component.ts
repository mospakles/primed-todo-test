import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
})
export class KanbanBoardComponent implements OnInit {
  userName: string = '';

  constructor(  private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user$.pipe(first()).subscribe((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        this.userName = user.displayName || '';
      }
    });
  }

  getWelcomeMessage(): string {
    return `Welcome, ${this.extractFirstName(this.userName)}!`;
  }

  private extractFirstName(fullName: string): string {
    const names = fullName.split(' ');
    return names.length > 0 ? names[0] : '';
  }
}
