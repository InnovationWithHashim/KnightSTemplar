import Link from 'next/link';
import "@/app/styles/navbar.css";
import Image from 'next/image';

const Navbar = () => {
    return (
        <section className="navbar-section">
            <div className="navbar-logo">
                <Link href="/">  <Image src="/images/logo-web.png" alt="logo" width={200} height={50} /> </Link>
            </div>
            <nav className="navbar-nav">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/history">History</Link></li>
                    <li><Link href="/legends">Legends</Link></li>
                    <li><Link href="/artifacts">Artifacts</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
