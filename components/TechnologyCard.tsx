import React from "react";
import { toast } from "react-hot-toast";
import useSound from "use-sound";
import { Message } from "../constant/message";

interface ITechnologyCard {
  item: {
    icon: string;
    name: string;
  };
  handleClick: (name: string) => void;
  show: boolean;
  disabled: boolean;
}

const TechnologyCard = ({ item, handleClick, show, disabled }: ITechnologyCard) => {

  const [ThemeSound] = useSound("/sound/pop-up-on.mp3");

  const handleSubmit = (name: string) => {

    if (disabled) toast.error(Message.SelectTheWord);
    else {

      ThemeSound();
      handleClick(name);

    }

  };

  return (
    <button onClick={() => handleSubmit(item.name)} disabled={show}>
      {show
        ? (
            <img
              src={item.icon}
              alt={item.name}
              className="h-16 w-16 m-4 p-2 rounded-full bg-blue-50 dark:bg-white  hover:scale-125 transition-all duration-300"
            />
          )
        : (
            <>
              <div
                data-bs-toggle="tooltip"
                title="Hi! I'm tooltip"
                className="h-16 w-16 m-4 backdrop-blur-sm bg-blue-300/30 rounded-2xl"
              ></div>
            </>
          )}
    </button>
  );

};

export default TechnologyCard;
