import { FaTimesCircle } from "react-icons/fa";

interface ErrorModalProps {
  errorMessage: string;
  onClose: () => void;
}
export default function ErrorModal({ errorMessage, onClose }: ErrorModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-white rounded-lg p-6 w-[350px] shadow-xl text-center z-10">
        <FaTimesCircle className="text-red-500 text-4xl mx-auto mb-4" />
        <h2 className="font-bold text-lg">Error</h2>
        <p className="text-sm mb-6 font-medium text-gray-700">{errorMessage}</p>

        <button
          className="border border-gray-400 rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
