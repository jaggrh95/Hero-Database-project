import { Component, OnInit } from '@angular/core';
import { RootObject,KooiRoot,DierKooi,zooservice } from '../services/zooservice';
import { Router } from '@angular/router';
import { AuthService } from '../services/Authenticationservice';

@Component({
  selector: 'app-kooien',
  templateUrl: './kooien.component.html',
  styleUrls: ['./kooien.component.css']
})
export class KooienComponent implements OnInit {

  ShowData : String;
  SearchParameter : String = "";
  CurrentFilter : String = "Geen";
  CurrentSort : String = "ID";
  SortOptionList : String[] = ["ID","Oppervlakte","Voeding","Habitat"];
  FilterOptionList : String[] = ["Geen","Oppervlakte","Voeding","Habitat","Omheining"];
  ShowAantal : number = 3;
  Currentpage : number = 1;
  Totallength : number = 0;;
  showAantaloptions : number[] = [3,5,10]

  Kooien : KooiRoot[] = <any>[];
  constructor(private ZooSvc: zooservice,private router: Router, private AS : AuthService) { }

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
    console.log(this.SearchParameter);
    this.ZooSvc.getKooiDataList(this.SearchParameter,this.CurrentSort,this.CurrentFilter,this.Currentpage-1,this.ShowAantal).subscribe((result) =>{
        
      this.Totallength =  result.length;
      if(this.Totallength == 0 && this.Currentpage == 1)
      {
        window.alert("Geen Kooien gevonden! Maak er 1 aan!")
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
        this.Kooien[i] = result[i];
        console.log(this.Kooien[i].kooiOppervlakte);
      }
    }
      }
      })
      
  }




  ClickSubmitDieren()
  {
    this.ClearData()
    
    this.getdata();
     

  }
  DeleteClick(Kooinummer : number)
  {
    
    this.ZooSvc.RemoveKooi(this.Kooien[Kooinummer].kooiID).subscribe();
    this.Kooien.splice(Kooinummer,1);
    
    }
    ClearData()
    {
      this.Kooien.splice(0,this.Kooien.length);
    }

}
