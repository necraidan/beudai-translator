import { Dictionary } from './model/dictionary.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DictionaryService {
    constructor() {}

    frToBeudai(sentence: string) {
        return sentence
            .split('')
            .map((l: string) => {
                return Dictionary[l] ? Dictionary[l] : l;
            })
            .join('');
    }
}
