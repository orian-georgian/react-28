import "./Card.css";

function Card({ color, title, children }) {
  const classNames = color ? `card ${color}` : "card";

  return (
    <div className={classNames}>
      {title ? <h1>{title}</h1> : null}
      <div>{children}</div>
    </div>
  );
}

export default Card;
