type Project = {
    name: string;
    subtitle: string;
    github: string;
    about: string;
    tags: string[];
    onClose: () => void;
};

export default function ExpandedProject(props: Project) {
    return (
        <div className="relative w-[45vw] h-full rounded-[50px] bg-[#8D97B2] flex items-center absolute">
            <div
                className="absolute inset-0 z-0 rounded-[50px] "
                style={{
                    backgroundImage: 'url("/backgrounds/Waterloo.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2, // Set the opacity of the background image
                }}
            />
        
            <div className="relative z-10 w-[40vw] my-[5%] mx-[8%] text-white">
                <button onClick={props.onClose} className="absolute top-3 right-5 p-2 rounded z-20">
                    <img src="/icons/delete.png" />
                </button>
            
                <h1 className="text-5xl">{props.name}</h1>
                <div className="space-y-1 mt-5 mb-4">
                    <h2 className="text-2xl">{props.subtitle}</h2>
                    <h3 className="italic"><a href={props.github}>{props.github}</a></h3>
                </div>
            
                <p dangerouslySetInnerHTML={{ __html: props.about }}></p>
            
                <div className="flex space-x-10 mt-6">
                    {
                    props.tags.map((tag, index) => {
                        return (
                        <div key={index} className="bg-white rounded-[20px] text-black text-center p-2 flex items-center justify-center">
                            <p className="m-0">{tag}</p>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
      

    )
}