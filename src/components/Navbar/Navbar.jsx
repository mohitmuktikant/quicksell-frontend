import { useState } from 'react';
import './Navbar.css'
import { MdOutlineTune } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

const groupOptions = [
    {
        label: "Status",
        value: "status",
    },
    {
        label: "User",
        value: "user",
    },
    {
        label: "Priority",
        value: "priority",
    }
];

const orderOptions = [
    {
        label: "Priority",
        value: "priority",
    },

    {
        label: "Title",
        value: "title",
    }
];

const Navbar = ({ group, order, onGroupchange, onOrderChange }) => {
    const [expandMore, setExpandMore] = useState(false);
    const [groupedBy, setGroupedBy] = useState(group);
    const [orderedBy, setOrderedBy] = useState(order);


    const handleGroupChange = (element) => {
        setGroupedBy(element.target.value);
        onGroupchange(element.target.value);
    }

    const handleOrderChange = (element) => {
        setOrderedBy(element.target.value);
        onOrderChange(element.target.value);
    }

    return (
        <div className='nav'>
            <div
                className='expandbtn'
                onClick={() => { setExpandMore(prev => !prev) }}
            >
            <MdOutlineTune />
            <span>Display</span>
            <FaAngleDown />
            </div>
            {expandMore && <div className="dropdown" >
                <div className='display'>
                    <p>Grouping</p>
                    <select
                        name="group"
                        id="groupBy"
                        defaultValue={group}
                        onChange={handleGroupChange}>
                        {groupOptions.map((opt, i) => (
                            <option key={i} value={opt.value}>{opt.label}</option>
                        ))}

                    </select>
                </div>
                <div className='display'>
                    <p>Ordering</p>
                    <select
                        name="order"
                        id="orderBy"
                        defaultValue={order}
                        onChange={handleOrderChange}
                    >
                        {orderOptions.map((opt, i) => (
                            <option key={i} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>}
        </div>
    )
}

export default Navbar