import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

export interface RequestState<T> {
  data: T | [];
  loading: boolean;
  error: null | string;
}

export function withRequestState<T>(obs$: Observable<T>) {
  return obs$.pipe(
    map((data) => ({ data, loading: false, error: null })),
    startWith({ data: [], loading: true, error: null }),
    catchError(error => of({ data: [], loading: false, error: 'Lo siento ocurrió un error' }))
  );
}
