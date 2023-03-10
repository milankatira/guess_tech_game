import React from "react";
import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";

import Hello from "@components/Hello";
import utilities from "./tailwind.json";

export default function App() {
  return (
    //@ts-ignore
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <Hello />
      </SafeAreaView>
    </TailwindProvider>
  );
}
