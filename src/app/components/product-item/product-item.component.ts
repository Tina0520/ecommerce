import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';  // Import the Product model for type safety
import { ModalService } from 'src/app/services/modal.service';  // Import the ModalService for managing modals

@Component({
  selector: 'app-product-item',  // This component can be used as <app-product-item> in templates
  templateUrl: './product-item.component.html',  // Template for this component
  styleUrls: ['./product-item.component.scss']  // Styles for this component
})
export class ProductItemComponent {
  // Define the input property to receive product data from the parent component
  @Input() product: Product | undefined;

  constructor(private readonly modalService: ModalService) {}

  /**
   * Method to handle viewing the product details.
   * This opens a modal and passes the selected product data to the modal service.
   * 
   * @param product The product that the user wants to view details of.
   */
  viewDetails(product: Product): void {
    try {
      // Check if the product data is valid before opening the modal
      if (!product) {
        throw new Error('Product data is missing.');
      }
      
      // Open the modal and pass the product data to it
      this.modalService.openModal(product);
      console.log('Product details modal opened:', product);  // Log to track modal usage
    } catch (error:any) {
      // Handle any errors that occur when trying to view product details
      console.error('Error opening product details modal:', error.message);
      // Optionally, you could display a user-friendly message in the UI here (e.g., using a notification service)
    }
  }
}
