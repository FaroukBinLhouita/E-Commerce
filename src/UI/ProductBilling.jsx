function ProductBilling({ src, title, price }) {
  return (
    <div className="flex gap-[210px] items-center">
      <div className="flex items-center gap-4">
        <img src={src} alt={title} className="w-14 h-14" />
        <p className="w-24">{title}</p>
      </div>
      <p>${price}</p>
    </div>
  );
}

export default ProductBilling;
