// variants for the main on UnderConstruction
export const mainVariants = {
  seen: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
     
      delayChildren: 0.3,
      staggerChildren: 0.3, // Stagger children by .3 seconds
    },
  },
  unseen: {
    opacity: 0,
  },
}

// variants for the links on UnderConstruction
export const linkVariants = {
  seen: { 
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.4,
      type: "spring",
      ease: "linear",
      stiffness: 100,
      delayChildren: 0.3,
      staggerChildren: 0.3, // Stagger children by .3 seconds
    },
  },
  unseen: {
    y: 100,
    opacity: 0,
  },
}

// variants for the h1 on UnderConstruction
export const titleVariants = {
  seen: { 
    y: 0,
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      bounce: 0.4,
      type: "spring",
      ease: "linear",
    }
  },
  unseen: {
    y: 0,
    x: -100,
    opacity: 0,
    rotate: -300,
    
  },
}