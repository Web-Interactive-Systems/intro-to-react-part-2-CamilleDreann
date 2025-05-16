import { Flex, Button, TextField, Select, Slider, TextArea } from '@radix-ui/themes';
import { $agents } from '@/store/store';


function AgentForm() {
    const cloned = $agents.get();
    const last = cloned.at(-1);

    const handleChange = () => {
    const val = e.target.value;
  }

return (
    <form
      style={{ minWidth: 320, maxWidth: 400, margin: '0 auto' }}>
      <Flex
        direction='column'
        gap='3'>
        <label>
          Emoji
          <TextField.Root
            name='emoji'
            value={last.emoji}
            onChange={handleChange}
            placeholder='😀'
            style={{ marginTop: 4 }}
          />
        </label>
        <label>
          Title
          <TextField.Root
            name='title'
            value={last.title}
            onChange={handleChange}
            placeholder='Agent title'
            style={{ marginTop: 4 }}
          />
        </label>
        <label>
          Role
          <TextField.Root
            name='role'
            value={last.role}
            onChange={handleChange}
            placeholder='Agent role'
            style={{ marginTop: 4 }}
          />
        </label>
        <label>
          Response Format
          <Select.Root
            name='response_format'
            value={last.response_format}
            onChange={handleChange}
            style={{ marginTop: 4 }}>
            <Select.Trigger />
            <Select.Content>
              <Select.Item value='text'>Text</Select.Item>
              <Select.Item value='json'>JSON</Select.Item>
            </Select.Content>
          </Select.Root>
        </label>
        <label>
          Desired Response
          <TextArea
            name='desired_response'
            value={last.desired_response}
            placeholder='Desired response...'
            style={{ marginTop: 4 }}
          />
        </label>
        <label>
          <Flex
            align='center'
            gap='2'>
            <span>Temperature</span>
            <Text
              color='gray'
              size='2'
              style={{ marginLeft: 8 }}>
              {Number(last.temperature).toFixed(2)}
            </Text>
          </Flex>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={[Number(last.temperature)]}
            style={{ marginTop: 4 }}
          />
        </label>
        <Button
          type='submit'
          color='blue'
          style={{ marginTop: 16 }}>
          ✔ Sauver
        </Button>
      </Flex>
    </form>
  )
}


export default AgentForm;