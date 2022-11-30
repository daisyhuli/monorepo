import { Banner } from '@monorepo/ui';
import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
       <Banner text="Welcome to our admin app." />
      <NxWelcome title="admin" />
    </StyledApp>
  );
}

export default App;
