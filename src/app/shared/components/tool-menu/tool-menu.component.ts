import { Component, OnInit } from '@angular/core';
import { ToolMenuGroup } from 'src/app/core/models/default/tool-menu-group.model';
import { SideMenuService } from 'src/app/core/services/side-menu.service';

@Component({
  selector: 'app-tool-menu',
  templateUrl: './tool-menu.component.html',
  styleUrls: ['./tool-menu.component.css']
})
export class ToolMenuComponent implements OnInit {

  public groupItems: ToolMenuGroup[] = [];
  constructor(private sideMenuService: SideMenuService) { }

  ngOnInit() {
    this.loadSideMenu();
  }
  private loadSideMenu(): void {
    this.sideMenuService.getToolMenuGroups().subscribe(tmgs => {
      this.groupItems = tmgs;
    });
  }

}
