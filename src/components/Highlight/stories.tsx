import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: `Red Dead it's back`,
    subtitle: `Come see John's new adventures`,
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy Now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />
