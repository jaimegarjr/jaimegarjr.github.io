import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardEntry } from "./CardEntry";

export default {
  title: "Components/CardEntry",
  component: CardEntry,
} as ComponentMeta<typeof CardEntry>;

const Template: ComponentStory<typeof CardEntry> = (args) => (
  <CardEntry {...args} />
);

export const JPMCLogoState = Template.bind({});
JPMCLogoState.args = {
  icon: "images/jpmc_logo.png",
  title: "JPMorgan Chase & Co.",
  description: "Software Engineer Intern",
  dates: "June 2022 - Aug 2022",
};

export const UTRGVLogoState = Template.bind({});
UTRGVLogoState.args = {
  icon: "images/utrgv_logo.png",
  title: "UT Rio Grande Valley",
  description: "Software Engineer Intern",
  dates: "Dec 2020 - May 2022",
};
