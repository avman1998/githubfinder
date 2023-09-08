import { useState, useEffect } from "react";
import { users_url, userApi } from "./config";
import Profile from "./Profile";
import Loader from "./Loader";
const GithubFinder = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (inputValue === "") fetchUsers(users_url);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFind = () => {
    const api = userApi(inputValue);
    fetchUserByUsername(api);
  };

  const fetchUsers = async (URL) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchUserByUsername = async (URL) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setUsers([data]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <h1>Github Finder</h1>
      <div className="flex gap-2">
        <input
          className="border border-black p-2"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter username here.."
        />
        <button onClick={handleFind}>Find User</button>
        <button onClick={() => setInputValue("")}>❌</button>
      </div>

      {users?.length === 0 ? (
        <Loader />
      ) : (
        <div className="flex justify-between flex-wrap">
          {users?.map((item) => {
            return (
              <Profile
                key={item.id}
                img={item.avatar_url}
                username={item.login}
                id={item.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default GithubFinder;
