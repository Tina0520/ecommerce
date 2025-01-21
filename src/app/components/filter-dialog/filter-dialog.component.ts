import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
})
export class FilterDialogComponent {
  // Filter properties
  selectedCategory: string = '';
  priceRange = { min: 0, max: 1000 };
  selectedSort: string = 'price-low-to-high';
  categories: string[] = ["Men's Clothing", "Jewelery", "Electronics","Women's Clothing"]; // Example categories

  // Visibility state of the dialog
  @Input() isDialogVisible: boolean = false;

  @Output() applyFilters = new EventEmitter<any>(); // Event emitter to send filters to parent

  @Output() closeDialogEmit = new EventEmitter<any>(); // Event emitter to send filters to parent

  // Function to close the dialog
  closeDialog() {
    this.isDialogVisible = false;
    this.closeDialogEmit.emit()
  }

  // Function to apply the filters (emit the selected filters to parent component)
  filterProducts() {
    this.applyFilters.emit({
      selectedCategory: this.selectedCategory,
      priceRange: this.priceRange,
      selectedSort: this.selectedSort,
    });
  }
}
