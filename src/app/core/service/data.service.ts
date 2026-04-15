import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { DataMap } from '../data-map';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cache = new Map<string, any>();
  private http = inject(HttpClient);

  get<K extends keyof DataMap>(key: K): Signal<DataMap[K] | null> {
    if (!this.cache.has(key)) {
      const s = signal<DataMap[K] | null>(null);
      this.cache.set(key, s);

      import(`../../../assets/data/${key}.json`).then((module) => {
        s.set(module.default);
      });
    }

    return this.cache.get(key)!;
  }
}
