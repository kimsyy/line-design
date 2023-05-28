import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    size: {
      options: [ButtonSize.small, ButtonSize.medium, ButtonSize.big],
      control: { type: "radio" },
      description: "버튼의 사이즈",
      table: { defaultValue: { summary: ButtonSize.medium } }
    },
    children: {
      description: "children",
      table: { defaultValue: { summary: "버튼" } }
    }
  },
  args: {
    children: "버튼"
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * big 사이즈 버튼
 */
export const Big: Story = {
  args: {
    size: ButtonSize.big
  }
};

/**
 * medium 사이즈 버튼
 */
export const Medium: Story = {
  args: {
    size: ButtonSize.medium
  }
};

/**
 * small 사이즈 버튼
 */
export const Small: Story = {
  args: {
    size: ButtonSize.small
  }
};
