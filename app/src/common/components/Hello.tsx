import { match } from "assert";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Hello = () => {
  const tailwind = useTailwind();
  const [data, setdata] = useState([]);
  const random1 = (Math.random() * 10).toFixed();
  const random2 = (Math.random() * 10).toFixed();
  const random3 = (Math.random() * 10).toFixed();

  const arry = [random1, random2, random3];

  var random = arry[Math.floor(Math.random() * arry.length)];

  console.log(random);

  // program to get a random item from an array

  function getRandomItem(arr:any) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
  }

  const result = getRandomItem(arry);
  console.log(result,"result: " + result);

  return (
    <>
      <View style={tailwind("pt-12 px-16 items-center")}>
        <View style={tailwind("px-8 py-4 w-screen h-[600px] rounded-xl")}>
          <View
            style={tailwind("py-12 px-16 items-center bg-gray-800 rounded-xl")}
          >
            <Text
              style={tailwind("text-2xl font-bold text-white")}
              testID="title"
            >
              Hello
            </Text>

            <div style={tailwind("mt-5 opacity-50")}>
              <Text style={tailwind("mx-4 text-2xl text-white")}>
                {random1}
              </Text>

              <Text style={tailwind("mx-4 text-2xl text-white")}>
                {random2}
              </Text>

              <Text style={tailwind("mx-4 text-2xl text-white")}>
                {random3}
              </Text>
            </div>

            <div style={tailwind("mt-5")}>
              <Text style={tailwind("mx-4 text-2xl text-white")}>
                {random1}
              </Text>

              <Text style={tailwind("mx-4 text-2xl text-white")}>
                {random2}
              </Text>

              <Text style={tailwind("mx-4 text-2xl text-white")}>
                {random3}
              </Text>
            </div>
          </View>
        </View>
      </View>
    </>
  );
};

export default Hello;
