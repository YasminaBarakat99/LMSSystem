import React, { useState } from 'react';
import '../../../Styles/Main/Sidebar.css';

import LogoutButton from '../LogoutButton';

import dashboard from '../../../Images/Sidebar icons/dashboard.png';
import Activedashboard from '../../../Images/Sidebar icons/activeIcons/Activedashboard.png';

import admission from '../../../Images/Sidebar icons/admission.png';
import Activeadmission from '../../../Images/Sidebar icons/activeIcons/Activeadmission.png';

import classes from '../../../Images/Sidebar icons/classes.png';
import Activeclasses from '../../../Images/Sidebar icons/activeIcons/Activeclasses.png';

import certificates from '../../../Images/Sidebar icons/certificate.png';
import Activecertificates from '../../../Images/Sidebar icons/activeIcons/Activecertificate.png';

import notifications from '../../../Images/Sidebar icons/notifications.png';
import Activenotifications from '../../../Images/Sidebar icons/activeIcons/Activenotification.png';

import schedule from '../../../Images/Sidebar icons/schedule.png';
import Activeschedule from '../../../Images/Sidebar icons/activeIcons/Activeschedule.png';

import settings from '../../../Images/Sidebar icons/settings.png';
import Activesettings from '../../../Images/Sidebar icons/activeIcons/Activesettings.png';


function NavigationMenu() {
    // Default to the first item being active
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle click on menu item
    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const menuItems = [
        { defaultIcon: dashboard, activeIcon: Activedashboard, label: "الرئيسية" },
        { defaultIcon: admission, activeIcon: Activeadmission, label: "القبول و التسجيل" },
        { defaultIcon: classes, activeIcon: Activeclasses, label: "المقررات الدراسية" },
        { defaultIcon: certificates, activeIcon: Activecertificates, label: "الشهادات" },
        { defaultIcon: notifications, activeIcon: Activenotifications, label: "الاشعارات" },
        { defaultIcon: schedule, activeIcon: Activeschedule, label: "الخدمات الإلكترونية" },
        { defaultIcon: settings, activeIcon: Activesettings, label: "الإعدادات" },
    ];

    return (
        <ul className="navigation-menu">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={`menu-item ${index === activeIndex ? "active" : ""}`}
                    onClick={() => handleClick(index)}
                >
                    {/* Render the active icon if the item is active, otherwise the default icon */}
                    <img
                        src={index === activeIndex ? item.activeIcon : item.defaultIcon}
                        alt={item.label}
                        className='sidebar-icon'
                    />
                    <span>{item.label}</span>
                </li>
            ))}
            <LogoutButton />
        </ul>
    );
}

export default NavigationMenu;