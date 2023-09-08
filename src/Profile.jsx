import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Profile = ({ img, username, id }) => {
  const path = `/user/${id}`;
  return (
    <div className="flex flex-col gap-5 p-4 m-2 rounded bg-black text-white font-bold">
      <img
        src={img}
        alt={username}
        className="max-w-[300px] max-h-[300px] min-w-[300px] min-h-[300px]"
      />
      <p>{username}</p>
      <button>
        <Link to={path}>Show Profile</Link>
      </button>
    </div>
  );
};

export default Profile;
