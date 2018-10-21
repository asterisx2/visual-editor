import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolMenuComponent } from './components/tool-menu/tool-menu.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolMenuComponent, TreeNodeComponent, PreviewComponent]
})
export class SharedModule { }
