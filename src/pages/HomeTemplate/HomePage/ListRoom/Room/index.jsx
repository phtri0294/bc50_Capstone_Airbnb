import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    actManageRoom,
} from './duck/actions';

export default function Room() {
    const dispatch = useDispatch();

    const dataRoom = useSelector((state) => state.manageRoomReducer.data);

    useEffect(() => {
        dispatch(actManageRoom());
    }, [dispatch]);

    return (
        <div>
        </div>
    )

    {/* <a class="roomLink" href="/roomdetail/61655623dc423b001dd9c05a">
    <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events roomSwiper relative swiper-backface-hidden">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-278px, 0px, 0px);">
            <div class="swiper-slide swiper-slide-duplicate w-full swiper-slide-prev" data-swiper-slide-index="2" style="width: 278px;">
                <img src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg">
            </div>
            <div class="swiper-slide w-full swiper-slide-active" data-swiper-slide-index="0" style="width: 278px;">
                <img src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg">
            </div>
            <div class="swiper-slide w-full swiper-slide-next" data-swiper-slide-index="1" style="width: 278px;"><img src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"></div><div class="swiper-slide w-full swiper-slide-duplicate-prev" data-swiper-slide-index="2" style="width: 278px;"><img src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"></div><div class="swiper-slide swiper-slide-duplicate w-full swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 278px;"><img src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div><div class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic" style="width: 80px;"><span class="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main" style="left: 16px;"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active-next" style="left: 16px;"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active-next-next" style="left: 16px;"></span></div><button class="absolute top-3 right-3 z-30"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: rgb(255, 255, 255); stroke-width: 2; overflow: hidden;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg></button></div><div><p class="flex justify-between mt-2"><span class="font-bold">Khách Sạn Hồng Hào</span><span><i class="fa fa-star"></i> 7.32</span></p><p class="text-gray-500">9214 km</p><p class="text-gray-500">Ngày 5 - Ngày 13 tháng 7</p><p class="mt-1"><span class="font-bold">$189</span> đêm</p></div></a> */}

}