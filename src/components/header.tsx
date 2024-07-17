import ScrollButton from "./ScrollButton"

export default function Header() {
    return (
        <nav className="sticky top-0 flex justify-center align-center w-100 h-[6vh] bg-[#FFF7EE] space-x-20">
            <ScrollButton name="ABOUT" sectionId="hero-section" className="text-[#265681]" />
            <ScrollButton name="EXPERIENCE" sectionId="hero-section" className="text-[#265681]" />
            <ScrollButton name="PORTFOLIO" sectionId="hero-section" className="text-[#265681]" />
        </nav>
    )
}