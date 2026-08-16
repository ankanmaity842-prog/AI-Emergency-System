const disasterGuidance = {
    en: {
        title: "Disaster Preparedness",
        description:
            "Learn simple steps to stay safe before, during and after different types of disasters.",
        before: "Before",
        during: "During",
        after: "After",

        topics: [
            {
                id: "earthquake",
                title: "Earthquake",
                description:
                    "Earthquakes can happen suddenly and without warning.",
                before: [
                    "Identify safe places away from windows and heavy objects.",
                    "Keep an emergency kit, water and important medicines ready.",
                    "Secure heavy furniture and objects that could fall."
                ],
                during: [
                    "Drop, cover and hold on until the shaking stops.",
                    "Stay away from windows, glass and falling objects.",
                    "Do not use elevators."
                ],
                after: [
                    "Check yourself and others for injuries.",
                    "Move away from damaged buildings and structures.",
                    "Follow official emergency instructions and updates."
                ]
            },

            {
                id: "fire",
                title: "Fire",
                description:
                    "Fire can spread quickly and smoke can make it difficult to breathe.",
                before: [
                    "Keep smoke alarms working and check them regularly.",
                    "Know the emergency exits in your home, school or workplace.",
                    "Keep matches, lighters and other fire hazards away from children."
                ],
                during: [
                    "Leave the building using the safest available exit.",
                    "Stay low and crawl if there is heavy smoke.",
                    "Never use an elevator during a fire."
                ],
                after: [
                    "Do not go back inside a damaged or burning building.",
                    "Follow instructions from firefighters and emergency authorities.",
                    "Get medical help if you are injured or exposed to heavy smoke."
                ]
            },

            {
                id: "flood",
                title: "Flood",
                description:
                    "Floods can rise quickly and may contain dangerous debris or contaminated water.",
                before: [
                    "Keep important documents and valuables in a waterproof place.",
                    "Prepare drinking water, food, medicines and an emergency kit.",
                    "Know the safest higher ground or evacuation area nearby."
                ],
                during: [
                    "Move to higher ground as soon as possible.",
                    "Never walk or drive through fast-moving floodwater.",
                    "Switch off electricity if it is safe to do so."
                ],
                after: [
                    "Avoid standing water because it may contain electricity or harmful waste.",
                    "Do not drink floodwater or use contaminated water.",
                    "Return home only when authorities say it is safe."
                ]
            },

            {
                id: "cyclone",
                title: "Cyclone",
                description:
                    "Cyclones bring strong winds, heavy rain and dangerous storm conditions.",
                before: [
                    "Follow weather warnings and evacuation instructions.",
                    "Secure loose objects, doors, windows and outdoor items.",
                    "Keep food, water, medicines, a flashlight and power bank ready."
                ],
                during: [
                    "Stay indoors and away from windows and glass.",
                    "Keep listening to official weather and emergency updates.",
                    "Do not go outside during the storm, even if the weather suddenly becomes calm."
                ],
                after: [
                    "Stay away from fallen power lines and damaged buildings.",
                    "Avoid flooded roads and areas with debris.",
                    "Wait for official instructions before leaving your shelter."
                ]
            },

            {
                id: "lightning",
                title: "Lightning & Thunderstorm",
                description:
                    "Lightning can strike suddenly and can be dangerous even when rain is light.",
                before: [
                    "Check weather warnings before going outdoors.",
                    "Keep electrical devices protected when possible.",
                    "Know where you can take shelter during a storm."
                ],
                during: [
                    "Go inside a strong building or enclosed vehicle.",
                    "Stay away from windows, balconies and open areas.",
                    "Avoid trees, poles, water bodies and metal objects."
                ],
                after: [
                    "Wait until the storm has completely passed before going outside.",
                    "Stay away from damaged power lines.",
                    "Report dangerous electrical damage to the authorities."
                ]
            },

            {
                id: "landslide",
                title: "Landslide",
                description:
                    "Landslides can occur suddenly, especially after heavy rain or earthquakes.",
                before: [
                    "Learn whether your area is at risk of landslides.",
                    "Watch for cracks, falling rocks or unusual movement of the ground.",
                    "Know the safest evacuation route away from slopes."
                ],
                during: [
                    "Move quickly away from the path of the landslide.",
                    "Move to higher and safer ground if possible.",
                    "Do not cross areas covered by mud, rocks or debris."
                ],
                after: [
                    "Stay away from the affected slope and damaged structures.",
                    "Be alert for additional landslides.",
                    "Follow evacuation and safety instructions from authorities."
                ]
            },

            {
                id: "heatwave",
                title: "Heatwave",
                description:
                    "Extreme heat can cause dehydration, heat exhaustion and heatstroke.",
                before: [
                    "Keep enough drinking water available.",
                    "Plan outdoor activities during cooler parts of the day.",
                    "Keep your home cool and check on elderly people and children."
                ],
                during: [
                    "Drink water regularly, even when you are not thirsty.",
                    "Stay in a cool or shaded place as much as possible.",
                    "Avoid heavy physical activity during the hottest hours."
                ],
                after: [
                    "Continue drinking fluids and resting in a cool place.",
                    "Watch for signs of heat illness such as dizziness or confusion.",
                    "Seek medical help if severe symptoms continue."
                ]
            },

            {
                id: "coldwave",
                title: "Cold Wave",
                description:
                    "Very low temperatures can cause dangerous cold-related health problems.",
                before: [
                    "Keep warm clothes, blankets and basic medicines ready.",
                    "Make sure your home can stay warm and dry.",
                    "Check on elderly people, children and vulnerable family members."
                ],
                during: [
                    "Stay indoors and keep yourself warm.",
                    "Wear multiple layers of warm clothing.",
                    "Avoid unnecessary travel in extremely cold conditions."
                ],
                after: [
                    "Continue keeping warm until temperatures become safer.",
                    "Check yourself and others for signs of cold-related illness.",
                    "Seek medical help for severe shivering, confusion or weakness."
                ]
            },

            {
                id: "tsunami",
                title: "Tsunami",
                description:
                    "A tsunami can cause powerful waves and dangerous coastal flooding.",
                before: [
                    "Know whether your area is in a tsunami-risk zone.",
                    "Learn the nearest evacuation route to higher ground.",
                    "Keep an emergency bag ready and easy to carry."
                ],
                during: [
                    "Move quickly to higher ground or farther inland.",
                    "Stay away from beaches, rivers and coastal areas.",
                    "Do not wait to watch the waves or return after the first wave."
                ],
                after: [
                    "Stay away from the coast until authorities give an all-clear.",
                    "Be prepared for additional waves.",
                    "Follow official evacuation and safety instructions."
                ]
            },

            {
                id: "drought",
                title: "Drought",
                description:
                    "Drought can cause long periods of water shortage and extreme dryness.",
                before: [
                    "Store safe drinking water when advised by authorities.",
                    "Use water carefully and avoid unnecessary waste.",
                    "Keep essential medicines and food supplies available."
                ],
                during: [
                    "Use drinking water only for essential needs.",
                    "Follow local water-use restrictions.",
                    "Avoid unnecessary outdoor activity during extreme heat."
                ],
                after: [
                    "Continue using water responsibly until supplies recover.",
                    "Follow official guidance about water safety.",
                    "Report serious water shortages to local authorities."
                ]
            },

            {
                id: "chemical_accident",
                title: "Chemical Emergency",
                description:
                    "Chemical leaks or hazardous materials can create dangerous air and water conditions.",
                before: [
                    "Learn the emergency procedures for your workplace or area.",
                    "Keep important emergency numbers easily available.",
                    "Know where you can safely shelter or evacuate."
                ],
                during: [
                    "Move away from the affected area and follow official instructions.",
                    "If told to shelter indoors, close windows and doors.",
                    "Avoid touching or approaching unknown chemicals or containers."
                ],
                after: [
                    "Do not return until authorities say the area is safe.",
                    "Avoid contaminated food, water or surfaces.",
                    "Seek medical help if you have breathing problems or other symptoms."
                ]
            },

            {
                id: "building_collapse",
                title: "Building Collapse",
                description:
                    "Buildings can collapse because of earthquakes, fires, explosions or structural failure.",
                before: [
                    "Know the safest exits from your building.",
                    "Keep emergency supplies and a flashlight accessible.",
                    "Report serious cracks or structural damage to responsible authorities."
                ],
                during: [
                    "Move away from falling objects and unstable structures.",
                    "If trapped, protect your head and mouth from dust.",
                    "Use a flashlight or make noise to help rescuers locate you."
                ],
                after: [
                    "Stay away from damaged buildings and unstable areas.",
                    "Do not use damaged electrical or gas systems.",
                    "Follow instructions from rescue teams and emergency authorities."
                ]
            }
        ]
    },

    hi: {
        title: "आपदा तैयारी",
        description:
            "विभिन्न प्रकार की आपदाओं से पहले, दौरान और बाद में सुरक्षित रहने के आसान तरीके जानें।",
        before: "पहले",
        during: "दौरान",
        after: "बाद में",

        topics: [
            {
                id: "earthquake",
                title: "भूकंप",
                description:
                    "भूकंप अचानक और बिना चेतावनी के आ सकता है।",
                before: [
                    "खिड़कियों और भारी वस्तुओं से दूर सुरक्षित स्थान पहचानें।",
                    "आपातकालीन किट, पानी और जरूरी दवाइयां तैयार रखें।",
                    "भारी फर्नीचर और गिरने वाली वस्तुओं को सुरक्षित रखें।"
                ],
                during: [
                    "नीचे झुकें, ढकें और मजबूती से पकड़कर रखें।",
                    "खिड़कियों, कांच और गिरती वस्तुओं से दूर रहें।",
                    "लिफ्ट का उपयोग न करें।"
                ],
                after: [
                    "अपनी और दूसरों की चोटों की जांच करें।",
                    "क्षतिग्रस्त इमारतों और संरचनाओं से दूर रहें।",
                    "सरकारी आपातकालीन निर्देशों का पालन करें।"
                ]
            },

            {
                id: "fire",
                title: "आग",
                description:
                    "आग तेजी से फैल सकती है और धुआं सांस लेने में परेशानी पैदा कर सकता है।",
                before: [
                    "स्मोक अलार्म को चालू और सही स्थिति में रखें।",
                    "घर, स्कूल या कार्यस्थल के आपातकालीन निकास को जानें।",
                    "माचिस, लाइटर और आग की अन्य चीजों को बच्चों से दूर रखें।"
                ],
                during: [
                    "सुरक्षित रास्ते से तुरंत इमारत से बाहर निकलें।",
                    "धुआं ज्यादा होने पर नीचे झुककर या रेंगकर आगे बढ़ें।",
                    "आग के दौरान लिफ्ट का उपयोग कभी न करें।"
                ],
                after: [
                    "जलती या क्षतिग्रस्त इमारत में वापस न जाएं।",
                    "फायर ब्रिगेड और अधिकारियों के निर्देशों का पालन करें।",
                    "चोट या ज्यादा धुआं अंदर जाने पर चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "flood",
                title: "बाढ़",
                description:
                    "बाढ़ का पानी तेजी से बढ़ सकता है और उसमें मलबा या दूषित पानी हो सकता है।",
                before: [
                    "जरूरी दस्तावेज और कीमती सामान पानी से सुरक्षित जगह पर रखें।",
                    "पानी, भोजन, दवाइयां और आपातकालीन किट तैयार रखें।",
                    "पास के सुरक्षित ऊंचे स्थान या निकासी क्षेत्र की जानकारी रखें।"
                ],
                during: [
                    "जितनी जल्दी हो सके ऊंचे स्थान पर जाएं।",
                    "तेज बहते बाढ़ के पानी में पैदल या वाहन से न जाएं।",
                    "सुरक्षित होने पर बिजली की सप्लाई बंद करें।"
                ],
                after: [
                    "बाढ़ के पानी से दूर रहें क्योंकि उसमें बिजली या गंदगी हो सकती है।",
                    "बाढ़ के पानी को पीने के लिए इस्तेमाल न करें।",
                    "अधिकारी सुरक्षित घोषित करें तभी घर वापस जाएं।"
                ]
            },

            {
                id: "cyclone",
                title: "चक्रवात",
                description:
                    "चक्रवात तेज हवाएं, भारी बारिश और खतरनाक मौसम ला सकता है।",
                before: [
                    "मौसम की चेतावनी और निकासी निर्देशों पर ध्यान दें।",
                    "ढीली वस्तुओं, दरवाजों और खिड़कियों को सुरक्षित करें।",
                    "भोजन, पानी, दवाइयां, टॉर्च और पावर बैंक तैयार रखें।"
                ],
                during: [
                    "घर के अंदर रहें और खिड़कियों से दूर रहें।",
                    "सरकारी मौसम और आपातकालीन अपडेट सुनते रहें।",
                    "चक्रवात के दौरान बाहर न निकलें।"
                ],
                after: [
                    "गिरी हुई बिजली की तारों और क्षतिग्रस्त इमारतों से दूर रहें।",
                    "बाढ़ वाले रास्तों और मलबे वाले क्षेत्रों से बचें।",
                    "अधिकारी अनुमति दें तभी बाहर निकलें।"
                ]
            },

            {
                id: "lightning",
                title: "बिजली और आंधी",
                description:
                    "बिजली अचानक गिर सकती है और बारिश कम होने पर भी खतरनाक हो सकती है।",
                before: [
                    "बाहर जाने से पहले मौसम की चेतावनी जांचें।",
                    "संभव हो तो बिजली के उपकरणों को सुरक्षित रखें।",
                    "आंधी के समय सुरक्षित जगह की जानकारी रखें।"
                ],
                during: [
                    "मजबूत इमारत या बंद वाहन के अंदर जाएं।",
                    "खिड़कियों, बालकनी और खुले स्थानों से दूर रहें।",
                    "पेड़ों, बिजली के खंभों, पानी और धातु की वस्तुओं से दूर रहें।"
                ],
                after: [
                    "आंधी पूरी तरह खत्म होने तक बाहर न निकलें।",
                    "गिरी हुई बिजली की तारों से दूर रहें।",
                    "खतरनाक बिजली संबंधी नुकसान की सूचना अधिकारियों को दें।"
                ]
            },

            {
                id: "landslide",
                title: "भूस्खलन",
                description:
                    "भारी बारिश या भूकंप के बाद भूस्खलन अचानक हो सकता है।",
                before: [
                    "जानें कि आपका क्षेत्र भूस्खलन के खतरे में है या नहीं।",
                    "जमीन में दरार, पत्थर गिरने या जमीन की असामान्य हलचल पर ध्यान दें।",
                    "ढलान से दूर सुरक्षित निकासी मार्ग जानें।"
                ],
                during: [
                    "भूस्खलन के रास्ते से तुरंत दूर जाएं।",
                    "संभव हो तो ऊंचे और सुरक्षित स्थान पर जाएं।",
                    "कीचड़, पत्थरों या मलबे वाले क्षेत्र को पार न करें।"
                ],
                after: [
                    "प्रभावित ढलान और क्षतिग्रस्त इमारतों से दूर रहें।",
                    "दोबारा भूस्खलन होने की संभावना से सावधान रहें।",
                    "अधिकारियों के निर्देशों का पालन करें।"
                ]
            },

            {
                id: "heatwave",
                title: "लू और अत्यधिक गर्मी",
                description:
                    "बहुत ज्यादा गर्मी से शरीर में पानी की कमी और हीटस्ट्रोक हो सकता है।",
                before: [
                    "पर्याप्त पीने का पानी रखें।",
                    "बाहर के काम ठंडे समय में करने की योजना बनाएं।",
                    "घर को ठंडा रखें और बच्चों तथा बुजुर्गों का ध्यान रखें।"
                ],
                during: [
                    "प्यास न लगने पर भी नियमित रूप से पानी पिएं।",
                    "जितना संभव हो ठंडी या छायादार जगह में रहें।",
                    "दोपहर की तेज गर्मी में भारी काम न करें।"
                ],
                after: [
                    "पानी पीते रहें और ठंडी जगह पर आराम करें।",
                    "चक्कर या भ्रम जैसे लक्षणों पर ध्यान दें।",
                    "गंभीर लक्षण होने पर चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "coldwave",
                title: "शीत लहर",
                description:
                    "बहुत कम तापमान शरीर के लिए खतरनाक हो सकता है।",
                before: [
                    "गर्म कपड़े, कंबल और जरूरी दवाइयां तैयार रखें।",
                    "घर को गर्म और सूखा रखने की व्यवस्था करें।",
                    "बुजुर्गों, बच्चों और जरूरतमंद परिवार के सदस्यों की जानकारी रखें।"
                ],
                during: [
                    "घर के अंदर रहें और शरीर को गर्म रखें।",
                    "गर्म कपड़ों की कई परतें पहनें।",
                    "बहुत ठंड में अनावश्यक यात्रा से बचें।"
                ],
                after: [
                    "मौसम सामान्य होने तक शरीर को गर्म रखें।",
                    "ठंड से होने वाली बीमारी के लक्षणों पर ध्यान दें।",
                    "बहुत ज्यादा कंपकंपी, कमजोरी या भ्रम होने पर चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "tsunami",
                title: "सुनामी",
                description:
                    "सुनामी बहुत शक्तिशाली लहरें और तटीय क्षेत्रों में बाढ़ ला सकती है।",
                before: [
                    "जानें कि आपका क्षेत्र सुनामी के खतरे वाले क्षेत्र में है या नहीं।",
                    "ऊंचे स्थान तक जाने वाला निकासी मार्ग जानें।",
                    "आसानी से ले जाने वाली आपातकालीन किट तैयार रखें।"
                ],
                during: [
                    "तुरंत ऊंचे स्थान या समुद्र से दूर अंदरूनी क्षेत्र में जाएं।",
                    "समुद्र तट, नदी और तटीय क्षेत्रों से दूर रहें।",
                    "लहर देखने या पहली लहर के बाद वापस जाने की कोशिश न करें।"
                ],
                after: [
                    "अधिकारी अनुमति दें तभी तट के पास जाएं।",
                    "अतिरिक्त लहरों के लिए तैयार रहें।",
                    "सरकारी निकासी और सुरक्षा निर्देशों का पालन करें।"
                ]
            },

            {
                id: "drought",
                title: "सूखा",
                description:
                    "सूखे के कारण लंबे समय तक पानी की कमी और अत्यधिक गर्मी हो सकती है।",
                before: [
                    "अधिकारियों की सलाह पर सुरक्षित पीने का पानी रखें।",
                    "पानी का सही उपयोग करें और बर्बादी से बचें।",
                    "जरूरी भोजन और दवाइयां उपलब्ध रखें।"
                ],
                during: [
                    "पीने के पानी का उपयोग केवल जरूरी कामों के लिए करें।",
                    "स्थानीय पानी बचाने के नियमों का पालन करें।",
                    "अत्यधिक गर्मी में अनावश्यक बाहर निकलने से बचें।"
                ],
                after: [
                    "पानी की उपलब्धता सामान्य होने तक पानी बचाते रहें।",
                    "पानी की सुरक्षा से जुड़ी सरकारी सलाह का पालन करें।",
                    "गंभीर पानी की कमी की सूचना स्थानीय अधिकारियों को दें।"
                ]
            },

            {
                id: "chemical_accident",
                title: "रासायनिक आपातकाल",
                description:
                    "रासायनिक रिसाव से हवा, पानी और आसपास का क्षेत्र खतरनाक हो सकता है।",
                before: [
                    "अपने क्षेत्र या कार्यस्थल की आपातकालीन प्रक्रिया जानें।",
                    "जरूरी आपातकालीन नंबर आसानी से उपलब्ध रखें।",
                    "सुरक्षित आश्रय या निकासी स्थान की जानकारी रखें।"
                ],
                during: [
                    "प्रभावित क्षेत्र से दूर जाएं और अधिकारियों के निर्देशों का पालन करें।",
                    "अंदर रहने का निर्देश मिले तो दरवाजे और खिड़कियां बंद करें।",
                    "अज्ञात रसायन या कंटेनर को न छुएं और न ही उसके पास जाएं।"
                ],
                after: [
                    "अधिकारी सुरक्षित घोषित करें तभी वापस जाएं।",
                    "दूषित भोजन, पानी या सतहों से बचें।",
                    "सांस लेने में परेशानी या अन्य लक्षण होने पर चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "building_collapse",
                title: "इमारत गिरना",
                description:
                    "भूकंप, आग, विस्फोट या कमजोर संरचना के कारण इमारत गिर सकती है।",
                before: [
                    "इमारत से बाहर निकलने के सुरक्षित रास्ते जानें।",
                    "आपातकालीन सामान और टॉर्च आसानी से उपलब्ध रखें।",
                    "इमारत में गंभीर दरार या नुकसान दिखे तो अधिकारियों को बताएं।"
                ],
                during: [
                    "गिरती वस्तुओं और कमजोर संरचनाओं से दूर रहें।",
                    "फंसने पर सिर और मुंह को धूल से बचाएं।",
                    "टॉर्च का उपयोग करें या आवाज करके बचाव दल को संकेत दें।"
                ],
                after: [
                    "क्षतिग्रस्त इमारत और अस्थिर क्षेत्रों से दूर रहें।",
                    "क्षतिग्रस्त बिजली या गैस सिस्टम का उपयोग न करें।",
                    "बचाव दल और अधिकारियों के निर्देशों का पालन करें।"
                ]
            }
        ]
    },

    bn: {
        title: "দুর্যোগ প্রস্তুতি",
        description:
            "বিভিন্ন ধরনের দুর্যোগের আগে, সময় এবং পরে নিরাপদ থাকার সহজ উপায় জানুন।",
        before: "আগে",
        during: "সময়ে",
        after: "পরে",

        topics: [
            {
                id: "earthquake",
                title: "ভূমিকম্প",
                description:
                    "ভূমিকম্প হঠাৎ এবং কোনো সতর্কতা ছাড়াই ঘটতে পারে।",
                before: [
                    "জানালা ও ভারী জিনিস থেকে দূরে নিরাপদ স্থান চিহ্নিত করুন।",
                    "জরুরি কিট, পানি এবং প্রয়োজনীয় ওষুধ প্রস্তুত রাখুন।",
                    "ভারী আসবাবপত্র ও পড়ে যেতে পারে এমন জিনিস নিরাপদ করুন।"
                ],
                during: [
                    "নিচু হন, ঢেকে রাখুন এবং শক্ত করে ধরে থাকুন।",
                    "জানালা, কাচ এবং পড়ে যাওয়া জিনিস থেকে দূরে থাকুন।",
                    "লিফট ব্যবহার করবেন না।"
                ],
                after: [
                    "নিজের এবং অন্যদের আঘাত পরীক্ষা করুন।",
                    "ক্ষতিগ্রস্ত ভবন ও কাঠামো থেকে দূরে থাকুন।",
                    "সরকারি জরুরি নির্দেশনা অনুসরণ করুন।"
                ]
            },

            {
                id: "fire",
                title: "আগুন",
                description:
                    "আগুন দ্রুত ছড়িয়ে পড়তে পারে এবং ধোঁয়া শ্বাস নিতে সমস্যা তৈরি করতে পারে।",
                before: [
                    "স্মোক অ্যালার্ম সচল রাখুন এবং নিয়মিত পরীক্ষা করুন।",
                    "বাড়ি, স্কুল বা কর্মস্থলের জরুরি বের হওয়ার পথ জানুন।",
                    "ম্যাচ, লাইটার এবং আগুনের ঝুঁকিপূর্ণ জিনিস শিশুদের থেকে দূরে রাখুন।"
                ],
                during: [
                    "নিরাপদ পথ দিয়ে দ্রুত ভবন থেকে বেরিয়ে যান।",
                    "বেশি ধোঁয়া থাকলে নিচু হয়ে বা হামাগুড়ি দিয়ে এগিয়ে যান।",
                    "আগুনের সময় কখনো লিফট ব্যবহার করবেন না।"
                ],
                after: [
                    "জ্বলন্ত বা ক্ষতিগ্রস্ত ভবনে ফিরে যাবেন না।",
                    "দমকল বাহিনী ও জরুরি কর্তৃপক্ষের নির্দেশ অনুসরণ করুন।",
                    "আঘাত বা অতিরিক্ত ধোঁয়ার সংস্পর্শে এলে চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "flood",
                title: "বন্যা",
                description:
                    "বন্যার পানি দ্রুত বাড়তে পারে এবং এতে ময়লা বা বিপজ্জনক পদার্থ থাকতে পারে।",
                before: [
                    "গুরুত্বপূর্ণ নথি ও মূল্যবান জিনিস জলরোধী নিরাপদ স্থানে রাখুন।",
                    "পানি, খাবার, ওষুধ এবং জরুরি কিট প্রস্তুত রাখুন।",
                    "কাছাকাছি নিরাপদ উঁচু স্থান বা আশ্রয়কেন্দ্রের অবস্থান জানুন।"
                ],
                during: [
                    "যত দ্রুত সম্ভব উঁচু স্থানে চলে যান।",
                    "দ্রুত স্রোতের বন্যার পানিতে হাঁটবেন বা গাড়ি চালাবেন না।",
                    "নিরাপদ হলে বিদ্যুৎ সংযোগ বন্ধ করুন।"
                ],
                after: [
                    "জমে থাকা বন্যার পানি থেকে দূরে থাকুন, কারণ এতে বিদ্যুৎ বা ক্ষতিকর পদার্থ থাকতে পারে।",
                    "বন্যার পানি পান করবেন না।",
                    "কর্তৃপক্ষ নিরাপদ ঘোষণা করলে তবেই বাড়ি ফিরুন।"
                ]
            },

            {
                id: "cyclone",
                title: "ঘূর্ণিঝড়",
                description:
                    "ঘূর্ণিঝড়ে প্রবল বাতাস, ভারী বৃষ্টি এবং বিপজ্জনক আবহাওয়া হতে পারে।",
                before: [
                    "আবহাওয়ার সতর্কতা ও সরিয়ে নেওয়ার নির্দেশ অনুসরণ করুন।",
                    "খোলা জিনিস, দরজা ও জানালা ভালোভাবে নিরাপদ করুন।",
                    "খাবার, পানি, ওষুধ, টর্চ এবং পাওয়ার ব্যাংক প্রস্তুত রাখুন।"
                ],
                during: [
                    "ঘরের ভিতরে থাকুন এবং জানালা থেকে দূরে থাকুন।",
                    "সরকারি আবহাওয়া ও জরুরি আপডেট শুনতে থাকুন।",
                    "ঘূর্ণিঝড় চলাকালীন বাইরে বের হবেন না।"
                ],
                after: [
                    "ছিঁড়ে পড়া বিদ্যুতের তার এবং ক্ষতিগ্রস্ত ভবন থেকে দূরে থাকুন।",
                    "জলমগ্ন রাস্তা ও ধ্বংসাবশেষযুক্ত এলাকা এড়িয়ে চলুন।",
                    "কর্তৃপক্ষ অনুমতি দিলে তবেই বাইরে বের হন।"
                ]
            },

            {
                id: "lightning",
                title: "বজ্রপাত ও ঝড়",
                description:
                    "বজ্রপাত হঠাৎ হতে পারে এবং বৃষ্টি কম হলেও বিপজ্জনক হতে পারে।",
                before: [
                    "বাইরে যাওয়ার আগে আবহাওয়ার সতর্কতা পরীক্ষা করুন।",
                    "সম্ভব হলে বৈদ্যুতিক যন্ত্রপাতি নিরাপদ রাখুন।",
                    "ঝড়ের সময় কোথায় নিরাপদ আশ্রয় নেওয়া যায় তা জানুন।"
                ],
                during: [
                    "শক্ত ভবন বা বন্ধ গাড়ির ভিতরে আশ্রয় নিন।",
                    "জানালা, বারান্দা এবং খোলা জায়গা থেকে দূরে থাকুন।",
                    "গাছ, বিদ্যুতের খুঁটি, জলাশয় এবং ধাতব জিনিস থেকে দূরে থাকুন।"
                ],
                after: [
                    "ঝড় পুরোপুরি শেষ না হওয়া পর্যন্ত বাইরে বের হবেন না।",
                    "ছিঁড়ে পড়া বিদ্যুতের তার থেকে দূরে থাকুন।",
                    "বিপজ্জনক বৈদ্যুতিক ক্ষতির খবর কর্তৃপক্ষকে জানান।"
                ]
            },

            {
                id: "landslide",
                title: "ভূমিধস",
                description:
                    "ভারী বৃষ্টি বা ভূমিকম্পের পরে হঠাৎ ভূমিধস হতে পারে।",
                before: [
                    "আপনার এলাকা ভূমিধসের ঝুঁকিতে আছে কি না জানুন।",
                    "মাটিতে ফাটল, পাথর পড়া বা অস্বাভাবিক নড়াচড়ার দিকে নজর রাখুন।",
                    "ঢাল থেকে দূরে নিরাপদ বের হওয়ার পথ জানুন।"
                ],
                during: [
                    "ভূমিধসের পথ থেকে দ্রুত দূরে সরে যান।",
                    "সম্ভব হলে উঁচু ও নিরাপদ স্থানে যান।",
                    "কাদা, পাথর বা ধ্বংসাবশেষের এলাকা পার হবেন না।"
                ],
                after: [
                    "ক্ষতিগ্রস্ত ঢাল ও ভবন থেকে দূরে থাকুন।",
                    "আবার ভূমিধস হতে পারে—সতর্ক থাকুন।",
                    "কর্তৃপক্ষের নিরাপত্তা নির্দেশ অনুসরণ করুন।"
                ]
            },

            {
                id: "heatwave",
                title: "তাপপ্রবাহ",
                description:
                    "অতিরিক্ত গরমে শরীরে পানিশূন্যতা এবং হিটস্ট্রোক হতে পারে।",
                before: [
                    "পর্যাপ্ত পানীয় জল প্রস্তুত রাখুন।",
                    "বাইরের কাজ দিনের ঠান্ডা সময়ে করার পরিকল্পনা করুন।",
                    "বাড়ি ঠান্ডা রাখুন এবং শিশু ও বয়স্কদের খোঁজ নিন।"
                ],
                during: [
                    "তৃষ্ণা না পেলেও নিয়মিত পানি পান করুন।",
                    "যতটা সম্ভব ঠান্ডা বা ছায়াযুক্ত জায়গায় থাকুন।",
                    "দুপুরের তীব্র গরমে ভারী কাজ এড়িয়ে চলুন।"
                ],
                after: [
                    "পানি পান করতে থাকুন এবং ঠান্ডা জায়গায় বিশ্রাম নিন।",
                    "মাথা ঘোরা বা বিভ্রান্তির মতো লক্ষণ লক্ষ্য করুন।",
                    "গুরুতর লক্ষণ থাকলে চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "coldwave",
                title: "শৈত্যপ্রবাহ",
                description:
                    "অত্যন্ত কম তাপমাত্রা শরীরের জন্য বিপজ্জনক হতে পারে।",
                before: [
                    "গরম কাপড়, কম্বল এবং প্রয়োজনীয় ওষুধ প্রস্তুত রাখুন।",
                    "বাড়ি উষ্ণ ও শুকনো রাখার ব্যবস্থা করুন।",
                    "বয়স্ক, শিশু এবং দুর্বল পরিবারের সদস্যদের খোঁজ নিন।"
                ],
                during: [
                    "ঘরের ভিতরে থাকুন এবং শরীর গরম রাখুন।",
                    "গরম পোশাকের একাধিক স্তর পরুন।",
                    "অত্যন্ত ঠান্ডায় অপ্রয়োজনীয় ভ্রমণ এড়িয়ে চলুন।"
                ],
                after: [
                    "আবহাওয়া স্বাভাবিক না হওয়া পর্যন্ত শরীর গরম রাখুন।",
                    "ঠান্ডাজনিত অসুস্থতার লক্ষণ লক্ষ্য করুন।",
                    "অতিরিক্ত কাঁপুনি, দুর্বলতা বা বিভ্রান্তি হলে চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "tsunami",
                title: "সুনামি",
                description:
                    "সুনামিতে শক্তিশালী ঢেউ এবং উপকূলীয় এলাকায় ভয়াবহ বন্যা হতে পারে।",
                before: [
                    "আপনার এলাকা সুনামির ঝুঁকিপূর্ণ অঞ্চলে আছে কি না জানুন।",
                    "উঁচু স্থানে যাওয়ার নিরাপদ পথ আগে থেকে জেনে রাখুন।",
                    "সহজে বহন করা যায় এমন জরুরি ব্যাগ প্রস্তুত রাখুন।"
                ],
                during: [
                    "দ্রুত উঁচু স্থানে বা সমুদ্র থেকে দূরের এলাকায় চলে যান।",
                    "সমুদ্রসৈকত, নদী এবং উপকূলীয় এলাকা থেকে দূরে থাকুন।",
                    "ঢেউ দেখতে যাবেন না এবং প্রথম ঢেউয়ের পরে ফিরে যাবেন না।"
                ],
                after: [
                    "কর্তৃপক্ষ নিরাপদ ঘোষণা না করা পর্যন্ত উপকূল থেকে দূরে থাকুন।",
                    "আরও ঢেউ আসতে পারে—সতর্ক থাকুন।",
                    "সরকারি নিরাপত্তা ও সরিয়ে নেওয়ার নির্দেশ অনুসরণ করুন।"
                ]
            },

            {
                id: "drought",
                title: "খরা",
                description:
                    "খরার কারণে দীর্ঘ সময় ধরে পানির অভাব এবং অতিরিক্ত শুষ্কতা হতে পারে।",
                before: [
                    "কর্তৃপক্ষের পরামর্শ অনুযায়ী নিরাপদ পানীয় জল সংরক্ষণ করুন।",
                    "পানি সঠিকভাবে ব্যবহার করুন এবং অপচয় এড়িয়ে চলুন।",
                    "প্রয়োজনীয় খাবার ও ওষুধ মজুত রাখুন।"
                ],
                during: [
                    "পানীয় জল শুধুমাত্র প্রয়োজনীয় কাজে ব্যবহার করুন।",
                    "স্থানীয় পানি ব্যবহারের নিয়ম মেনে চলুন।",
                    "অতিরিক্ত গরমে অপ্রয়োজনীয় বাইরে যাওয়া এড়িয়ে চলুন।"
                ],
                after: [
                    "পানির সরবরাহ স্বাভাবিক না হওয়া পর্যন্ত পানি সাশ্রয় করুন।",
                    "পানির নিরাপত্তা সম্পর্কিত সরকারি নির্দেশ অনুসরণ করুন।",
                    "গুরুতর পানির সংকট হলে স্থানীয় কর্তৃপক্ষকে জানান।"
                ]
            },

            {
                id: "chemical_accident",
                title: "রাসায়নিক জরুরি অবস্থা",
                description:
                    "রাসায়নিক লিক হলে বাতাস, পানি এবং আশেপাশের এলাকা বিপজ্জনক হয়ে উঠতে পারে।",
                before: [
                    "আপনার এলাকা বা কর্মস্থলের জরুরি ব্যবস্থা সম্পর্কে জানুন।",
                    "জরুরি নম্বরগুলো সহজে পাওয়া যায় এমন জায়গায় রাখুন।",
                    "নিরাপদ আশ্রয় বা বের হওয়ার স্থান সম্পর্কে জানুন।"
                ],
                during: [
                    "প্রভাবিত এলাকা থেকে দূরে সরে যান এবং কর্তৃপক্ষের নির্দেশ অনুসরণ করুন।",
                    "ঘরের ভিতরে থাকার নির্দেশ পেলে দরজা ও জানালা বন্ধ করুন।",
                    "অজানা রাসায়নিক বা পাত্র স্পর্শ করবেন না।"
                ],
                after: [
                    "কর্তৃপক্ষ নিরাপদ ঘোষণা না করা পর্যন্ত ফিরে যাবেন না।",
                    "দূষিত খাবার, পানি বা জিনিসপত্র এড়িয়ে চলুন।",
                    "শ্বাসকষ্ট বা অন্য কোনো সমস্যা হলে চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "building_collapse",
                title: "ভবন ধসে পড়া",
                description:
                    "ভূমিকম্প, আগুন, বিস্ফোরণ বা দুর্বল কাঠামোর কারণে ভবন ধসে পড়তে পারে।",
                before: [
                    "ভবন থেকে বের হওয়ার নিরাপদ পথগুলো জানুন।",
                    "জরুরি সরঞ্জাম ও টর্চ সহজে পাওয়া যায় এমন জায়গায় রাখুন।",
                    "ভবনে বড় ফাটল বা ক্ষতি দেখলে কর্তৃপক্ষকে জানান।"
                ],
                during: [
                    "পড়ে যাওয়া জিনিস এবং দুর্বল কাঠামো থেকে দূরে থাকুন।",
                    "আটকে গেলে মাথা ও মুখ ধুলো থেকে রক্ষা করুন।",
                    "টর্চ ব্যবহার করুন বা শব্দ করে উদ্ধারকারীদের সংকেত দিন।"
                ],
                after: [
                    "ক্ষতিগ্রস্ত ভবন ও অস্থির এলাকা থেকে দূরে থাকুন।",
                    "ক্ষতিগ্রস্ত বিদ্যুৎ বা গ্যাস ব্যবস্থা ব্যবহার করবেন না।",
                    "উদ্ধারকারী দল ও জরুরি কর্তৃপক্ষের নির্দেশ অনুসরণ করুন।"
                ]
            }
        ]
    }
};

export default disasterGuidance;