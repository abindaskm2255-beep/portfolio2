import { useEffect } from "react";

export default function ReaderModal({ item, type, onClose }) {
  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="modal-overlay show"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        {item.img && <img src={item.img} alt={item.title} />}
        <div className="card-tag">
          {item.tag || (type === "blog" ? "Blog" : "Web Content")}
        </div>
        <h2>{item.title}</h2>
        <div className="modal-body">{item.content || item.desc}</div>
      </div>
    </div>
  );
}
