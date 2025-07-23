import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Garment.css';
import Footer from "../Footerr/Footer,jsx";
import tee from '../Assets/Tee.png';
import men_chew from '../Assets/men_chewneak_sweater.png';


const Garment = () => {
    const navigate = useNavigate();

    // Garment data structure
    const garmentData = {
        men: {
            tshirt: [
                {
                    id: 1,
                    name: 'Classic Cotton Tee',
                    description: '100% cotton crew neck t-shirt in various colors',
                    image: tee
                },
                {
                    id: 2,
                    name: 'V-Neck Premium Tee',
                    description: 'Soft v-neck t-shirt with premium fabric blend',
                    image: 'https://via.placeholder.com/300x300?text=Men+T-Shirt+2'
                },
                {
                    id: 3,
                    name: 'Graphic Print Tee',
                    description: 'Cotton t-shirt with artistic graphic print',
                    image: 'https://via.placeholder.com/300x300?text=Men+T-Shirt+3'
                },
                {
                    id: 4,
                    name: 'Pocket Tee',
                    description: 'Classic t-shirt with chest pocket',
                    image: 'https://via.placeholder.com/300x300?text=Men+T-Shirt+4'
                },
                {
                    id: 5,
                    name: 'Performance Tee',
                    description: 'Moisture-wicking athletic t-shirt',
                    image: 'https://via.placeholder.com/300x300?text=Men+T-Shirt+5'
                }
            ],
            sweater: [
                {
                    id: 6,
                    name: 'Crewneck Sweater',
                    description: 'Classic wool blend crewneck sweater',
                    image: men_chew
                },
                {
                    id: 7,
                    name: 'V-Neck Sweater',
                    description: 'Lightweight merino wool v-neck',
                    image: 'https://via.placeholder.com/300x300?text=Men+Sweater+2'
                },
                {
                    id: 8,
                    name: 'Turtleneck Sweater',
                    description: 'Warm cashmere blend turtleneck',
                    image: 'https://via.placeholder.com/300x300?text=Men+Sweater+3'
                },
                {
                    id: 9,
                    name: 'Cardigan Sweater',
                    description: 'Button-front cardigan with pockets',
                    image: 'https://via.placeholder.com/300x300?text=Men+Sweater+4'
                },
                {
                    id: 10,
                    name: 'Cable Knit Sweater',
                    description: 'Traditional cable knit pattern sweater',
                    image: 'https://via.placeholder.com/300x300?text=Men+Sweater+5'
                }
            ],
            woven: [
                {
                    id: 11,
                    name: 'Dress Shirt',
                    description: 'Formal cotton dress shirt with spread collar',
                    image: 'https://via.placeholder.com/300x300?text=Men+Woven+1'
                },
                {
                    id: 12,
                    name: 'Casual Button-Down',
                    description: 'Relaxed fit button-down shirt',
                    image: 'https://via.placeholder.com/300x300?text=Men+Woven+2'
                },
                {
                    id: 13,
                    name: 'Linen Shirt',
                    description: 'Breathable linen shirt for summer',
                    image: 'https://via.placeholder.com/300x300?text=Men+Woven+3'
                },
                {
                    id: 14,
                    name: 'Flannel Shirt',
                    description: 'Warm brushed cotton flannel shirt',
                    image: 'https://via.placeholder.com/300x300?text=Men+Woven+4'
                },
                {
                    id: 15,
                    name: 'Denim Shirt',
                    description: 'Classic denim work shirt',
                    image: 'https://via.placeholder.com/300x300?text=Men+Woven+5'
                }
            ],
            denimPant: [
                {
                    id: 16,
                    name: 'Slim Fit Jeans',
                    description: 'Modern slim fit denim jeans',
                    image: 'https://via.placeholder.com/300x300?text=Men+Denim+1'
                },
                {
                    id: 17,
                    name: 'Straight Leg Jeans',
                    description: 'Classic straight leg denim',
                    image: 'https://via.placeholder.com/300x300?text=Men+Denim+2'
                },
                {
                    id: 18,
                    name: 'Relaxed Fit Jeans',
                    description: 'Comfortable relaxed fit jeans',
                    image: 'https://via.placeholder.com/300x300?text=Men+Denim+3'
                },
                {
                    id: 19,
                    name: 'Black Denim Jeans',
                    description: 'Slim black denim jeans',
                    image: 'https://via.placeholder.com/300x300?text=Men+Denim+4'
                },
                {
                    id: 20,
                    name: 'Distressed Jeans',
                    description: 'Fashionable distressed denim',
                    image: 'https://via.placeholder.com/300x300?text=Men+Denim+5'
                }
            ],
            denimJacket: [
                {
                    id: 21,
                    name: 'Classic Denim Jacket',
                    description: 'Timeless medium wash denim jacket',
                    image: 'https://via.placeholder.com/300x300?text=Men+Jacket+1'
                },
                {
                    id: 22,
                    name: 'Trucker Jacket',
                    description: 'Authentic denim trucker jacket',
                    image: 'https://via.placeholder.com/300x300?text=Men+Jacket+2'
                },
                {
                    id: 23,
                    name: 'Black Denim Jacket',
                    description: 'Sleek black denim jacket',
                    image: 'https://via.placeholder.com/300x300?text=Men+Jacket+3'
                },
                {
                    id: 24,
                    name: 'Oversized Denim Jacket',
                    description: 'Trendy oversized fit denim jacket',
                    image: 'https://via.placeholder.com/300x300?text=Men+Jacket+4'
                },
                {
                    id: 25,
                    name: 'Sherpa-Lined Jacket',
                    description: 'Warm sherpa-lined denim jacket',
                    image: 'https://via.placeholder.com/300x300?text=Men+Jacket+5'
                }
            ],
            lingerie: [
                {
                    id: 26,
                    name: 'Boxer Briefs',
                    description: 'Breathable cotton boxer briefs',
                    image: 'https://via.placeholder.com/300x300?text=Men+Lingerie+1'
                },
                {
                    id: 27,
                    name: 'Trunks',
                    description: 'Comfortable mid-length trunks',
                    image: 'https://via.placeholder.com/300x300?text=Men+Lingerie+2'
                },
                {
                    id: 28,
                    name: 'Briefs',
                    description: 'Classic fit cotton briefs',
                    image: 'https://via.placeholder.com/300x300?text=Men+Lingerie+3'
                },
                {
                    id: 29,
                    name: 'Performance Boxers',
                    description: 'Moisture-wicking athletic boxers',
                    image: 'https://via.placeholder.com/300x300?text=Men+Lingerie+4'
                },
                {
                    id: 30,
                    name: 'Silk Boxers',
                    description: 'Luxurious silk boxer shorts',
                    image: 'https://via.placeholder.com/300x300?text=Men+Lingerie+5'
                }
            ]
        },
        women: {
            tshirt: [
                {
                    id: 31,
                    name: 'Basic Crew Tee',
                    description: 'Soft cotton crew neck t-shirt',
                    image: 'https://via.placeholder.com/300x300?text=Women+T-Shirt+1'
                },
                {
                    id: 32,
                    name: 'V-Neck Tee',
                    description: 'Flattering v-neck t-shirt',
                    image: 'https://via.placeholder.com/300x300?text=Women+T-Shirt+2'
                },
                {
                    id: 33,
                    name: 'Cropped Tee',
                    description: 'Trendy cropped t-shirt',
                    image: 'https://via.placeholder.com/300x300?text=Women+T-Shirt+3'
                },
                {
                    id: 34,
                    name: 'Graphic Tee',
                    description: 'Cotton tee with feminine graphic',
                    image: 'https://via.placeholder.com/300x300?text=Women+T-Shirt+4'
                },
                {
                    id: 35,
                    name: 'Long Sleeve Tee',
                    description: 'Fitted long sleeve t-shirt',
                    image: 'https://via.placeholder.com/300x300?text=Women+T-Shirt+5'
                }
            ],
            sweater: [
                {
                    id: 36,
                    name: 'Turtleneck Sweater',
                    description: 'Warm cashmere turtleneck',
                    image: 'https://via.placeholder.com/300x300?text=Women+Sweater+1'
                },
                {
                    id: 37,
                    name: 'Oversized Sweater',
                    description: 'Comfy oversized knit sweater',
                    image: 'https://via.placeholder.com/300x300?text=Women+Sweater+2'
                },
                {
                    id: 38,
                    name: 'Crop Sweater',
                    description: 'Trendy cropped knit sweater',
                    image: 'https://via.placeholder.com/300x300?text=Women+Sweater+3'
                },
                {
                    id: 39,
                    name: 'Cardigan',
                    description: 'Long open-front cardigan',
                    image: 'https://via.placeholder.com/300x300?text=Women+Sweater+4'
                },
                {
                    id: 40,
                    name: 'Cable Knit Sweater',
                    description: 'Classic cable knit sweater',
                    image: 'https://via.placeholder.com/300x300?text=Women+Sweater+5'
                }
            ],
            woven: [
                {
                    id: 41,
                    name: 'Blouse',
                    description: 'Elegant silk blouse',
                    image: 'https://via.placeholder.com/300x300?text=Women+Woven+1'
                },
                {
                    id: 42,
                    name: 'Button-Down Shirt',
                    description: 'Classic cotton button-down',
                    image: 'https://via.placeholder.com/300x300?text=Women+Woven+2'
                },
                {
                    id: 43,
                    name: 'Peasant Blouse',
                    description: 'Bohemian style peasant top',
                    image: 'https://via.placeholder.com/300x300?text=Women+Woven+3'
                },
                {
                    id: 44,
                    name: 'Linen Shirt',
                    description: 'Breathable linen button-up',
                    image: 'https://via.placeholder.com/300x300?text=Women+Woven+4'
                },
                {
                    id: 45,
                    name: 'Chambray Shirt',
                    description: 'Lightweight chambray shirt',
                    image: 'https://via.placeholder.com/300x300?text=Women+Woven+5'
                }
            ],
            denimPant: [
                {
                    id: 46,
                    name: 'Skinny Jeans',
                    description: 'Stretch skinny fit jeans',
                    image: 'https://via.placeholder.com/300x300?text=Women+Denim+1'
                },
                {
                    id: 47,
                    name: 'Boyfriend Jeans',
                    description: 'Relaxed boyfriend fit jeans',
                    image: 'https://via.placeholder.com/300x300?text=Women+Denim+2'
                },
                {
                    id: 48,
                    name: 'High-Waisted Jeans',
                    description: 'Flattering high-waisted denim',
                    image: 'https://via.placeholder.com/300x300?text=Women+Denim+3'
                },
                {
                    id: 49,
                    name: 'Flared Jeans',
                    description: '70s style flared jeans',
                    image: 'https://via.placeholder.com/300x300?text=Women+Denim+4'
                },
                {
                    id: 50,
                    name: 'Cropped Jeans',
                    description: 'Ankle-length cropped jeans',
                    image: 'https://via.placeholder.com/300x300?text=Women+Denim+5'
                }
            ],
            denimJacket: [
                {
                    id: 51,
                    name: 'Classic Denim Jacket',
                    description: 'Timeless medium wash jacket',
                    image: 'https://via.placeholder.com/300x300?text=Women+Jacket+1'
                },
                {
                    id: 52,
                    name: 'Oversized Denim Jacket',
                    description: 'Trendy oversized fit jacket',
                    image: 'https://via.placeholder.com/300x300?text=Women+Jacket+2'
                },
                {
                    id: 53,
                    name: 'Cropped Denim Jacket',
                    description: 'Fitted cropped denim jacket',
                    image: 'https://via.placeholder.com/300x300?text=Women+Jacket+3'
                },
                {
                    id: 54,
                    name: 'Embroidered Jacket',
                    description: 'Denim jacket with floral embroidery',
                    image: 'https://via.placeholder.com/300x300?text=Women+Jacket+4'
                },
                {
                    id: 55,
                    name: 'Distressed Jacket',
                    description: 'Fashionably distressed denim jacket',
                    image: 'https://via.placeholder.com/300x300?text=Women+Jacket+5'
                }
            ],
            lingerie: [
                {
                    id: 56,
                    name: 'Bralette',
                    description: 'Comfortable lace bralette',
                    image: 'https://via.placeholder.com/300x300?text=Women+Lingerie+1'
                },
                {
                    id: 57,
                    name: 'Briefs',
                    description: 'Cotton bikini briefs',
                    image: 'https://via.placeholder.com/300x300?text=Women+Lingerie+2'
                },
                {
                    id: 58,
                    name: 'Thong',
                    description: 'Seamless microfiber thong',
                    image: 'https://via.placeholder.com/300x300?text=Women+Lingerie+3'
                },
                {
                    id: 59,
                    name: 'Sports Bra',
                    description: 'Supportive workout bra',
                    image: 'https://via.placeholder.com/300x300?text=Women+Lingerie+4'
                },
                {
                    id: 60,
                    name: 'Silk Chemise',
                    description: 'Luxurious silk nightwear',
                    image: 'https://via.placeholder.com/300x300?text=Women+Lingerie+5'
                }
            ]
        },
        kids: {
            tshirt: [
                {
                    id: 61,
                    name: 'Cartoon Graphic Tee',
                    description: 'Fun kids t-shirt with cartoon print',
                    image: 'https://via.placeholder.com/300x300?text=Kids+T-Shirt+1'
                },
                {
                    id: 62,
                    name: 'Striped Tee',
                    description: 'Colorful striped t-shirt',
                    image: 'https://via.placeholder.com/300x300?text=Kids+T-Shirt+2'
                },
                {
                    id: 63,
                    name: 'Superhero Tee',
                    description: 'Favorite superhero character tee',
                    image: 'https://via.placeholder.com/300x300?text=Kids+T-Shirt+3'
                },
                {
                    id: 64,
                    name: 'Long Sleeve Tee',
                    description: 'Comfy long sleeve t-shirt',
                    image: 'https://via.placeholder.com/300x300?text=Kids+T-Shirt+4'
                },
                {
                    id: 65,
                    name: 'Tie-Dye Tee',
                    description: 'Colorful tie-dye pattern tee',
                    image: 'https://via.placeholder.com/300x300?text=Kids+T-Shirt+5'
                }
            ],
            sweater: [
                {
                    id: 66,
                    name: 'Hooded Sweatshirt',
                    description: 'Cozy hooded sweater for kids',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Sweater+1'
                },
                {
                    id: 67,
                    name: 'Crewneck Sweater',
                    description: 'Warm crewneck knit sweater',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Sweater+2'
                },
                {
                    id: 68,
                    name: 'Cardigan',
                    description: 'Button-up kids cardigan',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Sweater+3'
                },
                {
                    id: 69,
                    name: 'Animal Sweater',
                    description: 'Fun animal motif sweater',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Sweater+4'
                },
                {
                    id: 70,
                    name: 'Fleece Pullover',
                    description: 'Soft fleece pullover sweater',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Sweater+5'
                }
            ],
            woven: [
                {
                    id: 71,
                    name: 'Plaid Shirt',
                    description: 'Classic kids plaid button-down',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Woven+1'
                },
                {
                    id: 72,
                    name: 'Denim Shirt',
                    description: 'Durable kids denim shirt',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Woven+2'
                },
                {
                    id: 73,
                    name: 'Oxford Shirt',
                    description: 'Dressy oxford cloth shirt',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Woven+3'
                },
                {
                    id: 74,
                    name: 'Floral Blouse',
                    description: 'Pretty floral print blouse',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Woven+4'
                },
                {
                    id: 75,
                    name: 'Linen Shirt',
                    description: 'Breathable linen shirt',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Woven+5'
                }
            ],
            denimPant: [
                {
                    id: 76,
                    name: 'Stretch Jeans',
                    description: 'Comfortable stretch denim',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Denim+1'
                },
                {
                    id: 77,
                    name: 'Skinny Jeans',
                    description: 'Modern skinny fit jeans',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Denim+2'
                },
                {
                    id: 78,
                    name: 'Patched Jeans',
                    description: 'Fun patched knee jeans',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Denim+3'
                },
                {
                    id: 79,
                    name: 'Straight Leg Jeans',
                    description: 'Classic straight leg denim',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Denim+4'
                },
                {
                    id: 80,
                    name: 'Overalls',
                    description: 'Denim overalls with straps',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Denim+5'
                }
            ],
            denimJacket: [
                {
                    id: 81,
                    name: 'Classic Kids Jacket',
                    description: 'Timeless denim jacket for kids',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Jacket+1'
                },
                {
                    id: 82,
                    name: 'Distressed Jacket',
                    description: 'Trendy distressed denim jacket',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Jacket+2'
                },
                {
                    id: 83,
                    name: 'Embroidered Jacket',
                    description: 'Denim jacket with fun embroidery',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Jacket+3'
                },
                {
                    id: 84,
                    name: 'Sherpa-Lined Jacket',
                    description: 'Warm sherpa-lined jacket',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Jacket+4'
                },
                {
                    id: 85,
                    name: 'Light Wash Jacket',
                    description: 'Light blue denim jacket',
                    image: 'https://via.placeholder.com/300x300?text=Kids+Jacket+5'
                }
            ]
        }
    };

    const renderCategorySection = (categoryName, categoryData) => {
        return (
            <div className="category-section" key={categoryName}>
                <h2>{categoryName}</h2>
                {Object.entries(categoryData).map(([subCategory, products]) => (
                    <div key={subCategory} className="subcategory-section">
                        <h3>{subCategory.split(/(?=[A-Z])/).join(' ')}</h3>
                        <div className="products-grid">
                            {products.map(product => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="product-info">
                                        <h4>{product.name}</h4>
                                        <p className="description">{product.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
        <div className="garment-page">
            <header className="page-header">
                <h1>Fashion Collection</h1>
                <p>Premium quality garments for everyone</p>
            </header>

            {renderCategorySection("Men's Collection", garmentData.men)}
            {renderCategorySection("Women's Collection", garmentData.women)}
            {renderCategorySection("Kids' Collection", garmentData.kids)}



        </div>
            <button
                className="home-button bottom-home-button"
                onClick={() => navigate('/')}
            >
                Home
            </button>
            <div className="full-width-footer">
                <Footer />
            </div>
            </>
    );
};

export default Garment;