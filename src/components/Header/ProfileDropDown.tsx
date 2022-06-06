import React from 'react';
import { Link } from 'react-router-dom';


const profileLinks = [
    {
        img: "user.svg",
        title: "Profile",
        link: "/"
    },
    {
        img: "case.svg",
        title: "Inventory",
        link: "/"
    },
    {
        img: "dashboard.svg",
        title: "Dashboard",
        link: "/dashboard"
    },
    {
        img: "Setting.svg",
        title: "Setting",
        link: "/"
    },
    {
        img: "logout.svg",
        title: "Log Out",
        link: "/"
    }
]


const ProfileDropDown = () => {
    return (
        <div className='w-[150px] md:w-[200px] bg-[#F9F8F6] py-8 shadow-[0px_0px_2px_3px_rgba(0,0,0,0.05)] rounded-bl-[10px] rounded-br-[10px]'>
            {profileLinks.map(el => {
                return <>
                    <Link to={`${el.link}`}
                        className="flex items-center text-14 py-1 group hover:bg-default px-14"
                    >
                        <span className='p-2 rounded-full bg-white'>
                            <img src={process.env.PUBLIC_URL + `/icons/${el.img}`} alt={el.title} className="text-[#6A6A6A] group-hover:text-default" />
                        </span>
                        <span className='pl-5 group-hover:text-white font-medium'>
                            {el.title}
                        </span>
                    </Link>
                </>
            })}

        </div>
    )
}

export default ProfileDropDown