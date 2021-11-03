import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableCrudEstabelecimento } from './components/table-crud-estabelecimentos/table-crud-estabelecimentos.component';
import { TableCrudProfissional } from './components/table-crud-profissionais/table-crud-profissionais.component';
import { EstabelecimentoService } from './services/estabelecimentos.service';
import { ProfissionalService } from './services/profissionais.service';

@NgModule({
  declarations: [
    AppComponent,
    TableCrudProfissional,
    ButtonsComponent,
    SliderComponent,
    TableCrudEstabelecimento,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    ConfirmDialogModule,
    InputNumberModule,
    FormsModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    BrowserAnimationsModule,
    CalendarModule,
    ContextMenuModule,
    DropdownModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule,
    MultiSelectModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    CascadeSelectModule,
    ListboxModule,
    DropdownModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
  ],
  providers: [ProfissionalService, EstabelecimentoService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
