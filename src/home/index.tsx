import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

export const Home: React.FC = () => {
  return (
    <Wrapper>
      <Text>Welcome to Gather</Text>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
`
