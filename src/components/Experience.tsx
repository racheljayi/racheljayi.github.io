import ExperienceCard from "./ExperienceCard";
import { useState, useEffect } from "react"
type Experience = {
    date: string;
    title: string;
    desc: string;
}

type Extracurricular = {
    date: string;
    name: string;
    desc: string;
}

type School = {
    date: string,
    degree: string,
    school: string

}

export default function Experience() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [extracurriculars, setExtracurriculars] = useState<Extracurricular[]>([]);
    const [school, setSchool] = useState<School>({date: "", degree: "", school: ""});
    const [courses, setCourses] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/experience-data.json');
                const jsonData = await response.json();
                setExperiences(jsonData.experiences);
                setExtracurriculars(jsonData.extracurriculars);
                setSchool(jsonData.education.school)
                setCourses(jsonData.education.coursework);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div id="experience" className="bg-rachelCream w-100 flex align-center justify-center">
            <div className="absolute left-[20vw] bg-rachelBlue w-[60vw] h-[0.5vh]"></div>
            <div className="row flex flex-wrap w-[80%] my-20">
                {/* Experiences */}
                <div className="column w-1/3 px-3 space-y-8">
                    <h1 className="text-4xl">Experiences</h1>
                    {
                        experiences.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                date={experience.date}
                                title={experience.title}
                                desc={experience.desc}
                            />
                        ))
                    }
                </div>

                {/* Extracurriculars */}

                <div className="column w-1/3 px-3 space-y-8">
                    <h1 className="text-4xl">Extracurriculars</h1>
                    {
                        extracurriculars.map((extracurricular, index) => (
                            <ExperienceCard
                                key={index}
                                date={extracurricular.date}
                                title={extracurricular.name}
                                desc={extracurricular.desc}
                            />
                        ))
                    }
                </div>

                {/* School */}
                <div className="column w-1/3 px-3 space-y-8">
                    <h1 className="text-4xl">Education</h1>
                    <ExperienceCard
                        date={school.date}
                        title={school.degree}
                        desc={school.school}
                    />

                    <div>
                        <h1 className="font-bold">Relevant Coursework</h1>
                        <ul className="list-disc list-inside">
                            {
                                courses.map((course, index) => {
                                    return <li key={index}>{course}</li>;
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}