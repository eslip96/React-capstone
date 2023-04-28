function SearchResults({ results }) {
  if (!results) {
    return null;
  }

  return (
    <div className="search-results">
      {results.map((result) => {
        return (
          <div className="search-result" key={result.show.id}>
            {result.show?.image && (
              <img
                className="search-result__image"
                src={result.show.image.medium}
                alt={result.show.name}
              />
            )}
            <div className="search-result__content">
              <h3 className="search-result__title">{result.show?.name}</h3>
              <p
                className="search-result__summary"
                dangerouslySetInnerHTML={{ __html: result.show?.summary }}
              ></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
