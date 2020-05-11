import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Component({
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'sidebar-mini');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'sidebar-mini');
  }

}
