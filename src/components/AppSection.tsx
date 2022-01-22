import React, { PropsWithChildren } from "react";

import { Container } from "@chakra-ui/react";

import AppErrorBox from "./AppError/AppErrorBox";
import AppPageHeader from "./AppPageHeader";

export interface AppSectionProps {
  pageHeader: string;
}

type InternalComponentProps = PropsWithChildren<AppSectionProps>;

function AppSection({ pageHeader, children }: InternalComponentProps): React.ReactElement<InternalComponentProps> {
  return (
    <Container maxW='container.lg'>
      <AppErrorBox />
      <br />

      <AppPageHeader title={pageHeader} />

      {children}
    </Container>
  );
}

export default AppSection;
