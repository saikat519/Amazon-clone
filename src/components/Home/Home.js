import React from 'react'
import './Home.css'
import Product from '../Product/Product'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
    return (
      
        <div className="home">
        <div className="home__container">

            <Carousel>
              <Carousel.Item interval={500}>
              <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
              />
               
              </Carousel.Item>
              <Carousel.Item interval={500}>
              <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Luggage/December/pc3000x1200english._CB412535531_.jpg"
              alt=""
              />
               
              </Carousel.Item >
              <Carousel.Item interval={500}>
              <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Sravanthi/MegaSalaryDays_Jan21/Salary-days-Jan-2021-herotator_3000x1200._CB412648388_.jpg"
              alt=""
              />
                
              </Carousel.Item>
            </Carousel>

        
        
        


      <div className="home__row">
        <Product
            id="12321341"
            title="EKSA E900 Wired Stereo Gaming Headset-Over Ear Headphones with Noise Canceling Mic, Detachable Headset Compatible with PS4, Xbox One, Nintendo Switch, PC, Mac, Laptop "
            price={2050}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71mmXKj-96L._SX679_.jpg"
        />
        <Product
            id="49538094"
            title="HP Envy x360 Ryzen 5 13.3-Inch 2-in-1 FHD Touchscreen Laptop (8GB/512GB/Windows 10/Vega 8 Graphics/MS Office/Nightfall Black/1.3 kg), 13-ar0118au "
            price={75990}
            rating={5}
            image="data:image/webp;base64,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"
          />
        
        </div>
        <br />
        <div className="home__row">

        
        
        <Product
        id="4903850"
        title="HONOR Band 5 (OliveGreen)- Waterproof Full Color AMOLED Touchscreen, SpO2 (Blood Oxygen), Music Control, Watch Faces Store, up to 14 Day Battery Life"
        price={2189}
        rating={3}
        image="https://m.media-amazon.com/images/I/713XwQsedwL._SX679_.jpg"
      />
      <Product
        id="23445930"
        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
        price={6999}
        rating={5}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
      />
      <Product
        id="3254354345"
        title="Redmi Note 9 Pro (Champagne Gold, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G & Alexa Hands-Free "
        price={12999}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81Ox29uGzNL._SX679_.jpg"
      />
        </div>
        <br />
        <div className="home__row">
        <Product
            id="90829332"
            title="Asus ROG Strix 32-inch Curved Gaming Monitor WQHD 1920 x 1080 Pixels - 2560 x1440 144Hz SRGB - XG32VQ (Black)"
            price={54940}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41ZjKOOl%2BwL.jpg"
        />        
        </div>
        <br />       
        <br />

        </div>
        </div>
        
    )
}

export default Home
