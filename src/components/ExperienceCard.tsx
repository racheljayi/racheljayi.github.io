type experience = {
    date: string;
    title: string;
    desc: string;
}

export default function ExperienceCard(props: experience) {
    return (
        <div className="text-left w-[80%]">
            <p className="text-rachelBlue">{ props.date }</p>
            <h1 className="font-bold">{ props.title }</h1>
            <p className="">{ props.desc }</p>
        </div>
    )
}