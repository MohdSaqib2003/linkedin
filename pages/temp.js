import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Modal } from 'antd';

const data = [
    {
        type: "photo",
        url: "https://wallpaperaccess.com/full/2159510.jpg"
    },
    {
        type: "photo",
        url: "https://cdn.wallpapersafari.com/11/39/sGHROA.jpg"
    },
    {
        type: "video",
        url: "https://api1.reglado.org/sites/default/files/2022-06/SampleVideo_1280x720_1mb_4.mp4"
    },
    {
        type: "photo",
        url: "https://i.pinimg.com/originals/49/66/55/4966550fa2ff97f4f432700b20088f83.png"
    }

];

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "gray", color: 'black', borderRadius: '50px', content: "NEXT" }}
            onClick={onClick}
        />
    );
}



export default function temp() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [slideIndex, setSlide] = useState(0);


    var settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: slideIndex,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            nextArrow: <Arrow />,
            prevArrow: <Arrow />,
            initialSlide: slideIndex,
            slidesToShow: 1,
            slidesToScroll: 1,          
        };
    }, [slideIndex])

    const showModal = (ind) => {
        setIsModalVisible(true);
        setSlide(ind);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    console.log(slideIndex);
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {data.map((item, ind) => {
                if (item.type === "photo") {
                    return <div key={ind} onClick={() => showModal(ind)} style={{ margin: '5px', width: "200px", cursor: 'pointer' }}><img src={item.url} alt="" /></div>
                } else if (item.type === "video") {
                    return (<div key={ind} onClick={() => showModal(ind)} style={{ margin: '5px', width: "200px", height: '150px', cursor: 'pointer' }}>
                        <video controls>
                            <source src={item.url} type="video/mp4" />
                        </video>
                    </div>)
                }
            })}
            <div style={{ backgroundColor: 'black', textAlign: '-webkit-center' }}>

                <Modal footer={null} visible={isModalVisible} onCancel={handleCancel} width={900} bodyStyle={{ backgroundColor: '' }}>
                    <div style={{ padding: '0px 30px 0px 30px', width: '800px' }}>                      
                            <Slider {...settings}>
                                {/* <Slider {...settings}> */}
                                    {data.map((item, ind) => {
                                        if (item.type === "photo") {
                                            return <div key={ind} style={{ margin: '5px', }}><img src={item.url} alt="" /></div>
                                        } else if (item.type === "video") {
                                            return (<div key={ind} style={{ margin: '5px', }}>
                                                <video controls>
                                                    <source src={item.url} type="video/mp4" />
                                                </video>
                                            </div>)
                                        }
                                    })}
                                    {/* <div>
                                <img src="https://wallpaperaccess.com/full/2159510.jpg" />
                            </div>
                            <div>                            
                                <video controls>
                                    <source src="https://api1.reglado.org/sites/default/files/2022-06/SampleVideo_1280x720_1mb_4.mp4" type="video/mp4" />
                                </video>

                            </div>
                            <div>
                                <img src="https://cdn.wallpapersafari.com/11/39/sGHROA.jpg" />
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/originals/49/66/55/4966550fa2ff97f4f432700b20088f83.png" />
                            </div> */}
                                </Slider>
                           
                        </div>
                </Modal>
                {/* </div> */}
            </div>
        </div>
    );
}
