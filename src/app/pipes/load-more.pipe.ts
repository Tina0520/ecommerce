import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadMore'
})
export class LoadMorePipe implements PipeTransform {
  transform(data: any, limit:number): any {
    return Array.isArray(data) ? data.slice(0, limit) : [];
  }

}
