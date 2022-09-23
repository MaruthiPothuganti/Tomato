import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const TaskTimer = (): JSX.Element => {
  return (
    <main className="w-full h-screen grid place-items-center">
      <div className="flex flex-wrap w-[90%] h-[90%] rounded-xl shadow-sm shadow-gray-400 bg-slate-50 overflow-y-auto">
        <section className="w-full md:w-1/2 grid place-items-center">
          <div className="w-4/5 md:w-1/2 grid place-items-center">
            <section className="flex">
              <button className="relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2">
                Task Timer
              </button>
              <button className="relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2">
                Short Break
              </button>
              <button className="relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2">
                Long Break
              </button>
            </section>
            <h2 className="text-2xl text-center m-3">Random Task Title</h2>
            <CircularProgressbar value={100} text={`${100}%`} />
          </div>
        </section>
        <section className="w-full  grid place-items-center md:w-1/2">
          <div className="w-[90%] md:w-3/5">
            <h3 className="text-2xl font-bold mb-4">Description :</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              atque sit distinctio modi neque officia nisi voluptatibus, aliquid
              maiores ducimus fugiat voluptate consequuntur debitis cupiditate
              libero ad accusantium beatae voluptates?
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
