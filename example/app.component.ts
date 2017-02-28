import { Component } from '@angular/core';

import { IShContextMenuItem } from 'ng2-right-click-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: IShContextMenuItem[];
  dataCtxOne: any;
  dataCtxTwo: any;

constructor() {
  this.dataCtxOne = {
    One: 'One'
  };

  this.dataCtxTwo = {
    Two: 'Two'
  };

  this.items = [
    {
      label: 'Save',
      onClick: this.clickEvent
    },
    {
      label: 'Edit',
      onClick: this.clickEvent
    },
    {
      divider: true
    },
    {
      label: 'Remove',
      disabled: ctx => {
        return ctx.Two === 'Two';
      },
      onClick: this.clickEvent
    },
    {
      label: 'Hidden',
      onClick: this.clickEvent,
      visible: ctx => {
        return ctx.One === 'One';
      }
    }
  ];

}

  clickEvent($event: any){
    console.log('clicked ', $event);
  };
}