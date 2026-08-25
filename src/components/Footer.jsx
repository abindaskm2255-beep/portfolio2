export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <p>© {year} Abin. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
