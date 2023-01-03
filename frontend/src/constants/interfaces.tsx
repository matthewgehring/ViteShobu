import { httpMethods } from "./enums"

export interface httpRequest {
    method: httpMethods,
    url: string,
    params: string[]
}

export interface httpResponse {
    body: Object
}

export interface httpRequestPOST {
    method: httpMethods,
    url: string,
    params: string[],
    body: any
}

export interface Cookies {
    get(name: string): string;
    save(name: string, value: any, options?: CookieSaveOptions): void;
    remove(name: string, options?: CookieRemoveOptions): void;
  }

export interface Cookie { 
  [x: string]: any; }

export interface setCookie {
    (name: string, value: any, options?: CookieSaveOptions): void;
}

export interface removeCookie {
    (name: string, options?: CookieRemoveOptions): void;
}
  
  export interface CookieSaveOptions {
    path?: string;
    expires?: Date;
    maxAge?: number;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax';
    httpOnly?: boolean;
  }
  
  export interface CookieRemoveOptions {
    path?: string;
    domain?: string;
  }
  

