import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost(props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Enter Title:");
  const [description, setDescription] = useState("Enter Description:");

  const handleOnChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleOnChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addPost();
  };

  const addPost = () => {
    axios
      .post("http://localhost:8080/post", {
        title,
        description,
      })
      .then((response) => {
        console.log(response);
      });

      navigate("/notes");
      window.location.reload(false)
  };

  return (
    <div className="text-white w-screen h-screen flex flex-col items-center mt-28">
      <h1 className="text-4xl mb-3">{props.title}</h1>
      <div>
        <form className="p-5 m-5">
          <div>
            <h1 className="text-4xl mb-3 flex items-center justify-center">Title</h1>
            <textarea
              rows={1}
              value={title}
              onChange={handleOnChangeTitle}
              className="py-3 pl-3 rounded-full hover:opacity-100 opacity-40 bg-zinc-800 text-white hover:text-zinc-400"
              cols={50}
              onClick={()=>{setTitle('')}}
            ></textarea>
          </div>
          <div >
            <h1 className="text-4xl mb-3 mt-5 flex items-center justify-center">Description</h1>
            <textarea
              rows={5}
              onChange={handleOnChangeDescription}
              value={description}
              className="pl-3 py-2 mt-2 rounded-lg hover:opacity-100 opacity-40 bg-zinc-800 text-white"
              cols={50}
              onClick={()=>{setDescription('')}}
            ></textarea>
          </div>
          <button
            className="mt-5 ml-28 bg-white text-gray-800 py-4 px-16 rounded-lg hover:opacity-100 opacity-70 hover:text-gray-600"
            onClick={handleOnSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
