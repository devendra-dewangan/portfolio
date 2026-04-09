import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DataMap } from '../data-map';
import { shareReplay } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cache = new Map<string, any>();
  private http = inject(HttpClient);

  // constructor() { 
  //   for(const key of Object.keys(DataMap)) {
  //     this.get(key);;
  //   }
  // }

  get<K extends keyof DataMap>(key: K) 
  {
    if(!this.cache.has(key)) {
      const request$ = this.http.get<DataMap[K]>(`assets/data/${key}.json`)
      .pipe(shareReplay(1));
      const signal = toSignal(request$,{initialValue:null});
      this.cache.set(key,signal);
    }

    return this.cache.get(key);
  }
  
}
