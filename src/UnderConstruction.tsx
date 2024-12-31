import * as motion from "motion/react-client"

import "./UnderConstruction.css"
import { Links } from "./Links"
import { AdsuthLogo } from "./AdsuthLogo"
import { themeAtom } from "./atoms"
import { useAtom } from "jotai"
import { linkVariants, mainVariants, titleVariants } from "./defs"

export function UnderConstruction()
{
  const [ theme ] = useAtom( themeAtom )
  
  return <>
    <style>
      {`body { --theme-fore: ${theme}; }`}
    </style>
    <motion.main 
      initial = "unseen"
      whileInView = "seen"
      variants={mainVariants}
    >
      <motion.h1 variants={titleVariants}>Hi! :D</motion.h1>

      <motion.p variants={linkVariants}>
        I'm <b>Adam Sutherland</b>, a 4th year computer science student at RGU!
      </motion.p>
      
      <motion.p variants={linkVariants}>
        This site is currently under construction... 
      </motion.p>
      
      <motion.p variants={linkVariants}>
        ...But you can still check out my links and résumé! 
      </motion.p>

      <motion.div variants={linkVariants}>
        <Links />
      </motion.div>

      <motion.div variants={linkVariants} className="logo_wrapper">
        <AdsuthLogo />
      </motion.div>

    </motion.main>
  </>
}