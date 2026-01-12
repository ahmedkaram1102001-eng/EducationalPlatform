import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Users, Video } from '../services/users';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses implements OnInit {

  videos: Video[] = [];
  selectedVideo: SafeResourceUrl | null = null;

  constructor(
    private usersService: Users,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.usersService.getVideos().subscribe((res) => {
      this.videos = res;
    });
  }

  openVideo(url: string): void {
    this.selectedVideo =
      this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  closeVideo(): void {
    this.selectedVideo = null;
  }
}
