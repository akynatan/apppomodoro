/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { format } from 'date-fns';
import { Dimensions, Text } from 'react-native';
import Button from '../../components/Button';

import {
  Container,
  Time,
  Content,
  Header,
  HeaderTitle,
  ContainerButtonsTime,
  ContentButtonsTime,
  ContainerButtonsAcions,
} from './styles';

const periodTime = 60 * 25;
const longPause = 60 * 10;
const shortPause = 60 * 5;

const Dashboard: React.FC = () => {
  const [baseTime, setBaseTime] = useState(periodTime);
  const [timer, setTimer] = useState(baseTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) setTimer(oldTimer => oldTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, isActive]);

  const start = useCallback(() => {
    setIsActive(true);
    setTimer(oldTimer => oldTimer - 1);
  }, []);

  const timeLeft = useMemo(() => format(timer * 1000, 'mm:ss'), [timer]);

  const resetTime = useCallback(time => {
    setIsActive(false);
    setTimer(time);
    setBaseTime(time);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>bem vindo, garfanhoto!</HeaderTitle>
      </Header>
      <Content style={{ height: Dimensions.get('window').height - 90 }}>
        <ContainerButtonsTime>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              marginBottom: 10,
            }}
          >
            Pomodoros Time:
          </Text>
          <ContentButtonsTime>
            <Button
              style={{ width: 50, height: 50 }}
              selected={baseTime === periodTime}
              onPress={() => {
                resetTime(periodTime);
              }}
            >
              25
            </Button>
            <Button
              style={{ width: 50, height: 50, marginLeft: 5 }}
              selected={baseTime === longPause}
              onPress={() => {
                resetTime(longPause);
              }}
            >
              10
            </Button>
            <Button
              style={{ width: 50, height: 50, marginLeft: 5 }}
              selected={baseTime === shortPause}
              onPress={() => {
                resetTime(shortPause);
              }}
            >
              5
            </Button>
          </ContentButtonsTime>
        </ContainerButtonsTime>
        <Time>{timeLeft}</Time>
        <ContainerButtonsAcions>
          <Button
            style={{ width: 100, height: 50 }}
            onPress={() => {
              if (!isActive) start();
            }}
          >
            Start
          </Button>
          <Button
            style={{ width: 100, height: 50, marginTop: 10 }}
            onPress={() => setIsActive(false)}
          >
            Stop
          </Button>
          <Button
            style={{ width: 100, height: 50, marginTop: 10 }}
            onPress={() => resetTime(baseTime)}
          >
            Reset
          </Button>
        </ContainerButtonsAcions>
      </Content>
    </Container>
  );
};

export default Dashboard;
