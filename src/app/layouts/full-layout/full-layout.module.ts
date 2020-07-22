import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './full-layout.component';
import { RouterModule } from '@angular/router';
 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullLayoutRoutes } from './full-layout.routing';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { About_usService } from 'app/services/about_us.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FullLayoutRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  providers:[
    About_usService
  ],
  declarations: [NotificationsComponent]
})
export class FullLayoutModule { }
