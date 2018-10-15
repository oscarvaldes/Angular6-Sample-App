import { Component, OnInit } from '@angular/core';
import { ChallengeListService } from './challenge-list.service';
import {Challenge, IChallenge} from '../challenge';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  iChallenges: IChallenge = null;
  challenges: Challenge[] = [];
  errorMessage: string;

  constructor(private challengeService: ChallengeListService) {

  }

  ngOnInit() {
    this.challengeService.getChallenges().subscribe(
      challenge => { this.iChallenges = challenge;
      for (const item of this.iChallenges.items) {
        this.challenges.push({name: item.metadata[1].value, imageURl: item.metadata[4].value, reward: +item.metadata[5].value});
      }
      },
      error => {this.errorMessage = <any>error;
      }
    );

  }

}
