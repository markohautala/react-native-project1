import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const vectorIcons = {
  profile: React.createElement(FontAwesome6, { name: "user-large", size: 24, color: "black" }),
  notifications: React.createElement(Octicons, { name: "bell", size: 24, color: "black" }),
  security: React.createElement(MaterialCommunityIcons, { name: "shield-check-outline", size: 24, color: "black" }),
  language: React.createElement(MaterialIcons, { name: "language", size: 24, color: "black" }),
  helpCenter: React.createElement(MaterialIcons, { name: "help-outline", size: 24, color: "black" }),
  inviteFriends: React.createElement(FontAwesome6, { name: "users", size: 24, color: "black" }),
};
