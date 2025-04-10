import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,

  ){}

  showBanner:boolean = true;

  ngOnInit(): void {
    this.localStorageService.setLocal('showBanner',this.showBanner)

  }


  visibleBanner(){
    this.showBanner=!this.showBanner
    this.localStorageService.setLocal('showBanner',this.showBanner)

  }

}
