import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
  IconZeppelin,
} from "@tabler/icons";

import axios from "axios";

import { useState } from "react";
import Usercard from "../components/Usercard";

export default function Home() {
  const [listInput, setListInput] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (listInput < 1) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${listInput}`
    );

    const newUsers = [];
    for (const x of resp.data.results) {
      newUsers.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrl: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }

    setUsers(newUsers);
    console.log(newUsers);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>
      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          onChange={(event) => {
            setListInput(event.target.value);
          }}
          value={listInput}
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
        />
        <button className="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      <div>
        {users.map((user) => (
          <Usercard
            name={user.name}
            email={user.email}
            imgUrl={user.imgUrl}
            address={user.address}
            key={user.name}
          />
        ))}
      </div>

      <div>
        {/* made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Soida kiti 630610658
        </p>
      </div>
    </div>
  );
}
