import React, { forwardRef } from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { MdReviews, MdPrivacyTip } from "react-icons/md";
import { IoMdSettings, IoMdHelpCircle } from "react-icons/io";
import "./Header.css"

type AccountItem = {
    id: number;
    icon: React.ReactNode;
    label: string;
    link: string;
};

const accountItems: AccountItem[] = [
    {
        id: 1,
        icon: <ImProfile />,
        label: 'Profile',
        link: '/profile',
    },
    {
        id: 2,
        icon: <BsBookmarkStarFill />,
        label: 'My jobs',
        link: '/jobs',
    },
    {
        id: 3,
        icon: <MdReviews />,
        label: 'My reviews',
        link: '/reviews',
    },
    {
        id: 4,
        icon: <IoMdSettings />,
        label: 'Settings',
        link: '/settings',
    },
    {
        id: 5,
        icon: <IoMdHelpCircle />,
        label: 'Help',
        link: '/help',
    },
    {
        id: 6,
        icon: <MdPrivacyTip />,
        label: 'Privacy Center',
        link: '/private-center',
    },
];

type Props = {
    email: string;
    onSignOut: () => void;
};

const AccountDropdown = forwardRef<HTMLDivElement, Props> (({ email, onSignOut }, ref) => {
    return (
        <div
            ref={ref}
         className="absolute top-[70px] right-[-30px] border border-zinc-300 bg-white w-[320px] rounded-sm account_dropdown"
        >
            <p className="text-stone-800 font-bold p-[10px]">{email}</p>
            <div>
                {accountItems.map((item) => (
                    <a key={item.id} href={item.link} className="inline-flex w-full items-center gap-4 px-[20px] py-[10px] text-blue-600 text-stone-700 font-medium hover:bg-sky-50">
                        {item.icon}
                        <span>{item.label}</span>
                    </a>
                ))}
            </div>
            <div className="text-xs text-center border-y-1 p-[8px]">
                © 2025 Indeed - <a href="#" className="hover:underline">Terms</a> - <a href="#" className="hover:underline">Accessibility at Indeed</a>
            </div>
            <div>
                <button onClick={onSignOut} className="text-center font-bold text-main-color w-full py-[8px] cursor-pointer hover:bg-sky-50">Sign out</button>
            </div>
            </div >

    );
});

AccountDropdown.displayName = "AccountDropdown";
export default AccountDropdown;