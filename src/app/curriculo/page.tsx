export default function CurriculoPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <iframe
        src="/curriculo.pdf"
        className="w-full h-screen border-none"
      />
    </div>
  );
}
