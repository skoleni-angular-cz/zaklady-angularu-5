import {Pipe, PipeTransform} from '@angular/core';

export enum FileSizeUnit {
  B = 1,
  KB = 2,
  MB = 3,
  GB = 4,
}

const fileSizeUnitLabels = {
  [String(FileSizeUnit.B)]: 'B',
  [String(FileSizeUnit.KB)]: 'kB',
  [String(FileSizeUnit.MB)]: 'MB',
  [String(FileSizeUnit.GB)]: 'GB',
};

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {

  transform(bytesValue: string | number): string {
    const isString = typeof bytesValue === 'string';
    const fileSize = isString ? parseInt(bytesValue as string, 10) : bytesValue as number;
    return this.convertUnitSize(fileSize);
  }

  private convertUnitSize(val: number): string {
    if (val == null) return '';
    let sizeUnit: number;
    if (val < Math.pow(1024, FileSizeUnit.B)) {
      sizeUnit = FileSizeUnit.B;
    } else if (val < Math.pow(1024, FileSizeUnit.KB)) {
      sizeUnit = FileSizeUnit.KB;
    } else if (val < Math.pow(1024, FileSizeUnit.MB)) {
      sizeUnit = FileSizeUnit.MB;
    } else {
      sizeUnit = FileSizeUnit.GB;
    }

    const transformedQuantity = this.transformFileSize(val, sizeUnit);

    return `${Number(transformedQuantity.toFixed(2)).toLocaleString()} ${fileSizeUnitLabels[String(sizeUnit)]}`;
  }

  private transformFileSize(value: number, unit: FileSizeUnit): number {
    return value / Math.pow(1024, unit - 1);
  }

}
