import { Component, OnInit } from '@angular/core';
import { MarvelService, RootObject, Data,Item,Item2,Item3,Item4,Thumbnail,Comics,Result,Series,Stories,Events,Url} from '../services/marvel.service';

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

  IDS : number[] = [0,1,2,3,4,5,6,7,8,9] ;
  names : string[];
  comics : string[];
  series : string[];
  stories : string[];
  comicaantal : number;
  serieaantal : number;
  storyaantal : number;


  constructor(private svc : MarvelService) { }

  ngOnInit() {
    this.names = ["/"];
    this.stories = ["/"];
    this.comics=["/"];
    this.series = ["/"];
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

 
  Getspecific(name : string)
  {
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
          console.log(name);
          
          

          //Comics
        
          for(let i = 0; i < result.data.results[0].comics.returned;i++)
          {
            this.comics[i] =  result.data.results[0].comics.items[i].name;
           
          }
          
          this.comicaantal =  result.data.results[0].comics.available;


          //Series
         
          for(let i = 0; i <  result.data.results[0].series.returned;i++)
          {
            this.series[i] =  result.data.results[0].series.items[i].name;
           

          }

          this.serieaantal =  result.data.results[0].series.available;



          //Stories
          
          for(let i = 0; i <  result.data.results[0].stories.returned;i++)
          {
            this.stories[i] =  result.data.results[0].series.items[i].name;
            

          }

          this.storyaantal =  result.data.results[0].stories.available;
          
        });
        
        
      
    
  }

  doSearch(Hero : string)
  {
    for(let i = 0; i < 10;i++)
    {
    this.names[i] = "";
   
    }
      this.svc.getData(Hero).subscribe((result)=> {
        this.Data = result;
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


