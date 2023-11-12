import { motion} from "framer-motion";
import {FC} from "react";

export const transition = (Delegate: FC) => {
    const ease = [0.22, 1, 0.33, 1]
    return () => (
        <>
            <Delegate/>
            <motion.div
                className={"slide-in"}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease }}
            />
            <motion.div
                className={"slide-out"}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.3, ease }}
            />
        </>
    )
}
