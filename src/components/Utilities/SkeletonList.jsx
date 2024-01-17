export default function SkeletonList() {
  const skeleton = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <div className="px-4 relative z-10">
      <div className="flex justify-between items-center py-4">
        <h1 className="font-bold py-6 pb-4 px-36 bg-slate-700 animate-pulse rounded-lg"></h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-8 gap-x-1 md:px-8 lg:px-10 xl:px-24 gap-y-4 gap-1">
        {skeleton.map((_, index) => {
          return (
            <div
              className="flex justify-center h-72 lg:h-90 xl:h-96"
              key={index}
            >
              <div className="h-full w-[95%] ">
                <div className="flex justify-center items-center h-[80%] rounded-lg bg-slate-700 animate-pulse"></div>

                <h1 className="font-bold truncate mt-2 py-2 w-32 rounded-md bg-slate-700 animate-pulse"></h1>
                <h3 className="font-bold bg-slate-700 rounded-md w-20 py-2 mt-2 animate-pulse"></h3>
              </div>
              ;
            </div>
          );
        })}
      </div>
    </div>
  );
}
