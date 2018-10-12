import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';

@NgModule({
  imports: [
    CommonModule,
    ChallengesRoutingModule
  ],
  declarations: [ChallengeListComponent]
})
export class ChallengesModule { }
