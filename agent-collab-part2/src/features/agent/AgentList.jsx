import { useStore } from '@nanostores/react';
import { $agents, addAgent, deleteAgent } from '@/store/store';
import { Box, Flex, Card, Text, Button } from '@radix-ui/themes';
import AgentForm from '@/features/agent/AgentForm';
import { useState } from 'react';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';

function AgentList() {
  const agents = useStore($agents);
  const [formState, setFormState] = useState(false);
  const [editingAgent, setEditingAgent] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  console.log(selectedAgent);

  const toggleForm = () => {
    setEditingAgent(null);
    setFormState(true);

    if (!formState) {
    const newAgent = {
      id: Math.random().toString(),
      emoji: '🚧',
      title: '',
      role: '',
      response_format: 'text',
      temperature: 0.1,
      desired_response: '',
    };

    addAgent(newAgent);
    setSelectedAgent(newAgent.id);
    setEditingAgent(newAgent);
    }
  };


  const toggleChangeForm = (agent) => {
    setSelectedAgent(agent.id);
    setEditingAgent(agent);
    setFormState(true);
  };

  return (
    <Flex direction="row" gap="4" width="100%" height="100%" p="4">
      <Box flexGrow="1" style={{ maxWidth: formState ? '60%' : '100%' }}>
        <Flex
          gap="3"
          wrap="wrap"
          align="start"
        >
          <Box width="240px">
            <Card>
              <Flex gap="3" align="center">
                <Button onClick={toggleForm}>+ Ajouter</Button>
              </Flex>
            </Card>
          </Box>

          {agents.map((agent) => (
            <Box key={agent.id} width="240px">
              <Card height="120px" display="flex" style={{ background: selectedAgent === agent.id ? 'var(--focus-7)' : undefined}}>
                <Flex gap="3" align="center">
                  <span>{agent.emoji}</span>
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {agent.title}
                    </Text>
                    <Text as="div" size="2" color="gray">
                      {agent.role}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap="2" justify="end">
                  <Pencil1Icon onClick={() => toggleChangeForm(agent)} style={{ cursor: 'pointer', color: 'blue' }} />
                  <TrashIcon onClick={() => deleteAgent(agent.id)} style={{ cursor: 'pointer', color: 'red' }} />
                </Flex>
              </Card>
            </Box>
          ))}
        </Flex>
      </Box>

      {formState && (
        <Box style={{ width: '360px' }}>
          {formState && (
          <AgentForm
            agent={editingAgent}
            closeForm={() => {
              setFormState(false);
              setSelectedAgent(null);
              setEditingAgent(null);
            }}
          />
          )}
        </Box>
      )}
    </Flex>
  );
}

export default AgentList;
