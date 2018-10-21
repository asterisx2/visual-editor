import { Injectable } from '@angular/core';
import { TagNode } from 'src/app/core/models/shared/tag-node.model';
import { Attribute } from 'src/app/core/models/shared/attribute.model';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private dragging = false;

  private rootTree: TagNode[];

  private subscribers: Function[];

  private hashMap: { [key: number]: TagNode };

  public lastUniqueIdentifier = 0;

  public subscribe(
    sub: Function,
    subscribers = this.subscribers
    ): void {
    subscribers.push(sub);
  }

  public unsubscribe(
    sub: Function,
    subscribers = this.subscribers
    ): void {
    subscribers = subscribers.filter(su => su !== sub);
  }

  public callSubscribers(
    subscribers: Function[] = this.subscribers,
    node: TagNode[] = this.rootTree
    ): void {
    subscribers.forEach(sub => sub(node));
  }

  public getHashMap(): { [key: number]: TagNode } {
    return this.hashMap;
  }

  public isDragging(): boolean {
    return this.dragging;
  }

  public setDragging(
    value: boolean
    ): void {
    this.dragging = value;
  }

  // This needs to be optimized to a binary tree or a ordered heap
  public addChild(
    node: TagNode, parentIdentifier: number,
    hashMap: { [key: number]: TagNode } = this.hashMap,
    lastUniqueIdentifier = this.lastUniqueIdentifier
    ): boolean {
    if (hashMap[parentIdentifier]) {
      // New node
      if (!!node.parentIdentifier) {
        // Add parent identifer to the new node
        node.parentIdentifier = parentIdentifier;
        // Add new node to the end of parent
        hashMap[parentIdentifier].children.push(node);

        // Increment unique identifer
        lastUniqueIdentifier++;

        // Add to hashmap for quick access
        hashMap[lastUniqueIdentifier] = node;
        return true;
      } else {
        // Moved from some other node
        // Not a good idea, use immutable js


        // Remove from current parent
        hashMap[node.parentIdentifier].children =
          hashMap[node.parentIdentifier].children.filter(tg => tg.uniqueIdentifier !== node.uniqueIdentifier);

        // Assign new parent
        node.parentIdentifier = parentIdentifier;

        // Add to new parent
        hashMap[parentIdentifier].children.push(node);
        return true;
      }
    } else {
      return false;
    }
  }

  public deleteNode(
    uniqueIdentifier: number,
    node: TagNode,
    hashMap: { [key: number]: TagNode } = this.hashMap
    ): void {
    hashMap[uniqueIdentifier] = undefined;

    hashMap[node.parentIdentifier].children =
    hashMap[node.parentIdentifier].children.filter(tg => tg.uniqueIdentifier !== node.uniqueIdentifier);
  }

  public addSibling(
    node: TagNode,
    targetIdentifier: number,
    hashMap: { [key: number]: TagNode } = this.hashMap
    ): boolean {
    if (!!hashMap[targetIdentifier] && !!hashMap[targetIdentifier] && !!node.parentIdentifier) {
      // Same parent, just a re-arrange
      if (node.parentIdentifier === hashMap[targetIdentifier].parentIdentifier) {
        // Find the common parent
        const parentIdentifier = hashMap[targetIdentifier].parentIdentifier;

        // Remove current node from its parent
        hashMap[parentIdentifier].children =
          hashMap[parentIdentifier].children.filter(tg => tg.uniqueIdentifier !== node.uniqueIdentifier);
        // Find the target index, where to put
        const targetIndex = hashMap[parentIdentifier].children.findIndex(tg => tg.uniqueIdentifier === targetIdentifier);

        // Add and Shift other elements
        hashMap[parentIdentifier].children.splice(targetIndex, 0, node);
        return true;
      } else {

        // Find dropped node's praent
        const parentIdentifier = hashMap[node.uniqueIdentifier].parentIdentifier;

        // Remove node from its parent
        hashMap[parentIdentifier].children =
          hashMap[parentIdentifier].children.filter(tg => tg.uniqueIdentifier !== node.uniqueIdentifier);

        // Find new sibling's parent
        const targetParentIdentifier = hashMap[targetIdentifier].parentIdentifier;

        // And index
        const targetIndex = hashMap[targetParentIdentifier].children.findIndex(tg => tg.uniqueIdentifier === targetIdentifier);

        // Add and shift
        hashMap[targetParentIdentifier].children.splice(targetIndex, 0, node);
        return true;
      }
    }
  }

  public getNodeImg(
    node: TagNode
    ): string {
    throw new Error('Method not implemented.');
  }

  public addClass(
    uniqueIdentifier: number,
    Class: string,
    hashMap: { [key: number]: TagNode } = this.hashMap
    ): void {
    if (hashMap[uniqueIdentifier].class.indexOf(Class) <= 0) {
      hashMap[uniqueIdentifier].class.push(Class);
    }
  }

  public removeClass(
    uniqueIdentifier: number,
    value: string,
    hashMap: { [key: number]: TagNode } = this.hashMap
    ): void {
    hashMap[uniqueIdentifier].class = hashMap[uniqueIdentifier].class.filter(cl => cl !== value);
  }

  public updateClass(
    uniqueIdentifier: number,
    previuosValue: string, newValue: string,
    hashMap: { [key: number]: TagNode } = this.hashMap
    ): void {
    const indexOf: number = hashMap[uniqueIdentifier].class.findIndex((cl: string) => cl === previuosValue);
    hashMap[uniqueIdentifier].class[indexOf] = newValue;
  }

  public addAttribute(
    uniqueIdentifier: number,
    attribute: Attribute,
    hashMap: { [key: number]: TagNode } = this.hashMap
    ): void {
    if (hashMap[uniqueIdentifier].attributes.findIndex(at => at.name === attribute.name) >= 0) {
      hashMap[uniqueIdentifier].attributes.push(attribute);
    }
  }

  public removeAttribute(
    uniqueIdentifier: number,
    attributeName: string,
    hashMap: { [key: number]: TagNode } = this.hashMap
    ): void {
    hashMap[uniqueIdentifier].attributes = hashMap[uniqueIdentifier].attributes.filter(at => at.name !== attributeName);
  }

  public updateAttribute(
    uniqueIdentifier: number,
    attributeName: string, newValue: Attribute,
    hashMap: { [key: number]: TagNode } = this.hashMap
    ): void {
    const indexOf: number = hashMap[uniqueIdentifier].attributes.findIndex((at: Attribute) => at.name === attributeName);
    hashMap[uniqueIdentifier].attributes[indexOf] = newValue;
  }
}
