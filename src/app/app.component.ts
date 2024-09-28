import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  authService = inject(AuthService)
  http = inject(HttpClient);


ngOnInit(): void {
  this.authService.user$.subscribe((user: { email: string; displayName: string; }) =>{
    if (user) {
      this.authService.currentUserSig.set({
        email:user.email!,
        username: user.displayName!,
      });
    } else{
      this.authService.currentUserSig.set(null);
    }
  } );
}

  logout(): void {
    this.authService.logout();
  }
}
