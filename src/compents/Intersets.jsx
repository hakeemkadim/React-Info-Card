import { useState } from "react";

export default function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="Interests">
      <h3>Interests</h3>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}
