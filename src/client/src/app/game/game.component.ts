import { Component, OnInit } from '@angular/core';
import {
  flipInXOnEnterAnimation,
  flipOutXOnLeaveAnimation,
} from 'angular-animations';
import { Observable } from 'rxjs';
import { Participant } from '../model/participant.model';
import { Role } from '../model/role.model';
import { GameFacade } from './state/game.facade';
import { GameState } from './state/game.state';

const ELEMENT_DATA = [
  {name: 'Jam', score: 3000},
  {name: 'Bobby', score: 3000},
  {name: 'Niba', score: 3000},
  {name: 'Jam', score: 3000},
  {name: 'Bobby', score: 3000},
  {name: 'Niba', score: 3000},
];

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [flipInXOnEnterAnimation(), flipOutXOnLeaveAnimation()],
})
export class GameComponent implements OnInit {
  displayedColumns: string[] = ['name', 'score'];
  dataSource = ELEMENT_DATA;
  gameState!: Observable<GameState>;
  user!: Participant;
  role = Role;

  constructor(private gameFacade: GameFacade) {}

  ngOnInit(): void {
    this.gameState = this.gameFacade.getGameState();
  }

  onTimeSet(timeSpan: number): void {
    this.gameFacade.setTime(timeSpan);
  }
}
