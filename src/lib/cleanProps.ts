/**
 * Makes a component's props safe to spread into a Client Component. Puck's `puck` prop holds functions
 * (renderDropZone) which cannot cross the server/client boundary; they are removed. Everything else in `puck`,
 * notably `metadata`, which blocks use to receive content pushed in from the page, is left exactly as it is.
 */
const cleanProps = <T,>(props: T): T => {
  const puck = (props as any)?.puck;
  if (!puck) return props;
  return { ...props, puck: Object.fromEntries(Object.entries(puck).filter(([, value]) => typeof value !== "function")) };
};

export default cleanProps;
