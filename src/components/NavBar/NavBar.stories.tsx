import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBar } from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <BrowserRouter>
    <NavBar />{" "}
  </BrowserRouter>
);

export const InitialState = Template.bind({});
InitialState.args = {};
