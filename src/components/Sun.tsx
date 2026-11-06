export default function Sun() {
  return (
    <div className="absolute  flex justify-center items-center pointer-events-none z-0">

      <img
        src="/sun-light.webp"
        alt="sun-light"
        className="absolute z-0 w-164 select-none max-w-none object-contain"
      />

      <img
        src="/sun.webp"
        alt="sun"
        className="relative z-10 w-96 select-none max-w-none object-contain "
      />

    </div>
  );
}
