import { httpMethods } from "./enums"

export interface httpRequest {
    method: httpMethods,
    url: string,
    params: string[]
}

export interface httpResponse {
    body: Object
}

