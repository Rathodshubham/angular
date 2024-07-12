import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3000/auth'; // Replace with your API endpoint

  private http = inject(HttpClient);

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl + '/login', { username, password })
      .pipe(
        tap(response => this.setSession(response)),
        catchError(this.handleError('login', []))
      );
  }

  private setSession(authResult: any): void {
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', authResult.expiresAt);
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn(): boolean {
    return new Date().getTime() < this.getExpiration();
  }

  private getExpiration(): number {
    const expiration = localStorage.getItem('expires_at');
    return expiration ? parseInt(expiration, 10) : 0;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
