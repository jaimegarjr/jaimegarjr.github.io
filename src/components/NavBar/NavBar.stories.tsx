import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBar } from "./index";

export default {
  title: "Components/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar />;

export const InitialState = Template.bind({});
InitialState.args = {};
