import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import{ NavLink } from 'react-router-dom'
import './Carousel.css'

function ImageCarousel(){

        return (
            <>
            <div className="carousel-container">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                <div>
                    <img className="one-media-image" src="https://flxt.tmsimg.com/assets/p16785_p_v10_ae.jpg" />
                </div>
                <div>
                    <img className="one-media-image" src="https://external-preview.redd.it/QaDOd_b3uwHVUJ0o4j0SiIy-AiSUpGJdxkdReFU-Aao.jpg?width=640&crop=smart&auto=webp&s=88e92eddfdfe9b66a72fe6fd5c589981f23f8337" />
                </div>
                <div>
                    <img className="one-media-image" src="https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" />
                </div>
                <div>
                    <img className="one-media-image" src='http://nerdist.com/wp-content/uploads/2017/08/Neuromancer-full-cover.jpg' />
                </div>
                <div>
                    <img className="one-media-image" src='https://www.mobygames.com/images/covers/l/612571-system-shock-2-windows-front-cover.jpg' />
                </div>
            </Carousel>
            </div>
            <div className="btn-div">
            <NavLink to="/signup">
                <button className="media-btn">Sign Up Today</button>
            </NavLink>
            </div>
        </>
        );
        }

export default ImageCarousel
