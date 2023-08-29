//? nextjs'de tüm componentler default olarak server componenttir. client component kullanmak için "use-client" direktifini kullanmamız gerekir

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
    </div>
  );
}
