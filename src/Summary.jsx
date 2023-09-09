import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { userApi } from "./config";
const Summary = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUserData(userApi(username));
  }, []);
  const fetchUserData = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    setUser(data);
  };
  return (
    <div className="mt-10 flex flex-col gap-10 justify-center items-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="max-w-[350px] max-h-[350px] min-w-[350px] min-h-[350px] rounded "
      />
      <h2 className="p-3 border-2 rounded border-black">
        Username: {user.login}
      </h2>
      {user.name && <h4>Name: {user.name}</h4>}
      {user.bio && <h5>Bio: {user.bio}</h5>}
      <button>
        <a href={user.html_url}>Github Profile</a>
      </button>
    </div>
  );
};

export default Summary;
