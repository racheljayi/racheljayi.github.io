export default function Hero() {
  return (
    <section className="relative flex justify-center items-center w-100 h-[90vh] bg-rachelCream overflow-x-hidden">
      {/* 0 */}
      <div className="absolute flex justify-center align-center -left-[50vw]">
        <div className="flex flex-col items-center align-column w-100">
          <div className="flex h-[5vh] w-[90%] align-center justify-between text-rachelBlue tracking-tighter font-normal">
            <p>WATERLOO BRIDGE</p>
            <p>VEILED SUN</p>
          </div>
          <img
            src="/backgrounds/Waterloo.jpg"
            className="h-[73vh] rounded-[50px]"
          />
        </div>
          </div>
          
      {/* 1 */}
      <div className="flex justify-center align-center">
        <div className="flex flex-col items-center align-column w-100">
          <div className="flex h-[5vh] w-[90%] align-center justify-between text-rachelBlue tracking-tighter font-normal">
            <p>WATERLOO BRIDGE</p>
            <p>VEILED SUN</p>
          </div>
          <img
            src="/backgrounds/Waterloo.jpg"
            className="h-[73vh] rounded-[50px]"
          />
          <div className="absolute top-[40%] text-center">
            <p className="text-rachelBlue font-bricela text-5xl z-10">
              Rachel Jan's
            </p>
            <p className="text-white font-bricela text-9xl">Porftolio</p>
          </div>
          <div className="absolute bottom-[20%] flex justify-center items-center space-x-10">
            <img src="/icons/backward.png" className="h-[10vh]" />
            <img src="/icons/pause.png" className="h-[8vh]" />
            <img src="/icons/forward.png" className="h-[10vh]" />
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="absolute flex justify-center align-center w-[75vw] -right-[56vw]">
        <div className="flex flex-col items-center align-column w-100 ">
          <div className="flex h-[5vh] w-[90%] align-center justify-between text-rachelBlue tracking-tighter font-normal ">
            <p>WATERLOO BRIDGE</p>
            <p>VEILED SUN</p>
          </div>
          <img
            src="/backgrounds/Waterloo.jpg"
            className="h-[73vh] rounded-[50px] "
          />
        </div>
      </div>
    </section>
  );
}
