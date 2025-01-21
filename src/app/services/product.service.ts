import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; // Import catchError to handle errors

@Injectable({
  providedIn: 'root', // This ensures the service is available throughout the app
})
export class ProductService {
  // API URL to fetch product data
  private readonly apiUrl = 'https://fakestoreapi.com/products'; // Example API URL

  constructor(private readonly http: HttpClient) {}

  /**
   * Fetches the list of products from the API.
   * 
   * @returns An Observable array of products. Each product is of type `any`.
   * The caller can subscribe to this Observable to receive the product data.
   */
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /**
   * Handles errors when making an HTTP request.
   * This method logs the error and returns an observable with an error message.
   * 
   * @param error - The error response object
   * @returns An observable containing the error message
   */
  private handleError(error: any): Observable<never> {
    // Log the error to the console (you could replace this with a logging service)
    console.error('An error occurred:', error);

    // Return an observable with a user-friendly error message
    return throwError(() => new Error('Failed to fetch product data. Please try again later.'));
  }
}
