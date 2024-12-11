import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
    <h1 className="text-2xl font-bold mb-8">Edufeedback App</h1>
    <Link href="/login">
      <button className="bg-purple-500 text-white px-6 py-3 rounded-md">
        Iniciar sesión
      </button>
    </Link>
  </div>
  );
}
