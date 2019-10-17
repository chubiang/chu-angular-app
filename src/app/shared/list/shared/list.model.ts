export class ColElemStyle {
  cell: any;
  content: any;
  subContent?: any;
  header?: any;
}

export class Column {
  name: string;
  displayName?: string;
  subContent?: string;
  filter?: string;
  format?: string;
  style?: ColElemStyle;
  styleClass?: ColElemStyle;
}
