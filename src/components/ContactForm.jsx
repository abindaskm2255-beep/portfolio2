import { useState } from "react";
import ArrowIcon from "./ArrowIcon.jsx";
import { profile } from "../data/content.js";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSending(true);

    setTimeout(() => {
      e.target.reset();
      setSending(false);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }, 700);
  }

  return (
    <>
      {/* Success Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "30px",
            right: "30px",
            background: "#111827",
            color: "#fff",
            padding: "18px 24px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
            zIndex: 9999,
            animation: "slideIn 0.4s ease",
            minWidth: "320px",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            ✓
          </div>

          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "17px",
              }}
            >
              Submitted Successfully!
            </div>

            <div
              style={{
                fontSize: "14px",
                color: "#d1d5db",
                marginTop: "4px",
              }}
            >
              Thank you for contacting me. I'll get back to you soon.
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <section id="contact">
        <div className="wrap">
          <div className="contact-wrap">
            <div className="contact-info reveal in">
              <div className="eyebrow">Let's work together</div>

              <h2 style={{ marginTop: 14 }}>
                Have a project in mind?
              </h2>

              <p>
                Tell me a little about what you need — a blog, a web page, or a
                whole content plan — and I'll get back to you within a day.
              </p>

              <div className="contact-detail">
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>

              <div className="contact-detail">
                <span>Based in</span>
                <div>{profile.location}</div>
              </div>
            </div>

            <form
              className="contact-form reveal in"
              onSubmit={handleSubmit}
            >
              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div className="field">
                <label htmlFor="cf-subject">Subject</label>
                <input
                  type="text"
                  id="cf-subject"
                  name="subject"
                  placeholder="What's this about?"
                />
              </div>

              <div className="field">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-solid"
                style={{
                  justifyContent: "center",
                  pointerEvents: sending ? "none" : "auto",
                }}
              >
                {sending ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit <ArrowIcon />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}