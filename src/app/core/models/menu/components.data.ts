import { NodeType } from '../shared/node-type.enum';
import { ToolMenuGroup } from '../default/tool-menu-group.model';

export const components: ToolMenuGroup = {
    header: 'Components',
    menuItems: [
        {
            header: 'button',
            value: 'button',
            identifier: 3,
            type: NodeType.component
        },
    ],
};
