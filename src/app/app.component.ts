import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selectedFeature = 'recipe';

  onNavigate(feature: string) {
    this.selectedFeature = feature;
  }
}
