import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";
import Swal from "sweetalert2";

function SidebarOption({ Icon, id, title, addChannelOption }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push("title");
    }
  };

  const addChannel = () => {
    const { value: channelName } = Swal.fire({
      title: "Channel name",
      input: "text",
      inputPlaceholder: "Enter your channel name",
      showCancelButton: true,
      theme: "dark",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          "Channel name": result.value,
          icon: "success",
          title: "Channel created successfully",
        });
        if (result.value) {
          db.collection("rooms").add({
            name: result.value,
          });
        }
      }
    });
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption-channel">
          <span className="sidebarOption-hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
