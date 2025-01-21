import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service available globally
})
export class ModalService {
  // Private BehaviorSubject to hold the current product data for the modal
  private readonly productSource = new BehaviorSubject<any>(null);

  // Observable that allows components to subscribe to changes in the product data
  currentProduct = this.productSource.asObservable();

  constructor() {}

  /**
   * Opens the modal and sets the product data to be displayed in the modal.
   * 
   * @param product - The product to be shown in the modal.
   * The `product` should be a valid object representing the product data. If the product is invalid,
   * the modal will still open, but the display will not contain the expected information.
   */
  openModal(product: any) {
    if (product && this.isValidProduct(product)) {
      this.productSource.next(product);  // Pass the product data to the modal
    } else {
      console.error("Invalid product data passed to openModal:", product);
      this.productSource.next(null); // Ensure modal closes if product data is invalid
    }
  }

  /**
   * Closes the modal by resetting the product data.
   * This effectively "clears" the modal content.
   */
  closeModal() {
    this.productSource.next(null);  // Set the product data to null to close the modal
  }

  /**
   * Validates the product data.
   * This is a helper function to ensure the passed product has the expected properties.
   * 
   * @param product - The product object to validate.
   * @returns `true` if the product is valid, otherwise `false`.
   */
  private isValidProduct(product: any): boolean {
    // Check if the product has the required properties
    if (!product || typeof product !== 'object') {
      console.error("Invalid product: Product is not an object or is null.");
      return false;
    }

    // Ensure the product has a title, price, and image (you can extend this validation as needed)
    if (!product.title || !product.price || !product.image) {
      console.error("Invalid product: Missing essential properties (title, price, or image).", product);
      return false;
    }

    return true;  // The product is valid
  }
}
