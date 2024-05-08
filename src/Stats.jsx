export default function Stats() {
  return (
    <section className="stats">
      <Stat count={0} label="words" />
      <Stat count={0} label="characters" />
      <Stat count={2200} label="facebook" />
      <Stat count={280} label="x" />
    </section>
  );
}

function Stat({ count, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{count}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
