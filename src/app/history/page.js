// pages/history.js
import Image from 'next/image';
import "@/app/history/history.css";

export default function History() {
  return (
    <div className="history-page">
      <h1>History</h1>

      <section className="timeline">
        <h2>Timeline</h2>
        <div className="timeline-event">
          <h3>Formation of the Order (1119 AD)</h3>
          <p>Learn about the founding of the Knights Templar and their early missions.</p>
        </div>
        <div className="timeline-event">
          <h3>The Crusades</h3>
          <p>Explore the Templars' role in the Crusades and their rise to power.</p>
        </div>
        <div className="timeline-event">
          <h3>The Downfall (1307 AD)</h3>
          <p>Discover the events that led to the dramatic downfall of the Knights Templar.</p>
        </div>
      </section>

      <section className="featured-articles">
        <h2>Featured <span>Articles</span></h2>
        <div className="article">
         <div className="content-img">
         <Image src="/images/medieval-knights.jpg" alt="Medieval Knights" width={600} height={400} />
         </div>
          <div className="description">
          <h3>The Founding Members of the Knights Templar</h3>
          <p>Meet the key figures who established the order.</p>

          </div>
      
        </div>
        <div className="article">
            <div className="content-img">
                
          <Image src="/images/holy.jpeg" alt="Holy Grail" width={400} height={400} />
            </div>
          <div className="discription">

          <h3>The Templars and the Holy Grail: Myth or Reality?</h3>
          <p>An exploration of the connection between the Templars and the Holy Grail.</p>
        </div>
          </div>
          
      </section>
    </div>
  );
}
