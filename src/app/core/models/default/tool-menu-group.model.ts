import { ToolMenuItem } from 'src/app/core/models/default/tool-menu-item.model';

export interface ToolMenuGroup {
    header: string;
    menuItems: ToolMenuItem[];
}
