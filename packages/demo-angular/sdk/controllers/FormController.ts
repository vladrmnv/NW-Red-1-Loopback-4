/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as __model from '../model';

export interface FindParams {
  filter?: object;
}

export interface UpdateAllParams {
  where?: object;
  body?: __model.Form;
}

export interface CreateParams {
  body?: __model.Form;
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
  body?: __model.Form;
}

@Injectable()
export class FormControllerService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/FormController/find */
  find(params: FindParams): Observable<__model.Form[]> {
    const queryParamBase = {
      filter: params.filter,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]) => {
      if (value !== undefined) {
        if (typeof value === 'string') queryParams = queryParams.set(key, value);
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    return this.http.get<__model.Form[]>(`/forms`, {params: queryParams});
  }

  /** http://undefined/swagger/swagger-ui.html#!/FormController/updateAll */
  updateAll(params: UpdateAllParams): Observable<__model.UpdateAllGeneratedInlineModel> {
    const queryParamBase = {
      where: params.where,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]) => {
      if (value !== undefined) {
        if (typeof value === 'string') queryParams = queryParams.set(key, value);
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    const bodyParams = params.body;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.patch<__model.UpdateAllGeneratedInlineModel>(`/forms`, bodyParamsWithoutUndefined, {params: queryParams});
  }

  /** http://undefined/swagger/swagger-ui.html#!/FormController/create */
  create(params: CreateParams): Observable<__model.Form> {
    const bodyParams = params.body;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.Form>(`/forms`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/FormController/count */
  count(params: CountParams): Observable<__model.CountGeneratedInlineModel> {
    const queryParamBase = {
      where: params.where,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]) => {
      if (value !== undefined) {
        if (typeof value === 'string') queryParams = queryParams.set(key, value);
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    return this.http.get<__model.CountGeneratedInlineModel>(`/forms/count`, {params: queryParams});
  }

  /** http://undefined/swagger/swagger-ui.html#!/FormController/deleteById */
  deleteById(params: DeleteByIdParams): Observable<void> {
    const pathParams = {
      id: params.id,
    };
    return this.http.delete<void>(`/forms/${pathParams.id}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/FormController/findById */
  findById(params: FindByIdParams): Observable<__model.Form> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.Form>(`/forms/${pathParams.id}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/FormController/updateById */
  updateById(params: UpdateByIdParams): Observable<void> {
    const pathParams = {
      id: params.id,
    };
    const bodyParams = params.body;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.patch<void>(`/forms/${pathParams.id}`, bodyParamsWithoutUndefined);
  }
}
