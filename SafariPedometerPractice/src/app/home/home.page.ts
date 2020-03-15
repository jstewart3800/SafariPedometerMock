import { Component } from '@angular/core';
import { Pedometer, IPedometerData } from '@ionic-native/pedometer/ngx';

@Component({
     selector: 'app-home',
     templateUrl: 'home.page.html',
     styleUrls: ['home.page.scss'],
})
export class HomePage {

     successHandler = function (pedometerData) {
          // pedometerData.startDate; -> ms since 1970
          // pedometerData.endDate; -> ms since 1970
          // pedometerData.numberOfSteps;
          // pedometerData.distance;
          // pedometerData.floorsAscended;
          // pedometerData.floorsDescended;
     };

     constructor(public pedometer: Pedometer) {
          this.pedo2();
     }

     pedo2() {
          this.pedometer.startPedometerUpdates()
               .subscribe((data: IPedometerData) => {
                    console.log(data.numberOfSteps);
                    if(data.numberOfSteps === 15)
                    {
                         alert("You have taken 15 steps!");
                    }
               });
     }


}
