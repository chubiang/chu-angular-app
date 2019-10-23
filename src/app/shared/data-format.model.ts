export class DataFormatPipeModel {
  type: string;
  format?: string;
  local?: string;

  constructor(type: string, format?: string, local?: string) {
    this.type = type;
    this.format = format;
    this.local = local;
  }
}

export interface TableColumn {
  name: string;
  sticky?: boolean;
  width?: string;
  displayName?: string;
  pipe?: DataFormatPipeModel;
}

export interface TableFooterColumn {
  name: string;
  pipe?: DataFormatPipeModel;
}
