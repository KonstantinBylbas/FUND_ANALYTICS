import './slider.scss';
import InfiniteCarousel from 'react-leaf-carousel';

export default function Slider({ slidesToScroll, slidesToShow, slide }) {

    let slidesToShowMob = slidesToShow === 5 ? 2 : slidesToShow;

    return (
        <div className="slider">
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: slidesToShowMob,
                            slidesToScroll: slidesToShowMob,
                        },
                    }
                ]}

                dots={false}
                showSides={false}
                sidesOpacity={.3}
                sideSize={.1}
                slidesToScroll={slidesToScroll}
                slidesToShow={slidesToShow}
                scrollOnDevice={true}
            >
                {slide}
            </InfiniteCarousel>
        </div >

    );
}