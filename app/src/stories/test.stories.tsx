import { ComponentStory } from "@storybook/react";
import Character from "../components/Character";

export default {
  title: "Fullet/Character",
  component: Character,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template: ComponentStory<typeof Character> = (args) => (
  <Character {...args} />
);
export const Disabled = Template.bind({});
Disabled.args = {
  characters: [
    {
      id: 1,
      name: "Rick",
      status: "Alive",
      species: "nesto",
      gender: "druge",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ],
  isDisabled: true,
};

export const Alive = Template.bind({});
Alive.args = {
  characters: [
    {
      id: 1,
      name: "Rick",
      status: "Alive",
      species: "nesto",
      gender: "druge",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ],
  isDisabled: false,
};
