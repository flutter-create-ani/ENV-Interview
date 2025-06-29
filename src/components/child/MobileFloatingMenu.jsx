import { useState } from 'react';
import {
  VscHome,
  VscLayout,
  VscMail,
  VscSettingsGear,
  VscSignIn,
  VscThreeBars,
} from 'react-icons/vsc';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    icon: <VscHome size={18} />,
    label: 'Home',
    route:  '/',
  },
  {
    icon: <VscMail size={18} />,
    label: 'Contact',
      route:  '/contact',
  },
  {
    icon: <VscSettingsGear size={18} />,
    label: 'Features',
route: '/features',
  },
  {
    icon: <VscLayout size={18} />,
    label: 'Dashboard',
 route: '/dashboard',
  },
];

export default function MobileFloatingMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <div className="relative">
        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute bottom-16 right-0 flex flex-col items-end space-y-2 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {items.map((item, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {navigate(item.route) 
                    setOpen(false);}}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white text-sm font-medium shadow-md hover:bg-gray-800 transition-all duration-200"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  
                  <span className="min-w-[80px] text-left">{item.label}</span>
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black">
                    {item.icon}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full shadow-lg hover:scale-110 transition-all duration-200"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
        >
          <VscThreeBars size={24} />
        </motion.button>
      </div>
    </div>
  );
}
