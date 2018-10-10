import { Injectable } from '@angular/core';
import { TagNode } from 'src/app/core/models/shared/tag-node.model';
import { Attribute } from 'src/app/core/models/shared/attribute.model';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private dragging = false;

  private rootTree: TagNode[];

  public subscribers: Function[];

  private hashMap: { [key: number]: TagNode };

  public lastUniqueIdentifier = 0;

  public getHashMap(): { [key: number]: TagNode } {
    return this.hashMap;
  }

  public isDragging(): boolean {
    return this.dragging;
  }

  public setDragging(value: boolean): void {
    this.dragging = value;
  }

  // This needs to be optimized to a binary tree or a ordered heap
  public addChild(node: TagNode, parentIdentifier: number, nodes: TagNode[] = this.rootTree): boolean {
    if (!!this.hashMap[parentIdentifier]) {
      // New node
      if (!!node.parentIdentifier) {
        // Add parent identifer to the new node
        node.parentIdentifier = parentIdentifier;
        // Add new node to the end of parent
        this.hashMap[parentIdentifier].children.push(node);

        // Increment unique identifer
        this.lastUniqueIdentifier++;

        // Add to hashmap for quick access
        this.hashMap[this.lastUniqueIdentifier] = node;
        return true;
      } else {
        // Moved from some other node
        // Not a good idea, use immutable js


        // Remove from current parent
        this.hashMap[node.parentIdentifier].children =
          this.hashMap[node.parentIdentifier].children.filter(tg => tg.uniqueIdentifier !== node.uniqueIdentifier);

        // Assign new parent
        node.parentIdentifier = parentIdentifier;

        // Add to new parent
        this.hashMap[parentIdentifier].children.push(node);
        return true;
      }
    } else {
      return false;
    }
  }

  public deleteNode(uniqueIdentifier: number, node: TagNode) {
    this.hashMap[uniqueIdentifier] = undefined;

    this.hashMap[node.parentIdentifier].children =
    this.hashMap[node.parentIdentifier].children.filter(tg => tg.uniqueIdentifier !== node.uniqueIdentifier);
  }

  public addSibling(node: TagNode, targetIdentifier: number): boolean {
    if (!!this.hashMap[targetIdentifier] && !!this.hashMap[targetIdentifier] && !!node.parentIdentifier) {
      // Same parent, just a re-arrange
      if (node.parentIdentifier === this.hashMap[targetIdentifier].parentIdentifier) {
        // Find the common parent
        const parentIdentifier = this.hashMap[targetIdentifier].parentIdentifier;

        // Remove current node from its parent
        this.hashMap[parentIdentifier].children =
          this.hashMap[parentIdentifier].children.filter(tg => tg.uniqueIdentifier !== node.uniqueIdentifier);
        // Find the target index, where to put
        const targetIndex = this.hashMap[parentIdentifier].children.findIndex(tg => tg.uniqueIdentifier === targetIdentifier);

        // Add and Shift other elements
        this.hashMap[parentIdentifier].children.splice(targetIndex, 0, node);
        return true;
      } else {

        // Find dropped node's praent
        const parentIdentifier = this.hashMap[node.uniqueIdentifier].parentIdentifier;

        // Remove node from its parent
        this.hashMap[parentIdentifier].children =
          this.hashMap[parentIdentifier].children.filter(tg => tg.uniqueIdentifier !== node.uniqueIdentifier);

        // Find new sibling's parent
        const targetParentIdentifier = this.hashMap[targetIdentifier].parentIdentifier;

        // And index
        const targetIndex = this.hashMap[targetParentIdentifier].children.findIndex(tg => tg.uniqueIdentifier === targetIdentifier);

        // Add and shift
        this.hashMap[targetParentIdentifier].children.splice(targetIndex, 0, node);
        return true;
      }
    }
  }

  public getNodeImg(node: TagNode): string {
    throw new Error('Method not implemented.');
  }

  public addClass(uniqueIdentifier: number, Class: string): any {
    if (this.hashMap[uniqueIdentifier].class.indexOf(Class) <= 0) {
      this.hashMap[uniqueIdentifier].class.push(Class);
    }
  }

  public removeClass(uniqueIdentifier: number, value: string): any {
    this.hashMap[uniqueIdentifier].class = this.hashMap[uniqueIdentifier].class.filter(cl => cl !== value);
  }

  public updateClass(uniqueIdentifier: number, previuosValue: string, newValue: string): any {
    const indexOf: number = this.hashMap[uniqueIdentifier].class.findIndex((cl: string) => cl === previuosValue);
    this.hashMap[uniqueIdentifier].class[indexOf] = newValue;
  }

  public addAttribute(uniqueIdentifier: number, attribute: Attribute): any {
    if (this.hashMap[uniqueIdentifier].attributes.findIndex(at => at.name === attribute.name) >= 0) {
      this.hashMap[uniqueIdentifier].attributes.push(attribute);
    }
  }

  public removeAttribute(uniqueIdentifier: number, attributeName: string): any {
    this.hashMap[uniqueIdentifier].attributes = this.hashMap[uniqueIdentifier].attributes.filter(at => at.name !== attributeName);
  }

  public updateAttribute(uniqueIdentifier: number, attributeName: string, newValue: Attribute): any {
    const indexOf: number = this.hashMap[uniqueIdentifier].attributes.findIndex((at: Attribute) => at.name === attributeName);
    this.hashMap[uniqueIdentifier].attributes[indexOf] = newValue;
  }
}
