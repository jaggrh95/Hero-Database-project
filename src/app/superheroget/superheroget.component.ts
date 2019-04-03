import { Component, OnInit } from '@angular/core';
import { MarvelService, RootObject,RootObjectC} from '../services/marvel.service';

@Component({
  selector: 'app-superheroget',
  templateUrl: './superheroget.component.html',
  styleUrls: ['./superheroget.component.css']
})
export class SuperherogetComponent implements OnInit {

  heroname: string;
  Data : RootObject;
  NameChoice : string;
  Description : string;
  id :number;
  FullImage : string;
  IDS : number[] = [0,1,2,3,4,5,6,7,8,9];
  Offset :number[] = [20,0,0];
  COMICurls : string[] = ["","",""];
  max :number[] = [0,0,0];

  names : string[];
  comics : string[];
  series : string[];
  stories : string[];
  comicaantal : number;
  serieaantal : number;
  storyaantal : number;



  constructor(private svc : MarvelService) { }

  ngOnInit() {
    this.names = [""];
    
    this.doSearch(this.heroname);
    
  }
  set HeroName(value: string) {
    this.heroname = value;
    this.doSearch(value);
    
  }


  //als we een setter gebruiken moeten we ook een getter hebben aangezien het 2-way binding betreft
  get HeroName() {
    return this.heroname
  }

  Next20(keuze : number)
  {
    if(this.Offset[keuze]+ 20 > this.max[keuze])
    {
      this.Offset[keuze] = this.max[keuze]-20;
      
    }
    else
    {
      this.Offset[keuze] = this.Offset[keuze]+20;
    }
    this.GetComicimageurls();
  }
  Prev20(keuze : number)
  {
    if(this.Offset[keuze]- 20 <= 0)
    {
        this.Offset[keuze] = 0
    }
    else
    {
      this.Offset[keuze] = this.Offset[keuze]-20;
    }
    this.GetComicimageurls();

  }

 

  
  SetStories()
  {
    for(let i = 0; i <  this.Data.data.results[0].series.returned;i++)
    {
      this.series[i] =  this.Data.data.results[0].series.items[i].name;
     

    }

    this.serieaantal =  this.Data.data.results[0].series.available;
    this.max[1] = this.serieaantal;
  }
  SetSeries()
  {
    for(let i = 0; i <  this.Data.data.results[0].stories.returned;i++)
          {
            this.stories[i] =  this.Data.data.results[0].stories.items[i].name;
            

          }

          this.storyaantal =  this.Data.data.results[0].stories.available;
          this.max[2] = this.storyaantal;
  }

 GetComicimageurls()
 {
    this.svc.GetCharacterComics(this.id,this.Offset[0]).subscribe((result)=>{
      
      this.comicaantal = result.data.total;
      this.max[0] = this.comicaantal;
      for(let i = 0; i <  result.data.results.length;i++)
    {
      this.comics[i]=result.data.results[i].title;
      this.COMICurls[i] = this.svc.GetImage(result.data.results[i].thumbnail.path,result.data.results[i].thumbnail.extension);
     

    }
      
    })
 }
 
  Getspecific(name : string)
  {
    this.stories = [""];
    this.comics=[""];
    this.series = [""];
    for(let i = 0; i < 20;i++)
    {
    this.series[i] = " ";
    this.comics[i] = " ";
    this.stories[i] = " ";
    }
    
    this.comicaantal = 0;
    this.storyaantal = 0;
    this.serieaantal = 0 ;
    this.NameChoice = name;
    for(let i = 0;i < this.IDS.length;i++)
    {
      if(name == this.names[i])
      {
        this.id = this.IDS[i];
      }
    }
    
        this.svc.Getcharacter(this.id).subscribe((result)=>
        {
          this.Description = result.data.results[0].description;
          this.Data = result;

      
          this.FullImage = this.svc.GetImage(result.data.results[0].thumbnail.path,result.data.results[0].thumbnail.extension);
        
          //this.SetComics();

          this.SetSeries();

          this.SetStories();

          this.GetComicimageurls();


        });
        
        

        
        
      
    
  }

  doSearch(Hero : string)
  {
    
      this.svc.getData(Hero).subscribe((result)=> {
        this.Data = result;
        this.names.length = result.data.results.length;
        for(let i = 0; i < this.Data.data.results.length;i++)
        {
          this.names[i] = this.Data.data.results[i].name;
          this.IDS[i] = this.Data.data.results[i].id;
          
        }

        
      },(error) => {
        this.Data = null;
      })
  }

}


