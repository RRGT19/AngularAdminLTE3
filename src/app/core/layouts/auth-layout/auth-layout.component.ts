import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Component({
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'login-page');
  }

}
