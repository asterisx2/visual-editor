import { NodeType } from '../shared/node-type.enum';
import { ToolMenuGroup } from '../default/tool-menu-group.model';

export const nativeElements: ToolMenuGroup = {
    header: 'Native Elements',
    menuItems: [
        {
            header: 'div',
            value: 'div',
            identifier: 0,
            type: NodeType.nativeElement
        },
        {
            header: 'span',
            value: 'span',
            identifier: 1,
            type: NodeType.nativeElement
        },
        {
            header: 'p',
            value: 'p',
            identifier: 2,
            type: NodeType.nativeElement
        },
        {
            header: 'h1',
            value: 'h1',
            identifier: 3,
            type: NodeType.nativeElement
        },
        {
            header: 'input',
            value: 'input',
            identifier: 4,
            type: NodeType.nativeElement
        },
        {
            header: 'a',
            value: 'a',
            identifier: 5,
            type: NodeType.nativeElement
        },
        {
            header: 'h2',
            value: 'h2',
            identifier: 6,
            type: NodeType.nativeElement
        },
        {
            header: 'h3',
            value: 'h3',
            identifier: 7,
            type: NodeType.nativeElement
        },
        {
            header: 'i',
            value: 'i',
            identifier: 8,
            type: NodeType.nativeElement
        },
    ],
};
