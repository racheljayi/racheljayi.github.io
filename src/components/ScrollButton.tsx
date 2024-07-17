type props = {
	sectionId: string,
	name: string,
	id?: string,
	className?: string
}


const ScrollButton = (props: props) => {
	const scrollToDiv = () => {
		const section = document.getElementById(props.sectionId);
		const headerElement = document.getElementById('header-container');
		if (headerElement && section) {
			const headerHeight = headerElement.offsetHeight;
			const sectionElement = section.getBoundingClientRect()
			const sectionPosition = sectionElement.top + window.scrollY - headerHeight;
			window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
		}
	};

	return (
		<button className='text-[#265681]' onClick={scrollToDiv}>
			<p className="font-phantomSans text-lg tracking-tighter">{props.name}</p>
		</button>
	);
}

export default ScrollButton;
