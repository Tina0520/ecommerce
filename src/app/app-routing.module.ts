import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define application routes here
  // For example:
  // { path: 'home', component: HomeComponent },
  // { path: 'product/:id', component: ProductDetailComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    // Importing RouterModule and configuring routes for the application
    // Using RouterModule.forRoot() to set up the routes for the app
    RouterModule.forRoot(routes, {
      // Enabling error handling for invalid routes
      useHash: false, // Use hash-based routing (if true) or HTML5 history API (default is false)
      scrollPositionRestoration: 'enabled', // Scroll position is restored when navigating between routes
      // Other options like `enableTracing` can be added here to help with debugging
      // enableTracing: true  // Uncomment to enable tracing of route changes in the console
    })
  ],
  exports: [
    // Export RouterModule to make router directives (like `routerLink`) available in templates
    RouterModule
  ]
})
export class AppRoutingModule {
  // The AppRoutingModule class doesn't require additional logic or error handling
  // Angular automatically handles routing errors internally (e.g., if a route is not found)
  // You can add a wildcard route for 404 handling (e.g., for invalid routes)
}
