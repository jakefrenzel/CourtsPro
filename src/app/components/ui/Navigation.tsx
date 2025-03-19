'use client';

import styles from '@/app/components/styles/Navigation.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation({ children } : { children: React.ReactNode }) {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);
    const [merchDropdown, setMerchDropdown] = useState(false);
    const [search, setSearch] = useState(false);
    const [userAdd, setUserAdd] = useState(false);

    const toggleSidebar = () => {
        if (search || userAdd) {
            setSearch(false);
            setUserAdd(false);

            setTimeout(() => {
                setSidebarOpen(!sidebarOpen);
                if (userDropdown || merchDropdown) {
                    setUserDropdown(false);
                    setMerchDropdown(false);
                }
            }, 300);
        } else {
            setSidebarOpen(!sidebarOpen);
            if (userDropdown || merchDropdown) {
                setUserDropdown(false);
                setMerchDropdown(false);
            }
        }
    };

    const toggleUserDropdown = () => {
        setUserDropdown(!userDropdown);

        if (sidebarOpen) {
            setSidebarOpen(false);
        }
        if (merchDropdown) {
            setMerchDropdown(false);
        }
    };

    const toggleMerchDropdown = () => {
        setMerchDropdown(!merchDropdown);

        if (sidebarOpen) {
            setSidebarOpen(false);
        }
        if (userDropdown) {
            setUserDropdown(false);
        }
    };

    const toggleSearch = () => {
        if (userAdd) {
            setUserAdd(false);
            setTimeout(() => setSearch(!search), 300);
        } else {
            setSearch(!search);
        }
    }

    const toggleUserAdd = () => {
        if (search) {
            setSearch(false);
            setTimeout(() => setUserAdd(!userAdd), 300);
        } else {
            setUserAdd(!userAdd);
        }
    }

    return (
        <div className={styles["nav-container"]}>
            <nav className={`${styles['site-header']} ${sidebarOpen ? styles["expand"] : ""}`} id="site-header">
                <div className={styles['branding-container']}>
                    <Image 
                    className={styles["company-logo"]}
                    src="/CourtsProLogo.png"
                    alt="CourtsPro Logo"
                    width={48}
                    height={48}
                    />
                    <p className={styles["company-name"]}>CourtsPro</p>
                </div>
                <div className={styles["company-location-container"]}>
                    <p className={styles["facility-location"]}>Tempe | The Picklr</p>
                </div>
                <div className={styles["profile-container"]}>
                    <svg
                    className={styles["profile-icon"]}
                    aria-label="User profile"
                    role="image"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    width={512}
                    height={512}
                    >
                        <g>
                            <circle cx={256} cy={128} r={128} />
                            <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
                        </g>
                    </svg>
                </div>
            </nav>
            <aside className={`${styles["sidebar"]} ${sidebarOpen ? styles["close"] : ""}`}>
            <ul>
                <li>
                    <span className={styles["logo"]}>CourtsPro</span>
                    <button onClick={toggleSidebar} className={`${styles["toggle-btn"]} ${sidebarOpen ? styles["rotate"] : ""}`}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Bold"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        >
                        <path d="M13.1,19.5a1.5,1.5,0,0,1-1.061-2.561l4.586-4.585a.5.5,0,0,0,0-.708L12.043,7.061a1.5,1.5,0,0,1,2.121-2.122L18.75,9.525a3.505,3.505,0,0,1,0,4.95l-4.586,4.586A1.5,1.5,0,0,1,13.1,19.5Z" />
                        <path d="M6.1,19.5a1.5,1.5,0,0,1-1.061-2.561L9.982,12,5.043,7.061A1.5,1.5,0,0,1,7.164,4.939l6,6a1.5,1.5,0,0,1,0,2.122l-6,6A1.5,1.5,0,0,1,6.1,19.5Z" />
                        </svg>
                    </button>
                </li>
                <li className={styles["active"]}>
                    <Link href="/admin">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Bold"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        >
                        <path d="M18.5,2H18V1.5A1.5,1.5,0,0,0,16.5,0h0A1.5,1.5,0,0,0,15,1.5V2H9V1.5A1.5,1.5,0,0,0,7.5,0h0A1.5,1.5,0,0,0,6,1.5V2H5.5A5.5,5.5,0,0,0,0,7.5v11A5.5,5.5,0,0,0,5.5,24h13A5.5,5.5,0,0,0,24,18.5V7.5A5.5,5.5,0,0,0,18.5,2Zm0,19H5.5A2.5,2.5,0,0,1,3,18.5V10H21v8.5A2.5,2.5,0,0,1,18.5,21Z" />
                        </svg>
                        <span>Calender</span>
                    </Link>
                </li>
                <li>
                    <button onClick={toggleUserDropdown} className={`${styles["dropdown-btn"]} ${userDropdown ? styles["rotate"] : ""}`}>
                        <svg
                        id="Layer_1"
                        height={24}
                        viewBox="0 0 24 24"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        >
                        <path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-6a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm7.5 15.5a7.5 7.5 0 0 0 -15 0 1.5 1.5 0 0 0 3 0 4.5 4.5 0 0 1 9 0 1.5 1.5 0 0 0 3 0zm9-4.5a7 7 0 0 0 -11.455-5.4 1.5 1.5 0 1 0 1.91 2.314 3.951 3.951 0 0 1 2.545-.914 4 4 0 0 1 4 4 1.5 1.5 0 0 0 3 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-6a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5z" />
                        </svg>
                        <span>User</span>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        >
                        <path d="M480-360 280-560h400L480-360Z" />
                        </svg>
                    </button>
                    <ul className={`${styles["sub-menu"]} ${userDropdown ? styles["show"] : ""}`}>
                        <div>
                        <li>
                            <a className={styles["search-btn"]} onClick={toggleSearch} href="#">
                            Search
                            </a>
                        </li>
                        <li>
                            <a className={styles["add-user-btn"]} onClick={toggleUserAdd} href="#">
                            Add
                            </a>
                        </li>
                        </div>
                    </ul>
                </li>
                <li>
                    <Link href="/programs">
                        <svg
                        id="Layer_1"
                        height={24}
                        viewBox="0 0 24 24"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        >
                        <path d="m17 12.5a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 1.5 1.5zm-4.5 3.5h-4a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3zm9.5-7.843v10.343a5.506 5.506 0 0 1 -5.5 5.5h-9a5.506 5.506 0 0 1 -5.5-5.5v-13a5.506 5.506 0 0 1 5.5-5.5h6.343a5.462 5.462 0 0 1 3.889 1.611l2.657 2.657a5.464 5.464 0 0 1 1.611 3.889zm-3 10.343v-9.5h-4a2 2 0 0 1 -2-2v-4h-5.5a2.5 2.5 0 0 0 -2.5 2.5v13a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5z" />
                        </svg>
                        <span>Programs</span>
                    </Link>
                </li>
                <li>
                    <Link href="/memberships">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        >
                        <path d="m18.5,3H5.5C2.467,3,0,5.468,0,8.5v7c0,3.032,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.468,5.5-5.5v-7c0-3.032-2.467-5.5-5.5-5.5Zm2.5,12.5c0,1.379-1.122,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.121-2.5-2.5v-7c0-1.379,1.122-2.5,2.5-2.5h13c1.378,0,2.5,1.121,2.5,2.5v7Zm-2-6c0,.828-.671,1.5-1.5,1.5h-3c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5h3c.829,0,1.5.672,1.5,1.5Zm0,5c0,.828-.671,1.5-1.5,1.5h-3c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5h3c.829,0,1.5.672,1.5,1.5Zm-7.04-3.641c.096.263.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.172-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438Z" />
                        </svg>
                        <span>Memberships</span>
                    </Link>
                </li>
                <li>
                    <Link href="/lessons">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        >
                        <path d="M22.024,2.278A5.5,5.5,0,0,0,17.477,1.1l-3.283.688A4.487,4.487,0,0,0,12,2.854,4.4,4.4,0,0,0,9.845,1.792l-3.361-.7A5.5,5.5,0,0,0,0,6.5v9.792A5.492,5.492,0,0,0,4.493,21.7L10.3,22.847A9.431,9.431,0,0,0,11.994,23a9.658,9.658,0,0,0,1.728-.157L19.484,21.7A5.5,5.5,0,0,0,24,16.293V6.5A5.487,5.487,0,0,0,22.024,2.278ZM10.5,19.829,5.053,18.753A2.5,2.5,0,0,1,3,16.293V6.5A2.507,2.507,0,0,1,5.494,4a2.285,2.285,0,0,1,.414.037l3.361.7A1.5,1.5,0,0,1,10.5,6.212ZM21,16.293a2.506,2.506,0,0,1-2.075,2.464L13.5,19.829V6.212a1.511,1.511,0,0,1,1.271-1.483l3.282-.687A2.5,2.5,0,0,1,21,6.5Z" />
                        </svg>
                        <span>Lessons</span>
                    </Link>
                </li>
                <li>
                    <Link href="/reports">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        >
                        <path d="M24,22.5c0,.829-.671,1.5-1.5,1.5H3.5c-1.93,0-3.5-1.57-3.5-3.5V1.5C.033-.472,2.967-.471,3,1.5V20.5c0,.276,.224,.5,.5,.5H22.5c.829,0,1.5,.671,1.5,1.5Zm-3.5-17.5h-3c-1.972,.033-1.971,2.967,0,3h1.348l-2.909,2.854c-.195,.195-.512,.195-.708,0-.06-.06-1.276-.929-1.276-.929-1.371-1.264-3.513-1.231-4.806,.062l-3.671,3.414c-.606,.564-.641,1.514-.077,2.12,.566,.608,1.514,.64,2.12,.077l3.71-3.452c.195-.194,.512-.195,.708,0,.06,.06,1.276,.929,1.276,.929,1.373,1.264,3.515,1.23,4.835-.09l2.95-2.893v1.409c.033,1.972,2.967,1.971,3,0v-3c0-1.93-1.57-3.5-3.5-3.5Z" />
                        </svg>
                        <span>Reports</span>
                    </Link>
                </li>
                <li>
                    <button onClick={toggleMerchDropdown} className={`${styles["dropdown-btn"]} ${merchDropdown ? styles["rotate"] : ""}`}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Bold"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        >
                        <circle cx={7} cy={22} r={2} />
                        <circle cx={17} cy={22} r={2} />
                        <path d="M22.984,6.018A3.675,3.675,0,0,0,20.364,5H5.654L5.391,2.938A3.328,3.328,0,0,0,2.087,0H1.5A1.5,1.5,0,0,0,0,1.5H0A1.5,1.5,0,0,0,1.5,3h.587a.331.331,0,0,1,.326.3l1.5,11.759A3.327,3.327,0,0,0,7.217,18H17.339a5.5,5.5,0,0,0,5.3-4.042l1.246-4.531A3.489,3.489,0,0,0,22.984,6.018ZM19.75,13.163A2.508,2.508,0,0,1,17.339,15H7.217a.329.329,0,0,1-.325-.3L6.037,8H20.514A.5.5,0,0,1,21,8.632Z" />
                        </svg>
                        <span>Merchandise</span>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        >
                        <path d="M480-360 280-560h400L480-360Z" />
                        </svg>
                    </button>
                    <ul className={`${styles["sub-menu"]} ${merchDropdown ? styles["show"] : ""}`}>
                        <div>
                        <li>
                            <Link href="/memberships">Memberships</Link>
                        </li>
                        <li>
                            <Link href="/store-items">Store items</Link>
                        </li>
                        <li>
                            <Link href="/penalty-fees">Penalty fees</Link>
                        </li>
                        </div>
                    </ul>
                </li>
                <li>
                    <Link href="/announcements">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 24"
                        xmlSpace="preserve"
                        >
                        <path d="M18,1.3c-0.2-1.7-2.8-1.6-3,0.1C14.9,3.1,13.3,4,10.5,4h-6C2,4,0,6,0,8.5v2c0,1.9,1.1,3.5,2.8,4.2l3.3,7.8  C6.5,23.4,7.4,24,8.5,24c1.8,0,3.1-1.9,2.4-3.5L8.5,15h1.9c4.3,0,4.4,1.9,4.5,2.6c0.1,1.9,3,1.7,3-0.1C18,17.5,18,1.3,18,1.3L18,1.3  z M10.5,12h-6C3.7,12,3,11.3,3,10.5v-2C3,7.7,3.7,7,4.5,7h6c1.8,0,3.3-0.3,4.5-0.9v6.8C13.9,12.3,12.5,12,10.5,12L10.5,12z M24,9.5  c0,1.9-0.7,3.7-2.1,5.1c-0.6,0.6-1.5,0.6-2.1,0c-0.6-0.6-0.6-1.5,0-2.1c0.8-0.8,1.2-1.8,1.2-2.9s-0.4-2.2-1.2-2.9  c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0C23.3,5.8,24,7.6,24,9.5L24,9.5z" />
                        </svg>
                        <span>Announcements</span>
                    </Link>
                </li>
                <li>
                    <Link href="/settings">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        width={24}
                        height={24}
                        >
                        <g>
                            <path d="M34.283,384c17.646,30.626,56.779,41.148,87.405,23.502c0.021-0.012,0.041-0.024,0.062-0.036l9.493-5.483   c17.92,15.332,38.518,27.222,60.757,35.072V448c0,35.346,28.654,64,64,64s64-28.654,64-64v-10.944   c22.242-7.863,42.841-19.767,60.757-35.115l9.536,5.504c30.633,17.673,69.794,7.167,87.467-23.467   c17.673-30.633,7.167-69.794-23.467-87.467l0,0l-9.472-5.461c4.264-23.201,4.264-46.985,0-70.187l9.472-5.461   c30.633-17.673,41.14-56.833,23.467-87.467c-17.673-30.633-56.833-41.14-87.467-23.467l-9.493,5.483   C362.862,94.638,342.25,82.77,320,74.944V64c0-35.346-28.654-64-64-64s-64,28.654-64,64v10.944   c-22.242,7.863-42.841,19.767-60.757,35.115l-9.536-5.525C91.073,86.86,51.913,97.367,34.24,128s-7.167,69.794,23.467,87.467l0,0   l9.472,5.461c-4.264,23.201-4.264,46.985,0,70.187l-9.472,5.461C27.158,314.296,16.686,353.38,34.283,384z M256,170.667   c47.128,0,85.333,38.205,85.333,85.333S303.128,341.333,256,341.333S170.667,303.128,170.667,256S208.872,170.667,256,170.667z" />
                        </g>
                        </svg>
                        <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <Link href="/info">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Filled"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        >
                        <path d="M12,24A12,12,0,1,0,0,12,12.013,12.013,0,0,0,12,24ZM12,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12,5Zm-1,5h1a2,2,0,0,1,2,2v6a1,1,0,0,1-2,0V12H11a1,1,0,0,1,0-2Z" />
                        </svg>
                        <span>Info</span>
                    </Link>
                </li>
            </ul>
            </aside>
            <main className={`${styles["main-content"]} ${sidebarOpen ? styles["expand"] : ""}`}>
                <div className={`${styles["search-container"]} ${search ? styles["enabled"] : ""}`}>
                    <div className={styles["search-content"]}>
                        <label htmlFor="search" className={styles["search-label"]}>User search</label>
                        <input className={styles["search"]} type="text" placeholder="Enter name, email, or phone"/>
                        <hr className={styles["horizontal-line"]} />
                        <div className={styles["results"]}>
                            <h1>Jake Frenzel</h1>
                            <p>jake@courtspro.com</p>
                        </div>
                        <div className={styles["results"]}>
                            <h1>Eli Wilson</h1>
                            <p>eli@courtspro.com</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles["add-user-container"]} ${userAdd ? styles["enabled"] : ""}`}>
                    <div className={`${styles["add-user-content"]} ${userAdd ? styles["enabled"] : ""}`}>
                        <label htmlFor="search" className={styles["search-label"]}>User Add</label>
                        <hr className={styles["horizontal-line"]}/>
                        <form>
                            <label htmlFor="first-name">First name</label>
                            <input id="first-name" type="text" />
                            <label htmlFor="last-name">Last name</label>
                            <input id="last-name" type="text" />
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" />
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" type="text" />
                            <button type="submit">Add user</button>
                        </form>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
}