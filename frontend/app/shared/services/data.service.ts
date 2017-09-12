import { Injectable } from '@angular/core';

@Injectable()
export class DataService
{
    constructor()
    { }
    
    appName()
    {
        return 'Barebones - Angular 4';
    }
}