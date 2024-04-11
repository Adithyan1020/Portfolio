import Project1 from "../assets/the-hotel-1.jpg";
import Project2 from "../assets/travelwide.jpg";
import Project3 from "../assets/movie-time.jpg";
import Project4 from "../assets/react-pizza.jpg";
import Project5 from "../assets/eat-split.jpg";
import Project6 from "../assets/travel-list.jpg";

export function Projects() {
  return (
    <section id="projects">
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex flex-col sm:flex-row gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1 relative group overflow-hidden">
            <img
              src={Project1}
              className="w-full h-auto transition-transform duration-300 transform-gpu group-hover:scale-110"
            />
            <h3 className="text-2xl font-semibold mt-8">
              The Hotel (Management website for hotel employees)
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              React, React Query, React Router, React Hook Form, React Hot
              Toast, Styled Components, Recharts, Supabase & Vite
            </p>
            <div className="flex mt-12 gap-2">
              <button
                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                onClick={() =>
                  window.open(
                    "https://the-hotel-hari2096.netlify.app/",
                    "_blank"
                  )
                }
              >
                Live preview
              </button>

              <button
                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                onClick={() =>
                  window.open(
                    "https://github.com/Hari-Vijayaraghavan96/the-hotel",
                    "_blank"
                  )
                }
              >
                Checkout github
              </button>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1 relative group overflow-hidden">
            <img
              src={Project2}
              className="w-full h-auto transition-transform duration-300 transform-gpu group-hover:scale-110"
            />
            <h3 className="text-2xl font-semibold mt-8">
              Travelwide (Responsive Travel tracking website)
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              React, React Hooks, React Router, React DatePicker, React Leaflet,
              React Error Boundary, React Icons, Vite.
            </p>
            <div className="flex gap-2 mt-12">
              <button
                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                onClick={() =>
                  window.open(
                    "https://travelwide-hari2096.vercel.app/",
                    "_blank"
                  )
                }
              >
                Live preview
              </button>
              <button
                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                onClick={() =>
                  window.open(
                    "https://github.com/Hari-Vijayaraghavan96/travelwide",
                    "_blank"
                  )
                }
              >
                Checkout github
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1 relative group overflow-hidden">
            <img
              src={Project3}
              className="w-full h-auto transition-transform duration-300 transform-gpu group-hover:scale-110"
            />
            <h3 className="text-2xl font-semibold mt-8">
              Movie Time (Responsive movie / series searching website)
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              React, React Hooks, Local Storage, OMDB API, Create-React-App
            </p>
            <div className="flex gap-4 mt-12">
              <button
                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                onClick={() =>
                  window.open(
                    "https://movie-time-hari2096.netlify.app/",
                    "_blank"
                  )
                }
              >
                Live preview
              </button>
              <button
                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                onClick={() =>
                  window.open(
                    "https://github.com/Hari-Vijayaraghavan96/Movie-Time",
                    "_blank"
                  )
                }
              >
                Checkout github
              </button>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1 relative group overflow-hidden">
            <img
              src={Project4}
              className="w-full h-auto transition-transform duration-300 transform-gpu group-hover:scale-110"
            />
            <h3 className="text-2xl font-semibold mt-8">
              React Pizza (Responsive pizza ordering website)
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              React, React Hooks, React Router, Redux, Tailwind CSS & Vite
            </p>
            <div className="flex gap-2 mt-12">
              <button
                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                onClick={() =>
                  window.open(
                    "https://react-pizza-hari2096.netlify.app/",
                    "_blank"
                  )
                }
              >
                Live preview
              </button>
              <button
                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                onClick={() =>
                  window.open(
                    "https://github.com/Hari-Vijayaraghavan96/React-Pizza",
                    "_blank"
                  )
                }
              >
                Checkout github
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row  gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1 relative group overflow-hidden">
            <img
              src={Project5}
              className="w-full h-auto transition-transform duration-300 transform-gpu group-hover:scale-110"
            />
            <h3 className="text-2xl font-semibold mt-8">
              Eat-n-Split (Responsive bill splitting website)
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              React, React Hooks & Create-React-App
            </p>
            <div className="flex gap-4 mt-12">
              <button
                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                onClick={() =>
                  window.open(
                    "https://eat-split-hari2096.vercel.app/",
                    "_blank"
                  )
                }
              >
                Live preview
              </button>
              <button
                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                onClick={() =>
                  window.open(
                    "https://github.com/Hari-Vijayaraghavan96/Eat-Split",
                    "_blank"
                  )
                }
              >
                Checkout github
              </button>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1 relative group overflow-hidden">
            <img
              src={Project6}
              className="w-full h-auto transition-transform duration-300 transform-gpu group-hover:scale-110"
            />
            <h3 className="text-2xl font-semibold mt-8">
              Travel List (Responsive website to organize travel essentials )
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              React, React Hooks & Create-React-App
            </p>
            <div className="flex gap-2 mt-12">
              <button
                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                onClick={() =>
                  window.open(
                    "https://travel-list-hari2096.vercel.app/",
                    "_blank"
                  )
                }
              >
                Live preview
              </button>
              <button
                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                onClick={() =>
                  window.open(
                    "https://github.com/Hari-Vijayaraghavan96/travel-list",
                    "_blank"
                  )
                }
              >
                Checkout github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
