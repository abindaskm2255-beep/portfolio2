export default function About({ profile }) {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">About</div>
            <h2 style={{ marginTop: 14 }}>The person</h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>{profile.about1}</p>
            <p>{profile.about2}</p>
            <ul className="skills-list">
              {profile.skills.map((skill) => (
                <li key={skill.label}>
                  <span>{skill.label}</span>
                  <span>{skill.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-card">
            <div className="eyebrow">Get in touch</div>
            <h3>{profile.name}</h3>
            <p>{profile.blurb}</p>
            <div className="about-contact-line">
              <span>Email</span>
              <span>{profile.email}</span>
            </div>
            <div className="about-contact-line">
              <span>Location</span>
              <span>{profile.location}</span>
            </div>
            <div className="about-contact-line">
              <span>Status</span>
              <span>{profile.status}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
