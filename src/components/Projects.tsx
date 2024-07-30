import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ExpandedProject from "./ExpandedProject"; // Ensure this import is correct

type Project = {
    image: string;
    name: string;
    subtitle: string;
    github: string;
    about: string;
    tags: string[];
};

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [expandedProject, setExpandedProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('project-data.json');
                const jsonData = await response.json();
                setProjects(jsonData.projects);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleProjectClick = (project: Project) => {
        if (expandedProject && expandedProject.name === project.name) {
            setExpandedProject(null);
        } else {
            setExpandedProject(project);
        }
    };

    const handleClose = () => {
        setExpandedProject(null);
    };

    // Ref to store the wrapper div
    const expandedProjectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (expandedProjectRef.current && !expandedProjectRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div id="portfolio" className="bg-rachelCream h-100 w-full flex flex-col items-center">
            {/* random rectangle */}
            <div className="absolute left-[3vw] bg-rachelBlue w-[94vw] h-[0.9vh]"></div>
            
            <div className="w-full h-[20vh] flex items-center align-center">
                <h1 className="text-9xl text-rachelBlue text-left ml-[3vw]">PORTFOLIO</h1>    
            </div>

            <div className="row flex flex-wrap w-full mt-10">
                {
                    projects.map((project, index) => (
                        <div
                            key={index}
                            className="column w-1/3 px-3 space-y-8 h-[55vh] border-2 border-rachelBlue flex items-center align-center justify-center"
                        >
                            <ProjectCard
                                image={project.image}
                                name={project.name}
                                onImageClick={() => handleProjectClick(project)}
                            />
                        </div>
                    ))
                }
            </div>

            {/* Conditionally render the ExpandedProject component */}
            {expandedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div ref={expandedProjectRef}>
                        <ExpandedProject
                            name={expandedProject.name}
                            subtitle={expandedProject.subtitle}
                            github={expandedProject.github}
                            about={expandedProject.about}
                            tags={expandedProject.tags}
                            onClose={handleClose}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
