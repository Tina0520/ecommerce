import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate' // Name of the pipe that can be used in templates
})
export class TruncatePipe implements PipeTransform {
  /**
   * Transforms the input string by truncating it to the specified length and appending "..." if the string exceeds the limit.
   * 
   * @param value The input string to be truncated.
   * @param limit The maximum length of the string. Default value is 30.
   * @returns The truncated string with an ellipsis ("...") if it exceeds the limit, or the original string if not.
   */
  transform(value: string, limit: number = 30): string {
    // Check if value is provided, if not, return an empty string
    if (!value) return '';

    // If the length of the string is greater than the limit, truncate and append "..."
    // Otherwise, return the original string as it is
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
