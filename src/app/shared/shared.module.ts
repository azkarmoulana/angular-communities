import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
<<<<<<< HEAD
import { MatTreeModule } from '@angular/material/tree';
=======
import { MatAutocompleteModule } from '@angular/material/autocomplete';
>>>>>>> feat/search-community
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const CORE_MODULES = [BrowserAnimationsModule, CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [FooterComponent, HeaderComponent];

const MATERIAL_MODULES = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatGridListModule,
  MatSidenavModule,
  MatAutocompleteModule,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [MATERIAL_MODULES, CORE_MODULES],
  exports: [COMPONENTS, MATERIAL_MODULES, CORE_MODULES],
})
export class SharedModule {}
