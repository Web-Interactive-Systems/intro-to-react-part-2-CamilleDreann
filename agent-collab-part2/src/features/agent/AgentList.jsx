import { useStore } from '@nanostores/react'
import { $agents, addAgent } from '@/store/store'
import { Box, Flex, Card, Text, Button } from '@radix-ui/themes'
import AgentForm from '@/features/agent/AgentForm'
import { useState } from "react";

function AgentList() {
    const agents = useStore($agents)
    const [formState, setFormState] = useState(false);

    const toggleForm = () => {
        setFormState(!formState);
        addAgent({
            id: Math.random().toString(),
            emoji: '🚧',
            title: '',
            role: '',
            response_format: '',
            temperature: 0.1,
            desired_response: '',
        })
        console.log('toggleForm', !formState);
    }

    return (
        <>
            <Flex
                direction="row"
                gap="4"
                width="100%"
                height="100%"
                p="1"
            >
                <Box width="240px">
                    <Card>
                        <Flex gap="3" align="center">
                            <Button onClick={toggleForm}>
                                Ajouter +
                            </Button>
                        </Flex>
                    </Card>
                </Box>
                {agents.map((agent) => (
                    <Box key={agent.id} width="240px">
                        <Card height="120px" display="flex">
                            <Flex gap="3" align="center">
                                {agent.emoji}
                                <Box>
                                    <Text as="div" size="2" weight="bold">
                                        {agent.title}
                                    </Text>
                                    <Text as="div" size="2" color="gray">
                                        {agent.role}
                                    </Text>
                                </Box>
                            </Flex>
                        </Card>
                    </Box>
                ))}
            </Flex>

            {formState && <AgentForm />}
        </>
    )
}

export default AgentList