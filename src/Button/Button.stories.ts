import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    children: {
      description: "children",
      table: { defaultValue: { summary: "버튼" } }
    },
    size: {
      options: [ButtonSize.small, ButtonSize.medium, ButtonSize.big],
      control: { type: "radio" },
      description: "버튼의 사이즈",
      table: { defaultValue: { summary: ButtonSize.medium } }
    },
    theme: {
      description: "버튼의 테마",
      options: [ButtonTheme.primary, ButtonTheme.warning, ButtonTheme.outline],
      control: { type: "radio" },
      table: { defaultValue: { summary: ButtonTheme.primary } }
    }
  },
  args: {
    children: "버튼",
    size: ButtonSize.medium,
    theme: ButtonTheme.primary
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

/**
 * primary 테마 버튼
 */
export const primary: Story = {
  args: {
    theme: ButtonTheme.primary
  }
};

/**
 * warning 테마 버튼
 */
export const warning: Story = {
  args: {
    theme: ButtonTheme.warning
  }
};

/**
 * outline 테마 버튼
 */
export const outline: Story = {
  args: {
    theme: ButtonTheme.outline
  }
};
