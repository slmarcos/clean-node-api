export type HttpRequest = {
  headers?: any
  params?: any
  body?: any
  accountId?: string
}

export type HttpResponse = {
  statusCode: number
  body: any
}
