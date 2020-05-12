export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface LogInAction {
  type: typeof LOGIN_SUCCESS;
}

export type AppActionTypes = LogInAction;
