import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnChanges{
  @Input() videoKey!: string;
  @Output() chiudi = new EventEmitter<void>();

  videoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.videoKey) {
      const url = `https://www.youtube.com/embed/${this.videoKey}?autoplay=1`;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }

  chiudiVideo() {
    this.chiudi.emit();
    this.videoUrl = null; 
  }
}

