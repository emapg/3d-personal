import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  mobile?: boolean;
}

const NavLink = ({ href, icon, label, mobile }: NavLinkProps) => {
  const baseClasses = "flex items-center gap-2 text-white hover:text-indigo-400 transition-colors";
  const mobileClasses = "block px-3 py-2 text-base font-medium";
  const desktopClasses = "text-sm font-medium";

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {label}
    </motion.a>
  );
};

export default NavLink;