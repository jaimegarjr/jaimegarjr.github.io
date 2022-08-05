import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeaderAvatar } from "./HeaderAvatar";

export default {
  title: "Components/HeaderAvatar",
  component: HeaderAvatar,
} as ComponentMeta<typeof HeaderAvatar>;

const Template: ComponentStory<typeof HeaderAvatar> = (args) => (
  <HeaderAvatar {...args} />
);

export const InitialState = Template.bind({});
InitialState.args = {
  image: "/images/jaime_casual.jpg",
};
