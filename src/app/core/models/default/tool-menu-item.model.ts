import { NodeType } from '../shared/node-type.enum';

export interface ToolMenuItem {
    header: string;
    value?: string;
    identifier: number;
    type: NodeType;
}
