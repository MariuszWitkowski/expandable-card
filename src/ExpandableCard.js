import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
function ExpandableCard({ renderExpandedCard, renderNormalCard }) {
  const [open, setOpen] = useState(false);

  const renderProps = {
    open: () => setOpen(true),
    close: () => setOpen(true)
  };

  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div
          onClick={() => setOpen(false)}
          className="expanded-card"
          layoutId="expandable-card"
        >
          {renderExpandedCard(renderProps)}
        </motion.div>
      ) : (
        <motion.div
          onClick={() => setOpen(true)}
          className="normal-card"
          layoutId="expandable-card"
        >
          {renderNormalCard(renderProps)}
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}

export default ExpandableCard;
