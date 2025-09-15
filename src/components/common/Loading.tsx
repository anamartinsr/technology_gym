export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-(--secondary-color) text-white">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-(--primary-color) mb-4"></div>
        <p className="text-lg">Carregando...</p>
      </div>
    </div>
  );
}
