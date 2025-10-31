import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>
			<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				Key Achievements
			</p>
			<div className="gap-2" style={{ margin: '20px 16rem' }}>
				<ul style={{listStyle: 'disc'}}>
					<li>Increased user engagement by 35% through UI and performance optimization.</li>
					<li>Built reusable React component libraries, boosting team efficiency by 30%.</li>
					<li>Mentored junior developers and conducted regular peer reviews.</li>
					<li>Experienced in integrating and handling edge cases in third-party payment gateways like Stripe and Razorpay, including webhook handling, transaction status monitoring, and designing fallback UI components for failed or delayed transactions. like Stripe and Razorpay, including webhook handling, transaction status, and error fallback UI.</li>
					<li>Successfully collaborated in Agile teams across remote and in-house environments.</li>
					<li>Regularly worked in Agile Scrum teams with sprint planning, Jira ticketing, and continuous integration using Git version control. Strong communication and daily sync participation. with sprint planning, Jira ticketing, and continuous integration using Git version control. Strong communication and daily sync participation.</li>
				</ul>
			</div>
		</div>

			{/** Counter without paddings */}
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div> */}

			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div> */}
		</AboutMeProvider>
	);
};

export default About;
