import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-(--secondary-color) text-white px-6">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-6">Página não encontrada.</p>
      <Link
        to="/"
        className="bg-(--primary-color) text-(--secondary-color) px-6 py-3 rounded-2xl font-semibold hover:bg-(--primary-color) transition"
      >
        Voltar para a página inicial
      </Link>
    </section>
  );
}
