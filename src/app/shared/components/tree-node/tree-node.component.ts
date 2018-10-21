import { Component, OnInit, Input } from '@angular/core';
import { TagNode } from 'src/app/core/models/shared/tag-node.model';
import { EditorService } from 'src/app/core/services/editor.service';
import { Class, TagName } from 'src/app/core/models/shared/drag-data.model';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  @Input()
  public node: TagNode;
  public collapsed = true;
  public nodeImg: string;

  constructor(private service: EditorService) { }

  ngOnInit(): void {
    this.nodeImg = this.service.getNodeImg(this.node);
  }

  public isDragging(): boolean {
    return this.service.isDragging();
  }

  public onDropSucessAddChild(dragData: TagName | Class) {
    if (dragData instanceof TagName) {
      // Update service and add node
      this.service.addChild(new TagNode(dragData.name), this.node.parentIdentifier);
    } else if (dragData instanceof Class) {
      this.node.class.push(dragData.name);
      // Update service and add class
      this.service.addClass(this.node.uniqueIdentifier, dragData.name);
    }
  }

  public onDropSucessSibling(node: TagNode) {
    this.service.addSibling(node, this.node.uniqueIdentifier);
  }
}
