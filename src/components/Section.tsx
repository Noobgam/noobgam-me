import React, {FC, useState} from "react";
import {Text} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";

type SectionProps = {
    header: string;
    open?: boolean;
}

const SectionRaw: FC<React.PropsWithChildren<SectionProps>> = ({header, open, children}) => {
    const [isOpen, setOpen] = useState<boolean>(open ?? false);
    return (
            <div>
                <motion.div
                    whileHover={{
                        border: '1px solid',
                        padding: '1px',
                    }}
                >
                    <div onClick={() => setOpen(!isOpen)}>
                        <Text color={"tomato"}>
                            {(isOpen ? 'v' : '>') + ' ' + header}
                        </Text>
                    </div>
                </motion.div>
                <AnimatePresence>
                {isOpen && (<motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                        transition: {
                            duration: 0.2
                        },
                        opacity: 0,
                        y: -10,
                        dur: 10
                }}
                >
                    {children}
                </motion.div>)}
                </AnimatePresence>
            </div>
    )
}

export const Section = React.memo(SectionRaw);
