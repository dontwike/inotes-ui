import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ReadPost = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/read/${params.id}`).then((reponse) => {
      setTitle(reponse.data.title);
      setDescription(reponse.data.description);
    });
  });

  const DeletePost = async (id) => {
    axios.delete(`http://localhost:8080/delete/${params.id}`);
    window.location.reload(false);
  };

  return (
    <div>
      <div className="text-white w-screen h-screen flex flex-col items-center mt-28">
        <div>
          <div>
            <h1 className="text-5xl mb-3 flex items-center justify-center">
              Title
            </h1>
            <p className="flex items-center justify-center mt-7 text-3xl">
              {title}
            </p>
          </div>
          <div>
            <h1 className="text-5xl mb-3 flex items-center justify-center mt-10">
              Description
            </h1>
            <p className="flex items-center justify-center my-7 mx-80 text-2xl">
              {description}
            </p>
          </div>
        </div>
        <div className="flex-col flex-1 flex justify-center items-baseline">
          <div>
            <Link to={`/updateNotes/${params.id}`}>
              <button className="bg-white py-4 px-16 rounded-md text-base mr-5 text-gray-500 font-bold mt-auto">
                Update
              </button>
            </Link>
            <button
              className="bg-black/60 py-4 px-16 rounded-md text-base mr-5 text-white font-bold"
              onClick={() => DeletePost(params.id)}
            >
              Delete
            </button>
            <Link to={"/notes"}>
              <button className="bg-black/60 py-4 px-16 rounded-md text-base mr-5 text-white font-bold">
                Notes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadPost;
