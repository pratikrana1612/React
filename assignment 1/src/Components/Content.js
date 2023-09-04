export default function Content({ content, className }) {
  return (
    <div className={className}>
      <img src={content.image} alt={content.alt} />
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </div>
  );
}
