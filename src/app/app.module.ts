import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { PersonComponent } from './components/person/person.component';

import { MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule} from '@angular/material/list';
import { MatDividerModule} from '@angular/material/divider';
import { MatInputModule} from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonWindowComponent } from './components/person-window/person-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    PersonComponent,
    ChatHistoryComponent,
    PersonWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
