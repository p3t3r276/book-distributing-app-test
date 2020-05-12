import {AppActionTypes} from "src/types/actions"
import {Dispatch} from "react"

export const SignIn = (): AppActionTypes => ({
  type: 
})

export const StartSignIn = (credentials: {email?: string, password?: string}) => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) {
    // SignIn
  }
}
