import { Work } from './../interfaces/work';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WorksService {
    apiUrl: string = 'https://api.crossref.org/works';
    works: Work[] = [];
    constructor(private http: HttpClient) { }
    // Read data
    public getWorks() {
        return Observable.create((observer: Observer<any>) => {
            return this.http.get<Work[]>(`${this.apiUrl}`)
                .subscribe((result: Work[]) => {
                    observer.next(result);
                    observer.complete();
                });
        });
    }
}