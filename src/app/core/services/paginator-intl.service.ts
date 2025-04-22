import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginatorIntlService extends MatPaginatorIntl {
  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `Showing 00-00 of ${this.pad(length)}`;
    }

    const startIndex = page * pageSize;
    const endIndex = Math.min(startIndex + pageSize, length);

    return `Showing ${this.pad(startIndex + 1)}-${this.pad(endIndex)} of ${this.pad(length)}`;
  };

  private pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
