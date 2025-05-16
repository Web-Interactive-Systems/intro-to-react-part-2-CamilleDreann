import { atom } from 'nanostores'

export const $agents = atom([
  {
    id: Math.random().toString(),
    emoji: '💡',
    title: 'science writer',
    role: 'your are a scientific',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'a draft of science writing',
  },
  {
    id: Math.random().toString(),
    emoji: '😀',
    title: 'Scifi writer',
    role: 'your are a wonderful writer',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'a draft of scifi writing',
  },
  {
    id: Math.random().toString(),
    emoji: '🔴',
    title: 'red writer',
    role: 'your are a red writer',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'red',
  },
])

export const addAgent = (agent) => {

  const agents = $agents.get()
  $agents.set([...agents, agent])

}