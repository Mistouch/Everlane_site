import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Handcraft.css';
import Footer from "../Footerr/Footer,jsx";
import plate from '../Assets/jute_plate.png';
import busket from '../Assets/jute_busket.png';



const Handcraft = () => {
    const navigate = useNavigate();

    // 20 Traditional Bengali Jute Products with bilingual names
    const juteProducts = [
        {
            id: 1,
            name: 'জুটের থালা',
            englishName: 'Jute Plate',
            description: 'হাতে বোনা ঐতিহ্যবাহী জুটের থালা | Handwoven traditional jute plate',
            image: plate
        },
        {
            id: 2,
            name: 'জুটের ঝুড়ি',
            englishName: 'Jute Basket',
            description: 'বাংলার গ্রামীণ শৈলীর জুটের ঝুড়ি | Rural Bengali style jute basket',
            image: busket
        },
        {
            id: 3,
            name: 'জুটের ওয়ালম্যাট',
            englishName: 'Jute Wallmat',
            description: 'জুটের তৈরি দেয়াল সজ্জা | Jute-made wall decoration',
            image: 'https://via.placeholder.com/300x300?text=Jute+Wallmat'
        },
        {
            id: 4,
            name: 'জুটের টুপি',
            englishName: 'Jute Hat',
            description: 'গ্রাম বাংলার ঐতিহ্যবাহী জুটের টুপি | Traditional rural Bengal jute hat',
            image: 'https://via.placeholder.com/300x300?text=Jute+Hat'
        },
        {
            id: 5,
            name: 'জুটের ব্যাগ',
            englishName: 'Jute Bag',
            description: 'পরিবেশবান্ধব জুটের শপিং ব্যাগ | Eco-friendly jute shopping bag',
            image: 'https://via.placeholder.com/300x300?text=Jute+Bag'
        },
        {
            id: 6,
            name: 'জুটের পায়ের মাদুর',
            englishName: 'Jute Footmat',
            description: 'জুটের তৈরি পায়ের মাদুর | Jute-made foot mat',
            image: 'https://via.placeholder.com/300x300?text=Jute+Footmat'
        },
        {
            id: 7,
            name: 'জুটের পর্দা',
            englishName: 'Jute Curtain',
            description: 'জুটের সুতা দিয়ে বোনা পর্দা | Handwoven jute thread curtain',
            image: 'https://via.placeholder.com/300x300?text=Jute+Curtain'
        },
        {
            id: 8,
            name: 'জুটের ফুলদানি',
            englishName: 'Jute Flowerpot',
            description: 'জুটের তৈরি ফুল রাখার দানি | Jute-made flower vase',
            image: 'https://via.placeholder.com/300x300?text=Jute+Flowerpot'
        },
        {
            id: 9,
            name: 'জুটের পুতুল',
            englishName: 'Jute Doll',
            description: 'বাংলার লোকশিল্পের জুটের পুতুল | Traditional Bengali folk art jute doll',
            image: 'https://via.placeholder.com/300x300?text=Jute+Doll'
        },
        {
            id: 10,
            name: 'জুটের আলপনা',
            englishName: 'Jute Wall Art',
            description: 'জুটের সুতায় তৈরি আলপনা | Traditional alpana design in jute thread',
            image: 'https://via.placeholder.com/300x300?text=Jute+Wall+Art'
        },
        {
            id: 11,
            name: 'জুটের চটি',
            englishName: 'Jute Sandals',
            description: 'জুটের তৈরি আরামদায়ক চটি | Comfortable jute-made sandals',
            image: 'https://via.placeholder.com/300x300?text=Jute+Sandals'
        },
        {
            id: 12,
            name: 'জুটের পাখা',
            englishName: 'Jute Fan',
            description: 'জুটের সুতা দিয়ে তৈরি হাতপাখা | Hand fan made from jute thread',
            image: 'https://via.placeholder.com/300x300?text=Jute+Fan'
        },
        {
            id: 13,
            name: 'জুটের টেবিলম্যাট',
            englishName: 'Jute Tablemat',
            description: 'জুটের তৈরি টেবিল সাজানোর ম্যাট | Jute-made table decoration mat',
            image: 'https://via.placeholder.com/300x300?text=Jute+Tablemat'
        },
        {
            id: 14,
            name: 'জুটের মোবাইল স্ট্যান্ড',
            englishName: 'Jute Mobile Stand',
            description: 'জুটের তৈরি মোবাইল ফোন স্ট্যান্ড | Jute-made mobile phone stand',
            image: 'https://via.placeholder.com/300x300?text=Jute+Mobile+Stand'
        },
        {
            id: 15,
            name: 'জুটের পেন হোল্ডার',
            englishName: 'Jute Pen Holder',
            description: 'জুটের তৈরি কলমদানি | Jute-made pen holder',
            image: 'https://via.placeholder.com/300x300?text=Jute+Pen+Holder'
        },
        {
            id: 16,
            name: 'জুটের বুকমার্ক',
            englishName: 'Jute Bookmark',
            description: 'জুটের সুতায় তৈরি বুকমার্ক | Bookmark made from jute thread',
            image: 'https://via.placeholder.com/300x300?text=Jute+Bookmark'
        },
        {
            id: 17,
            name: 'জুটের চাবির রিং',
            englishName: 'Jute Keyring',
            description: 'জুটের তৈরি চাবির রিং | Jute-made key ring',
            image: 'https://via.placeholder.com/300x300?text=Jute+Keyring'
        },
        {
            id: 18,
            name: 'জুটের ফটোফ্রেম',
            englishName: 'Jute Photo Frame',
            description: 'জুটের তৈরি ফটোফ্রেম | Jute-made photo frame',
            image: 'https://via.placeholder.com/300x300?text=Jute+Photo+Frame'
        },
        {
            id: 19,
            name: 'জুটের ঘড়ির স্ট্যান্ড',
            englishName: 'Jute Clock Stand',
            description: 'জুটের তৈরি ঘড়ি রাখার স্ট্যান্ড | Jute-made clock stand',
            image: 'https://via.placeholder.com/300x300?text=Jute+Clock+Stand'
        },
        {
            id: 20,
            name: 'জুটের ট্রে',
            englishName: 'Jute Tray',
            description: 'জুটের তৈরি পরিবেশন ট্রে | Jute-made serving tray',
            image: 'https://via.placeholder.com/300x300?text=Jute+Tray'
        }
    ];

    return (
        <>
            <div className="handcraft-page">
            <header className="page-header">

                <h1>ঐতিহ্যবাহী বাংলার জুটের শিল্প | Traditional Bengali Jute Crafts</h1>
                <p>প্রাকৃতিক জুটের তৈরি হস্তশিল্প | Handmade natural jute products</p>
            </header>

            <div className="products-grid">
                {juteProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.englishName} />
                        </div>
                        <div className="product-info">
                            <h3>{product.name} | {product.englishName}</h3>
                            <p className="description">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="home-button bottom-home-button"
                onClick={() => navigate('/')}
            >
                Home
            </button>

        </div>

    <div className="full-width-footer">
        <Footer />
    </div>
    </>
    );
};

export default Handcraft;