import {FC, Fragment, ReactNode} from 'react';
import {MainHeader} from "./MainHeader.tsx";

export const Layout:FC<{children: ReactNode}> = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};