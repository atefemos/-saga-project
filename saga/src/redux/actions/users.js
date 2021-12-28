import * as type from "./type";

export function getUsers(users) {
  return {
    type: type.GET_USERS,
    payload: users,
  };
}
