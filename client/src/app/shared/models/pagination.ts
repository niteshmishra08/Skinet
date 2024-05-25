export interface Pagination<T> {
  pageIndex: number
  count: number
  pageSize: number
  data: T;
}
