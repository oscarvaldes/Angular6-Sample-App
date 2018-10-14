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
  showImages = true;

  constructor(private challengeService: ChallengeListService) {

  }

  ngOnInit() {
    this.challengeService.getChallenges().subscribe(
      challenge => { this.iChallenges = challenge;
      // console.log(this.challenges.items);
      for (const item of this.iChallenges.items) {
        console.log(item.metadata[1].value);
        // this.challenges.
      }
      },
      error => {this.errorMessage = <any>error;
      }
    );

  }

}
