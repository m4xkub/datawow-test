export default function Page() {
  return (
    <div className="w-full">
      <div className="overflow-x-auto m-8">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300 font-semibold">
                Date time
              </th>
              <th className="px-4 py-2 border border-gray-300 font-semibold">
                Username
              </th>
              <th className="px-4 py-2 border border-gray-300 font-semibold">
                Concert name
              </th>
              <th className="px-4 py-2 border border-gray-300 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                12/09/2024 15:00:00
              </td>
              <td className="px-4 py-2 border border-gray-300">Sara John</td>
              <td className="px-4 py-2 border border-gray-300">
                The festival Int 2024
              </td>
              <td className="px-4 py-2 border border-gray-300">Cancel</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                12/09/2024 10:39:20
              </td>
              <td className="px-4 py-2 border border-gray-300">Sara John</td>
              <td className="px-4 py-2 border border-gray-300">
                The festival Int 2024
              </td>
              <td className="px-4 py-2 border border-gray-300">Reserve</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
