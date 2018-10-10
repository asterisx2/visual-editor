import { ToolMenuGroup } from '../default/tool-menu-group.model';
import { NodeType } from '../shared/node-type.enum';

export const classes: ToolMenuGroup = {
    header: 'Bootstrap',
    menuItems: [
        {
            header: 'col-12',
            value: 'col-12',
            identifier: 0,
            type: NodeType.Class
        },
        {
            header: 'col-1',
            value: 'col-1',
            identifier: 1,
            type: NodeType.Class
        },
        {
            header: 'col-2',
            value: 'col-2',
            identifier: 2,
            type: NodeType.Class
        },
        {
            header: 'col-3',
            value: 'col-3',
            identifier: 3,
            type: NodeType.Class
        },
        {
            header: 'col-4',
            value: 'col-4',
            identifier: 4,
            type: NodeType.Class
        },
        {
            header: 'col-5',
            value: 'col-5',
            identifier: 5,
            type: NodeType.Class
        },
        {
            header: 'col-6',
            value: 'col-6',
            identifier: 6,
            type: NodeType.Class
        },
        {
            header: 'd-flex',
            value: 'd-flex',
            identifier: 7,
            type: NodeType.Class
        },
        {
            header: 'd-inline-flex',
            value: 'd-inline-flex',
            identifier: 8,
            type: NodeType.Class
        },
        {
            header: 'justify-content-center',
            value: 'justify-content-center',
            identifier: 9,
            type: NodeType.Class
        },
        {
            header: 'justify-content-between',
            value: 'justify-content-between',
            identifier: 10,
            type: NodeType.Class
        },
    ],
};
