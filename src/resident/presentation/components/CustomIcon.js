import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";

export default function CustomIcon({ size, color, name, ...props }) {
  return <Icon size={size} color={color} name={name} {...props} />;
}
