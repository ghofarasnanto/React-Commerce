import { loginAuth } from "../../utils/axios"
import { authLogin } from "./action"

export const actionAuth = (body) => {
  return {
    type: authLogin,
    payload: loginAuth(body)
  }
}