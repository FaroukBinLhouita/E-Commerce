function Button({
  paddingX = "4",
  paddingY = "2",
  children,
  width,
  moreClasses,
  onClick,
}) {
  return (
    <button
      className={`
        bg-[#DB4444] 
        text-white 
        px-${paddingX}
        py-${paddingY}
        gap-[10px]
        rounded 
        duration-200
        w-[${width}px]
      hover:bg-red-700 
      transition
      ${moreClasses}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
