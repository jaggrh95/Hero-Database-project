import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// importeren samen met Httpclientmodule

@Injectable({
    providedIn: 'root'
})
export class MarvelService
{
    constructor(private http: HttpClient) { }

    getData(Hero : String) 
    {
        //api call bevat : herostartswith -> begin van hero naam, limit -> maximum aantal heros die mogen getoond worden(paging) (ts en apikey dient voor toestemming tot API)
        return this.http.get<RootObject>(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${Hero}&limit=10&ts=1&apikey=aff615eb65bf5a9816bfeb0fdbe0afa8&hash=608b22d49b6efa9cc3a9144eaa5e3a61`)
    }

   GetImage(url : String,extens : string) {
        return `${url}/standard_amazing.${extens}`
    }

    //api callt via ID om lijst van alle specifieke data op te noemen van deze character/hero
    Getcharacter(id : number) 
    {
        return this.http.get<RootObject>(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=aff615eb65bf5a9816bfeb0fdbe0afa8&hash=608b22d49b6efa9cc3a9144eaa5e3a61`)
    }
}
export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Item {
    resourceURI: string;
    name: string;
}

export interface Comics {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

export interface Item2 {
    resourceURI: string;
    name: string;
}

export interface Series {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}

export interface Item3 {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items: Item3[];
    returned: number;
}

export interface Item4 {
    resourceURI: string;
    name: string;
}

export interface Events {
    available: number;
    collectionURI: string;
    items: Item4[];
    returned: number;
}

export interface Url {
    type: string;
    url: string;
}

export interface Result {
    id: number;
    name: string;
    description: string;
    modified: Date;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comics;
    series: Series;
    stories: Stories;
    events: Events;
    urls: Url[];
}

export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
}

export interface RootObject {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}