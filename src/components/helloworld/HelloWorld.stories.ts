import type { Meta, StoryObj } from "@storybook/vue3";

import HelloWorld from "./HelloWorld.vue";

const meta: Meta<typeof HelloWorld> = {
  title: "Exemple/HelloWorld",
  component: HelloWorld,
};

export default meta;
type Story = StoryObj<typeof HelloWorld>;

export const Default: Story = {
  args: {
    msg: "Hello World !",
  },
};
