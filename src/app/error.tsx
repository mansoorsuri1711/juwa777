'use client';

export default function Error({
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-400 mb-6 text-center">
        We apologize for the inconvenience. Please try again.
      </p>
      <button
        onClick={reset}
        className="bg-transparent hover:bg-[#FFD10F]/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#FFD10F]"
      >
        Try again
      </button>
    </div>
  );
} 