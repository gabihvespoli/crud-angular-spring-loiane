import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Front':
        return 'code';
      case 'Back':
        return 'computer';
    }
    return 'code';
  }
}
