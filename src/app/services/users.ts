import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Video {
  title: string;
  thumbnail: string;
  videoUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class Users {
  private API_URL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<any[]>(this.API_URL).pipe(
      map((res) =>
        Array.isArray(res)
          ? res.map((p: any) => ({
              title: p.title,
              thumbnail: p.image,
              videoUrl: p.image
            }))
          : []
      ),
      catchError((err) => {
        console.error('Error fetching videos', err);
        return of([] as Video[]);
      })
    );
  }
}
