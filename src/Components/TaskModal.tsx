import React from "react";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TaskModal = ({ isModalOpen, setIsModalOpen }: Props) => {
  const showHideClassName = isModalOpen
    ? `fixed z-10 top-0 left-0 w-full h-full backdrop-blur-sm grid place-items-center block`
    : `fixed z-10 top-0 left-0 w-full h-full backdrop-blur-sm grid place-items-center hidden`;

  return (
    <div className={showHideClassName}>
      <section className="fixed rounded-md bg-white p-5 h-auto w-4/5 md:w-2/4">
        <div>
          <div>
            <label htmlFor="task-title">Title *</label>
            <input
              id="task-title"
              name="title"
              type="text"
              required
              className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter Title"
            />
          </div>
          <div>
            <label htmlFor="task-description">Description *</label>
            <textarea
              id="task-description"
              name="title"
              required
              className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter Description"
            />
          </div>
          <div>
            <label htmlFor="task-time">Estimated Time *</label>
            <input
              id="task-time"
              name="time"
              type="number"
              required
              className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter Time in Minutes"
              min={1}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <button
            className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
          <button className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2">
            Save
          </button>
        </div>
      </section>
    </div>
  );
};
