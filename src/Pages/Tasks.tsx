import { useState } from "react";
import { TaskModal } from "../Components";
import { MdEdit } from "../Components/icons";

export const Tasks = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <main className="w-full h-screen grid place-items-center">
      <section className="w-[90%] md:w-4/5">
        <h1 className="text-[10vw] md:text-[5vw]">Hello User</h1>
        <h2 className="font-bold">
          You have{" "}
          <span className="bg-indigo-600 text-lg p-1 text-white rounded-md">
            0
          </span>{" "}
          tasks to complete
        </h2>
      </section>
      <section className="w-[90%] md:w-4/5 h-[80vh] rounded-xl shadow-sm shadow-gray-400 bg-slate-50">
        <div className="flex flex-row-reverse">
          <button
            className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-4"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Task
          </button>
        </div>
        <hr />
        <section className="w-full h-full flex flex-col items-center p-1 gap-2">
          <article className="w-[80%] p-3 bg-slate-200 rounded-md flex  border-l-8 border-solid border-l-indigo-600">
            <h3 className="flex-grow">Random Task</h3>
            <div>
              <button>
                <MdEdit size={20} />
              </button>
            </div>
          </article>
          <article className="w-[80%] p-3 bg-slate-200 rounded-md flex  border-l-8 border-solid border-l-indigo-600">
            <h3 className="flex-grow">Random Task</h3>
            <div>
              <button>
                <MdEdit size={20} />
              </button>
            </div>
          </article>
          <article className="w-[80%] p-3 bg-slate-200 rounded-md flex  border-l-8 border-solid border-l-indigo-600">
            <h3 className="flex-grow">Random Task</h3>
            <div>
              <button>
                <MdEdit size={20} />
              </button>
            </div>
          </article>
          <article className="w-[80%] p-3 bg-slate-200 rounded-md flex  border-l-8 border-solid border-l-indigo-600">
            <h3 className="flex-grow">Random Task</h3>
            <div>
              <button>
                <MdEdit size={20} />
              </button>
            </div>
          </article>
        </section>
      </section>
      <TaskModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </main>
  );
};

{
  /* <section className="w-full h-full grid place-items-center">
          <img className="w-60 h-auto text-center" src="https://res.cloudinary.com/doo5jbomi/image/upload/v1659354189/NotesApp/51382-astronaut-light-theme_1_omqpt4.gif" alt="empty" />
        </section> */
}
