import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeaderText } from "./HeaderText";

export default {
  title: "Components/HeaderText",
  component: HeaderText,
} as ComponentMeta<typeof HeaderText>;

const Template: ComponentStory<typeof HeaderText> = (args) => <HeaderText />;

export const InitialState = Template.bind({});
InitialState.args = {};
