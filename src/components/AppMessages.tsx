import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/alert';

function AppMessage({ message }: any): React.ReactElement<any, any> {
  return (
    <Alert>
      <AlertIcon />
      <AlertTitle>{message.title}</AlertTitle>
      <AlertDescription>{message.content}</AlertDescription>
    </Alert>
  );
}

function AppMessages(props: any): React.ReactElement<any, any> {
  return props.messages !== undefined
    ? props.messages.map((message: any, key: number): any => (
      <AppMessage key={key} message={message} />
    ))
    : <></>;
}

export default AppMessages;
