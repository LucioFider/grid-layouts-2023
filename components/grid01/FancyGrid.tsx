const FancyGrid = () => {
  return (
    <section className="m-10 grid place-items-center min-h-screen ">
      <div className="grid p-4 max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-4">
        <h1 className="text-white text-4xl font-extrabold sm:grid sm:col-span-2 sm:gap-4 md:col-span-3 md:text-5xl md:grid-cols-3">
          <span className="md:col-span-2">Grid layout with Tailwind Css</span>
        </h1>
        <p className="text-white sm:row-start-2 sm:col-start-2 sm:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          exercitationem obcaecati dolorem sapiente, velit quia incidunt facere
          reprehenderit assumenda quod explicabo rem praesentium magni, esse
          optio suscipit. Illo, eius modi.
        </p>
        <div className="h-16 sm:h-auto sm:square bg-slate-500 rounded-lg" />
        <div className="h-16 sm:h-auto sm:square bg-teal-500 rounded-lg" />
        <div className="h-16 sm:h-auto sm:square bg-green-500 rounded-lg" />
        <div className="h-16 sm:h-auto sm:square bg-red-500 rounded-lg md:col-start-2" />
        <div className="h-16 sm:h-auto sm:square bg-violet-500 rounded-lg" />
        <div className="h-16 sm:h-auto sm:square bg-pink-500 rounded-lg" />
        <div className="h-16 sm:h-auto sm:square bg-blue-500 rounded-lg" />
        <div className="h-16 sm:h-auto sm:square bg-gray-500 rounded-lg" />
        <p className="self-center text-white md:text-lg md:col-span-2 md:text-center md:px-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
          aspernatur, hic debitis unde saepe porro et ut eligendi nesciunt iure
          laudantium
        </p>
      </div>
    </section>
  );
};

export default FancyGrid;
