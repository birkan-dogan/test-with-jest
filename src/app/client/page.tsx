'use client';

export default function ClientComponent() {
  const a = 1;
  const b = 9;
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col space-y-5">
      <h1>Client Component</h1>
      <p data-testid="my-text" className="text-red-400">
        Learn Test with Jest 🏆
      </p>
      <ul className="list-disc">
        <li>tea 🫖</li>
        <li>coffee ☕️</li>
        <li>milk 🍼</li>
      </ul>

      <span title="result">{a + b}</span>
    </div>
  );
}
