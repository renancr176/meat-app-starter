import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './about.routes';

//#region Components
import { AboutComponent } from './about.component';
//#endregion

@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class AboutModule { }
