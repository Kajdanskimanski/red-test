import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SearchFacadeService, SearchModule } from '@red-probeaufgabe/search';
import { UiModule } from '@red-probeaufgabe/ui';
import { AbstractSearchFacadeService } from '@red-probeaufgabe/search';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, UiModule, SearchModule, DashboardRoutingModule],

  // weil AbstractSearchFacadeService eine abstrakte Klasse hat kann es nicht direkt eingebunden werden. Ich muss den Service searchFacade genau einbinden um ihn zu nutzen. 
  providers: [{
    provide: AbstractSearchFacadeService,
    useClass: SearchFacadeService
  }

  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
