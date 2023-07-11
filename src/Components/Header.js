import axios from "axios";
import { Link } from "react-router-dom";

export default function Header() {
  const DeleteAllPost = async () => {
    axios.delete(`http://localhost:8080/deleteAll`);
    window.location.reload(false);
  };

  return (
    <div className="bg-zinc-800 text-white w-screen flex justify-between items-center">
      <div className="ml-7 py-3 flex">
        <img
          src="https://cdn.dribbble.com/userupload/3232136/file/original-0fd4209ff091851842570400d634352b.png?compress=1&resize=1024x768"
          alt="Avail"
          className="w-10 h-10 mt-1"
        ></img>

        <p className="text-3xl ml-5 pt-1">Every Note</p>
      </div>

      <div className="text mr-10">
        <ul className="flex">
          <Link to={"/"}>
            <li className="mx-3 duration-500 px-3 py-2 font-medium text-base hover:py-2 hover:rounded-md hover:backdrop-sepia-0 hover:bg-black/10">
              Home
            </li>
          </Link>
          <Link to={"/notes"}>
            <li className="mx-3 duration-500 px-3 py-2 font-medium text-base hover:py-2 hover:rounded-md hover:backdrop-sepia-0 hover:bg-black/10">
              Notes
            </li>
          </Link>
          <Link to={"/createnotes"}>
            <li className="mx-3 duration-500 px-3 py-2 font-medium text-base hover:py-2 hover:rounded-md hover:backdrop-sepia-0 hover:bg-black/10">
              Create Note
            </li>
          </Link>
          <li
            className="mx-3 duration-500 px-3 py-2 font-medium text-base hover:py-2 hover:rounded-md hover:backdrop-sepia-0 hover:bg-black/10"
            onClick={DeleteAllPost}
          >
            Delete Notes
          </li>
        </ul>
      </div>
    </div>
  );
}
