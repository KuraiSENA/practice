import { useState } from "react";

export function TwitterCard({ children, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const following = isFollowing
    ? "TwitterCard-button is-following"
    : "TwitterCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="TwitterCard">
      <header className="TwitterCard-header">
        <img
          src={`https://unavatar.io/${children}`}
          alt="icon"
          className="TwitterCard-img"
        />
        <div className="TwitterCard-info">
          <strong>{children}</strong>
          <span className="TwitterCard-infoName">@{name}</span>
        </div>
      </header>
      <aside className="TwitterCard-aside">
        <button className={following} onClick={handleClick}>
          <span className="TwitterCard-followButton">{text}</span>
          <span className="TwitterCard-unFollowButton">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
