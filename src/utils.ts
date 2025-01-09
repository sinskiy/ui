export function cn(...passedClasses: (string | undefined | false)[]) {
  return passedClasses.filter((passedClass) => passedClass).join(" ");
}
