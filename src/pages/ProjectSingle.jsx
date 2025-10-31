import { useParams } from 'react-router-dom';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { motion } from 'framer-motion';
import { singleProjectData as singleProjectDataArr } from '../data/singleProjectData';
import { useEffect, useState } from 'react';

const ProjectSingle = () => {
	const { id } = useParams();
	const [singleProjectData, setSingleProjectData] = useState(null);
	console.log('id::11', id)
	// useEffect(() => {
	// 	console.log('id::', id)
	// 		if (id) {
	// 			const foundProject = singleProjectDataArr.find((project) => Number(project.id) === Number(id));
	// 			console.log('singleProjectData::11', singleProjectDataArr, id)
	// 			setSingleProjectData(foundProject || null);
	// 		}
	// 	}, [id]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<div>
				<ProjectHeader singleProjectData={singleProjectDataArr.find((project) => Number(project.id) === Number(id))} />
				<ProjectGallery singleProjectData={singleProjectDataArr.find((project) => Number(project.id) === Number(id))} />
				<ProjectInfo singleProjectData={singleProjectDataArr.find((project) => Number(project.id) === Number(id))} />
				{/* <ProjectRelatedProjects singleProjectData={singleProjectDataArr.find((project) => Number(project.id) === Number(id))} /> */}
			</div>
		</motion.div>
	);
};

export default ProjectSingle;
