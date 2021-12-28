import React, { useEffect } from "react";
import Cart from "./CartComponent";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: "Atefe Moslemi",
          company: {
            name: "Bithome",
            catchPrase: "some",
          },
        },
      ])
    );
  }, []);

  return (
    <>
      {users.length > 0 &&
        users.map((item) => <Cart user={item} key={item.id} />)}
      {users.length === 0 && <p>No users available.</p>}
    </>
  );
};

export default Users;
