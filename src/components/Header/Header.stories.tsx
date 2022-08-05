import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const InitialState = Template.bind({});
InitialState.args = {};
