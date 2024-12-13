import { motion } from 'framer-motion';
import Scene from '../canvas/Scene';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Creative Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Crafting immersive digital experiences
            </p>
            
            <div className="flex justify-center space-x-6">
              <SocialLink href="#" icon={<GithubIcon size={24} />} />
              <SocialLink href="#" icon={<LinkedinIcon size={24} />} />
              <SocialLink href="#" icon={<TwitterIcon size={24} />} />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-white"
        >
          <p className="text-sm">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="text-white hover:text-indigo-400 transition-colors"
  >
    {icon}
  </motion.a>
);

export default Hero;