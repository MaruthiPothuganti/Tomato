import { Outlet,Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export const LandingPage = (): JSX.Element => {
    const { pathname } = useLocation();

  return (
    <main className="w-full h-screen grid place-items-center">
          <div className="flex flex-wrap w-4/5 h-4/5 rounded-xl shadow-sm shadow-gray-400 bg-slate-50 relative">
              <section className="hidden md:grid place-items-center w-1/2">
                  <div className="text-center">
                      <h1 className="text-5xl font-bold font-mono">Tomato</h1>
                        <img className="w-80 h-80" src="https://res.cloudinary.com/doo5jbomi/image/upload/v1663773722/PomodoroApp/logo192_p6zuag.png" alt="tomato" />
                    </div>
              </section>
                <section className="w-full md:w-1/2 flex justify-center mt-16">
                  <div className="w-4/5 sm:w-3/5">
                      <div className="m-6 border-b-2 flex justify-center">
                          <Link to="/" className="w-1/2 py-4 flex justify-center"><button >Login</button></Link>
                          <Link to="/SignUp" className="w-1/2 py-4 flex justify-center"><button >SignUp</button></Link>
                        </div>
                      <Outlet/>
                    </div>
              </section>
              <section className="w-full">
                  <h2 className="font-bold text-center p-2">They said I can't, they said I won't. But I did the impossible, for sure, When I made it look way too easy - <i>Brodha V</i> </h2>
              </section>
            <img className="sm:inline-flex w-auto h-20 absolute top-[-5%] left-[50%] translate-x-[-50%] md:hidden bg-slate-50 m-2 p-4 rounded-full" src="https://res.cloudinary.com/doo5jbomi/image/upload/v1663773722/PomodoroApp/logo192_p6zuag.png" alt="tomato" />
        </div>
    </main>
  );
}
