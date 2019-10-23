import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home Page';
  wizzard1 = 'Select Input Type';
  wizzard2 = 'Select Colors';
  wizzard3 = 'Inset Input Headline';
  wizzard4 = 'Select Font';
  public wizzard1State = false;
  public wizzard2State = false;
  public wizzard3State = false;
  public wizzard4State = false;

  public wizzardState = { btn1: false, btn2: false, btn3: false, btn4: false };
  private sub: any;
  public isHome = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  ngDoCheck(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      if (this.router.url.includes('/wizzard')) {
        this.isHome = false;
        if (this.router.url === '/wizzard/:1') {
          this.wizzardState.btn1 = true;
          this.wizzardState.btn2 = false;
          this.wizzardState.btn3 = false;
          this.wizzardState.btn4 = false;
        } else if (this.router.url === '/wizzard/:2') {
          this.wizzardState.btn1 = false;
          this.wizzardState.btn2 = true;
          this.wizzardState.btn3 = false;
          this.wizzardState.btn4 = false;
        } else if (this.router.url === '/wizzard/:3') {
          this.wizzardState.btn1 = false;
          this.wizzardState.btn2 = false;
          this.wizzardState.btn3 = true;
          this.wizzardState.btn4 = false;
        } else if (this.router.url === '/wizzard/:4') {
          this.wizzardState.btn1 = false;
          this.wizzardState.btn2 = false;
          this.wizzardState.btn3 = false;
          this.wizzardState.btn4 = true;
        }
      } else {
        this.isHome = true;
      }
    });
  }
}
