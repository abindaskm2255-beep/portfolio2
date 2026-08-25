import ArrowIcon from "./ArrowIcon.jsx";

export default function Hero({ profile, blogCount, webCount }) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-eyebrow eyebrow">{profile.role}</div>
          <h1>
            {profile.headline.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
            <span className="type-cursor"></span>
          </h1>
          <p className="hero-sub">{profile.sub}</p>
          <div className="hero-cta">
            <a href="#blogs" className="btn btn-solid">
              View my work <ArrowIcon />
            </a>
            <a href="#contact" className="btn btn-line">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <b>{blogCount}</b>
            <span>Blogs Published</span>
          </div>
          <div className="stat">
            <b>{webCount}</b>
            <span>Web Pages Written</span>
          </div>
          <div className="stat">
            <b>25+</b>
            <span>Clients Served</span>
          </div>
          <div className="stat">
            <b>100%</b>
            <span>SEO-First Content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
