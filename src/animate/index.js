export const slideRight = {
  initial: {
    x: "-100vh",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      type: "spring",
      // damping: 25,
      // stiffness: 50,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};
export const slideLeft = {
  initial: {
    x: "100vh",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      type: "spring",
      // damping: 55,
      // stiffness: 500,
    },
  },
  exit: {
    x: "-100vh",
    opacity: 0,
  },
};

export const dropIn = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.8,
      type: "spring",
      // damping: 25,
      // stiffness: 500,
      //   delay: 0.3,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
export const dropInList = {
  initial: {
    y: "-20vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    y: "-10vh",
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

export const modalDropIn = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      type: "spring",
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const staggerChildren = {
  initial: {
    transition: {
      delay: 1,
      staggerChildren: 1,
    },
  },
  animate: {
    transition: {
      delay: 1,
      staggerChildren: 1,
    },
  },
};
export const dropInListItem = {
  initial: {
    scale: 0.9,
    // transition: {
    //   duration: 0.5,
    // },
  },
  animate: {
    scale: 1,
    // transition: {
    //   duration: 0.5,
    // },
  },
};
export const navPop = {
  initial: {
    y: "10vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};
export const pop = {
  initial: {
    y: "10vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
      type: "spring",
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};
export const popDelay = {
  initial: {
    y: "10vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2.2,
      duration: 0.7,
      type: "spring",
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};
export const dropDelay = {
  initial: {
    y: "-10vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.7,
      type: "spring",
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};
export const fadeRight = {
  initial: {
    x: "-10vh",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      type: "spring",
      // damping: 25,
      // stiffness: 50,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};
