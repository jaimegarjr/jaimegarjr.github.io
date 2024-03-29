import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer />;

export const InitalState = Template.bind({});
InitalState.args = {};
