import { Component, OnInit } from '@angular/core';
import {zooservice,RootObject,KooiRoot,DierKooi} from 'src/app/services/zooservice'
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { AuthService } from '../services/Authenticationservice';
import { TokenType } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-dieren',
  templateUrl: './dieren.component.html',
  styleUrls: ['./dieren.component.css']
})
export class DierenComponent implements OnInit {

  ShowData : String;
  SearchParameter : String = "";
  CurrentFilter : String = "Geen";
  CurrentSort : String = "ID";
  SortOptionList : String[] = ["ID","Naam","Leeftijd","Gewicht","Kooi"];
  FilterOptionList : String[] = ["Geen","Naam","Voeding","Soort","Specifiek soort","Kooi"];
  ShowAantal : number = 3;
  Currentpage : number = 1;
  Totallength : number = 0;;
  showAantaloptions : number[] = [3,5,10]

  Dieren : RootObject[] = <any>[];
  constructor(private ZooSvc: zooservice,private AS:AuthService,private router: Router) { }

  ngOnInit() {
  }

  prev()
  {
    console.log(this.Currentpage)
    if(this.Currentpage > 1)
    {
      this.Currentpage -=1;
      this.ClearData();

      this.getdata();
    }
  }
  next()
  {
    if(this.Totallength == 0)
    {
      window.alert("laatste pagina bereikt!")

    }
    else
    {
      this.Currentpage +=1;
      this.ClearData();

      this.getdata();
    }
      
    
  }
  onChangeSelection()
  {
    this.ClearData();
    this.getdata();
  }
  getdata()
  {
    this.ZooSvc.getDierDataList(this.SearchParameter,this.CurrentSort,this.CurrentFilter,this.Currentpage-1,this.ShowAantal).subscribe((result) =>{
      this.Totallength =  result.length;
      if(this.Totallength == 0 && this.Currentpage == 1)
      {
        window.alert("Geen dieren gevonden! Maak er 1 aan!")
      }
      
      else
      {
        if(this.Totallength == 0)
        {
      
        window.alert("laatste pagina bereikt!")
        
        }
        else
        {
          for(let i = 0; i < result.length;i++)
          {

            this.ShowData = " ";     
            console.log(result[i]);
            this.Dieren[i] = result[i];
          }
        }
        
      }
      })
      
  }




  ClickSubmitDieren()
  {
    console.log("Acces T : " + this.AS.accessToken);
    console.log("ID T : " + this.AS.idToken);
    this.ClearData()
    
    this.getdata();
     

  }
  DeleteClick(Diernummer : number)
  {
    console.log(Diernummer);
    console.log(this.Dieren[Diernummer].dierID);
    
    this.ZooSvc.Removedier(this.Dieren[Diernummer].dierID).subscribe();
    this.Dieren.splice(Diernummer,1);
    
    
    
    }
    ClearData()
    {
      this.Dieren.splice(0,this.Dieren.length);
    }

}
