import React from 'react'

export default function Slider() {
    return (
        <div>
            <div className="h-28" />
            <div className="container mx-auto sticky top-32">
                <div className='mt-4'>
                    <div className="grid grid-col-6 grid-flow-col justify-between" >
                        <div >
                            <img className src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" width={24} height={24} />
                            <span>Thật ấn tượng</span>
                        </div>
                        <div >
                            <img className src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" width={24} height={24} />
                            <span>Công viên quốc gia</span>
                        </div>
                        <div>
                            <img className src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" width={24} height={24} />
                            <span>Hồ bơi tuyệt vời</span>
                        </div>
                        <div >
                            <img className src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" width={24} height={24} />
                            <span>Đảo</span>
                        </div>
                        <div >
                            <img className src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" width={24} height={24} />
                            <span>Bãi biển</span>
                        </div>
                        <div >
                            <img className src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" width={24} height={24} />
                            <span>Nhà nhỏ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
