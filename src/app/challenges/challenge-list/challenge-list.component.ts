import { Component, OnInit } from '@angular/core';
import { ChallengeListService } from './challenge-list.service';
import {IChallenge} from '../challenge';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  challenges: IChallenge = null;
  errorMessage: string;
  showImages = true;

  constructor(private challengeService: ChallengeListService) {

  }

  ngOnInit() {
    this.challengeService.getChallenges().subscribe(
      challenge => { this.challenges = challenge;
      console.log(this.challenges.items);
      },
      error => {this.errorMessage = <any>error;
      }
    );

  }

}
