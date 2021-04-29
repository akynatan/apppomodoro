import React, { useCallback, useState, useEffect } from 'react';
import Button from '../../components/Button';

import { Container, Time, Content, Header, HeaderTitle } from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>bem vindo, garfanhoto!</HeaderTitle>
      </Header>
      <Content>
        <Time>25:00</Time>
        <Button style={{ width: 100 }}>Iniciar</Button>
      </Content>
    </Container>
  );
};

export default Dashboard;
