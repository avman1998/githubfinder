const Loader = () => {
  const arr = new Array(30);
  arr.fill("");

  return (
    <div className="flex gap-[20px] justify-between flex-wrap ">
      {arr.map((item, index) => {
        return (
          <div
            key={index}
            className="max-w-[300px] rounded max-h-[300px] min-w-[300px] min-h-[300px] bg-gray-300"
          >
            {}
          </div>
        );
      })}
    </div>
  );
};

export default Loader;
