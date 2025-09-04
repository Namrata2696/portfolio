import { useState, createContext, useEffect } from 'react';
import { singleProjectData as singleProjectDataArr } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, id }) => {
	const [singleProjectData, setSingleProjectData] = useState(null);
console.log('singleProjectData::11', singleProjectDataArr, id)
useEffect(() => {
		if (id) {
			const foundProject = singleProjectDataArr.find((project) => Number(project.id) === Number(id));
			
			setSingleProjectData(foundProject || null);
		}
	}, [id]);


	return (
		<SingleProjectContext.Provider value={{ singleProjectData }}>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
