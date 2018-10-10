import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolMenuComponent } from './components/tool-menu/tool-menu.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolMenuComponent, TreeNodeComponent]
})
export class SharedModule { }
