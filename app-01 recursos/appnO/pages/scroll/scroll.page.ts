import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})

export class ScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  

  dataList:any; 

  ngOnInit() { 
  }

  constructor() {
    this.dataList = [];
    
    for (let i = 0; i < 12; i++) { 
      this.dataList.push("Item number "+this.dataList.length);
    }
  }


  loadData(event) {
    
    setTimeout(() => {
       for (let i = 0; i < 12; i++) { 
        this.dataList.push("Item number "+this.dataList.length);
        //añadimos a traves de un for
      }
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}