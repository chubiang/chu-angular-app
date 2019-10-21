export interface DataFormatPipeModel {
  type: string;
  format?: string;
  local?: string;
}

export class TableColumn {
  name: string;
  displayName?: string;
  pipe?: DataFormatPipeModel;
}
