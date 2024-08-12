function Stars({ rate }) {
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i < rate; i++) {
      stars.push("⭐");
    }
    return stars;
  };

  return (
    <p className="text-center">
      {renderStars(rate).map((star, index) => (
        <span className="pl-2" key={index}>
          {star}
        </span>
      ))}

      <span className="pl-2">({rate})</span>
    </p>
  );
}

export default Stars;
