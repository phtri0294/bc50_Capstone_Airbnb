import React, { useState } from 'react';

export default function Header() {
    const user = JSON.parse(localStorage.getItem('LOGIN_ADMIN')) || JSON.parse(localStorage.getItem('LOGIN_USER'));

    const handleLogout = () => {
        if (localStorage.getItem('LOGIN_ADMIN')) {
            localStorage.removeItem('LOGIN_ADMIN');
        } else if (localStorage.getItem('LOGIN_USER')) {
            localStorage.removeItem('LOGIN_USER');
        }
    };

    return (
        <div>
            <nav className="fixed top-0 border-b w-full bg-white z-20">
                <div className="container mx-auto px-2 sm:px-10 py-5 flex flex-wrap justify-between items-center">
                    <a aria-current="page" className="hidden sm:flex flex-wrap items-center text-rose-500 z-20 active" href="/" style={{ flex: '1 1 25%' }}>
                        <div className="hidden md:block">
                            <svg width={102} height={32} fill="currentcolor" style={{ display: 'block' }}>
                                <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z" />
                            </svg>
                        </div>
                        <div className="block md:hidden">
                            <svg width={30} height={32} fill="currentcolor" className="block">
                                <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z" />
                            </svg>
                        </div>
                    </a>
                    <div className="flex flex-wrap justify-center items-center relative z-20" style={{ flex: '1 1 45%' }}>
                        <div className="flex flex-wrap justify-center items-center">
                            <a aria-current="page" className="mx-2 active" href="/">Chỗ ở</a>
                            <a aria-current="page" className="mx-2 active" href="/">Trải nghiệm</a>
                            <a className="mx-2" href="/experience">Trải nghiệm trực tuyến</a>
                        </div>
                        <div className="absolute flex flex-wrap px-3 py-1.5 rounded-full shadow-lg border bg-white justify-center items-center cursor-pointer z-20">
                            <div className="font-medium border-r pr-2">Địa điểm bất kỳ
                            </div>
                            <div className="font-medium border-r pr-2 pl-2">tuần bất kỳ
                            </div>
                            <div className="font-normal pr-2 pl-2">Thêm khách
                            </div>
                            <div className="inline-flex w-8 h-8 justify-center items-center bg-rose-500 rounded-full text-white">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: 12, width: 12, stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}>
                                    <g fill="none">
                                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* PopUp */}
                    <div className="absolute top-0 left-0 w-screen bg-white transition-all duration-300 pb-3 z-10" style={{ paddingTop: '4.4rem' }}>
                        <form className="flex flex-wrap justify-center items-center">
                            <div className="flex flex-wrap justify-center items-center relative  transition-all duration-300 h-0 overflow-hidden">
                                <div className="px-5 py-2 hover:bg-gray-300 rounded-full h-full flex flex-wrap justify-center items-center">
                                    <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Địa điểm</label>
                                    <div className="w-48 bg-transparent outline-none select_location css-b62m3t-container">
                                        <span id="react-select-3-live-region" className="css-7pg0cj-a11yText" />
                                        <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" />
                                        <div className=" css-1s2u09g-control">
                                            <div className=" css-1d8n9bt">
                                                <div className=" css-qc6sy-singleValue" />
                                                <div className=" css-ackcql" data-value>
                                                    <input className autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-3-input" spellCheck="false" tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" defaultValue style={{ color: 'inherit', background: '0px center', opacity: 1, width: '100%', gridArea: '1 / 2 / auto / auto', font: 'inherit', minWidth: 2, border: 0, margin: 0, outline: 0, padding: 0 }} />
                                                </div>
                                            </div>
                                            <div className=" css-1wy0on6">
                                                <span className=" css-1okebmr-indicatorSeparator" />
                                                <div className=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                                    <svg height={20} width={20} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <input name="location" type="hidden" defaultValue />
                                    </div>
                                </div>
                                <div className="hidden sm:block py-2 px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full">
                                    <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Nhận phòng</label>
                                    <input name="checkIn" type="date" id="checkInDate" className="bg-transparent outline-none" placeholder="Thêm ngày" />
                                </div>
                                <div className="hidden sm:block py-2 px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full">
                                    <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Trả phòng</label>
                                    <input name="checkOut" type="date" id="checkOutDate" className="bg-transparent outline-none" placeholder="Thêm ngày" />
                                </div>
                                <div className="hidden sm:block py-2 pl-7 pr-5 hover:bg-gray-300 rounded-full overflow-hidden h-full">
                                    <label htmlFor="guest" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Khách</label>
                                    <input name="guest" type="number" id="guest" className="bg-transparent outline-none" placeholder="Thêm khách" />
                                </div>
                                <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 absolute right-0">Tìm kiếm</button>
                            </div>
                        </form>
                    </div>
                    {/* PopUp */}

                    <div className="hidden sm:block flex-initial col-end-6 z-20" style={{ flex: '1 1 25%' }}>
                        <div className="relative flex items-center justify-end">

                            <div className="mr-4 flex items-center z-10">
                                <div className="hidden relative lg:block">
                                    <button type="button" className="relative inline-block rounded-full py-2 px-3 hover:bg-gray-200">
                                        <div className="flex h-5 items-center">
                                            <div className="_xpkakx">
                                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 20, width: 20, fill: 'currentcolor' }}>
                                                    <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="block z-10">
                                <div className="relative inline">
                                    <ul className='navbar-nav ml-auto'>
                                        <li className="nav-item dropdown relative no-arrow">
                                            <a className="nav-link dropdown-toggle relative inline-block items-center rounded-full border px-2 hover:shadow-lg" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="mr-2 px-2 d-none d-lg-inline text-green-800 text-lg small">
                                                    {user?.user?.name}
                                                </span>
                                                <i className='fas fa-user fa-lg fa-fw mr-2 text-gray-600' />
                                            </a>

                                            <div className="dropdown-menu shadow" aria-labelledby="userDropdown">
                                                <a className="dropdown-item" href="#">
                                                    <i className='fas fa-user fa-sm fa-fw mr-2 text-gray-500' />
                                                    Thông tin cá nhân
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-500" />
                                                    Chuyến đi
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    onClick={(e) => {
                                                        handleLogout();
                                                    }}
                                                >
                                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-red-500" />
                                                    Đăng xuất
                                                </a>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Slider */}
            {/* <div>
                    <div className="h-28" />
                    <div className="container mx-auto sticky top-32">
                        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper text-center">
                            <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}><div className="swiper-slide swiper-slide-active" style={{ width: '228.6px', marginRight: 10 }}>
                                <img className src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" width={24} height={24} />
                                <span>Thật ấn tượng</span>
                            </div>
                                <div className="swiper-slide swiper-slide-next" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" width={24} height={24} />
                                    <span>Công viên quốc gia</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" width={24} height={24} />
                                    <span>Hồ bơi tuyệt vời</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" width={24} height={24} />
                                    <span>Đảo</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" width={24} height={24} />
                                    <span>Bãi biển</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" width={24} height={24} />
                                    <span>Nhà nhỏ</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" width={24} height={24} />
                                    <span>Thiết kế</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" width={24} height={24} />
                                    <span>Bắc cực</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" width={24} height={24} />
                                    <span>Cabin</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" width={24} height={24} />
                                    <span>Ven hồ</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg" width={24} height={24} />
                                    <span>Chơi golf</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" width={24} height={24} />
                                    <span>Khung cảnh tuyệt vời</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" width={24} height={24} />
                                    <span>Hang động</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" width={24} height={24} />
                                    <span>Lướt sóng</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" width={24} height={24} />
                                    <span>Khung nhà chữ A</span>
                                </div>
                                <div className="swiper-slide" style={{ width: '228.6px', marginRight: 10 }}>
                                    <img className src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" width={24} height={24} />
                                    <span>Nhà dưới lòng đất</span>
                                </div>
                            </div>
                            <div className="swiper-button-prev swiper-button-disabled" />
                            <div className="swiper-button-next" />
                        </div>
                    </div>
                </div> */}

        </div>

    );
};

