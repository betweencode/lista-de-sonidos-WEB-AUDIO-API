import { Component, OnInit } from '@angular/core';
import { sonido,listas } from './archivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'listasonidos';
  
  public listas:Array<sonido> = listas;
  private audio = new Audio();


  constructor(){

  }
  ngOnInit(): void {
      
    
  }


  public reproduciondosonido(item:sonido){
      this.audio.src = item.playlist;
      
      
      if(item.reproduciendo){
          this.audio.pause();
          item.reproduciendo = false;
      }else{
        for(let item of this.listas){
          item.reproduciendo = false;
      }
        this.audio.play();
        item.reproduciendo = true;
        setTimeout(() => {
          item.reproduciendo = false;
        },item.tiempo);
      }
      

      // let audiobyHtml = document.createElement("audio");
      // audiobyHtml.src = item.playlist;
      // audiobyHtml.play();
  }


  public eliminandoElemento(indice:number){
     this.listas.splice(indice,1);
  }

  

  
}
