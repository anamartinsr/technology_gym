export default function SectionLoading() {
  return (
    <div className="w-full flex items-center justify-center py-16 bg-(--secondary-color) text-white">
      <div className="flex items-center gap-3">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-(--primary-color)"></div>
        <span className="text-sm tracking-wide">Carregando seção...</span>
      </div>
    </div>
  );
}
