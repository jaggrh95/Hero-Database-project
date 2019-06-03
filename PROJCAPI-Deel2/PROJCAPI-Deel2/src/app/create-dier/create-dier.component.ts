import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {zooservice,RootObject,KooiRoot,DierKooi} from 'src/app/services/zooservice';
@Component({
  selector: 'app-create-dier',
  templateUrl: './create-dier.component.html',
  styleUrls: ['./create-dier.component.css']
})
export class CreateDierComponent implements OnInit {

  KooiIds : number[] = [0,1,2];
  CurrentKooi : number = 1;
  CurrentkooiOpp : number;
  CurrentkooiVoeding: String;
  CurrentKooiHabitat : String;
  public DierHolder : RootObject = <any>{};
  Diercreate : String;
  Kooiroot : KooiRoot;
  ERRORVAR : String = "";
  constructor(private ZooSvc: zooservice,private _location: Location) 
  {
    
    this.KooiIds.splice(0,this.KooiIds.length);
    this.ZooSvc.getKooiDataList("/","/","/",0,100).subscribe((result) => {
     
      for(let i = 0; i < result.length;i++)
      {
        this.KooiIds[i] = result[i].kooiID;
        if(i+1 == this.CurrentKooi)
        {
          this.CurrentKooiHabitat = result[i].kooiHabitatsoort;
          this.CurrentkooiOpp = result[i].kooiOppervlakte;
          this.CurrentkooiVoeding = result[i].kooiVoeding;
        }
        console.log(this.KooiIds[i]);
      }
      


      
    })
   

  }


  NaamVeld : String = "";
  LeeftijdVeld : number= 0;
  GeslachtVeld : String = "";
  SoortVeld : String = "";
  SpecificVeld : String = "";
  AfkomstVeld: String ="";
  GewichtVeld : number =0;
  VoedingVeld : String ="";
  OmschrijvingsVeld : String="";


  ngOnInit() {
  }
  getspecificdata()
{
  this.ZooSvc.getSpecificKooi(this.CurrentKooi).subscribe((result) => {
     
    
        
        this.CurrentKooiHabitat = result.kooiHabitatsoort;
        this.CurrentkooiOpp = result.kooiOppervlakte;
        this.CurrentkooiVoeding = result.kooiVoeding;

        console.log(this.CurrentKooiHabitat);
    console.log(this.CurrentkooiOpp);
    console.log(this.CurrentkooiVoeding);
      
     
    } )
}
Getdata()
{
  this.ZooSvc.getKooiDataList("/","/","/",0,500000).subscribe((result) => {
     
    for(let i = 0; i < result.length;i++)
    {
     
      if(i+1 == this.CurrentKooi)
      {
        this.Kooiroot = result[i];
        this.CurrentKooiHabitat = result[i].kooiHabitatsoort;
        this.CurrentkooiOpp = result[i].kooiOppervlakte;
        this.CurrentkooiVoeding = result[i].kooiVoeding;
      }
     
    }
    console.log(this.CurrentKooiHabitat);
    console.log(this.CurrentkooiOpp);
    console.log(this.CurrentkooiVoeding);

    


    
  })
}

  onChangeSelection()
  {
    console.log(this.CurrentKooi);
   
    this.getspecificdata();
  }
  SubmitBttnClick()
  {
    
    
    this.DierHolder.dierAfkomst = this.AfkomstVeld;
    this.DierHolder.dierGewicht = this.GewichtVeld;
    this.DierHolder.dierLeeftijd = this.LeeftijdVeld;
    this.DierHolder.dierGeslacht = this.GeslachtVeld;
    this.DierHolder.dierNaam = this.NaamVeld;
    this.DierHolder.dierSoort = this.SoortVeld;
    this.DierHolder.dierSoortSpecifieker = this.SpecificVeld;
    this.DierHolder.dierOmschrijving = this.OmschrijvingsVeld;
    this.DierHolder.dierKooiId = this.CurrentKooi;
    this.DierHolder.dierVoeding = this.VoedingVeld;
  
    this.ZooSvc.Createdier(this.DierHolder).
    subscribe(

      data=>
      {
          
          if(data != null)
          {
            
            this.Diercreate = data.dierNaam;
            this._location.back();


          }
          
      }
      
      );
   }
  
    
   
  
}
