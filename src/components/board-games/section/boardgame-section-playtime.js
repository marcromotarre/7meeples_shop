/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Section from "./boardgame-section";
import { play_time_string } from "../utils";
import icon from "../../../assets/svg/sections/play-time.svg";

export default function SectionPlayTime({ playTimeMin, playTimeMax }) {
  return (
    <Section icon={icon}>
      <span>{play_time_string(playTimeMin, playTimeMax)}</span>
    </Section>
  );
}
