import { FaTimesCircle } from "react-icons/fa";

export default function ConfirmDeleteModal({
  concertName,
  onCancel,
  onConfirm,
}: ConfirmDeleteModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-white rounded-lg p-6 w-[350px] shadow-xl text-center z-10">
        <FaTimesCircle className="text-red-500 text-4xl mx-auto mb-4" />
        <h2 className="font-bold text-lg">Are you sure to delete?</h2>
        <p className="text-sm mb-6 font-medium text-gray-700">
          "{concertName}"
        </p>

        <div className="flex justify-center gap-4">
          <button
            className="border border-gray-400 rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}
