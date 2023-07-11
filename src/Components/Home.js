import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-row justify-center text-white w-screen h-screen">
      <div className=" flex flex-col justify-center items-center">
        <div className="bg-zinc-700 text-zinc-500 rounded-full w-72 hover:opacity-100 opacity-75">
          <h3 className="p-4 flex justify-center items-center">
            Simple Notes Planning Tool
          </h3>
        </div>
        <div>
          <h1 className="text-6xl mx-10 mt-16">
            <span className="text-red-500">Create.</span> <span>Organize.</span>
            <br /> <span>Share. Easy</span>
          </h1>
        </div>
        <div className="mt-16 font-semibold text-lg">
          <p>
            Notes is the best place to joy down quick thoughts <br /> or to save
            longer notes filled with checklist, weblinks.
          </p>
        </div>

        <div className="mt-16">
          <Link to={"/notes"}>
            <button className="bg-red-500 py-4 px-12 text-lg rounded-full hover:opacity-100 opacity-75">
              Try it out now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
