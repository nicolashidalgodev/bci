import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule} from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion'

@NgModule({
  imports:[
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  exports:[
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatExpansionModule
  ]
})
export class MaterialModule{

}
