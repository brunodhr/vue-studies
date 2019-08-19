import { storiesOf } from '@storybook/vue';
import Button from '../src/components/Button'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { Button },
    template: '<Button text="teste">rounded</Button>'
  }))
  .add('with emoji', () => ({
    components: { Button },
    template: '<Button text="😀 😎 👍 💯">rounded</Button>'
  }))
  .add('as a component', () => ({
    components: { Button },
    template: '<Button :rounded="true" text="teste">rounded</Button>'
  }));