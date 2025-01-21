/**
 * Interface representing a product.
 * This interface is used to define the structure of a product object.
 */
export interface Product {
  /**
   * Unique identifier for the product.
   * @example 1
   */
  id: number;

  /**
   * Title or name of the product.
   * This could be a short description of the product.
   * @example "Wireless Mouse"
   */
  title: string;

  /**
   * Price of the product.
   * The price is expected to be in the base currency (e.g., USD).
   * @example 29.99
   */
  price: number;

  /**
   * Description of the product.
   * This field provides detailed information about the product's features and specifications.
   * @example "A wireless mouse with ergonomic design and long battery life."
   */
  description: string;

  /**
   * Category of the product.
   * This represents the category or type to which the product belongs (e.g., electronics, fashion, etc.).
   * @example "Electronics"
   */
  category: string;

  /**
   * Image URL of the product.
   * This URL points to the image file that represents the product.
   * @example "https://example.com/image.jpg"
   */
  image: string;

  /**
   * Rating of the product.
   * This contains information about the product's rating (from 1 to 5 stars) and the number of reviews.
   */
  rating: {
    /**
     * The average rating for the product.
     * A number between 1 and 5, representing the average score given by customers.
     * @example 4.5
     */
    rate: number;

    /**
     * The total number of ratings or reviews for the product.
     * This indicates how many people have rated the product.
     * @example 100
     */
    count: number;
  };
}
