
export const Tasks = (): JSX.Element=> {
  return (
    <main className="w-full h-screen grid place-items-center">
      <h1>Hello User</h1>
      <section className="w-4/5 h-[80vh] rounded-xl shadow-sm shadow-gray-400 bg-slate-50">
        <div className="flex flex-row-reverse">
          <button className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-4 ">
             + Add Task
          </button>
        </div>
        <hr />
        <img className="w-60 h-auto text-center" src="https://res.cloudinary.com/doo5jbomi/image/upload/v1659354189/NotesApp/51382-astronaut-light-theme_1_omqpt4.gif" alt="" />
      </section>
    </main>
  );
}
