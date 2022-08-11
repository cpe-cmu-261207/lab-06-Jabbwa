import React, { useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
  IconZeppelin,
} from "@tabler/icons";
import Carddetail from "./Carddetail";

export default function Usercard(props) {
  const [onclick, setOnclick] = useState(false);
  const onClickHander = () => {
    if (onclick) setOnclick(false);
    else {
      setOnclick(true);
    }
  };

  return (
    <div
      onClick={() => {
        onClickHander();
      }}
      className="border-bottom"
    >
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img
          src={`${props.imgUrl}`}
          width="90px"
          className="rounded-circle me-4"
        />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {onclick === true ? <IconChevronDown /> : <IconChevronUp />}
      </div>
      <div>
        {onclick && (
          <Carddetail
            address={props.address}
            email={props.email}
            key={props.email}
          />
        )}
      </div>
    </div>
  );
}
