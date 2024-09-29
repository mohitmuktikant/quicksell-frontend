import './UserIcon.css'
import { circle } from 'react-icons/fa6'

const UserIcon = ({ intials, available, bgColor }) => {
    console.log(bgColor);
    return (
        <div className='user'>
            <div className='usericon' style={{ backgroundColor: bgColor }}>{intials}</div>
            <div className='dot' style={available ? { color: "lightgreen" } : {}}>
                <circle />
            </div>
        </div>
    )
}

export default UserIcon