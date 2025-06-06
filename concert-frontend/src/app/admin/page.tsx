"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import StatComponent from "../components/statComponent";
export default function Page() {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      redirect("/login");
    } else {
      setIsAuthorized(true);
    }
  }, []);

  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col items-center justify-center px-4">
      {/* <div className="flex w-full max-w-5xl gap-16 mt-3 text-white">
        <div className="flex-1 bg-sky-800 text-center flex items-center justify-center rounded">
          Total of seats
        </div>
        <div className="flex-1 bg-emerald-600  text-center flex items-center justify-center rounded">
          Reserve
        </div>
        <div className="flex-1 bg-red-400 text-center flex items-center justify-center rounded">
          Cancel
        </div>
      </div> */}

      <StatComponent />

      <div className="flex space-x-6 mt-5 w-full text-xl">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-2 ${
            activeTab === "overview"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("create")}
          className={`pb-2 ${
            activeTab === "create"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          Create
        </button>
      </div>

      {/* <div className="h-[2000px] w-full bg-black mt-5 overflow-y-scroll flex flex-col items-center">
        <div className="w-[80%] h-[400px] bg-amber-300 mt-4"></div>
        <div className="w-[80%] h-[400px] bg-amber-300 mt-4"></div>
        <div className="w-[80%] h-[400px] bg-amber-300 mt-4"></div>
        <div className="w-[80%] h-[400px] bg-amber-300 mt-4"></div>
        <div className="w-[80%] h-[400px] bg-amber-300 mt-4"></div>
        <div className="w-[80%] h-[400px] bg-amber-300 mt-4"></div>
        <div className="w-[80%] h-[400px] bg-amber-300 mt-4"></div>
      </div> */}

      <div className="w-full h-[2000px] overflow-y-auto flex flex-col mt-10">
        {activeTab == "overview" && (
          <div className="space-y-12 mb-4">
            <div className=" mx-10 space-y-4 bg-white rounded-lg border border-gray-400 p-8">
              <p className="text-3xl font-bold text-blue-400">Concert Name</p>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                illum quia officiis assumenda reprehenderit eum sapiente ipsa?
                Soluta, vero et! Nisi quidem ab assumenda corrupti provident
                nemo, sunt accusamus. Veniam! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Quod illum quia officiis assumenda
                reprehenderit eum sapiente ipsa? Soluta, vero et! Nisi quidem ab
                assumenda corrupti provident nemo, sunt accusamus. Veniam!
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaUser />
                  <span>500</span>
                </div>

                <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>

            <div className=" mx-10 space-y-4 bg-white rounded-lg border border-gray-400 p-8">
              <p className="text-3xl font-bold text-blue-400">Concert Name</p>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                illum quia officiis assumenda reprehenderit eum sapiente ipsa?
                Soluta, vero et! Nisi quidem ab assumenda corrupti provident
                nemo, sunt accusamus. Veniam! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Quod illum quia officiis assumenda
                reprehenderit eum sapiente ipsa? Soluta, vero et! Nisi quidem ab
                assumenda corrupti provident nemo, sunt accusamus. Veniam!
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaUser />
                  <span>500</span>
                </div>

                <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>

            <div className=" mx-10 space-y-4 bg-white rounded-lg border border-gray-400 p-8">
              <p className="text-3xl font-bold text-blue-400">Concert Name</p>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                illum quia officiis assumenda reprehenderit eum sapiente ipsa?
                Soluta, vero et! Nisi quidem ab assumenda corrupti provident
                nemo, sunt accusamus. Veniam! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Quod illum quia officiis assumenda
                reprehenderit eum sapiente ipsa? Soluta, vero et! Nisi quidem ab
                assumenda corrupti provident nemo, sunt accusamus. Veniam!
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaUser />
                  <span>500</span>
                </div>

                <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>

            <div className=" mx-10 space-y-4 bg-white rounded-lg border border-gray-400 p-8">
              <p className="text-3xl font-bold text-blue-400">Concert Name</p>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                illum quia officiis assumenda reprehenderit eum sapiente ipsa?
                Soluta, vero et! Nisi quidem ab assumenda corrupti provident
                nemo, sunt accusamus. Veniam! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Quod illum quia officiis assumenda
                reprehenderit eum sapiente ipsa? Soluta, vero et! Nisi quidem ab
                assumenda corrupti provident nemo, sunt accusamus. Veniam!
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaUser />
                  <span>500</span>
                </div>

                <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab == "create" && (
          <div className="h-[90%] max-h-[478px] bg-white border border-gray-400 rounded-lg p-8 space-y-6 overflow-scroll">
            <p className="text-4xl font-bold text-blue-400">Create</p>
            <hr />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-lg mb-2">
                  Concert Name
                </label>
                <input
                  type="text"
                  placeholder="Please input concert name"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block font-semibold text-lg mb-2">
                  Total of seat
                </label>
                <div className="relative">
                  <input
                    type="number"
                    defaultValue="500"
                    className="w-full border border-gray-300 rounded px-4 py-2 pr-10"
                  />
                  {/* <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
                </div>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-lg mb-2">
                Description
              </label>
              <textarea
                placeholder="Please input description"
                className="w-full border border-gray-300 rounded px-4 py-2 h-28"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                {/* <FaSave /> */}
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
