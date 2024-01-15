import { FC, ComponentType } from "react";

interface WithLogProps {
  message?: string;
}

function withLog<P extends {}>(
  Component: ComponentType<P>
): FC<P & WithLogProps> {
  const ComponentWithLog: FC<P & WithLogProps> = (props) => {
    const { message = "Hello from ", ...restProps } = props;

    console.log(`${message} ${Component.displayName}`);

    return <Component {...(restProps as P)} />;
  };

  return ComponentWithLog;
}

export default withLog;
