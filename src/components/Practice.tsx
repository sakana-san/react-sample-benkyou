import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const Practice = () => {
  return (
    <div>
      <Button ml="10"><Link to='/Radio'>ラジオページ</Link></Button>
    </div>
  )
}