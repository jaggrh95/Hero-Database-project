import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// importeren samen met Httpclientmodule

@Injectable({
    providedIn: 'root'
})
export class MarvelService
{
    APIKEY : String;
    constructor(private http: HttpClient) { 
       this.APIKEY = "limit=10&ts=1&apikey=aff615eb65bf5a9816bfeb0fdbe0afa8&hash=608b22d49b6efa9cc3a9144eaa5e3a61";
    }

    getData(Hero : String) 
    {
        //api call bevat : herostartswith -> begin van hero naam, limit -> maximum aantal heros die mogen getoond worden(paging) (ts en apikey dient voor toestemming tot API)
        return this.http.get<RootObject>(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${Hero}&${this.APIKEY}`)
    }

   GetImage(url : String,extens : string) 
   {
        return `${url}/standard_amazing.${extens}`
    }

    //api callt via ID om lijst van alle specifieke data op te noemen van deze character/hero
    Getcharacter(id : number) 
    {
        return this.http.get<RootObject>(`https://gateway.marvel.com/v1/public/characters/${id}?${this.APIKEY}`)
    }
    GetCharacterComics(id : number,offset : number,order : string) 
    {
        return this.http.get<RootObjectC>(`https://gateway.marvel.com/v1/public/characters/${id}/comics?offset=${offset}&orderBy=${order}&limit=20&${this.APIKEY}`)
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


////////////////////////////COMIC INTERFACES/////////////////////////////////////

export interface TextObjectC {
    type: string;
    language: string;
    text: string;
}

export interface UrlC {
    type: string;
    url: string;
}

export interface SeriesC {
    resourceURI: string;
    name: string;
}

export interface DateC {
    type: string;
    date: Date;
}

export interface PriceC {
    type: string;
    price: number;
}

export interface ThumbnailC {
    path: string;
    extension: string;
}

export interface ImageC {
    path: string;
    extension: string;
}

export interface ItemC {
    resourceURI: string;
    name: string;
    role: string;
}

export interface CreatorsC {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

export interface Item2C {
    resourceURI: string;
    name: string;
}

export interface CharactersC {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}

export interface Item3C {
    resourceURI: string;
    name: string;
    type: string;
}

export interface StoriesC {
    available: number;
    collectionURI: string;
    items: Item3[];
    returned: number;
}

export interface EventsC {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface ResultC {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: Date;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObjectC[];
    resourceURI: string;
    urls: Url[];
    series: Series;
    variants: any[];
    collections: any[];
    collectedIssues: any[];
    dates: Date[];
    prices: PriceC[];
    thumbnail: Thumbnail;
    images: ImageC[];
    creators: CreatorsC;
    characters: CharactersC;
    stories: Stories;
    events: Events;
    
}
export interface DataC {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ResultC[];
}

export interface RootObjectC {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: DataC;
}

