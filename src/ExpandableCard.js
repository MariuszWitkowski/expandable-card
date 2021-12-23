import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
function ExpandableCard({
  openOnContainer,
  renderExpandedCard,
  renderNormalCard
}) {
  const [open, setOpen] = useState(false);

  const renderProps = {
    open: () => setOpen(true),
    close: () => setOpen(false)
  };

  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div
          onClick={openOnContainer ? renderProps.close : null}
          className="expanded-card"
          layoutId="expandable-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {renderExpandedCard(renderProps)}
        </motion.div>
      ) : (
        <motion.div
          onClick={openOnContainer ? renderProps.open : null}
          className="normal-card"
          layoutId="expandable-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {renderNormalCard(renderProps)}
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}

export default ExpandableCard;
