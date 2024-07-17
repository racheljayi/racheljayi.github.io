export default function Hero() {
    return (
        <div className="flex justify-center align-center bg-[#FFF7EE] w-100 h-[95vh] pt-[6vh]">
            <div className="flex flex-col items-center align-column w-100">
                <div className="flex h-[5vh] w-[90%] align-center justify-between text-[#265681] tracking-tighter font-normal">
                    <p>WATERLOO BRIDGE</p>
                    <p>VEILED SUN</p>
                </div>
                <img src="/backgrounds/Waterloo.jpg" className="h-[73vh] rounded-[50px]"></img>
            </div>
        </div>
    );
}