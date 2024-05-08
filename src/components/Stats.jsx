export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat count={stats.wordCount} label="words" />
      <Stat count={stats.numberOfCharacters} label="characters" />
      <Stat count={stats.facebookCharacterCount} label="facebook" />
      <Stat count={stats.twitterCharacterCount} label="x" />
    </section>
  );
}

function Stat({ count, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${count < 0 ? "stat__number--limit" : ""}`}
      >
        {count}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
