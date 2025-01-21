// src/app/components/product-modal/product-modal.component.ts
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  // Holds the product data passed from the modal service
  product: any = null;

  // Flag to control the visibility of the modal
  isModalVisible: boolean = false;

  // Flag to manage error state if something goes wrong with the product data
  isError: boolean = false;

  // Inject the modal service to receive product data and handle modal actions
  constructor(private readonly modalService: ModalService) {}

  ngOnInit(): void {
    // Subscribe to the modal service to receive the current product data
    this.modalService.currentProduct.subscribe(
      (product) => {
        // If a valid product is received, set product data and show the modal
        if (product) {
          this.product = product;
          this.isModalVisible = true;
          this.isError = false; // Reset error flag when product is successfully loaded
        } else {
          // If product is null or undefined, hide the modal and reset error flag
          this.isModalVisible = false;
          this.isError = false; // Reset any existing error state
        }
      },
      (error) => {
        // Handle error if the subscription fails
        console.error('Error loading product data:', error);
        this.isError = true; // Set error flag when an error occurs
        this.isModalVisible = false; // Close the modal if there's an error
      }
    );
  }

  // Close the modal by calling the closeModal method from the modal service
  closeModal(): void {
    try {
      this.modalService.closeModal();
    } catch (error) {
      // Catch any errors while closing the modal and log it
      console.error('Error closing modal:', error);
    }
  }
}
