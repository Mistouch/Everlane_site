// src/Pages/about-us.jsx

function AboutUs() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      lineHeight: '1.6',
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#2c3e50', 
        marginBottom: '25px',
        fontWeight: '700',
        fontSize: '2.5rem',
        letterSpacing: '1px',
      }}>
        About Us
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        Welcome to <strong>Everlane BD</strong> — your destination for premium apparel and fashion that elevates your style.  
        We offer a curated selection of fine leather shoes, artisanal handcrafted treasures, and high-quality cosmetics designed to bring out your best look.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        Our mission is to provide timeless elegance combined with modern trends, ensuring that every customer experiences exceptional quality and service.
      </p>
      <p style={{ fontSize: '1.1rem' }}>
        Thank you for choosing <strong>Everlane BD</strong> — where style meets craftsmanship.
      </p>
    </div>
  );
}

export default AboutUs;
