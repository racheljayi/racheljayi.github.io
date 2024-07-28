type Project = {
    image: string;
    name: string;
    onImageClick: () => void;
};

export default function ProjectCard(props: Project) {
    
    return (
        <div className="flex flex-col items-center justify-center">
            <button onClick={props.onImageClick} className="w-[80%] h-auto ">
                <img src={props.image} className="rounded-[25px]" />

            </button>
            <div className="w-[85%] text-left">
                <h1 className="mt-4 text-2xl font-bold text-rachelBlue">{props.name}</h1>
            </div>
        </div>
    )
}