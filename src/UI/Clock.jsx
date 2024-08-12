function Clock({ number, clock }) {
  return (
    <div className="w-16 rounded-full bg-white flex flex-col justify-center items-center py-4">
      <p className="font-semibold text-black">{number}</p>
      <p className="text-xs font-normal text-black">{clock}</p>
    </div>
  );
}

export default Clock;
