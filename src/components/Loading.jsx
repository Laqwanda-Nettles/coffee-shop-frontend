export default function Loading() {
  return (
    <div className="flex justify-center items-center gap-2 m-5">
      <span className="text-xl font-bold text-amber-900 animate-pulse">
        Coffee
      </span>

      <svg
        className="animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        width={46}
        height={46}
        viewBox="0 0 256 256"
      >
        <g fill="saddleBrown">
          <path
            d="M208 88v48a88 88 0 0 1-51.3 80H83.3A88 88 0 0 1 32 136V88Z"
            opacity={0.2}
          ></path>
          <path d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z"></path>
        </g>
      </svg>
      <span className="text-xl font-bold text-amber-900 animate-pulse">
        Loading
      </span>
    </div>
  );
}