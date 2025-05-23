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

export const setForm = (name, value, id) => {
  const agents = $agents.get();
  const updatedAgents = agents.map((agent) =>
    agent.id === id
      ? { ...agent, [name]: name === 'temperature' ? Number(value) : value }
      : agent
  );
  $agents.set(updatedAgents);
};

export const deleteAgent = (id) => {
  const agents = $agents.get();
  const updated = agents.filter((agent) => agent.id !== id);
  $agents.set(updated);
};





