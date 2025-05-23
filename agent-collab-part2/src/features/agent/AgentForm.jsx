import { useStore } from '@nanostores/react';
import { Flex, Button, TextField, Select, TextArea, Slider, Text, Popover } from '@radix-ui/themes';
import { $agents, setForm } from '@/store/store';

function AgentForm({ closeForm, agent }) {
  const agents = useStore($agents);

  let current = agent
    ? agents.find((a) => a.id === agent.id)
    : agents.at(-1);


  const handleChange = (e) => {
    setForm(e.target.name, e.target.value, current.id);
  };

  const handleChangeSelect = (name, value) => {
    setForm(name, value, current.id);
  };

  const handleSlider = (value) => {
    setForm('temperature', value[0], current.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeForm();
  };


  return (
    <form onSubmit={handleSubmit} style={{ minWidth: 320, maxWidth: 400, margin: '0 auto' }}>
      <Flex direction="column" gap="3">
<label>
  Emoji
  <Popover.Root>
    <Popover.Trigger>
      <Button variant="soft" style={{ marginTop: 4, fontSize: 24 }}>
        {current.emoji || '😀'}
      </Button>
    </Popover.Trigger>
    <Popover.Content>
      <Flex wrap="wrap" gap="2" style={{ maxWidth: 200 }}>
        {['😀', '🚀', '💡', '📚', '🤖', '🧠', '🎨', '📝', '🔬', '🔥'].map((emoji) => (
          <Button
            key={emoji}
            variant="ghost"
            style={{ fontSize: 20, padding: 4 }}
            onClick={() => handleChange({ target: { name: 'emoji', value: emoji } })}
          >
            {emoji}
          </Button>
        ))}
      </Flex>
    </Popover.Content>
  </Popover.Root>
</label>


        <label>
          Title
          <TextField.Root
            name="title"
            value={current.title}
            onChange={handleChange}
            placeholder="Agent title"
            style={{ marginTop: 4 }}
          />
        </label>

        <label>
          Role
          <TextField.Root
            name="role"
            value={current.role}
            onChange={handleChange}
            placeholder="Agent role"
            style={{ marginTop: 4 }}
          />
        </label>

        <label>
<Flex direction="column" gap="1" style={{ marginTop: 8 }}>
  <Text as="label" size="2">
    Response Format
  </Text>
  <Select.Root
    value={current.response_format}
    onValueChange={(value) => handleChangeSelect('response_format', value)}
  >
    <Select.Trigger />
    <Select.Content>
      <Select.Item value="text">Text</Select.Item>
      <Select.Item value="json">JSON</Select.Item>
    </Select.Content>
  </Select.Root>
</Flex>
        </label>

        <label>
          Desired Response
          <TextArea
            name="desired_response"
            value={current.desired_response}
            onChange={handleChange}
            placeholder="Desired response..."
            style={{ marginTop: 4 }}
          />
        </label>

        <label>
          <Flex align="center" gap="2">
            <span>Temperature</span>
            <Text color="gray" size="2" style={{ marginLeft: 8 }}>
              {Number(current.temperature || 0).toFixed(2)}
            </Text>
          </Flex>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={[Number(current.temperature)]}
            onValueChange={handleSlider}
            style={{ marginTop: 4 }}
          />
        </label>

        <Button type="submit" color="blue" style={{ marginTop: 16 }}>
          ✔ Sauver
        </Button>
      </Flex>
    </form>
  );
}

export default AgentForm;
