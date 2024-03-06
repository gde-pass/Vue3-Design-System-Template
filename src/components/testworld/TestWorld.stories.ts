import type { Meta, StoryObj } from "@storybook/vue3";

import TestWorld from "./TestWorld.vue";

const meta: Meta<typeof TestWorld> = {
  title: "Exemple/TestWorld",
  component: TestWorld,
};

export default meta;
type Story = StoryObj<typeof TestWorld>;

export const Default: Story = {
  args: {
    age: 42,
  },
};
