import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2, User, Briefcase, Mail } from 'lucide-react';
import NavLink from './NavLink';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', icon: <User size={20} />, label: 'About' },
    { href: '#projects', icon: <Code2 size={20} />, label: 'Projects' },
    { href: '#work', icon: <Briefcase size={20} />, label: 'Work' },
    { href: '#contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavLink key={item.href} {...item} mobile />
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;