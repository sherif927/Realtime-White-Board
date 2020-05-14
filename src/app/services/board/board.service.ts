import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private undoHistory: string[] = [];
  private undoHistoryObs = new BehaviorSubject<string>('');
  constructor() { }

  getCurrentImage = this.undoHistoryObs.asObservable();
  setCurrentImage = (src: string) => this.undoHistoryObs.next(src);

  clear(): void {
    this.undoHistory = [];
  }

  push(src: string): void {
    this.undoHistory.push(src);
  }

  pop(): string {
    return (this.undoHistory.length > 0) ? this.undoHistory.pop() : undefined;
  }
}
