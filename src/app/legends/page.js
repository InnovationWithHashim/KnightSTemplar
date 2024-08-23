// pages/legends.js
import Image from 'next/image';
import "@/app/legends/legends.css";

export default function Legends() {
  return (
    <div className="legends-page">
      <h1>Legends</h1>

      <section className="templar-myths">
        <h2>Templar <span>Myths</span></h2>
        <div className="myth">
          <h3>The Lost Templar Treasure</h3>
          <p>Unravel the mystery of the rumored treasure hidden by the Templars.</p>
        </div>
        <div className="myth">
          <h3>The Curse of the Templars</h3>
          <p>Learn about the curse supposedly placed on King Philip IV by the Templar Grand Master.</p>
        </div>
      </section>

      <section className="featured-stories">
        <h2>Featured <span>Stories</span></h2>
        <div className="story">
            <div>  <Image src="/images/shroud-of-turin.jpeg" alt="Shroud of Turin" width={600} height={400} /></div>
            <div>
                
          <h3>The Knights Templar and the Shroud of Turin</h3>
          <p>Explore the theory linking the Templars to the famous religious artifact.</p>

            </div>
        
        </div>
        <div className="story">
         <div>
         <Image src="/images/masonic-symbols.jpeg" alt="Masonic Symbols" width={600} height={400} />
         </div>
          <div>
          <h3>Templar Connections to Modern Freemasonry</h3>
          <p>Investigate the possible links between the Templars and modern-day secret societies.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
