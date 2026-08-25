import ContentCard from "./ContentCard.jsx";

export default function ContentGrid({
  id,
  eyebrow,
  title,
  description,
  items,
  type,
  onOpen,
  emptyLabel,
}) {
  const ordered = [...items].reverse();

  return (
    <section id={id}>
      <div className="wrap">
        <div className="section-head reveal in">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2 style={{ marginTop: 14 }}>{title}</h2>
          </div>
          <p>{description}</p>
        </div>
        <div className="card-grid">
          {ordered.length === 0 ? (
            <div className="empty-state">
              <h3 style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 600 }}>
                No {type === "blog" ? "blogs" : "web content"} yet
              </h3>
              <p>{emptyLabel}</p>
            </div>
          ) : (
            ordered.map((item, i) => (
              <ContentCard
                key={item.title + i}
                item={item}
                type={type}
                onOpen={onOpen}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
