import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wizzard',
  templateUrl: './wizzard.component.html',
  styleUrls: ['./wizzard.component.scss']
})

export class WizzardComponent implements OnInit {
  buttonPrevious = 'previous';
  buttonNext = 'next';
  buttonPreview = 'preview';
  buttonSave = 'save';

  labelModel: string = '';

  public snippetLabel: string = '';

  private sub: any;
  public codeMarkup: string;


  //for future usage
  // public searchString = {
  //   one: 'aaa',
  //   two: 'bbb'
  // }

  public isWizzard1 = false;
  public isWizzard2 = false;
  public isWizzard3 = false;
  public isWizzard4 = false;
  public isWizzard5 = false;

  public conditionIs = false;

  public progressValue = 0;

  public optionSelected = {
    'wizzard1': false,
    'wizzard2': false,
    'wizzard3': false,
    'wizzard4': false
  }

  public option = {
    'first': '',
    'second': '',
    'third': '',
    'fourth': ''
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      if (this.router.url.includes('/wizzard')) {
        if (this.router.url === '/wizzard/:1') {
          this.isWizzard1 = true;
          this.isWizzard2 = false;
          this.isWizzard3 = false;
          this.isWizzard4 = false;
          this.isWizzard5 = false;
          this.progressValue = 0;
          this.conditionIs = false;
        } else if (this.router.url === '/wizzard/:2') {
          this.isWizzard1 = false;
          this.isWizzard2 = true;
          this.isWizzard3 = false;
          this.isWizzard4 = false;
          this.isWizzard5 = false;
          this.conditionIs = false;
        } else if (this.router.url === '/wizzard/:3') {
          this.isWizzard1 = false;
          this.isWizzard2 = false;
          this.isWizzard3 = true;
          this.isWizzard4 = false;
          this.isWizzard5 = false;
          this.conditionIs = false;
        } else if (this.router.url === '/wizzard/:4') {
          this.isWizzard1 = false;
          this.isWizzard2 = false;
          this.isWizzard3 = false;
          this.isWizzard4 = true;
          this.isWizzard5 = false;
          this.conditionIs = false;
        } else if (this.router.url === '/wizzard/:5') {
          this.isWizzard1 = false;
          this.isWizzard2 = false;
          this.isWizzard3 = false;
          this.isWizzard4 = false;
          this.isWizzard5 = true;
          this.conditionIs = true;
        } else {
          return;
        }
      }
    });
  }

  wizzardNavigation(direction) {
    if (direction === 'next') {
      if (this.isWizzard1 && this.conditionIs && this.optionSelected.wizzard1) {
        this.router.navigate(['wizzard/:2']);
        this.progressValue = this.progressValue + 20;
      } else if (this.isWizzard2 && this.conditionIs && this.optionSelected.wizzard1 && this.optionSelected.wizzard2) {
        this.router.navigate(['wizzard/:3']);
        this.progressValue = this.progressValue + 20;
      } else if (this.isWizzard3 && this.conditionIs && this.optionSelected.wizzard1 && this.optionSelected.wizzard2 && this.optionSelected.wizzard3) {
        this.router.navigate(['wizzard/:4']);
        this.progressValue = this.progressValue + 20;
      }
    } else if (direction === 'previous') {
      if (this.isWizzard5) {
        this.router.navigate(['wizzard/:4']);
        this.optionSelected.wizzard4 = false;
        this.option.fourth = '';
        this.progressValue = this.progressValue - 25;
      } else if (this.isWizzard4) {
        this.router.navigate(['wizzard/:3']);
        this.optionSelected.wizzard3 = false;
        this.option.third = '';
        this.progressValue = this.progressValue - 25;
      } else if (this.isWizzard3) {
        this.router.navigate(['wizzard/:2']);
        this.option.second = '';
        this.optionSelected.wizzard2 = false;
        this.progressValue = this.progressValue - 25;
      } else if (this.isWizzard2) {
        this.router.navigate(['wizzard/:1']);
        this.option.first = '';
        this.optionSelected.wizzard1 = false;
        this.progressValue = this.progressValue / 0;
      }
    } else if (direction === 'preview') {
      if (this.isWizzard4 && this.conditionIs && this.optionSelected.wizzard1 && this.optionSelected.wizzard2 && this.optionSelected.wizzard3 && this.optionSelected.wizzard4) {
        this.router.navigate(['wizzard/:5']);
        this.snippetLabel = this.labelModel;
        this.progressValue = this.progressValue + 15;
      }
    } if (direction === 'save') {

      if (this.isWizzard5 && this.conditionIs && this.optionSelected.wizzard1 && this.optionSelected.wizzard2 && this.optionSelected.wizzard3 && this.optionSelected.wizzard4) {
        let newItem = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];
        let itemNumber = 0;
        for (let i = 0; i <= 10; i++) {
          if (!localStorage.getItem(newItem[i])) {
            itemNumber = i;

            if (i === 10) {
              alert('Sorry you have reached the limit of max 20 saved snippets, please clear some');
              this.router.navigate(['home']);
              return
            }
            break;
          }
        }
        localStorage.setItem(newItem[itemNumber], this.codeMarkup);
        this.router.navigate(['home']);
      }
    }
  }

  itemSelected(page, value, option) {
    if (page === 'wizzard1') {
      this.optionSelected.wizzard1 = true;
      this.progressValue = this.progressValue + value;
      this.conditionIs = true;
      if (option.length >= 1) {
        this.option.first = option;
      }
    } else if (page === 'wizzard2') {
      this.optionSelected.wizzard2 = true;
      this.progressValue = this.progressValue + value;
      this.conditionIs = true;
      if (option.length >= 1) {
        this.option.second = option;
      }
    } else if (page === 'wizzard3') {
      this.optionSelected.wizzard3 = true;
      this.progressValue = this.progressValue + value;
      this.conditionIs = true;
      if (option.length >= 1) {
        this.option.third = option;
      }
    } else if (page === 'wizzard4') {
      this.optionSelected.wizzard4 = true;
      this.progressValue = this.progressValue + value;
      this.conditionIs = true;
      if (option.length >= 1) {
        this.option.fourth = option;
      }
    }
  }

  fontFamily() {
    if (this.option.fourth === 'option1') {
      return 'Times New Roman,Times,serif';
    } else if (this.option.fourth === 'option2') {
      return 'Arial,Helvetica,sans-serif';
    } else if (this.option.fourth === 'option3') {
      return 'Georgia,Times New Roman,Times, serif';
    }
  }

  styleProperty(type) {
    if (this.option.second === 'option1' && type === 'border') {
      return '3px solid black';
    } else if (this.option.second === 'option2' && type === 'color') {
      return 'darkgrey';
    } else if (this.option.second === 'option3' && type === 'background') {
      return 'antiquewhite';
    }
  }

  outputElement() {
    if (this.option.first === 'option1') {
      this.codeMarkup = document.getElementsByClassName('element1')[0].outerHTML
      return this.codeMarkup;
    } else if (this.option.first === 'option2') {
      this.codeMarkup = document.getElementsByClassName('element2')[0].outerHTML;
      return this.codeMarkup;
    } else if (this.option.first === 'option3') {
      this.codeMarkup = document.getElementsByClassName('element3')[0].outerHTML;
      return this.codeMarkup;
    } else if (this.option.first === 'option4') {
      this.codeMarkup = document.getElementsByClassName('element4')[0].outerHTML;
      return this.codeMarkup;
    } else {
      return 'Code markup...'
    }
  }

  // to cleanup the angular markup as in html as attribute, for future usage.
  // removeFromString(str, searchstr) {
  //   let index = str.indexOf(searchstr);
  // 	if (index === -1) {
  // 		return str;
  // 	}
  // 	this.codeMarkup= str.slice(0, index) + str.slice(index + searchstr.length);
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
