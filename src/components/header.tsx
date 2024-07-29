import ScrollButton from "./ScrollButton"

export default function Header() {
    return (
        <nav id="header-container" className="sticky z-10 top-0 flex justify-center align-center w-100 h-[6vh] bg-rachelCream space-x-20">
            <ScrollButton name="ABOUT" sectionId="about" className="text-rachelBlue" />
            <ScrollButton name="EXPERIENCE" sectionId="experience" className="text-rachelBlue" />
            <ScrollButton name="PORTFOLIO" sectionId="portfolio" className="text-rachelBlue" />
        </nav>
    )
}