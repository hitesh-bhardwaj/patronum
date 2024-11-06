"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const Crispchat = () => {
  useEffect(() => {
    Crisp.configure("8e4d457f-3d5a-4669-9075-fda722a7baca");
  });

  return null;
}

export default Crispchat;