import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaCode, FaNodeJS, FaBootstrap, FaMobileAlt, FaGithub, FaMicrosoft} from 'react-icons/fa';
import { SiMongodb, SiVercel } from 'react-icons/si';
import './styles/Skills.css';

const skills = [
  { icon: <FaHtml5 />, title: 'HTML', description: 'Semantic markup, accessibility, SEO optimization' },
  { icon: <FaCss3Alt />, title: 'CSS', description: 'Flexbox, Grid, animations, responsive design' },
  { icon: <FaBootstrap />, title: 'Bootstrap', description: 'Responsive Design, Components, Grid System, Utilities' },
  { icon: <FaMobileAlt />, title: 'Responsive Web Design', description: 'Flexbox, Grid, Media Queries, Mobile-first Design' },
  { icon: <FaJs />, title: 'JavaScript', description: 'ES6+, DOM manipulation, async programming' },
  { icon: <FaReact />, title: 'React.js', description: 'Hooks, Context API, Redux, React Router' },
  { icon: <FaNodeJS />, title: 'Node.js ', description: 'REST APIs, Authentication, Server-side Development' },
  { icon: <SiMongodb />, title: 'MongoDB ', description: 'NoSQL Database, CRUD Operations, Queries, Data Modeling' },
  { icon: <FaCode />, title: 'C ', description: 'Programming fundamentals, pointers, arrays, functions' },
  { icon: <FaCode />, title: 'C++', description: 'OOPs, Functions, Basic Memory Management' },
  { icon: <FaPython />, title: 'Python', description: 'OOPs, Functional Programming, Standard Library' },
  { icon: <SiVercel />, title: 'Vercel', description: 'Deployment, Hosting, CI/CD, Web Applications' },
  { icon: <FaGithub />, title: 'GitHub', description: 'Version Control, Git, Collaboration, Repository Management' },
  { icon: <FaMicrosoft />, title: 'MS Office', description: 'Word, Excel, PowerPoint, Document Management' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
