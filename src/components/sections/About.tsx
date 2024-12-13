import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const skills = [
  { icon: <Code2 size={24} />, name: 'Frontend Development', description: 'React, Vue, Angular' },
  { icon: <Database size={24} />, name: 'Backend Development', description: 'Node.js, Python, Java' },
  { icon: <Layout size={24} />, name: 'UI/UX Design', description: 'Figma, Adobe XD' },
  { icon: <Smartphone size={24} />, name: 'Mobile Development', description: 'React Native, Flutter' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a keen eye for creating beautiful and functional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="text-indigo-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;