export const classes = (...passedClasses: (string | undefined | false)[]) =>
  passedClasses.filter((passedClass) => passedClass).join(" ");
