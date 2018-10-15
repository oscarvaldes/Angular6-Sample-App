import { Component, OnInit } from '@angular/core';
import {StoreService} from './store.service';
import {IStore} from '../store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  iStore: IStore[] = [];
  errorMessage: string;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getStore().subscribe(
      store => { this.iStore = store;
      },
      error => {this.errorMessage = <any>error;
      }
    );
  }

}
