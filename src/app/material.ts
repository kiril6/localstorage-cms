import {
     MatCheckboxModule,
     MatButtonModule,
     MatToolbarModule,
     MatProgressBarModule,

} from '@angular/material/';

import { NgModule } from '@angular/core';

@NgModule({
     imports: [MatButtonModule,
          MatCheckboxModule,
          MatToolbarModule,
          MatProgressBarModule,

     ],
     exports: [MatButtonModule,
          MatCheckboxModule,
          MatToolbarModule,
          MatProgressBarModule,

     ],
})
export class MaterialModule { }
