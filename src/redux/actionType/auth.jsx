import { loginAuth } from "../../utils/auth"

export const actionAuth = (body) => {
  return {
    type: "AUTH_LOGIN",
    payload: loginAuth(body)
  }
}