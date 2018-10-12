import { Component, OnInit } from '@angular/core';
import { ChallengeListService } from './challenge-list.service';
import {Challenge} from './challenge';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  challenges: Challenge[] = [];
  errorMessage: string;

  constructor(private challengeService: ChallengeListService) {

  }

  ngOnInit() {
    this.challengeService.getChallenges().subscribe(
      challenge => { this.challenges = challenge;
      },
      error => {this.errorMessage = <any>error;
      }
    );

  }

}
