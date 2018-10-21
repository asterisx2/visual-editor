import { Injectable } from '@angular/core';
import { ToolMenuGroup } from '../models/default/tool-menu-group.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { nativeElements } from '../models/menu/native-elements.data';
import { components } from '../models/menu/components.data';
import { classes } from '../models/menu/classes.data';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  public getToolMenuGroups(): Observable<{ [key: string]: ToolMenuGroup }> {
    return of({nativeElements, components, classes});
  }
}
