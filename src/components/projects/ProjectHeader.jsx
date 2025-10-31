import { useContext } from 'react';
import { FiGlobe, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = ({singleProjectData}) => {
	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{singleProjectData?.ProjectHeader?.title}
			</p>
			<div className="flex">
				{singleProjectData?.ProjectHeader?.websiteLink &&
					<div className="flex items-center mr-10">
						<FiGlobe className="text-lg text-ternary-dark dark:text-ternary-light" />
						{
							<a href={singleProjectData?.ProjectHeader?.websiteLink} target="__blank" className="flex items-center">
								<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
									Go To Website
								</span>
							</a>
						}
					</div>
				}
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData?.ProjectHeader?.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
