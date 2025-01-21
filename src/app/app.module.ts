import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Core module for browser-related services
import { AppRoutingModule } from './app-routing.module'; // Handles application routing
import { AppComponent } from './app.component'; // Root component of the app
import { ProductModalComponent } from './components/product-modal/product-modal.component'; // Modal component for product details
import { ProductItemComponent } from './components/product-item/product-item.component'; // Displays individual product
import { ProductListComponent } from './components/product-list/product-list.component'; // Displays the list of products

// Angular Material Modules
import { MatCardModule } from '@angular/material/card'; // For material card components
import { MatDialogModule } from '@angular/material/dialog'; // For modal dialogs
import { MatButtonModule } from '@angular/material/button'; // For material buttons
import { MatOptionModule } from '@angular/material/core'; // For material option elements in select dropdowns
import { MatSelectModule } from '@angular/material/select'; // For material select dropdowns
import { MatSliderModule } from '@angular/material/slider'; // For material sliders
import { MatIconModule } from '@angular/material/icon'; // For material icons

// Angular Common Modules
import { CommonModule } from '@angular/common'; // Provides common Angular directives like ngIf, ngFor
import { FormsModule } from '@angular/forms'; // For two-way data binding in templates
import { HttpClientModule } from '@angular/common/http';
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import { LoadMorePipe } from './pipes/load-more.pipe'; // For making HTTP requests
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    // Declare components, directives, and pipes here
    AppComponent, // Root component
    ProductModalComponent, // Modal component for product details
    ProductItemComponent, // Individual product display
    ProductListComponent, // List of products
    TruncatePipe, FilterDialogComponent, LoadMorePipe // Custom pipe to truncate text
  ],
  imports: [
    // Import necessary Angular modules and third-party modules here
    BrowserModule, // Required for bootstrapping the app in the browser
    CommonModule, // Provides common Angular directives like ngIf, ngFor
    AppRoutingModule, // App routing configuration
    FormsModule, // Enables template-driven forms and two-way data binding
    HttpClientModule, // Required for making HTTP requests to external APIs

    // Grouping Angular Material imports together for clarity
    MatCardModule, // Material card for wrapping content
    MatDialogModule, // Material dialog for showing modals
    MatButtonModule, // Material buttons
    MatOptionModule, // Material options for select dropdowns
    MatSelectModule, // Material select dropdown
    MatSliderModule, // Material slider
    MatIconModule, // Material icons
  ],
  providers: [], // Services or providers to be injected in the app (none for now)
  bootstrap: [AppComponent] // Root component to bootstrap the app
})
export class AppModule { }

