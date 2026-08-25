import ArrowIcon from "./ArrowIcon.jsx";

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function ContentCard({ item, type, onOpen }) {
  return (
    <article className="card reveal in" onClick={() => onOpen(item, type)}>
      <div className="card-thumb">
        {item.img ? (
          <img src={item.img} alt={item.title} loading="lazy" />
        ) : (
          <div className="no-img">No thumbnail</div>
        )}
        <div className="card-thumb-overlay">
          <span>Read {type === "blog" ? "blog" : "details"}</span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-tag">
          {item.tag || (type === "blog" ? "Blog" : "Web Content")}
        </div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="card-foot">
          <span>{formatDate(item.date)}</span>
          <span className="read-link">
            Read more <ArrowIcon size={12} />
          </span>
        </div>
      </div>
    </article>
  );
}
