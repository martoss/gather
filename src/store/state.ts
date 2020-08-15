import { STORE_KEY as userStoreKey, UserState } from '../user/slice'

export interface BaseState {
  [userStoreKey]: UserState
}
