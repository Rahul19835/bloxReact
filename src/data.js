const serverDate = new Date();

const schedule_timeArr = ['10:00:00','10:30:00','11:00:00','11:30:00','12:00:00','12:30:00','13:00:00','13:30:00','14:00:00','14:30:00','15:00:00','15:30:00','16:00:00','16:30:00','17:00:00'];

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
       city_id: '1',
       pro_brif:'Oberoi Realty presents Sky City, a design revelation offering masterfully crafted 3 BHKs at Borivali East. Located in greenest part of mumbai, project is spreaded across 27 acers, offering 3000+ residentail units. The project is well connected to the Western Express Highway which is just 0.1 kilometres away from it, where as Swami Vivekanand Road lies just 1.4 kilometres away from the project. The Dattapada Road, the Link Road and Borivali railway station are easily accessible from here,while the proposed metro station lies near it. The International Airport can be accessed easily from the project as well',
       glocation: {
        lat: 41.4055,
        lng: 2.1915
       },
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
       city_id: '2',
       pro_brif:'Nestled in the sprawling serenity of Powai, Emerald Isle is an oasis of luxury; offering its residents spacious and elegant homes. The property is part of a 19-acre mixed development, of which the ultra-luxury apartments boast 10 acres of open space and 3 acres of central greenery for its residents to enjoy. Emerald Isle is a planning masterpiece, built on three levels of parking to afford a traffic-free podium and a host of amenities amidst its central greens. The property is developed in phases and Phase-I is home to 800 happy families. Phase-II of Emerald Isle is the missing puzzle piece for home seekers in search of ready or under construction residences. The homes are meticulously designed 2, 3, & 4 BHK apartments that ensure its residents lead a life of harmony. Tucked away in nature and equipped with nature, truly make Emerald Isle Powai’s Finest Gated Community.',
       glocation: {
        lat: 41.3797,
        lng: 2.1682
      },
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
       city_id: '3',
       pro_brif:"Hiranandani Highland is one of the magnificent residential projects in the financial capital of the state, Powai, Mumbai. Homes here intend to be unique with their elegant design and lavish lifestyle. This project is spread across 0.38 acres and offers luxurious 2 & 3 BHK apartments. Additionally, the project comes with the unique ‘Forest’ clubhouse, multi-purpose court, high-tech gym, custom swimming pool, well-groomed landscape garden, nirvana park, hospitals, school, etc. Inclusively, the project's location embraces the hills, lakes, and easy connectivity across the city to live a hassle-free lifestyle. So, come own the luxurious lifestyle you’ve always dreamed of only in Powai.",
       glocation: {
        lat: 41.3773,
        lng: 2.1585
    },
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
       city_id: '4',
       pro_brif:'Oberoi Realty presents Sky City, a design revelation offering masterfully crafted 3 BHKs at Borivali East. Located in greenest part of mumbai, project is spreaded across 27 acers, offering 3000+ residentail units. The project is well connected to the Western Express Highway which is just 0.1 kilometres away from it, where as Swami Vivekanand Road lies just 1.4 kilometres away from the project. The Dattapada Road, the Link Road and Borivali railway station are easily accessible from here,while the proposed metro station lies near it. The International Airport can be accessed easily from the project as well',
       glocation: {
        lat: 41.3917,
        lng: 2.1649
    },
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
       city_id: '1',
       pro_brif:'Oberoi Realty presents Sky City, a design revelation offering masterfully crafted 3 BHKs at Borivali East. Located in greenest part of mumbai, project is spreaded across 27 acers, offering 3000+ residentail units. The project is well connected to the Western Express Highway which is just 0.1 kilometres away from it, where as Swami Vivekanand Road lies just 1.4 kilometres away from the project. The Dattapada Road, the Link Road and Borivali railway station are easily accessible from here,while the proposed metro station lies near it. The International Airport can be accessed easily from the project as well',
       glocation: {
        lat: 41.3954,
        lng: 2.162
    },
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
       city_id: '2',
       pro_brif:'Oberoi Realty presents Sky City, a design revelation offering masterfully crafted 3 BHKs at Borivali East. Located in greenest part of mumbai, project is spreaded across 27 acers, offering 3000+ residentail units. The project is well connected to the Western Express Highway which is just 0.1 kilometres away from it, where as Swami Vivekanand Road lies just 1.4 kilometres away from the project. The Dattapada Road, the Link Road and Borivali railway station are easily accessible from here,while the proposed metro station lies near it. The International Airport can be accessed easily from the project as well',
       glocation: {
        lat: 41.3900,
        lng: 2.110
      },
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


const countryArr = ["AF","AL","DZ","AS","AD","AO","AQ","AG","AR","AM","AW","AU","AZ","BS","BH","BD","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","IO","BN","BG","BI","KH","CM","CV","CF","TD","CX","CC","KM","CG","CD","CK","CR","CI","HR","CU","DK","DJ","DM","EG","GQ","ER","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GP","GU","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","IR","IQ","IE","IT","JO","KZ","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LU","MO","MK","MG","MW","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PN","PL","PT","QA","RE","RO","RU","RW","SH","KN","LC","PM","VC","WS","SM","ST","SA","SN","CS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","LK","SD","SR","SJ","SZ","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UY","UZ","VU","VE","VG","VI","WF","EH","YE","ZM","ZW"]

module.exports = {
    'serverDate': serverDate,
    'locations': locations,
    'execluveData': execluveData,
    'developerData': developerData,
    'news': news,
    'schedule_timeArr':schedule_timeArr,
    'countryArr': countryArr
}