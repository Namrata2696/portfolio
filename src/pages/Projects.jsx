import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid type="projects" />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
