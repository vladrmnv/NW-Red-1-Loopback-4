/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as __model from '../model';

export interface FindParams {
  filter?: object;
}

export interface UpdateAllParams {
  where?: object;
  body?: __model.NwUser;
}

export interface CreateParams {
  body?: __model.NwUser;
}

export interface CountParams {
  where?: object;
}

export interface DeleteByIdParams {
  id: string;
}

export interface FindByIdParams {
  id: string;
}

export interface UpdateByIdParams {
  id: string;
  body?: __model.NwUser;
}

@Injectable()
export class UserControllerService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/UserController/find */
  find(params: FindParams): Observable<__model.NwUser[]> {
    const queryParamBase = {
      filter: params.filter,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]) => {
      if (value !== undefined) {
        if (typeof value === 'string')
          queryParams = queryParams.set(key, value);
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    return this.http.get<__model.NwUser[]>(`/users`, { params: queryParams });
  }

  /** http://undefined/swagger/swagger-ui.html#!/UserController/updateAll */
  updateAll(
    params: UpdateAllParams,
  ): Observable<__model.UpdateAllGeneratedInlineModel> {
    const queryParamBase = {
      where: params.where,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]) => {
      if (value !== undefined) {
        if (typeof value === 'string')
          queryParams = queryParams.set(key, value);
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    const bodyParams = params.body;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.patch<__model.UpdateAllGeneratedInlineModel>(
      `/users`,
      bodyParamsWithoutUndefined,
      { params: queryParams },
    );
  }

  /** http://undefined/swagger/swagger-ui.html#!/UserController/create */
  create(params: CreateParams): Observable<__model.NwUser> {
    const bodyParams = params.body;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.NwUser>(`/users`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/UserController/count */
  count(params: CountParams): Observable<__model.CountGeneratedInlineModel> {
    const queryParamBase = {
      where: params.where,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]) => {
      if (value !== undefined) {
        if (typeof value === 'string')
          queryParams = queryParams.set(key, value);
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    return this.http.get<__model.CountGeneratedInlineModel>(`/users/count`, {
      params: queryParams,
    });
  }

  /** http://undefined/swagger/swagger-ui.html#!/UserController/deleteById */
  deleteById(params: DeleteByIdParams): Observable<void> {
    const pathParams = {
      id: params.id,
    };
    return this.http.delete<void>(`/users/${pathParams.id}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/UserController/findById */
  findById(params: FindByIdParams): Observable<__model.NwUser> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.NwUser>(`/users/${pathParams.id}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/UserController/updateById */
  updateById(params: UpdateByIdParams): Observable<void> {
    const pathParams = {
      id: params.id,
    };
    const bodyParams = params.body;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.patch<void>(
      `/users/${pathParams.id}`,
      bodyParamsWithoutUndefined,
    );
  }
}
