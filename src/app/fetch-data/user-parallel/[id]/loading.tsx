export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="absolute w-12 h-12 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
        <div className="absolute w-12 h-12 rounded-full border-4 border-t-transparent border-red-500 animate-spin animation-delay-200"></div>
        <div className="absolute w-12 h-12 rounded-full border-4 border-t-transparent border-green-500 animate-spin animation-delay-400"></div>
      </div>
    </div>
  );
}
