export class Paginator {
  pageIndex: number;
  length: number;
  pageSize: number;
  pageSizeOptions: number[];
}

export const DEF_PAGE_SIZE = 5;
export const DEF_PAGE_SIZE_OPTIONS = [ 5, 10, 100, 2000 ];
