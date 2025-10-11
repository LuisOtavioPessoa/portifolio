import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen text-white">
      <ParticlesBackground />
      <h1 className="text-4xl z-10">Bem-vindo</h1>
    </main>
  );
}
