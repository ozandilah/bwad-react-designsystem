// FeaturedItems.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import FeaturedItems from "../../../components/FeaturedItems";
import { ReactComponent as Globe } from "../../../assets/images/globe.svg";
import { ReactComponent as Briefcase } from "../../../assets/images/briefcase.svg";
import { ReactComponent as Codesandbox } from "../../../assets/images/codesandbox.svg";
import { ReactComponent as Users } from "../../../assets/images/users.svg";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/FeaturedItems/Example",
  component: FeaturedItems,
} as ComponentMeta<typeof FeaturedItems>;

export const Default = (args: any) => <FeaturedItems {...args} />;
Default.args = {
  features: [
    {
      icon: <Globe />,
      key: "diversity",
      title: "Diversity",
      paragraph: "Learn from anyone around the world and get a new skills",
    },
    {
      icon: <Codesandbox />,
      key: "guideline",
      title: "A.I Guideline",
      paragraph:
        "Lara will help you to choose \
      which path that suitable for you",
    },
    {
      icon: <Users />,
      key: "mentoring",
      title: "1-1 Mentoring",
      paragraph:
        "We will ensure that you will get\
      what you really do need",
    },
    {
      icon: <Briefcase />,
      key: "future-job",
      title: "Future Job",
      paragraph:
        "Get your dream job in your dream\
      company together with us",
    },
  ],
};
