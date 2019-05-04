import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu',
    template: `
    <ul>
        <li *ngFor="let menu of menuItem;">
            <a routerLink="{{menu | lowercase}}">{{menu}}</a>
        </li>
    </ul>
    `,
    styles: [``]
})
export class MenuComponent implements OnInit {
    menuItem: String[];
    constructor() { 
        this.menuItem = ['Home', 'Products', 'Users'];
    }

    ngOnInit(): void { }
}
