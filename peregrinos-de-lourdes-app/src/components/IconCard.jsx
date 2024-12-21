import React from "react";
import CustomButton from "./CustomButton";
import { LuHandHeart } from "react-icons/lu";


const IconCard = ({icon, title, description, buttonText, link}) => {
  return (
    <div className="flex flex-col justify-between gap-7 p-10 bg-light-blue rounded-3xl border-4 border-black">
        <div className="flex flex-row items-center">
            <div className="flex justify-center items-center bg-white p-4 rounded-full border-4 border-black text-5xl">
             {icon}
            </div>
            <h3 className="font-darker_grotesque text-5xl font-bold ml-3">{title}</h3>
        </div>
        <p className="font-dm_sans text-xl opacity-80">{description}</p>
        <div className="flex items-center justify-center">
            <CustomButton
                text={buttonText}
                backgroundColor="bg-black"
                textColor="text-white"
                icon={icon}
                borderColor="border-black"
                hoverbackgroundColor={'hover:bg-white'}
                hoverTextColor={'hover:text-black'}
                link={link}
                target={'_blank'}
            />
        </div>

    </div>
  );
}

export default IconCard;
