type InferProps<T> = T extends (first: infer FirstArgument, ...args: any[]) => any
  ? FirstArgument
  : any;
const cleanProps = (props: any) => {
  return { ...props, puck: props?.puck ? { ...props.puck, renderDropZone: undefined } : undefined };
};


export default cleanProps;