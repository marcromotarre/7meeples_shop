/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Section from "./boardgame-section-max";
import { play_time_string } from "../utils";
import icon from "../../../assets/svg/sections/play-time.svg";

export default function SectionMaxPlayTime({
  styles,
  playTimeMin,
  playTimeMax,
}) {
  return (
    <Section name={"Duración"} styles={{ ...styles }} icon={icon}>
      <p>{play_time_string(playTimeMin, playTimeMax)}</p>
    </Section>
  );
}
