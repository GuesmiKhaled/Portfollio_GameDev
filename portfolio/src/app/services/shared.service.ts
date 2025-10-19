import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private headerTitleSource = new BehaviorSubject<string>('Unity Developer');
  headerTitle$ = this.headerTitleSource.asObservable();

  setHeaderTitle(title: string) {
    this.headerTitleSource.next(title);
  }
}
