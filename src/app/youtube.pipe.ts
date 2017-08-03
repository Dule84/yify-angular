import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
@Injectable()
export class YoutubePipe implements PipeTransform {

  constructor(private dom: DomSanitizer) {}

  transform(value: string, args?: any): any {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
