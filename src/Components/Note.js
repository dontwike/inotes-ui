import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Note() {
  const url = "http://localhost:8080";

  const [note, setNote] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await axios.get(`${url}/read`);
      setNote(data.data);
    };

    fetchNotes();
  }, []);

  const DeletePost = async (id) => {
    axios.delete(`http://localhost:8080/delete/${id}`);
    window.location.reload(false);
  };

  const fullCard = (note, index) => {
    return (
      <div
        className="text-white w-auto flex flex-col mt-16 mx-3 p-5 rounded-none hover:opacity-90"
        style={{ backgroundColor: "#212023" }}
        key={index}
      >
        <div className="ml-5 my-6">
          <div>
            <div className="flex flex-row justify-between">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MVTbEvYPR1vbQMwejZVIqHzSE4LEbz0NYmhBlCo&s"
                alt=""
                className="w-12 h-12 rounded-none"
              ></img>
              <p className="mt-5">{note.time}</p>
            </div>

            <h3 className="text-xl font-semibold mt-10 pr-10">
              {note.title.length <= 25 ? note.title : note.title.slice(0, 25)}
              {note.title.length <= 25 ? "" : " ..."}
            </h3>
            <h3 className="text-lg font-semibold mt-2">{note.date}</h3>
            <p className="text-lg font-semibold mt-4">
              {note.description.length <= 50
                ? note.description
                : note.description.slice(0, 50)}
              {note.description.length <= 50 ? "" : " ..."}
            </p>
            <div className="flex-row flex justify-center mt-6">
              <Link to={`/updateNotes/${note.id}`}>
                <button className="bg-white py-4 px-16 rounded-md text-base mr-5 text-gray-500 font-bold">
                  Update
                </button>
              </Link>
              <button
                className="bg-black/60 py-4 px-16 rounded-md text-base mr-5 text-white font-bold"
                onClick={() => DeletePost(note.id)}
              >
                Delete
              </button>
              <Link to={`/read/${note.id}`}>
              <button
                className="bg-black/60 py-4 px-16 rounded-md text-base mr-5 text-white font-bold"
              >
                Read
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-center items-center text-white">
      {note.length > 0 && note.map((item, index) => fullCard(item, index))}
    </div>
  );
}
