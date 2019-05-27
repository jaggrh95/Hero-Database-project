import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Type } from '@angular/compiler';
import { AuthService } from './Authenticationservice';


@Injectable({
    providedIn: 'root'
})
export class zooservice
{
    APILINKGET : String;
    APIKEY : String;
    APILINKPOST : String;
    ERRORCATCH : String;
    

    constructor(private http: HttpClient,private AS : AuthService)
    {
        this.APILINKGET = "https://localhost:44370/api/";
        this.APILINKPOST = "http://localhost:58958/api/";
        this.APIKEY = "ENTER AUTH KEY HERE";
        
        
    }
    httpOptions = {
        headers: new HttpHeaders({
      
          'Authorization': `Bearer ${this.AS.idToken}`
        })
      };
    

    getKooiDataList(Parameter : String,Sort : String, Filter : String, Page? : Number , Length? : Number)
    {
        return this.http.get<KooiRoot[]>(this.APILINKGET+"Kooien?Filter="+Filter+ "&Parameter="+Parameter+"&Page="+Page+"&Length="+Length+"&Sorteer="+Sort);

    }


    getDierDataList(Parameter : String,Sort : String, Filter : String, Page? : Number , Length? : Number)
    {
        return this.http.get<RootObject[]>(this.APILINKGET+"Dier?Filter="+Filter+ "&Parameter="+Parameter+"&Page="+Page+"&Length="+Length+"&Sorteer="+Sort);
    }


    getSpecificDier(ID : Number)
    {
        return this.http.get<RootObject>(this.APILINKGET+"Dier/"+ID+"?");

    }


    getSpecificKooi(ID : number)
    {
        return this.http.get<KooiRoot>(this.APILINKGET+"Kooien/"+ID);
    }

    CreateKooi(Kooi:KooiRoot) : Observable<KooiRoot> 
    {
        return this.http.post<KooiRoot>(this.APILINKPOST+"Kooien",
        Kooi,this.httpOptions).pipe(catchError(this.handleError));
         
    }

    Createdier(dier:RootObject) : Observable<RootObject> 
    {
        return this.http.post<RootObject>(this.APILINKPOST+"Dier",
         dier,this.httpOptions).pipe(catchError(this.handleError));
         
    }
    handleError(error)
    {
      
        let errortekst = "Kon data niet versturen, zijn alle velden ingevuld?";
        
   window.alert(errortekst);
        return throwError(errortekst);
    }

    
    Removedier(id : number): Observable<{}>
    {
        return this.http.delete<RootObject>(this.APILINKGET+"Dier/"+id,this.httpOptions).pipe();
    }
    RemoveKooi(id : number): Observable<{}>
    {
        return this.http.delete<KooiRoot>(this.APILINKGET+"Kooien/"+id,this.httpOptions).pipe();
    }

    
    
}
export interface DierKooi {
    kooiID: number;
    kooiOppervlakte: number;
    kooiHabitatsoort: String;
    kooiAfscherming: String;
    kooiVoeding: String;
}

export interface RootObject {
    dierID: number;
    dierNaam: String;
    dierLeeftijd: number;
    dierGeslacht: String;
    dierSoort: String;
    dierSoortSpecifieker: String;
    dierOmschrijving: String;
    dierAfkomst: String;
    dierGewicht: number;
    dierVoeding: String;
    dierKooiId: number;
    dierKooi?: DierKooi;
}
export interface KooiRoot {
    kooiID: number;
    kooiOppervlakte: number;
    kooiHabitatsoort: String;
    kooiAfscherming: String;
    kooiVoeding: String;
}
