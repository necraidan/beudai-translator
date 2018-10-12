import { DictionaryService } from './dictionary.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    textareaValue = '';
    transformValue = '';

    constructor(private _dictService: DictionaryService) {}

    onKey(value: string) {
        this.textareaValue = value;
    }

    transform() {
        this.transformValue = this._dictService.frToBeudai(this.textareaValue);
        console.log(this.transformValue);
    }
}
