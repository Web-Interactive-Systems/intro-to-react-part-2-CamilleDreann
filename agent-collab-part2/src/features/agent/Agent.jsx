import { Flex } from '@radix-ui/themes'
import AgentList from './AgentList'

function Agent() {
  return (
    <Flex
      direction='column'
      gap='4'
      width='100%'
      height='100%'
      p='1'>
      <AgentList />
    </Flex>
  )
}

export default Agent
