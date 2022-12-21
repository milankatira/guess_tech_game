import React, { useState } from "react";
import TechnologyCard from "./TechnologyCard";
import BasicSelectField from "./common/BasicSelectField";
import { Technology } from "../constant/technology";
import ButtonField from "./common/ButtonField";
import { initialValue } from "../constant/initialValue";
import { TechValidator } from "../validator/techValidator";
import { Formik, Form } from "formik";
import useSound from "use-sound";
interface Icard {
  randomTech: { name: string; icon: string }[];
  handleSuffle: () => void;
}
const Card = ({ randomTech, handleSuffle }: Icard) => {
  const [ThemeSound] = useSound("/sound/pop-up-off.mp3");

  const [gameOverSound] = useSound("/sound/game-over.wav");
  const [correctAnswer] = useSound("/sound/correct-answer.wav");
  
  const [show, setshow] = useState<boolean>(false);
  const [point, setpoint] = useState(0);
  const [name, setname] = useState("");
  const [selectedValue, setselectedValue] = useState("");
  const handleClick = (value: string) => {
    setshow(true);
    setselectedValue(value);
    if (value === name) {
      correctAnswer();
      setpoint(point + 1);
    } else {
      gameOverSound()
      setpoint(-1);
    }
  };

  const handleSubmit = (data: { name: string }) => {
    setname(data.name);
  };

  const handleRestart = () => {
    ThemeSound();
    setshow(false);
    handleSuffle();
    setpoint(0);
  };

  const handleNext = () => {
    ThemeSound();
    setshow(false);
    handleSuffle();
  };

  return (
    <div className="w-full sm:w-[600px]  mx-auto mt-4 bg-blue-50 dark:bg-slate-800 py-2 rounded-lg">
      {point >= 0 ? (
        <h1 className="flex justify-center my-4 font-mono font-light text-blue-600 dark:text-[#6affDA]">
          Your Score {point}
        </h1>
      ) : (
        <h1 className="flex justify-center my-4 font-mono font-light text-red-800 dark:text-[#6affDA]">
          Game Over
        </h1>
      )}
      <div className="flex flex-row flex-wrap">
        {randomTech?.map((item) => (
          <TechnologyCard
            item={item}
            show={show}
            handleClick={handleClick}
            disabled={!name}
          />
        ))}
      </div>

      <div className="m-8 flex flex-col justify-center">
        <Formik
          initialValues={initialValue.tech}
          validationSchema={TechValidator}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <Form>
                {Technology && (
                  <BasicSelectField
                    error={props.touched.name && props.errors.name}
                    options={Technology}
                    name="name"
                    inputLabel="Technology"
                    disabled={show}
                  />
                )}

                <div className="mx-auto">
                  <ButtonField text={"submit"} type="submit" />
                </div>
              </Form>
            );
          }}
        </Formik>
        <h1 className="my-4 font-extrabold">{name}</h1>
        {!show ? (
          name ? (
            <h2 className="my-4 font-mono font-light text-blue-600 dark:text-[#6affDA]">
              please gause the block with {name}
            </h2>
          ) : (
            <h2 className="my-4 font-mono font-light text-red-600 dark:text-[#6affDA]">
              please select the word
            </h2>
          )
        ) : (
          <div className="flex justify-between">
            <h2>{selectedValue}</h2>
            <div className="flex">
              <svg
                onClick={() => handleRestart()}
                className="h-4 w-4 dark:fill-white fill-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
              </svg>
              {point > 0 && (
                <svg
                  onClick={() => handleNext()}
                  className="ml-4 h-4 w-4 dark:fill-white fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
