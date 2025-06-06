import { FaTrash, FaUser } from "react-icons/fa";

export default function Concert() {
  return (
    <div className=" mx-10 space-y-4 bg-white rounded-lg border border-gray-400 p-8">
      <p className="text-3xl font-bold text-blue-400">Concert Name</p>
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod illum
        quia officiis assumenda reprehenderit eum sapiente ipsa? Soluta, vero
        et! Nisi quidem ab assumenda corrupti provident nemo, sunt accusamus.
        Veniam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
        illum quia officiis assumenda reprehenderit eum sapiente ipsa? Soluta,
        vero et! Nisi quidem ab assumenda corrupti provident nemo, sunt
        accusamus. Veniam!
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
  );
}
