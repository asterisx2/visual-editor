import { NodeType } from '../shared/node-type.enum';
import { ToolMenuGroup } from '../default/tool-menu-group.model';

export const components: ToolMenuGroup = {
    header: 'Components',
    menuItems: [
        {
            header: 'df-select',
            value: 'df-select',
            identifier: 0,
            type: NodeType.component
        },
        {
            header: 'df-card',
            value: 'df-card',
            identifier: 1,
            type: NodeType.component
        },
        {
            header: 'df-checkbox',
            value: 'df-checkbox',
            identifier: 2,
            type: NodeType.component
        },
        {
            header: 'button',
            value: 'button',
            identifier: 3,
            type: NodeType.component
        },
        {
            header: 'df-editable-input',
            value: 'df-editable-input',
            identifier: 4,
            type: NodeType.component
        },
        {
            header: 'df-grid',
            value: 'df-grid',
            identifier: 5,
            type: NodeType.component
        },
        {
            header: 'df-grid-column',
            value: 'df-grid-column',
            identifier: 6,
            type: NodeType.component
        },
        {
            header: 'df-option',
            value: 'df-option',
            identifier: 7,
            type: NodeType.component
        },
        {
            header: 'df-slider',
            value: 'df-slider',
            identifier: 8,
            type: NodeType.component
        },
    ],
};
