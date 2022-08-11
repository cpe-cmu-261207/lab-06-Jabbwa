import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
  IconZeppelin,
} from "@tabler/icons";

export default function Carddetail(props) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {props.email}
      </p>
      <p>
        <IconMapPins /> {props.address}
      </p>
    </div>
  );
}
