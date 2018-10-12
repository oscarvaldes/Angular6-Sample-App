import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Challenge} from './challenge';

@Injectable({
  providedIn: 'root'
})
export class ChallengeListService {
  constructor(private http: HttpClient) {}

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'An error occurred.');
  }

    getChallenges(): Observable<Challenge[]> {
        return this.http.get<Challenge[]>(environment.challengeUrl, {
        }).pipe(
          retry(2),
          catchError(ChallengeListService.handleError)
        );
    }


}
