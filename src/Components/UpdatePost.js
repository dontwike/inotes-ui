import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePost() {

    const params = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
      axios.get(`http://localhost:8080/read/${params.id}`).then((reponse) => {
        setTitle(reponse.data.title);
        setDescription(reponse.data.description);
      });
    }, []);

    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value);
      };
    
      const handleOnChangeDescription = (event) => {
        setDescription(event.target.value);
      };
    
      const handleOnSubmit = (e) => {
        console.log(params.id)
        e.preventDefault();
        addPost();
      };
    
      const addPost = () => {
        axios
          .put(`http://localhost:8080/update/${params.id}`, {
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
    <div>
      <div className="text-white w-screen h-screen flex flex-col items-center mt-28">
        <h1 className="text-4xl mb-3">Update Post</h1>
        <div>
          <form className="p-5 m-5">
            <div>
              <h1 className="text-4xl mb-3 flex items-center justify-center">Title</h1>
              <textarea
                rows={1}
                value={title}
                onChange={handleOnChangeTitle}
                className="py-4 pl-6 rounded-full  hover:opacity-100 opacity-40 bg-zinc-800 text-white hover:text-zinc-400"
                cols={80}
              ></textarea>
            </div>
            <div>
              <h1 className="text-4xl mb-3 mt-5 flex items-center justify-center">Description</h1>
              <textarea
                rows={15}
                onChange={handleOnChangeDescription}
                value={description}
                className="pl-6 py-2 mt-2  rounded-lg  hover:opacity-100 opacity-40 bg-zinc-800 text-white"
                cols={80}
              ></textarea>
            </div>
            <button
              className="mt-5 ml-64 bg-white text-gray-800 py-4 px-16 rounded-lg hover:opacity-100 opacity-70 hover:text-gray-600"
              onClick={handleOnSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
