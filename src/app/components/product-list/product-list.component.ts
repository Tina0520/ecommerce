import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'; // Service for fetching product data
import { ModalService } from '../../services/modal.service'; // Service for opening modals

@Component({
  selector: 'app-product-list',  // Selector for the component
  templateUrl: './product-list.component.html',  // Template file for the component
  styleUrls: ['./product-list.component.scss']  // Style file for the component
})
export class ProductListComponent implements OnInit {
  // Declare the required state variables for product listing
  products: any[] = [];  // All products fetched from the API
  filteredProducts: Array<any> = [];  // Products after filtering (category & price)
  categories: string[] = [];  // Available categories for filtering
  priceRange: { min: number, max: number } = { min: 0, max: 1000 };  // Default price range for filtering
  selectedCategory: string = '';  // Selected category for filtering
  selectedSort: string = 'price-low-to-high';  // Default sorting method (low to high price)
  isLoading: boolean = true;  // Loading state flag
  isError: boolean = false;  // Error state flag

  constructor(
    private readonly productService: ProductService,  // Inject product service to fetch products
    private readonly modalService: ModalService  // Inject modal service to handle modal display
  ) {}

  // Function to open the filter dialog
  isDialogVisible:boolean=false;

  dataNumberToShow:number =0;

  ngOnInit(): void {
    // On component initialization, fetch the product data
    this.loadProducts();
  }

  /**
   * Fetch products from the ProductService and handle the success and error cases.
   * This method updates the `products` and `filteredProducts` arrays, and sets the `isLoading` flag.
   */
  loadProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        // Successfully fetched products
        this.products = data;
        this.filteredProducts = data;  // Initially, show all products
        this.extractCategories(data);  // Extract unique categories for filtering
        this.isLoading = false;  // Set loading to false when data is fetched
        this.dataNumberToShow = 10;
      },
      (error) => {
        // Handle error case when fetching products
        this.isError = true;  // Set error flag to true
        this.isLoading = false;  // Set loading to false after an error occurs
        console.error('Error loading products:', error);  // Log the error for debugging
        // Optionally, show a user-friendly message or notification
      }
    );
  }

  /**
   * Extract unique categories from the product list to display in the filter dropdown.
   * This function ensures that categories are distinct.
   * 
   * @param products The list of products fetched from the API
   */
  extractCategories(products: any[]) {
    this.categories = Array.from(new Set(products.map((product) => product.category)));
  }

  /**
   * Filter the products based on the selected category and price range.
   * After filtering, it will call the `sortProducts` method to apply sorting.
   */
  filterProducts(event:any) {
    try {
      // Filter products by category and price range
      this.filteredProducts = this.products.filter((product) => {
        // Category filter: If a category is selected, filter by category, otherwise allow all categories
        const isCategoryMatch = event.selectedCategory ? product.category.toLowerCase() === event.selectedCategory.toLowerCase() : true;
        
        // Price range filter: Check if the product's price is within the selected range
        const isPriceMatch = product.price >= event.priceRange.min && product.price <= event.priceRange.max;
        
        return isCategoryMatch && isPriceMatch;  // Return true if both filters match
      });

      // After filtering, sort the products according to the selected sorting method
      this.sortProducts(event);
    } catch (error) {
      // Handle any error that occurs during filtering
      console.error('Error during filtering products:', error);
      // Optionally, show a user-friendly notification about the error
    }
  }

  /**
   * Sort the products based on the selected sorting method.
   * This method supports sorting by price (low to high, high to low).
   */
  sortProducts(event:any) {
    try {
      switch (event.selectedSort) {
        case 'price-low-to-high':
          // Sort by price from low to high
          this.filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high-to-low':
          // Sort by price from high to low
          this.filteredProducts.sort((a, b) => b.price - a.price);
          break;
        default:
          // Default: No sorting applied
          break;
      }
    } catch (error) {
      // Handle errors during the sorting process
      console.error('Error during sorting products:', error);
      // Optionally, show a user-friendly notification about the error
    }
  }

  /**
   * Open the product details modal when the user clicks on a product.
   * This method triggers the modal service to display the details of the selected product.
   * 
   * @param product The product whose details are to be shown
   */
  viewDetails(product: any) {
    try {
      // Open the modal with the selected product
      this.modalService.openModal(product);
    } catch (error) {
      // Handle any errors that occur while opening the modal
      console.error('Error opening product details modal:', error);
      // Optionally, show a user-friendly notification about the error
    }
  }
}
