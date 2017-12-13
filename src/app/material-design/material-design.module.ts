import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatStepperModule,MatCheckboxModule,MatSidenavModule,MatListModule,MatNativeDateModule,
  MatFormFieldModule,MatMenuModule } from '@angular/material';

@NgModule({
  imports:
    [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,MatIconModule, MatStepperModule,MatCheckboxModule,MatSidenavModule,MatListModule,
      MatNativeDateModule,MatFormFieldModule,MatMenuModule],
  exports:
    [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,MatIconModule, MatStepperModule,MatCheckboxModule,MatSidenavModule,MatListModule,
      MatNativeDateModule,MatFormFieldModule,MatMenuModule],
  declarations: []
})

export class MaterialDesignModule { }