import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getBosses(): any {
    const url = `https://eldenring.fanapis.com/api/bosses?limit=106`;
    return this.http.get(url, {}).pipe(tap((boss) => boss));
  }
}


