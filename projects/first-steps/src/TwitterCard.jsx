export function TwitterCard({ username, name, isFollowing }) {
  return (
    <article className="TwitterCard">
      <header className="TwitterCard-header">
        <img
          src={`https://unavatar.io/${username}`}
          alt="icon"
          className="TwitterCard-img"
        />
        <div className="TwitterCard-info">
          <strong>{username}</strong>
          <span className="TwitterCard-infoName">@{name}</span>
        </div>
      </header>
      <aside className="TwitterCard-aside">
        <button className="TwitterCard-followButton">Seguir</button>
      </aside>
    </article>
  );
}
