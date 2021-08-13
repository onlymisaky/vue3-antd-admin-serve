interface Resp<T = undefined> {
  success: boolean,
  data?: T,
  errMessage?: string,
  errCode?: number,
}

interface Pagination {
  page: number;
  size: number;
  total?: number;
  pageTotal?: number;
  hasNext?: boolean,
}

type PagingData<T = undefined> = {
  content: T[],
} & Pagination

type PagingResp<T> = Resp<PagingData<T>>;

export class Result {
  static ok<T>(data?: T): Resp<T> {
    return {
      success: true,
      data,
    };
  }

  static fail(errMessage?: string, errCode?: number): Resp {
    return {
      success: false,
      errMessage,
      errCode,
    };
  }

  static list<T>(
    list: T[],
    pagination: Pagination,
  ): PagingResp<T> {
    const data = {
      content: list,
      ...pagination,
    };
    return this.ok(data);
  }
}
