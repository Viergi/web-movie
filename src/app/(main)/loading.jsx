export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* <div className="custom-loader flex justify-center items-center">
      </div> */}
      <div className="flex justify-center items-center gap-1">
        <div className="box box-1 bg-accent h-10 w-2 "></div>
        <div className="box box-2 bg-accent h-10 w-2 "></div>
        <div className="box box-3 bg-accent h-10 w-2 "></div>
        <div className="box box-4 bg-accent h-10 w-2 "></div>
        <div className="box box-5 bg-accent h-10 w-2 "></div>
      </div>
    </div>
  );
}
