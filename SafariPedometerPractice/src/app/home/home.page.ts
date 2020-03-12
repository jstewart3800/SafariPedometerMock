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
          pedometerData.numberOfSteps;
          // pedometerData.distance;
          // pedometerData.floorsAscended;
          // pedometerData.floorsDescended;
     };

     constructor(public pedometer: Pedometer) { }

     pedo2() {
          Pedometer.startPedometerUpdates(this.successHandler, onerror)
               .subscribe((data: IPedometerData) => {
                    console.log(data);
               });
     }


}
