// app/page.tsx or pages/index.tsx
import "@/app/styles/herosection.css";
import Image from "next/image";
import Link from 'next/link';

const Herosection = () => {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>Unveiling the Secrets of the <span>Knights Templar</span></h1>
        <p>Explore the history, legends, and mysteries surrounding the Knights Templar.</p>
        <Link href="/history" className="hero-button">Discover the Legacy</Link>
      </div>
      <div className="hero-image">
        <Image
          src="/images/main-pic.jpeg"
          alt="Picture of Knights Templer"
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </main>
  );
}

export default Herosection;
