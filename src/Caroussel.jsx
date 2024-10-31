import React from 'react';

const Caroussel = () => {
  const carouselImageStyle = {
    height: '700px', 
    objectFit: 'cover',
  };

 
const productImageStyle = {
    height: '100%',
    width: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };
  
 
 
  

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    marginTop: '2rem',
    fontFamily: "Dancing Script, serif",
  };

  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '50px 0',
  };
  const aboutStyle = {
    fontFamily: "Dancing Script, serif",
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
  };

 

  const headStyle = {
    position: 'relative',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '20px',
    fontFamily: "Dancing Script, serif",
  };

   const lineStyle = {
    display: 'block',
    height: '4px',
    width: '50px',
    backgroundColor: '#ff7b54',
     marginTop: '8px',
   };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
    fontFamily: "Dancing Script, serif",
  };


const imageContainerStyle = {
    overflow: 'hidden',
    borderRadius: '18px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
    height: '250px', 
    width: '100%', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    transition: 'transform 0.3s ease',
  };
  const footerStyle = {
    backgroundColor: '#000', 
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px',
  };

  
  const iconStyle = {
    fontSize: '24px',
    color: '#fff', 
    transition: 'color 0.3s',
    cursor: 'pointer',
  };



  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.mainlinemenswear.co.uk/image/upload/w_1600/q_100/v1730108855/homesliders/hzps8t5xrl0z4nq2gam2.jpg"
              className="d-block w-100"
              alt="First Slide"
              style={carouselImageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.mainlinemenswear.co.uk/image/upload/w_1600/q_100/v1730108859/homesliders/xdq8yekrfy5ihjteg0ct.jpg"
              className="d-block w-100"
              alt="Second Slide"
              style={carouselImageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.mainlinemenswear.co.uk/image/upload/w_1600/q_100/v1730108843/homesliders/rv5injpydqn9qw8xgndr.jpg"
              className="d-block w-100"
              alt="Third Slide"
              style={carouselImageStyle}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

{/* MENSWEAR */}

<section className="about-us" style={sectionStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5">
            <h2 style={headStyle}>
            Men's designer clothes from Mainline Menswear
             
            </h2>
            <p style={paragraphStyle}>
            Mainline Menswear is one of the leading UK retailers specialising in mens designer clothing, footwear, and accessories. Browse our extensive range of men's designer clothes today. Whether you're looking for loungewear, designer jeans, jackets, or packs of designer t-shirts, we supply your wardrobe must-haves.
            <br /> <br />

            Official stockists to some of the biggest designer labels and with new products arriving daily you're sure to find the freshest styles. With a brand portfolio including Emporio Armani, Ralph Lauren, Hugo Boss, Fred Perry and more, we have an extensive range of men's designer clothing.
            <br /><br />
            To match the impressive range of men's clothes, Mainline Menswear continuously strives for service excellence. By providing impeccable customer service not only will you get the best designer clothes but also peace of mind with every purchase. All orders are dispatched using our premium UK next-day delivery service and our friendly customer service team is more than happy to guide you through every step of your shopping experience.
            <br /><br />

            Men's clothing never looked so good and there's no better time to score yourself a wardrobe upgrade. Experience new products from top brands and the very best clothes for men with a service that you'll love. 

</p>

          </div>
          <div className="col-md-6">
            <div style={ aboutStyle}>
              <img
                src="https://blogapi.mainlinemenswear.co.uk/wp-content/uploads/2024/10/MM-BLOG-FEED-MA-240925-001.jpg"
                
                className="img-fluid"
                style={imageStyle}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>





{/* PRODUCTS */}


    <div className="container">
  <h2 style={headingStyle}>MEN'S COLLECTION</h2>
  <div className="row mt-5 mb-5">
    <div className="col-md-3 col-sm-6 mb-4">
      <div
         className="card"
         style={imageContainerStyle}
         onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
         onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
       >
        <img
          src="https://cdn.mainlinemenswear.co.uk/f_auto,q_auto/blogapi/2023/07/MM-BLOG-FRAMEYOURSTYLE-HERO-004.jpg"
          className="card-img-top"
          alt="Product 1"
          
          style={productImageStyle}
        />
      </div>
    </div>
    {/* Repeat similar blocks for other images */}
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://cdn.mainlinemenswear.co.uk/f_auto,q_auto/blogapi/2024/07/MM-BLOG-HERO-RALPHJEANS-240703-001.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    <div className="col-md-3 col-sm-6 mb-4">
      <div
       className="card"
       style={imageContainerStyle}
       onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
       onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
     >
        <img
          src="https://cdn.mainlinemenswear.co.uk/f_auto,q_auto/blogapi/2023/08/MM-BLOG-HERO-ROLLEDSHIRTS-230208-001.jpg"
          
          
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://cdn.mainlinemenswear.co.uk/f_auto,q_auto/blogapi/2016/12/5.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    


    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://cdn.mainlinemenswear.co.uk/f_auto,q_auto/blogapi/2021/05/Nike_1.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>


    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://cdn.mainlinemenswear.co.uk/f_auto,q_auto/blogapi/2023/12/MM-BLOG-HERO-EA7-230906.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>


    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://cdn.mainlinemenswear.co.uk/f_auto,q_auto/blogapi/2023/07/MM-BLOG-HERO-SWIMSHORTS-230707-001.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>



    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://cdn.mainlinemenswear.co.uk/f_auto,q_auto/blogapi/2014/10/Stylish-joggers.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>



  </div>
</div>

























































































{/* BRANDS */}


<div className="container">
  <h2 style={headingStyle}>SHOP BY TOP BRANDS</h2>
  <div className="row mt-5 mb-5">
    <div className="col-md-3 col-sm-6 mb-4">
      <div
         className="card"
         style={imageContainerStyle}
         onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
         onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
       >
        <img
          src="http://1000logos.net/wp-content/uploads/2017/06/Tommy-Hilfiger-Logo.png"
          className="card-img-top"
          alt="Product 1"
          
          style={productImageStyle}
        />
      </div>
    </div>
    {/* Repeat similar blocks for other images */}
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://www.pngarts.com/files/8/Adidas-Logo-Black-Transparent-Image.png"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    <div className="col-md-3 col-sm-6 mb-4">
      <div
       className="card"
       style={imageContainerStyle}
       onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
       onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
     >
        <img
          src="https://turbologo.com/articles/wp-content/uploads/2020/01/levis-primary-logo.png"
          
          
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="http://1000logos.net/wp-content/uploads/2016/10/calvin-klein-emblem.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    


    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/871/737/original/polo-ralph-lauren-brand-logo-symbol-clothes-design-icon-abstract-illustration-free-vector.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>


    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://i.pinimg.com/originals/03/fc/9e/03fc9ea117d97ac227d8dfae27106ddd.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>


    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://clipartmag.com/images/nike-logo-png-38.png"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>



    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://www.franchiseindia.com/uploads/news/fi/know-why-louis-philippe-is-set-t-2e24f2d62c.gif"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>



  </div>
</div>

























   

{/* FOOTER */}

<footer style={footerStyle}>
      <p>Follow us on social media</p>
      <div style={iconContainerStyle}>
        <i
          className="fab fa-facebook-f"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = '#3b5998')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        ></i>
        <i
          className="fab fa-twitter"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = '#00acee')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        ></i>
        <i
          className="fab fa-whatsapp"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = '#25D366')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        ></i>
        <i
          className="fab fa-instagram"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = '#C13584')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        ></i>
      </div>
      <p style={{ marginTop: '10px', fontSize: '14px' }}>© 2024 Manline. All rights reserved.</p>
    </footer>











 
    </div>
  );
};

export default Caroussel;