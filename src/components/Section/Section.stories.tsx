import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Section } from ".";
import { experienceData } from "../__mocks__/resumeData";

export default {
  title: "Components/Section",
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const InitialState = Template.bind({});
InitialState.args = {
  title: "Experience",
  listItems: experienceData,
};
