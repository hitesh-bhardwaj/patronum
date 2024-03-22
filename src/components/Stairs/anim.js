export const expand = {
    initial: {
        top: 0
    },
    enter: (i) => ({
        top: "100vh",
        transition: {
            duration: 0.7,
            delay: 0.05,
            ease: [0.215, 0.61, 0.355, 1],
        },
        transitionEnd: { height: "0", top: "0" }
    }),
    exit: (i) => ({
        height: "100vh",
        transition: {
            duration: 0.7,
            delay: 0.05,
            ease: [0.215, 0.61, 0.355, 1]
        }
    })
}