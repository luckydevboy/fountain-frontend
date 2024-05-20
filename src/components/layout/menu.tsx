import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useClickAway } from "react-use";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu = ({ onClose, isOpen }: Props) => {
  const menuRef = useRef(null);

  useClickAway(menuRef, () => {
    onClose();
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50"
          />
          <motion.div
            initial={{ right: "-75%" }}
            animate={{ right: 0 }}
            exit={{ right: "-75%" }}
            className="bg-white fixed w-3/4 inset-y-0"
            ref={menuRef}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Menu;
