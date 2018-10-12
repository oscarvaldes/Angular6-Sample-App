import { Component, OnInit } from '@angular/core';
import { ChallengeListService } from './challenge-list.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {

  constructor(private challengeService: ChallengeListService) {
    this.challengeService.getChallenges().subscribe()

  }

  ngOnInit() {

  }

}
