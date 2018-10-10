import { Attribute } from 'src/app/core/models/shared/attribute.model';

export class TagNode {
    uniqueIdentifier: number;
    parentIdentifier: number;
    tagName: string;
    children: TagNode[] = [];
    attributes: Attribute[] = [];
    class: string[] = [];

    constructor(tagName: string) {
    }
}
