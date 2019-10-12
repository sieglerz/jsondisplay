const cryptoURL = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,REP,DASH&tsyms=USD,EUR,BIT";

const builderData = {
    "total_count": 5,
    "page": 1,
    "results": [
        {
            "id": 5,
            "name": "Bellaire"
        },
        {
            "id": 1,
            "name": "Bella Vista"
        },
        {
            "id": 4,
            "name": "Blackburn Communities"
        },
        {
            "id": 2,
            "name": "Kindred Homes"
        },
        {
            "id": 3,
            "name": "Rausch Coleman"
        }
    ]
}

for (i in builderData.results) {
    x = builderData.results[i].name;
    // console.log(x);
}

console.log(builderData.results[2].name, builderData.results[2].id);


//The below const and for work to log all names of communities
const rauschColemanCommunities = {
    "id": 3,
    "name": "Rausch Coleman",
    "production": true,
    "website": "https://www.rauschcolemanhomes.com/",
    "information": "Rausch Coleman Homes has become one of the top homebuilders in the United States. With more than 60 years of experience, and 20,000+ homes built, throughout Arkansas, Oklahoma, Missouri, Kansas, Texas and most recently, Alabama, Rausch Coleman Homes is the largest builder of new homes in the States of Arkansas and Oklahoma. Rausch Coleman Homes is ranked 36th by Builder Magazine on their Top 100 list of U.S. builders for 2017",
    "locations": "null",
    "has_white_label": false,
    "is_featured": false,
    "page_slug": "Rausch-Coleman",
    "logo_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/builders/3/mobile_thumbnail_rauschcoleman_logo.png?1551469866",
    "logo_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/builders/3/desktop_thumbnail_rauschcoleman_logo.png?1551469866",
    "communities": [
        {
            "id": 32,
            "name": "Texas Research Park",
            "address": "78245, TX, United States",
            "latitude": "29.412477",
            "longitude": "-98.796347",
            "information": "Conveniently located with easy access to US 90 and Loop 1604, rolling hills and lush treed home sites, and a community recreation area are just a few of the reasons you'll love to call Rausch Coleman at Texas Research Park your home!\n\nModel Home Hours: M-F 10-7, Saturday 10-6, closed Sundays\n\nThe embodiment of Texas Hill Country, Rausch Coleman at TRP is located along the Hwy 211 corridor in one of the fastest growing areas of San Antonio. Offering families an ideal lifestyle with new homes starting in the low $200s and amenities that include a community park, outdoor pool, picnic pavilion, and children's playground. \n\nHomebuyers at Rausch Coleman at TRP can choose from one- and two-story floor plans that range in size, can accomodate up to four bedrooms and transitional flex space. Home site selection, exterior style, and features can all be personalized to each buyer's own lifestyle and budget.",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Texas-Research-Park-Bexar-Texas-78245",
            "state": "Texas",
            "zip_code": "78245",
            "country": "USA",
            "county": "Bexar",
            "min_plan_price": "189990.0",
            "max_plan_price": "241990.0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/32/mobile_full_Texas_Research_Park_Comm_RC_.jpg?1558031719",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/32/mobile_half_Texas_Research_Park_Comm_RC_.jpg?1558031719",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/32/mobile_thumbnail_Texas_Research_Park_Comm_RC_.jpg?1558031719",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/32/desktop_full_Texas_Research_Park_Comm_RC_.jpg?1558031719",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/32/desktop_half_Texas_Research_Park_Comm_RC_.jpg?1558031719",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/32/desktop_thumbnail_Texas_Research_Park_Comm_RC_.jpg?1558031719",
            "amenities": [
                {
                    "id": 7,
                    "name": "Park",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/mobile_thumbnail_park.jpg?1549734458",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/desktop_thumbnail_park.jpg?1549734458"
                }
            ],
            "schools": []
        },
        {
            "id": 27,
            "name": "Heights at Saengerhalle",
            "address": "New Braunfels, TX, United States",
            "latitude": "29.693963",
            "longitude": "-98.063801",
            "information": "Building a new home with Rausch Coleman Homes is made easy. Rausch Coleman Homes offer over 60 years of expirence in value and quality. With a location convenient to shopping, restaurants and entertainment venues. This neighborhood is located in the Comal ISD is the perfect place to buy and build your new Rausch Coleman Home.",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Heights-at-Saengerhalle-New-Braunfels-Comal-Texas-78130",
            "city": "New Braunfels",
            "state": "Texas",
            "zip_code": "78130",
            "country": "USA",
            "county": "Comal",
            "min_plan_price": "199490.0",
            "max_plan_price": "246490.0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/27/mobile_full_HAS_RC_2_.jpg?1558032082",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/27/mobile_half_HAS_RC_2_.jpg?1558032082",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/27/mobile_thumbnail_HAS_RC_2_.jpg?1558032082",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/27/desktop_full_HAS_RC_2_.jpg?1558032082",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/27/desktop_half_HAS_RC_2_.jpg?1558032082",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/27/desktop_thumbnail_HAS_RC_2_.jpg?1558032082",
            "amenities": [],
            "schools": []
        },
        {
            "id": 25,
            "name": "Crossings at WindCrest",
            "address": "78239, TX, United States",
            "latitude": "29.524345",
            "longitude": "-98.347335",
            "information": "Crossing at WindCrest is conveniently located, with easy access to I-35 and Loop 1604.  Ft. Sam Houston, BAMC, Randolph AFB and Rackspace are easily accessible.  Offering families an ideal lifestyle and an intimate private community with new homes starting in the upper $140s. Amenities include a pocket park with children's playscape.\n\nHomebuyers at Crossing at WindCrest can choose from one and two-story floor plans, accommodating up to four bedrooms and transitional flex space.  Homesite selection, exterior style, and features can all be personalized to each buyer's own lifestyle and budget.",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Crossings-at-WindCrest-Bexar-Texas-78239",
            "state": "Texas",
            "zip_code": "78239",
            "country": "USA",
            "county": "Bexar",
            "min_plan_price": "0",
            "max_plan_price": "0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/25/mobile_full_Crossings_At_Windcrest_.jpg?1558037333",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/25/mobile_half_Crossings_At_Windcrest_.jpg?1558037333",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/25/mobile_thumbnail_Crossings_At_Windcrest_.jpg?1558037333",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/25/desktop_full_Crossings_At_Windcrest_.jpg?1558037333",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/25/desktop_half_Crossings_At_Windcrest_.jpg?1558037333",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/25/desktop_thumbnail_Crossings_At_Windcrest_.jpg?1558037333",
            "amenities": [],
            "schools": []
        },
        {
            "id": 23,
            "name": "Butterfield Ranch/Homewood Place",
            "address": "78112, TX, United States",
            "latitude": "29.277673",
            "longitude": "-98.337595",
            "information": "Homewood Place is the perfect mix of rural living in East Central reputable school district while still being conviniently located only 24 minutes from downtown San Antonio.",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Butterfield-Ranch/Homewood-Place-Bexar-Texas-78112",
            "state": "Texas",
            "zip_code": "78112",
            "country": "USA",
            "county": "Bexar",
            "min_plan_price": "0",
            "max_plan_price": "0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/23/mobile_full_BR.jpeg?1558037465",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/23/mobile_half_BR.jpeg?1558037465",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/23/mobile_thumbnail_BR.jpeg?1558037465",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/23/desktop_full_BR.jpeg?1558037465",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/23/desktop_half_BR.jpeg?1558037465",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/23/desktop_thumbnail_BR.jpeg?1558037465",
            "amenities": [
                {
                    "id": 7,
                    "name": "Park",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/mobile_thumbnail_park.jpg?1549734458",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/desktop_thumbnail_park.jpg?1549734458"
                },
                {
                    "id": 10,
                    "name": "Water Feature",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/10/mobile_thumbnail_water_feature.jpg?1549734516",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/10/desktop_thumbnail_water_feature.jpg?1549734516"
                }
            ],
            "schools": []
        },
        {
            "id": 31,
            "name": "Horizon Pointe - Reserve",
            "address": "78109, TX, United States",
            "latitude": "29.454583",
            "longitude": "-98.347163",
            "information": "Building a new construction home in San Antonio with Rausch Coleman Homes offers home buyers 60 years of experience in value and quality. With a location convenient to shopping, restaurants, and entertainment venues, this Rausch Coleman community is the perfect place to buy or build a new home. The Horizon Pointe community offers a pool, playground, and walking trails; onsite elementary school; less than 10 miles from Ft. Sam Houston and Randolph Air Force Base. Just 20 minutes from downtown San Antonio; 5 minutes from Friendship Park, with playground, sport courts, and baseball fields; with easy access to I-10.\n\nModel Home Hours: Monday - Saturday 10-7, closed Sundays",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Horizon-Pointe---Reserve-Bexar-Texas-78109",
            "state": "Texas",
            "zip_code": "78109",
            "country": "USA",
            "county": "Bexar",
            "min_plan_price": "186490.0",
            "max_plan_price": "219490.0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/31/mobile_full_HPR.jpg?1558038348",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/31/mobile_half_HPR.jpg?1558038348",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/31/mobile_thumbnail_HPR.jpg?1558038348",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/31/desktop_full_HPR.jpg?1558038348",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/31/desktop_half_HPR.jpg?1558038348",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/31/desktop_thumbnail_HPR.jpg?1558038348",
            "amenities": [
                {
                    "id": 7,
                    "name": "Park",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/mobile_thumbnail_park.jpg?1549734458",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/desktop_thumbnail_park.jpg?1549734458"
                },
                {
                    "id": 8,
                    "name": "Pool",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/8/mobile_thumbnail_pool.jpg?1549734484",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/8/desktop_thumbnail_pool.jpg?1549734484"
                }
            ],
            "schools": []
        },
        {
            "id": 24,
            "name": "Crossings at Westlakes",
            "address": "San Antonio, TX, United States",
            "latitude": "29.426962",
            "longitude": "-98.661979",
            "information": "Building your new Rausch Coleman Home in the West Lake area of Northwest San Antonio. Rausch Coleman offers over 60 years of expirence in value and quality. This location is conveniently located to Lackland AFB, Shopping, Great Dining, Sea World and Fiesta Texas.\n\nModel Home Hours: M-F 10-7, Saturday 10-6, closed Sundays",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Crossings-at-Westlakes-San-Antonio-Bexar-Texas-78205",
            "city": "San Antonio",
            "state": "Texas",
            "zip_code": "78205",
            "country": "USA",
            "county": "Bexar",
            "min_plan_price": "205490.0",
            "max_plan_price": "285490.0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/24/mobile_full_WEstlakes_.jpg?1558037661",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/24/mobile_half_WEstlakes_.jpg?1558037661",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/24/mobile_thumbnail_WEstlakes_.jpg?1558037661",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/24/desktop_full_WEstlakes_.jpg?1558037661",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/24/desktop_half_WEstlakes_.jpg?1558037661",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/24/desktop_thumbnail_WEstlakes_.jpg?1558037661",
            "amenities": [],
            "schools": []
        },
        {
            "id": 26,
            "name": "Heathers Place",
            "address": "78152, TX, United States",
            "latitude": "29.469949",
            "longitude": "-98.223095",
            "information": "You'll really enjoy the countryside as you travel to your new home, built your way, with Rausch Coleman's 60+ years of experience. Plus you'll have access to the highly acclaimed Schertz-Cibolo Universal City ISD to send your children to.\n\nModel Home Hours: M-F 10-7, Saturday 10-6, closed Sundays",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Heathers-Place-Bexar-Texas-78152",
            "state": "Texas",
            "zip_code": "78152",
            "country": "USA",
            "county": "Bexar",
            "min_plan_price": "177490.0",
            "max_plan_price": "212490.0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/26/mobile_full_HP_.jpg?1558037817",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/26/mobile_half_HP_.jpg?1558037817",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/26/mobile_thumbnail_HP_.jpg?1558037817",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/26/desktop_full_HP_.jpg?1558037817",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/26/desktop_half_HP_.jpg?1558037817",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/26/desktop_thumbnail_HP_.jpg?1558037817",
            "amenities": [],
            "schools": []
        },
        {
            "id": 28,
            "name": "Heritage Oaks",
            "address": "San Antonio, TX, United States",
            "latitude": "29.317948",
            "longitude": "-98.439903",
            "information": "Building a new construction home in San Antonio with Rausch Coleman Homes offers homebuyers 60 years of experience in value and quality. Surrounded by restaurants, education opportunities, entertainment venues, shopping and more, this is the perfect place to call home. \n\nHomebuyers at Heritage Oaks can choose from one- and two-story floor plans that range in size, can accommodate up to four bedrooms and transitional flex space. Homesite selection, exterior style, and features can all be personalized to each buyer's own lifestyle and budget.\n\nModel Home Hours: M-F 10-7, Saturday 10-6, closed Sundays",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Heritage-Oaks-San-Antonio-Bexar-Texas-78205",
            "city": "San Antonio",
            "state": "Texas",
            "zip_code": "78205",
            "country": "USA",
            "county": "Bexar",
            "min_plan_price": "167490.0",
            "max_plan_price": "202490.0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/28/mobile_full_HO.jpg?1558038023",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/28/mobile_half_HO.jpg?1558038023",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/28/mobile_thumbnail_HO.jpg?1558038023",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/28/desktop_full_HO.jpg?1558038023",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/28/desktop_half_HO.jpg?1558038023",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/28/desktop_thumbnail_HO.jpg?1558038023",
            "amenities": [],
            "schools": []
        },
        {
            "id": 30,
            "name": "Horizon Pointe - Enclave",
            "address": "78109, TX, United States",
            "latitude": "29.45392",
            "longitude": "-98.349406",
            "information": "Building a new construction home in San Antonio with Rausch Coleman Homes offers home buyers 60 years of experience in value and quality. With a location convenient to shopping, restaurants, and entertainment venues, this Rausch Coleman community is the perfect place to buy or build a new home. The Horizon Pointe community offers a pool, playground, and walking trails; onsite elementary school; less than 10 miles from Ft. Sam Houston and Randolph Air Force Base. Just 20 minutes from downtown San Antonio; 5 minutes from Friendship Park, with playground, sport courts, and baseball fields; with easy access to I-10.",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Horizon-Pointe---Enclave-Bexar-Texas-78109",
            "state": "Texas",
            "zip_code": "78109",
            "country": "USA",
            "county": "Bexar",
            "min_plan_price": "0",
            "max_plan_price": "0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/30/mobile_full_HPE.jpg?1558038285",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/30/mobile_half_HPE.jpg?1558038285",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/30/mobile_thumbnail_HPE.jpg?1558038285",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/30/desktop_full_HPE.jpg?1558038285",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/30/desktop_half_HPE.jpg?1558038285",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/30/desktop_thumbnail_HPE.jpg?1558038285",
            "amenities": [
                {
                    "id": 4,
                    "name": "Gated Community",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/4/mobile_thumbnail_gated_community.jpg?1549734411",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/4/desktop_thumbnail_gated_community.jpg?1549734411"
                },
                {
                    "id": 7,
                    "name": "Park",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/mobile_thumbnail_park.jpg?1549734458",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/desktop_thumbnail_park.jpg?1549734458"
                },
                {
                    "id": 8,
                    "name": "Pool",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/8/mobile_thumbnail_pool.jpg?1549734484",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/8/desktop_thumbnail_pool.jpg?1549734484"
                }
            ],
            "schools": []
        },
        {
            "id": 33,
            "name": "White Wing",
            "address": "New Braunfels, TX, United States",
            "latitude": "29.661169",
            "longitude": "-98.09878",
            "information": "Building a new construction home in New Braunfels with Rausch Coleman Homes offers home buyers 60 years of experience in value and quality. With a location convenient to shopping, restaurants, and entertainment venues, this Rausch Coleman community is the perfect place to buy or build your new home.",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "White-Wing-New-Braunfels-Comal-Texas-78130",
            "city": "New Braunfels",
            "state": "Texas",
            "zip_code": "78130",
            "country": "USA",
            "county": "Comal",
            "min_plan_price": "0",
            "max_plan_price": "0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/33/mobile_full_WW.jpg?1558038520",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/33/mobile_half_WW.jpg?1558038520",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/33/mobile_thumbnail_WW.jpg?1558038520",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/33/desktop_full_WW.jpg?1558038520",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/33/desktop_half_WW.jpg?1558038520",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/33/desktop_thumbnail_WW.jpg?1558038520",
            "amenities": [],
            "schools": []
        },
        {
            "id": 29,
            "name": "Horizon Pointe - Commons",
            "address": "78109, TX, United States",
            "latitude": "29.450454",
            "longitude": "-98.357602",
            "information": "Building a new construction home in San Antonio with Rausch Coleman Homes offers home buyers 60 years of experience in value and quality. With a location convenient to shopping, restaurants, and entertainment venues, this Rausch Coleman community is the perfect place to buy or build a new home. The Horizon Pointe community offers a pool, playground, and walking trails; onsite elementary school; less than 10 miles from Ft. Sam Houston and Randolph Air Force Base. Just 20 minutes from downtown San Antonio; 5 minutes from Friendship Park, with playground, sport courts, and baseball fields; with easy access to I-10.\n\nModel Home Hours: Monday - Saturday 10-7, closed Sundays",
            "division_id": 3,
            "is_featured": false,
            "page_slug": "Horizon-Pointe---Commons-Bexar-Texas-78109",
            "state": "Texas",
            "zip_code": "78109",
            "country": "USA",
            "county": "Bexar",
            "min_plan_price": "174490.0",
            "max_plan_price": "204490.0",
            "builder_name": "Rausch Coleman",
            "region_id": 3,
            "image_mobile_full": "https://assets-production.myhouseby.com/paperclip/communities/29/mobile_full_HPC.jpg?1558038186",
            "image_mobile_half": "https://assets-production.myhouseby.com/paperclip/communities/29/mobile_half_HPC.jpg?1558038186",
            "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/29/mobile_thumbnail_HPC.jpg?1558038186",
            "image_desktop_full": "https://assets-production.myhouseby.com/paperclip/communities/29/desktop_full_HPC.jpg?1558038186",
            "image_desktop_half": "https://assets-production.myhouseby.com/paperclip/communities/29/desktop_half_HPC.jpg?1558038186",
            "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/communities/29/desktop_thumbnail_HPC.jpg?1558038186",
            "amenities": [
                {
                    "id": 8,
                    "name": "Pool",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/8/mobile_thumbnail_pool.jpg?1549734484",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/8/desktop_thumbnail_pool.jpg?1549734484"
                },
                {
                    "id": 7,
                    "name": "Park",
                    "image_mobile_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/mobile_thumbnail_park.jpg?1549734458",
                    "image_desktop_thumbnail": "https://assets-production.myhouseby.com/paperclip/amenities/7/desktop_thumbnail_park.jpg?1549734458"
                }
            ],
            "schools": []
        }
    ]
}
for (i in rauschColemanCommunities.communities) {
    x = rauschColemanCommunities.communities[i].name;
    // console.log(x);
}
for (i in rauschColemanCommunities.communities) {
    y = rauschColemanCommunities.communities[i].zip_code;
    // console.log(y);
}

const bar = "Socks";
const vm = new Vue({
    el: '#app',

    data: {
        builderData: {},
        foo: bar
    },
    mounted() {
        this.builderData = builderData;
    }
    // mounted() {
    //     axios.get(cryptoURL).then(builders => {
    //         this.results = builders.data
    //     })
    // }
});

//Mock data for the value of BTC in USD - (Can go after results: )
//{"BTC": {"USD":3759.91,"EUR":3166.21}, "ETH": {"USD":281.7,"EUR":236.25}, "NEW Currency": {"USD": 5.60, "EUR": 4.70}