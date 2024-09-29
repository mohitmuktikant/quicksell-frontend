import { BsThreeDots, BsFillInfoSquareFill } from "react-icons/bs"
import { FaCircleXmark, FaRegCircle } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { TbCircleDotted } from "react-icons/tb";
import { RxHalf2 } from "react-icons/rx";

export const priorities = [
    { title: "urgent", color: "orange", icon: <BsFillInfoSquareFill /> },
    { title: "high", color: "black", icon: <GiNetworkBars /> },
    { title: "medium", color: "gray", icon: <GiNetworkBars /> },
    { title: "low", color: "lightgray", icon: <GiNetworkBars /> },
    { title: "no priority", color: "gray", icon: <BsThreeDots /> }
];

export const status = [
    { title: "backlog", color: "black", icon: <TbCircleDotted /> },
    { title: "todo", color: "grey", icon: < FaRegCircle /> },
    { title: "in progress", color: "orange", icon: <RxHalf2 /> },
    { title: "done", color: "purple", icon: <FaCheckCircle /> },
    { title: "cancelled", color: "gray", icon: <FaCircleXmark /> },
];

export const statusIcons = {
    backlog: {
        icon: <TbCircleDotted />,
        color: "black",
    },
    todo: {
        icon: <FaRegCircle />,
        color: "lightgrey",
    },
    "in progress": {
        icon: <RxHalf2 />,
        color: "yellow",
    },
    done: {
        icon: <FaCheckCircle />,
        color: "purple",
    },
    cancelled: {
        icon: <FaCircleXmark />,
        color: "gray",
    },
};

export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}

const bgColors = ["orange", "blue", "green", "red"];
export const getRandomColor = () => {
    const randomInd = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomInd];
};