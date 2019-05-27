import { Component, OnInit } from '@angular/core';
import { KooiRoot,zooservice,RootObject,DierKooi } from '../services/zooservice';
import {Location} from '@angular/common';
@Component({
  selector: 'app-create-kooi',
  templateUrl: './create-kooi.component.html',
  styleUrls: ['./create-kooi.component.css']
})
export class CreateKooiComponent implements OnInit {

  public KooiHolder : KooiRoot = <any>{};
  OppVeld : number;
  HabitatVeld : String;
  VoedingVeld: String ;

  constructor(private ZooSvc: zooservice,private _location: Location) { }

  ngOnInit() {
  }
  SubmitBttnClick()
  {
    
    
    this.KooiHolder.kooiHabitatsoort = this.HabitatVeld;
    this.KooiHolder.kooiVoeding = this.VoedingVeld;
    this.KooiHolder.kooiOppervlakte = this.OppVeld;
    
  
    this.ZooSvc.CreateKooi(this.KooiHolder).
    subscribe(

      data=>
      {
          
          if(data != null)
          {
            
            this.KooiHolder = data;
            this._location.back();


          }
          
      }
      
      );
   }
  

}
