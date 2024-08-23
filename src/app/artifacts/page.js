// pages/artifacts.js
import Image from 'next/image';
import "@/app/artifacts/artifacts.css";

export default function Artifacts() {
  return (
    <div className="artifacts-page">
      <h1>Artifacts</h1>

      <section className="templar-relics">
        <h2>Templar <span>Relics</span></h2>
        <div className="relic">
            <div>
            <Image src="/images/templar-cross.jpeg" alt="Templar Cross" width={600} height={400} />

            </div>
          <div className='description'>
          <h3>Templar Cross</h3>
          <p>The iconic symbol of the order, representing their faith and dedication.</p>

          </div>
         
        </div>
        <div className="relic">
        <div>
        <Image src="/images/templar-sword.jpeg" alt="The Templar Sword" width={600} height={400} />
        </div>
          <div className='description' >
          <h3>The Templar Sword</h3>
          <p>A weapon of power and prestige, used by the Templars in battle.</p>
        </div>
          </div>
      </section>

      <section className="mystery-artifacts">
        <h2>Mystery <span>Artifacts</span></h2>
        <div className="artifact">
          <div>
          <Image src="/images/ark-of-the-covenant.jpeg" alt="The Templar Ark" width={600} height={400} />
          </div>
          <div className='description'>
          <h3>The Templar Ark</h3>
          <p>Is there truth behind the legend of the Templars guarding the Ark of the Covenant?</p>
          </div>

          
        </div>
        <div className="artifact">
         <div>
         <Image src="/images/templar-coins.jpeg" alt="Templar Coins" width={600} height={400} />
         </div>
         <div className='description'>
         <h3>Templar Coins</h3>
         <p>Ancient coins said to carry the secrets of the Templars.</p>
         </div>
        </div>
      </section>
    </div>
  );
}
