const locations = [
    {
        name: "Location 1",
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Kolte-Patil_Developers_Limited-Kolte-Patil_Jai_Vijay--Bedroom-1636967962.jpg',
        address: "Mumbai",
        url: "",
        price: "₹2 Cr - ₹3.48 Cr",
        location: {
            lat: 41.3954,
            lng: 2.162
        },
        type: 'affordable',
    },
    {
        name: "Location 2",
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Rustomjee-Rustomjee_Urbania--Bedroom-1636968497.jpg',
        address: "Mumbai",
        url: "",
        price: "₹2 Cr - ₹3.48 Cr",
        location: {
            lat: 41.3917,
            lng: 2.1649
        },
        type: 'premium',
    },
    {
        name: "Location 3",
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Piramal_Realty_Pvt_Ltd-Piramal_Mahalaxmi--Bedroom-1636968629.jpg',
        address: "Mumbai",
        url: "",
        price: "₹2 Cr - ₹3.48 Cr",
        location: {
            lat: 41.3773,
            lng: 2.1585
        },
        type: 'luxury',
    },
    {
        name: "Location 4",
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Rustomjee-Rustomjee_Urbania--Bedroom-1636968497.jpg',
        address: "Mumbai",
        url: "",
        price: "₹2 Cr - ₹3.48 Cr",
        location: {
            lat: 41.3797,
            lng: 2.1682
        },
        type: 'affordable',
    },
    {
        name: "Location 5",
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Kolte-Patil_Developers_Limited-Kolte-Patil_Jai_Vijay--Bedroom-1636967962.jpg',
        address: "Mumbai",
        url: "",
        price: "₹2 Cr - ₹3.48 Cr",
        location: {
            lat: 41.4055,
            lng: 2.1915
        },
        type: 'luxury',
    }
];


const execluveData = [
    {  
       project_id: '1', 
       img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Kolte-Patil_Developers_Limited-Kolte-Patil_Jai_Vijay--Bedroom-1636967962.jpg',
       name: 'Kanakia Future City',
       location: 'MUMBAI',
       price: '₹1.72 Cr - ₹2.95 Cr',
       flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
       url: '',
       stamp: ['Blox Exclusive', 'Featured', 'Under construction'],
       city_id: '1'
    },
    {
       project_id: '2',
       img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Rustomjee-Rustomjee_Urbania--Bedroom-1636968497.jpg',
       name: 'Kanakia Future City1',
       location: 'MUMBAI',
       price: '₹1.72 Cr - ₹2.95 Cr',
       flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
       url: '',
       stamp: ['Blox Exclusive', 'Featured'],
       city_id: '2'
    },
    {
       project_id: '3',
       img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Piramal_Realty_Pvt_Ltd-Piramal_Mahalaxmi--Bedroom-1636968629.jpg',
       name: 'Kanakia Future City2',
       location: 'MUMBAI',
       price: '₹1.72 Cr - ₹2.95 Cr',
       flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
       url: '',
       stamp: ['Blox Exclusive', 'Under construction'],
       city_id: '3'
    },
    {
       project_id: '4',
       img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Piramal_Realty_Pvt_Ltd-Piramal_Mahalaxmi--Bedroom-1636968629.jpg',
       name: 'Kanakia Future City3',
       location: 'MUMBAI',
       price: '₹1.72 Cr - ₹2.95 Cr',
       flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
       url: '',
       stamp: ['Featured',],
       city_id: '4'
    },
    {  
       project_id: '1', 
       img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Kolte-Patil_Developers_Limited-Kolte-Patil_Jai_Vijay--Bedroom-1636967962.jpg',
       name: 'Kanakia Future City',
       location: 'MUMBAI',
       price: '₹1.72 Cr - ₹2.95 Cr',
       flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
       url: '',
       stamp: ['Blox Exclusive', 'Featured', 'Under construction'],
       city_id: '1'
    },
    {
       project_id: '2',
       img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Rustomjee-Rustomjee_Urbania--Bedroom-1636968497.jpg',
       name: 'Kanakia Future City1',
       location: 'MUMBAI',
       price: '₹1.72 Cr - ₹2.95 Cr',
       flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
       url: '',
       stamp: ['Blox Exclusive', 'Featured'],
       city_id: '2'
    }
]

const developerData = [
    {
        builder_id: '1',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/builders/151121035126-6.jpg',
        logo: 'https://blox-prod-bucket.s3.amazonaws.com/builders/031121043629-download.jpeg',
        name: 'Kanakia Spaces Realty',
        desc: "Over three decades ago, Kanakia Group began its operations on a simple premise - to build edifices that went beyond bricks and cement; edifices that rested on pillars of just and principled values, and held strong long after a sale is made. And that is exactly what Kanakia is known for. Integrity to honour every commitment. Endeavour to constantly evolve. Today, Kanakia Group is a diverse business group spanning sectors such as Real Estate, Hospitality, Entertainment, and Education. At Kanakia, innovation is a mindset. We strive to create structures that become a benchmark in spaces. Over the years, we have developed over 14.6 million sq. ft. of residential, commercial, entertainment, education, and industrial spaces. After establishing our core business in real estate, in 1997, the group forayed into cinema exhibition under the brand name Cinemax, redesigning single-screen theatres into modern and technologically advanced multiplexes for a more luxurious viewing experience. With an interest to promote social progress, in 2002, we ventured into the field of education with RBK Education Institution. To date, the group has six schools across Mumbai and Gujarat, offering the best-in-class infrastructure, and an advanced approach to teaching methodology. In 2010, the group launched Hotel Courtyard by Marriott, marking its entry into Hospitality. This hotel, within a short span of time, has earned the reputation of being one of the leading Business Hotels in Mumbai. Today, we operate three hotels across Mumbai, Ahmedabad, and Goa. Over the years, the Kanakia Group has been honoured with several prestigious awards such as India's Most Promising Brand, CNBC Awaaz CRISIL CREDAI Real Estate Award, Commercial Property of the Year, International Property Award, and MCHI Property Award, to name a few.",
        year: '1986',
        projects: '10'
    },
    {
        builder_id: '2',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/builders/Kalpataru----1637223427.jpg',
        logo: 'https://blox-prod-bucket.s3.amazonaws.com/builders/031121050031-kalpataru-group-squarelogo-1448265320170.png',
        name: 'Kolte-Patil Developers',
        desc: "Over three decades ago, Kanakia Group began its operations on a simple premise - to build edifices that went beyond bricks and cement; edifices that rested on pillars of just and principled values, and held strong long after a sale is made. And that is exactly what Kanakia is known for. Integrity to honour every commitment. Endeavour to constantly evolve. Today, Kanakia Group is a diverse business group spanning sectors such as Real Estate, Hospitality, Entertainment, and Education. At Kanakia, innovation is a mindset. We strive to create structures that become a benchmark in spaces. Over the years, we have developed over 14.6 million sq. ft. of residential, commercial, entertainment, education, and industrial spaces. After establishing our core business in real estate, in 1997, the group forayed into cinema exhibition under the brand name Cinemax, redesigning single-screen theatres into modern and technologically advanced multiplexes for a more luxurious viewing experience. With an interest to promote social progress, in 2002, we ventured into the field of education with RBK Education Institution. To date, the group has six schools across Mumbai and Gujarat, offering the best-in-class infrastructure, and an advanced approach to teaching methodology. In 2010, the group launched Hotel Courtyard by Marriott, marking its entry into Hospitality. This hotel, within a short span of time, has earned the reputation of being one of the leading Business Hotels in Mumbai. Today, we operate three hotels across Mumbai, Ahmedabad, and Goa. Over the years, the Kanakia Group has been honoured with several prestigious awards such as India's Most Promising Brand, CNBC Awaaz CRISIL CREDAI Real Estate Award, Commercial Property of the Year, International Property Award, and MCHI Property Award, to name a few.",
        year: '1969',
        projects: '107'
    },
    {
        builder_id: '3',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/builders/151121035126-6.jpg',
        logo: 'https://blox-prod-bucket.s3.amazonaws.com/builders/031121043629-download.jpeg',
        name: 'Kalpataru Limited',
        desc: "Over three decades ago, Kanakia Group began its operations on a simple premise - to build edifices that went beyond bricks and cement; edifices that rested on pillars of just and principled values, and held strong long after a sale is made. And that is exactly what Kanakia is known for. Integrity to honour every commitment. Endeavour to constantly evolve. Today, Kanakia Group is a diverse business group spanning sectors such as Real Estate, Hospitality, Entertainment, and Education. At Kanakia, innovation is a mindset. We strive to create structures that become a benchmark in spaces. Over the years, we have developed over 14.6 million sq. ft. of residential, commercial, entertainment, education, and industrial spaces. After establishing our core business in real estate, in 1997, the group forayed into cinema exhibition under the brand name Cinemax, redesigning single-screen theatres into modern and technologically advanced multiplexes for a more luxurious viewing experience. With an interest to promote social progress, in 2002, we ventured into the field of education with RBK Education Institution. To date, the group has six schools across Mumbai and Gujarat, offering the best-in-class infrastructure, and an advanced approach to teaching methodology. In 2010, the group launched Hotel Courtyard by Marriott, marking its entry into Hospitality. This hotel, within a short span of time, has earned the reputation of being one of the leading Business Hotels in Mumbai. Today, we operate three hotels across Mumbai, Ahmedabad, and Goa. Over the years, the Kanakia Group has been honoured with several prestigious awards such as India's Most Promising Brand, CNBC Awaaz CRISIL CREDAI Real Estate Award, Commercial Property of the Year, International Property Award, and MCHI Property Award, to name a few.",
        year: '1986',
        projects: '10'
    },
    {
        builder_id: '4',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/builders/151121035126-6.jpg',
        logo: 'https://blox-prod-bucket.s3.amazonaws.com/builders/031121043629-download.jpeg',
        name: 'Kanakia Spaces Realty',
        desc: "Over three decades ago, Kanakia Group began its operations on a simple premise - to build edifices that went beyond bricks and cement; edifices that rested on pillars of just and principled values, and held strong long after a sale is made. And that is exactly what Kanakia is known for. Integrity to honour every commitment. Endeavour to constantly evolve. Today, Kanakia Group is a diverse business group spanning sectors such as Real Estate, Hospitality, Entertainment, and Education. At Kanakia, innovation is a mindset. We strive to create structures that become a benchmark in spaces. Over the years, we have developed over 14.6 million sq. ft. of residential, commercial, entertainment, education, and industrial spaces. After establishing our core business in real estate, in 1997, the group forayed into cinema exhibition under the brand name Cinemax, redesigning single-screen theatres into modern and technologically advanced multiplexes for a more luxurious viewing experience. With an interest to promote social progress, in 2002, we ventured into the field of education with RBK Education Institution. To date, the group has six schools across Mumbai and Gujarat, offering the best-in-class infrastructure, and an advanced approach to teaching methodology. In 2010, the group launched Hotel Courtyard by Marriott, marking its entry into Hospitality. This hotel, within a short span of time, has earned the reputation of being one of the leading Business Hotels in Mumbai. Today, we operate three hotels across Mumbai, Ahmedabad, and Goa. Over the years, the Kanakia Group has been honoured with several prestigious awards such as India's Most Promising Brand, CNBC Awaaz CRISIL CREDAI Real Estate Award, Commercial Property of the Year, International Property Award, and MCHI Property Award, to name a few.",
        year: '1986',
        projects: '10'
    }
]

const news =[
    {
        url: '',
        title: 'Amit Bhardwaj joins Blox as CFO',
        desc: '<p>Real estate buying platform Blox has announced the appointment of Amit Bhardwaj as Chief Financial Officer.<br>Bhardwaj has a degree in Chartered Accountancy with more than 15 years of experience in the Corporate, Strategic and Business Finance industries, according to a statement.He has worked for MNCs and is also an active angel investor in technology companies.His past associations are with companies including GE Money, Jubilant FoodWorks, Snapdeal, OYO and Cars24– his most recent stint where he was the Head of Finance Operations. </p>',
        external_link: 'https://realty.economictimes.indiatimes.com/news/technology/kinzon-capitals-brad-bao-invests-in-real-estate-startup-blox/82102834',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/blogs/thumb/151121070136-11.jpg',
        date: '2021-06-09',
    },
    {
        url: '',
        title: 'Blox appoints Shivani Karia Jhaveri as chief marketing officer',
        desc: '<p>She comes with over a decade of experience in marketing ranging from luxury marketing, strategy and brand building.<br>Real estate buying platform, Blox has appointed Shivani Karia Jhaveri as the chief marketing officer and founding member. She comes with over a decade of experience in marketing ranging from luxury marketing, strategy and brand building. Jhaveri has worked with House of Anita Dongre previously, as the brand manager and has handled cross functional marketing roles for all of the luxury brands.</p>',
        external_link: 'https://www.financialexpress.com/brandwagon/blox-appoints-shivani-karia-jhaveri-as-chief-marketing-officer/2258556/',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/blogs/051121072114-Blox-appoints1.jpg',
        date: '2021-06-09',
    },
    {
        url: '',
        title: 'Amit Bhardwaj joins Blox as CFO',
        desc: '<p>Real estate buying platform Blox has announced the appointment of Amit Bhardwaj as Chief Financial Officer.<br>Bhardwaj has a degree in Chartered Accountancy with more than 15 years of experience in the Corporate, Strategic and Business Finance industries, according to a statement.He has worked for MNCs and is also an active angel investor in technology companies.His past associations are with companies including GE Money, Jubilant FoodWorks, Snapdeal, OYO and Cars24– his most recent stint where he was the Head of Finance Operations. </p>',
        external_link: 'https://realty.economictimes.indiatimes.com/news/technology/kinzon-capitals-brad-bao-invests-in-real-estate-startup-blox/82102834',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/blogs/thumb/151121070136-11.jpg',
        date: '2021-06-09',
    }, {
        url: '',
        title: 'Blox appoints Shivani Karia Jhaveri as chief marketing officer',
        desc: '<p>She comes with over a decade of experience in marketing ranging from luxury marketing, strategy and brand building.<br>Real estate buying platform, Blox has appointed Shivani Karia Jhaveri as the chief marketing officer and founding member. She comes with over a decade of experience in marketing ranging from luxury marketing, strategy and brand building. Jhaveri has worked with House of Anita Dongre previously, as the brand manager and has handled cross functional marketing roles for all of the luxury brands.</p>',
        external_link: 'https://www.financialexpress.com/brandwagon/blox-appoints-shivani-karia-jhaveri-as-chief-marketing-officer/2258556/',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/blogs/051121072114-Blox-appoints1.jpg',
        date: '2021-06-09',
    },
    
]
module.exports = {
    'locations': locations,
    'execluveData': execluveData,
    'developerData': developerData,
    'news': news
}