const safetyGuidance = {
    en: {
        title: "Everyday Safety Awareness",
        description:
            "Learn simple safety tips for home, roads, farms and everyday life to help prevent accidents and stay safe.",
        safetyTips: "Safety Tips",

        topics: [
            {
                id: "road-safety",
                title: "Road and Street Safety",
                description:
                    "Careful driving and walking can help prevent many road accidents.",
                tips: [
                    "Wear a helmet when riding a bike or motorcycle.",
                    "Use a seat belt when travelling in a car.",
                    "Do not use a phone while driving or riding.",
                    "Slow down near schools, markets, villages and crowded places.",
                    "Look both ways before crossing the road.",
                    "Do not drive after drinking alcohol or when feeling very sleepy."
                ]
            },

            {
                id: "motorcycle",
                title: "Bike and Motorcycle Safety",
                description:
                    "Motorcycles and bikes can be dangerous if proper care is not taken.",
                tips: [
                    "Always wear a properly fitted helmet.",
                    "Check the brakes, tyres and lights before a long journey.",
                    "Do not carry more people than the bike is meant for.",
                    "Drive slowly on broken, muddy or slippery roads.",
                    "Keep both hands on the handlebar while riding.",
                    "Use lights or reflective clothing when travelling at night."
                ]
            },

            {
                id: "gas-leak",
                title: "Gas Cylinder and Gas Leak Safety",
                description:
                    "A leaking cooking-gas cylinder can cause fire, explosion or breathing problems.",
                tips: [
                    "Keep the gas cylinder upright and in a well-ventilated place.",
                    "Check the pipe, regulator and stove regularly for damage.",
                    "If you smell gas, do not light a match or use a lighter.",
                    "Do not turn electrical switches on or off if you suspect a gas leak.",
                    "If it is safe, close the gas regulator and move outside.",
                    "Stay away from the leaking cylinder and get help from a safe place."
                ]
            },

            {
                id: "electrical",
                title: "Electricity Safety",
                description:
                    "Loose wires, broken plugs and electricity near water can cause serious shocks or fires.",
                tips: [
                    "Never touch a loose or exposed electric wire.",
                    "Keep children away from electrical sockets and wires.",
                    "Do not use electrical appliances with wet hands.",
                    "Keep wires and electrical equipment away from water.",
                    "Do not overload one socket with many plugs.",
                    "Call a trained electrician for damaged wiring or electrical problems."
                ]
            },

            {
                id: "fire",
                title: "Fire Safety at Home",
                description:
                    "Fire can spread quickly, especially in homes with cooking gas, dry wood or other flammable materials.",
                tips: [
                    "Keep matches, lighters and other fire-starting items away from children.",
                    "Keep cooking areas clean and free from dry or flammable materials.",
                    "Keep a bucket of water or suitable fire-control equipment nearby when appropriate.",
                    "Do not leave a cooking fire unattended.",
                    "Know how to leave the house quickly if a fire starts.",
                    "Never go back inside a burning house to collect belongings."
                ]
            },

            {
                id: "children",
                title: "Child Safety",
                description:
                    "Young children may not understand common dangers around the home and village.",
                tips: [
                    "Keep medicines, chemicals, matches and pesticides away from children.",
                    "Keep children away from wells, ponds, rivers and open drains.",
                    "Do not allow young children to play near roads without an adult.",
                    "Keep sharp tools, knives and farming equipment out of children's reach.",
                    "Teach children how to ask a trusted adult for help.",
                    "Keep emergency phone numbers where children and family members can find them."
                ]
            },

            {
                id: "water-safety",
                title: "Pond, River and Well Safety",
                description:
                    "Open wells, ponds, rivers and other water areas can be dangerous, especially for children.",
                tips: [
                    "Do not allow young children near ponds, rivers or wells without an adult.",
                    "Keep open wells covered or protected with a strong barrier.",
                    "Do not swim alone in ponds, rivers or other unfamiliar water.",
                    "Avoid entering deep or fast-moving water during heavy rain.",
                    "Keep ropes or other safe rescue equipment available near risky water areas when appropriate.",
                    "Never enter dangerous water to rescue someone if you cannot swim or rescue safely."
                ]
            },

            {
                id: "farming",
                title: "Farm and Field Safety",
                description:
                    "Farm work involves tools, machines, animals, water and chemicals that can cause injuries.",
                tips: [
                    "Wear suitable shoes or boots when working in fields.",
                    "Keep children away from tractors and farm machines.",
                    "Switch off farm machines before cleaning or repairing them.",
                    "Do not work with machines when very tired or after drinking alcohol.",
                    "Keep sharp tools in a safe place after use.",
                    "Take breaks and drink safe water during long hours of farm work."
                ]
            },

            {
                id: "pesticide",
                title: "Pesticide and Chemical Safety",
                description:
                    "Pesticides and farm chemicals can harm people if they are swallowed, inhaled or touched.",
                tips: [
                    "Keep pesticides away from children, food and drinking water.",
                    "Keep chemicals in their original labelled containers when possible.",
                    "Do not store pesticides in bottles used for drinking water.",
                    "Follow the instructions written on the pesticide container.",
                    "Use suitable protective clothing when handling farm chemicals.",
                    "Wash hands and exposed skin after using pesticides."
                ]
            },

            {
                id: "animals",
                title: "Animal and Livestock Safety",
                description:
                    "Cows, buffaloes, goats, dogs and other animals can cause injury when frightened or disturbed.",
                tips: [
                    "Do not suddenly approach an unfamiliar animal.",
                    "Keep children away from animals that are eating or protecting their young.",
                    "Use proper ropes and safe methods when handling large animals.",
                    "Stay away from animals that look sick, injured or unusually aggressive.",
                    "Wash hands after handling animals.",
                    "Get medical help after a serious animal bite or injury."
                ]
            },

            {
                id: "snake-safety",
                title: "Snake and Wild Animal Safety",
                description:
                    "Snakes and other animals may be found around fields, houses, wood piles and grassy areas.",
                tips: [
                    "Use a torch when walking outside at night.",
                    "Wear shoes or boots when walking through grass or fields.",
                    "Do not put your hands into holes, piles of wood or dark spaces.",
                    "Keep grass and bushes around the house under control.",
                    "Do not try to catch or kill a snake yourself.",
                    "Move away slowly and call for trained help if a snake is nearby."
                ]
            },

            {
                id: "night-safety",
                title: "Safety at Night",
                description:
                    "Walking or travelling at night can be risky when roads and paths are dark.",
                tips: [
                    "Carry a torch when walking outside at night.",
                    "Use familiar and well-used paths when possible.",
                    "Avoid walking alone in isolated areas.",
                    "Wear light-coloured or reflective clothing when walking near roads.",
                    "Tell a family member where you are going if travelling far at night.",
                    "Keep your phone charged when travelling away from home."
                ]
            },

            {
                id: "storm",
                title: "Storm and Strong Wind Safety",
                description:
                    "Strong winds can break trees, damage roofs and bring down electric wires.",
                tips: [
                    "Stay inside a strong building when a severe storm is approaching.",
                    "Stay away from windows and weak walls.",
                    "Do not stand under large trees during strong winds.",
                    "Stay away from fallen electric wires.",
                    "Keep a torch, phone, drinking water and basic emergency items ready.",
                    "Follow local weather and emergency warnings."
                ]
            },

            {
                id: "lightning",
                title: "Lightning Safety",
                description:
                    "Lightning can be dangerous during thunderstorms, especially in open fields.",
                tips: [
                    "Go inside a strong building when thunder and lightning start.",
                    "Do not stand under an isolated tree during a storm.",
                    "Avoid open fields, ponds and other open areas during lightning.",
                    "Stay away from metal poles, fences and other large metal objects.",
                    "Do not use electrical equipment during a severe lightning storm if it is unsafe.",
                    "Wait until the storm has passed before returning to open areas."
                ]
            },

            {
                id: "unsafe-building",
                title: "Unsafe House or Building",
                description:
                    "Cracked walls, weak roofs and damaged buildings can collapse and cause serious injuries.",
                tips: [
                    "Do not enter a building that has serious cracks or visible damage.",
                    "Stay away from loose walls, damaged roofs and falling parts.",
                    "Keep children away from damaged buildings.",
                    "Ask a trained person to check a seriously damaged house.",
                    "After an earthquake or strong storm, check for damage before returning inside.",
                    "Leave the building if you hear unusual cracking sounds or see signs of collapse."
                ]
            },

            {
                id: "food-safety",
                title: "Food and Drinking Water Safety",
                description:
                    "Dirty water and spoiled food can cause stomach illness and diarrhoea.",
                tips: [
                    "Drink clean or properly treated water.",
                    "Wash hands before preparing or eating food.",
                    "Keep cooked food covered and protected from flies.",
                    "Do not eat food that smells bad or looks spoiled.",
                    "Keep raw food separate from cooked food.",
                    "During floods or water contamination, use a safe source of drinking water."
                ]
            },

            {
                id: "heat-safety",
                title: "Hot Weather Safety",
                description:
                    "Very hot weather can cause weakness, dehydration and serious heat-related illness.",
                tips: [
                    "Drink safe water regularly during hot weather.",
                    "Take breaks in a shaded or cool place when working outside.",
                    "Wear light and comfortable clothing.",
                    "Avoid heavy work during the hottest part of the day when possible.",
                    "Keep children and older people in a cool place during extreme heat.",
                    "Get medical help if someone becomes confused, faints or becomes very weak."
                ]
            },

            {
                id: "slips-falls",
                title: "Preventing Falls",
                description:
                    "Falls can cause serious injuries, especially for children and older people.",
                tips: [
                    "Keep floors and walking paths free from water, mud and loose objects.",
                    "Use proper lighting around stairs and entrances.",
                    "Do not leave tools or farming equipment on walking paths.",
                    "Use a strong ladder and ask someone to support it when needed.",
                    "Be careful on wet, muddy or uneven ground.",
                    "Help older people when they need to walk on slippery or uneven paths."
                ]
            },

            {
                id: "emergency-contacts",
                title: "Keep Emergency Contacts Ready",
                description:
                    "Knowing whom to call can save valuable time during an emergency.",
                tips: [
                    "Keep important emergency numbers saved in your phone.",
                    "Write important numbers on paper for family members who may not use a phone.",
                    "Keep the numbers of nearby hospitals, health centres and trusted healthcare workers.",
                    "Tell family members where emergency contact information is kept.",
                    "Keep your phone charged when possible.",
                    "Know the easiest route to the nearest health centre or hospital."
                ]
            }
        ]
    },

    hi: {
        title: "दैनिक सुरक्षा जागरूकता",
        description:
            "घर, सड़क, खेत और रोजमर्रा की जिंदगी में दुर्घटनाओं से बचने और सुरक्षित रहने के आसान तरीके जानें।",
        safetyTips: "सुरक्षा सुझाव",

        topics: [
            {
                id: "road-safety",
                title: "सड़क और रास्ते की सुरक्षा",
                description:
                    "सावधानी से गाड़ी चलाने और सड़क पार करने से कई दुर्घटनाओं से बचा जा सकता है।",
                tips: [
                    "बाइक या मोटरसाइकिल चलाते समय हमेशा हेलमेट पहनें।",
                    "कार में सीट बेल्ट लगाएं।",
                    "गाड़ी या बाइक चलाते समय मोबाइल फोन न चलाएं।",
                    "स्कूल, बाजार, गांव और भीड़ वाली जगहों के पास धीरे चलें।",
                    "सड़क पार करने से पहले दोनों तरफ देखें।",
                    "शराब पीकर या बहुत नींद आने पर गाड़ी न चलाएं।"
                ]
            },

            {
                id: "motorcycle",
                title: "बाइक और मोटरसाइकिल सुरक्षा",
                description:
                    "बाइक चलाते समय थोड़ी सी लापरवाही भी बड़ी दुर्घटना का कारण बन सकती है।",
                tips: [
                    "सही तरीके से फिट हेलमेट हमेशा पहनें।",
                    "लंबी यात्रा से पहले ब्रेक, टायर और लाइट जांच लें।",
                    "बाइक पर जरूरत से ज्यादा लोगों को न बैठाएं।",
                    "टूटी, कीचड़ वाली या फिसलन भरी सड़क पर धीरे चलें।",
                    "बाइक चलाते समय दोनों हाथ हैंडल पर रखें।",
                    "रात में लाइट या चमकीले कपड़े का इस्तेमाल करें।"
                ]
            },

            {
                id: "gas-leak",
                title: "गैस सिलेंडर और गैस रिसाव",
                description:
                    "गैस सिलेंडर से रिसाव होने पर आग, विस्फोट या सांस की परेशानी हो सकती है।",
                tips: [
                    "गैस सिलेंडर को सीधा और हवादार जगह पर रखें।",
                    "गैस की पाइप, रेगुलेटर और चूल्हे को समय-समय पर जांचें।",
                    "गैस की गंध आए तो माचिस या लाइटर न जलाएं।",
                    "गैस रिसाव का शक हो तो बिजली का स्विच चालू या बंद न करें।",
                    "सुरक्षित हो तो गैस का रेगुलेटर बंद करें और बाहर जाएं।",
                    "रिसाव वाले सिलेंडर से दूर रहें और सुरक्षित जगह से मदद लें।"
                ]
            },

            {
                id: "electrical",
                title: "बिजली से सुरक्षा",
                description:
                    "ढीले तार, टूटे प्लग और पानी के पास बिजली का इस्तेमाल गंभीर झटका या आग लगा सकता है।",
                tips: [
                    "खुले या टूटे बिजली के तार को हाथ न लगाएं।",
                    "बच्चों को बिजली के सॉकेट और तारों से दूर रखें।",
                    "गीले हाथों से बिजली का सामान न छुएं।",
                    "बिजली के तार और उपकरणों को पानी से दूर रखें।",
                    "एक ही सॉकेट में बहुत सारे प्लग न लगाएं।",
                    "बिजली की खराबी के लिए प्रशिक्षित इलेक्ट्रीशियन को बुलाएं।"
                ]
            },

            {
                id: "fire",
                title: "घर में आग से सुरक्षा",
                description:
                    "आग बहुत तेजी से फैल सकती है, खासकर रसोई और गैस के आसपास।",
                tips: [
                    "माचिस और लाइटर बच्चों से दूर रखें।",
                    "चूल्हे के आसपास सूखी या जल्दी आग पकड़ने वाली चीजें न रखें।",
                    "जरूरत के अनुसार पानी की बाल्टी या आग बुझाने का सामान पास रखें।",
                    "चूल्हे या आग को जलता छोड़कर न जाएं।",
                    "आग लगने पर घर से बाहर निकलने का रास्ता पहले से जानें।",
                    "जलते घर में सामान लेने के लिए वापस न जाएं।"
                ]
            },

            {
                id: "children",
                title: "बच्चों की सुरक्षा",
                description:
                    "छोटे बच्चों को घर और गांव के कई खतरों का पता नहीं होता।",
                tips: [
                    "दवाइयां, रसायन, माचिस और कीटनाशक बच्चों से दूर रखें।",
                    "बच्चों को कुएं, तालाब, नदी और खुले नाले से दूर रखें।",
                    "छोटे बच्चों को सड़क के पास अकेले न जाने दें।",
                    "चाकू, तेज औजार और खेती के सामान बच्चों की पहुंच से दूर रखें।",
                    "बच्चों को सिखाएं कि जरूरत पड़ने पर किसी भरोसेमंद बड़े से मदद मांगें।",
                    "आपातकालीन नंबर ऐसी जगह रखें जहां परिवार के लोग आसानी से देख सकें।"
                ]
            },

            {
                id: "water-safety",
                title: "तालाब, नदी और कुएं की सुरक्षा",
                description:
                    "खुले कुएं, तालाब और नदी बच्चों और बड़ों दोनों के लिए खतरनाक हो सकते हैं।",
                tips: [
                    "बच्चों को तालाब, नदी या कुएं के पास अकेला न जाने दें।",
                    "खुले कुएं को ढककर रखें या मजबूत घेरा लगाएं।",
                    "अकेले तालाब या नदी में तैरने न जाएं।",
                    "तेज बारिश में गहरे या तेज बहते पानी में न जाएं।",
                    "खतरनाक पानी वाली जगह के पास जरूरत के अनुसार रस्सी या सुरक्षित बचाव का सामान रखें।",
                    "किसी को बचाने के लिए अगर तैरना नहीं आता तो खुद पानी में न उतरें।"
                ]
            },

            {
                id: "farming",
                title: "खेत और खेती के काम की सुरक्षा",
                description:
                    "खेत में औजार, मशीन, जानवर और रसायनों से चोट लग सकती है।",
                tips: [
                    "खेत में काम करते समय सही जूते या जूतेनुमा सुरक्षा पहनें।",
                    "बच्चों को ट्रैक्टर और खेती की मशीनों से दूर रखें।",
                    "मशीन साफ या ठीक करने से पहले उसे बंद करें।",
                    "बहुत थके होने या शराब पीने के बाद मशीन न चलाएं।",
                    "तेज औजार इस्तेमाल के बाद सुरक्षित जगह रखें।",
                    "लंबे समय तक खेत में काम करते समय बीच-बीच में आराम करें और साफ पानी पिएं।"
                ]
            },

            {
                id: "pesticide",
                title: "कीटनाशक और रसायन से सुरक्षा",
                description:
                    "कीटनाशक और खेती के रसायन शरीर में जाने या त्वचा पर लगने से नुकसान कर सकते हैं।",
                tips: [
                    "कीटनाशक को बच्चों, खाने और पीने के पानी से दूर रखें।",
                    "रसायन को संभव हो तो उसी लेबल वाले डिब्बे में रखें।",
                    "कीटनाशक को पानी पीने वाली बोतल में कभी न रखें।",
                    "डिब्बे पर लिखे निर्देश के अनुसार ही इस्तेमाल करें।",
                    "रसायन डालते समय उचित कपड़े और सुरक्षा सामान पहनें।",
                    "कीटनाशक इस्तेमाल करने के बाद हाथ और खुली त्वचा अच्छी तरह धोएं।"
                ]
            },

            {
                id: "animals",
                title: "जानवरों से सुरक्षा",
                description:
                    "गाय, भैंस, बकरी, कुत्ते और दूसरे जानवर डरने या परेशान होने पर चोट पहुंचा सकते हैं।",
                tips: [
                    "अनजान जानवर के पास अचानक न जाएं।",
                    "खाना खाते या बच्चे की रक्षा करते जानवर से बच्चों को दूर रखें।",
                    "बड़े जानवर को संभालते समय सही रस्सी और सुरक्षित तरीका अपनाएं।",
                    "बीमार, घायल या बहुत गुस्से वाले जानवर से दूर रहें।",
                    "जानवरों को छूने के बाद हाथ धोएं।",
                    "जानवर के काटने या गंभीर चोट के बाद डॉक्टर को दिखाएं।"
                ]
            },

            {
                id: "snake-safety",
                title: "सांप और जंगली जानवरों से सुरक्षा",
                description:
                    "सांप खेत, घास, लकड़ी के ढेर और घर के आसपास छिपे हो सकते हैं।",
                tips: [
                    "रात में बाहर जाते समय टॉर्च रखें।",
                    "घास या खेत में जाते समय जूते या बूट पहनें।",
                    "छेद, लकड़ी के ढेर या अंधेरी जगह में हाथ न डालें।",
                    "घर के आसपास घास और झाड़ियों को ज्यादा बढ़ने न दें।",
                    "सांप को पकड़ने या मारने की कोशिश न करें।",
                    "सांप दिखने पर धीरे-धीरे दूर जाएं और प्रशिक्षित मदद लें।"
                ]
            },

            {
                id: "night-safety",
                title: "रात में बाहर जाते समय सुरक्षा",
                description:
                    "रात में अंधेरी सड़क या रास्ते पर चलना ज्यादा जोखिम भरा हो सकता है।",
                tips: [
                    "रात में बाहर निकलते समय टॉर्च रखें।",
                    "संभव हो तो परिचित और लोगों वाले रास्ते से जाएं।",
                    "सुनसान जगह पर अकेले जाने से बचें।",
                    "सड़क के पास चलते समय चमकीले या दिखाई देने वाले कपड़े पहनें।",
                    "रात में दूर जाते समय घरवालों को बताएं कि कहां जा रहे हैं।",
                    "घर से दूर जाते समय फोन चार्ज रखें।"
                ]
            },

            {
                id: "storm",
                title: "आंधी और तेज हवा से सुरक्षा",
                description:
                    "तेज हवा से पेड़, छत और बिजली के तार गिर सकते हैं।",
                tips: [
                    "तेज आंधी आने पर मजबूत घर या इमारत के अंदर रहें।",
                    "खिड़कियों और कमजोर दीवारों से दूर रहें।",
                    "तेज हवा में बड़े पेड़ के नीचे न खड़े हों।",
                    "गिरे हुए बिजली के तार से दूर रहें।",
                    "टॉर्च, फोन, साफ पानी और जरूरी सामान तैयार रखें।",
                    "स्थानीय मौसम और आपातकालीन चेतावनी पर ध्यान दें।"
                ]
            },

            {
                id: "lightning",
                title: "बिजली गिरने से सुरक्षा",
                description:
                    "आंधी-तूफान के समय खुले खेत और मैदान में बिजली गिरने का खतरा रहता है।",
                tips: [
                    "बादल गरजने और बिजली चमकने पर मजबूत घर के अंदर जाएं।",
                    "आंधी में अकेले खड़े बड़े पेड़ के नीचे न जाएं।",
                    "बिजली चमकते समय खुले खेत, तालाब और मैदान से दूर रहें।",
                    "लोहे के खंभे, तार और बड़ी धातु की चीजों से दूर रहें।",
                    "तेज बिजली के तूफान में असुरक्षित बिजली के उपकरणों का इस्तेमाल न करें।",
                    "तूफान खत्म होने तक खुले स्थान पर वापस न जाएं।"
                ]
            },

            {
                id: "unsafe-building",
                title: "कमजोर या टूटा हुआ घर",
                description:
                    "फटी दीवार, कमजोर छत या टूटी इमारत गिरकर गंभीर चोट पहुंचा सकती है।",
                tips: [
                    "बहुत ज्यादा दरार या नुकसान वाली इमारत के अंदर न जाएं।",
                    "ढीली दीवार, टूटी छत और गिरने वाली चीजों से दूर रहें।",
                    "बच्चों को टूटे घर या इमारत के पास न जाने दें।",
                    "गंभीर नुकसान वाले घर को किसी जानकार व्यक्ति से जांच करवाएं।",
                    "भूकंप या तेज आंधी के बाद घर में जाने से पहले नुकसान जांच लें।",
                    "दीवार से अजीब आवाज आए या गिरने का खतरा दिखे तो तुरंत बाहर निकलें।"
                ]
            },

            {
                id: "food-safety",
                title: "खाने और पीने के पानी की सुरक्षा",
                description:
                    "गंदा पानी और खराब खाना पेट की बीमारी और दस्त का कारण बन सकता है।",
                tips: [
                    "साफ या अच्छी तरह साफ किया हुआ पानी पिएं।",
                    "खाना बनाने और खाने से पहले हाथ धोएं।",
                    "पका हुआ खाना ढककर रखें और मक्खियों से बचाएं।",
                    "बदबू या खराब दिखने वाला खाना न खाएं।",
                    "कच्चे और पके खाने को अलग रखें।",
                    "बाढ़ या पानी गंदा होने के समय सुरक्षित पीने का पानी इस्तेमाल करें।"
                ]
            },

            {
                id: "heat-safety",
                title: "गर्मी से सुरक्षा",
                description:
                    "बहुत ज्यादा गर्मी में कमजोरी, पानी की कमी और गंभीर गर्मी की बीमारी हो सकती है।",
                tips: [
                    "गर्मी में नियमित रूप से साफ पानी पिएं।",
                    "बाहर काम करते समय छाया में बीच-बीच में आराम करें।",
                    "हल्के और आरामदायक कपड़े पहनें।",
                    "संभव हो तो दिन के सबसे गर्म समय में भारी काम न करें।",
                    "बहुत गर्मी में बच्चों और बुजुर्गों को ठंडी जगह पर रखें।",
                    "भ्रम, बेहोशी या बहुत ज्यादा कमजोरी होने पर चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "slips-falls",
                title: "गिरने से बचाव",
                description:
                    "फिसलने या गिरने से गंभीर चोट लग सकती है, खासकर बच्चों और बुजुर्गों को।",
                tips: [
                    "फर्श और रास्ते से पानी, कीचड़ और सामान हटा दें।",
                    "सीढ़ी और दरवाजे के पास पर्याप्त रोशनी रखें।",
                    "रास्ते में औजार या खेती का सामान न छोड़ें।",
                    "मजबूत सीढ़ी का इस्तेमाल करें और जरूरत हो तो किसी से पकड़ने को कहें।",
                    "गीली, कीचड़ वाली या ऊबड़-खाबड़ जमीन पर सावधानी से चलें।",
                    "फिसलन वाले रास्ते पर बुजुर्ग व्यक्ति की मदद करें।"
                ]
            },

            {
                id: "emergency-contacts",
                title: "आपातकालीन नंबर तैयार रखें",
                description:
                    "आपातकाल में सही व्यक्ति को जल्दी फोन करने से समय बच सकता है।",
                tips: [
                    "जरूरी आपातकालीन नंबर फोन में सेव रखें।",
                    "जो लोग फोन नहीं चलाते उनके लिए जरूरी नंबर कागज पर लिखकर रखें।",
                    "पास के अस्पताल, स्वास्थ्य केंद्र और भरोसेमंद स्वास्थ्यकर्मी के नंबर रखें।",
                    "घर के सभी लोगों को बताएं कि जरूरी नंबर कहां रखे हैं।",
                    "संभव हो तो फोन हमेशा चार्ज रखें।",
                    "पास के स्वास्थ्य केंद्र या अस्पताल तक जाने का रास्ता पहले से जानें।"
                ]
            }
        ]
    },

    bn: {
        title: "দৈনন্দিন নিরাপত্তা সচেতনতা",
        description:
            "বাড়ি, রাস্তা, মাঠ এবং দৈনন্দিন জীবনে দুর্ঘটনা এড়িয়ে নিরাপদ থাকার সহজ উপায় জানুন।",
        safetyTips: "নিরাপত্তার টিপস",

        topics: [
            {
                id: "road-safety",
                title: "রাস্তা ও পথের নিরাপত্তা",
                description:
                    "সাবধানে গাড়ি চালানো এবং রাস্তা পার হলে অনেক দুর্ঘটনা এড়ানো যায়।",
                tips: [
                    "বাইক বা মোটরসাইকেল চালানোর সময় সবসময় হেলমেট পরুন।",
                    "গাড়িতে গেলে সিট বেল্ট ব্যবহার করুন।",
                    "গাড়ি বা বাইক চালানোর সময় মোবাইল ব্যবহার করবেন না।",
                    "স্কুল, বাজার, গ্রাম ও ভিড়ের জায়গার কাছে ধীরে গাড়ি চালান।",
                    "রাস্তা পার হওয়ার আগে দুই দিক দেখে নিন।",
                    "মদ খাওয়ার পরে বা খুব ঘুম পেলে গাড়ি চালাবেন না।"
                ]
            },

            {
                id: "motorcycle",
                title: "বাইক ও মোটরসাইকেল নিরাপত্তা",
                description:
                    "বাইক চালানোর সময় সামান্য অসাবধানতাও বড় দুর্ঘটনার কারণ হতে পারে।",
                tips: [
                    "সঠিকভাবে লাগানো হেলমেট সবসময় পরুন।",
                    "দূরে যাওয়ার আগে ব্রেক, টায়ার ও লাইট পরীক্ষা করুন।",
                    "বাইকে প্রয়োজনের বেশি মানুষ তুলবেন না।",
                    "ভাঙা, কাদাযুক্ত বা পিচ্ছিল রাস্তায় ধীরে চালান।",
                    "বাইক চালানোর সময় দুই হাত হ্যান্ডেলে রাখুন।",
                    "রাতে লাইট বা উজ্জ্বল রঙের পোশাক ব্যবহার করুন।"
                ]
            },

            {
                id: "gas-leak",
                title: "গ্যাস সিলিন্ডার ও গ্যাস লিক",
                description:
                    "গ্যাস সিলিন্ডার থেকে লিক হলে আগুন, বিস্ফোরণ বা শ্বাসকষ্ট হতে পারে।",
                tips: [
                    "গ্যাস সিলিন্ডার সোজা ও বাতাস চলাচল করে এমন জায়গায় রাখুন।",
                    "গ্যাসের পাইপ, রেগুলেটর ও চুলা নিয়মিত পরীক্ষা করুন।",
                    "গ্যাসের গন্ধ পেলে দেশলাই বা লাইটার জ্বালাবেন না।",
                    "গ্যাস লিক সন্দেহ হলে বৈদ্যুতিক সুইচ চালু বা বন্ধ করবেন না।",
                    "নিরাপদ হলে গ্যাসের রেগুলেটর বন্ধ করে বাইরে চলে যান।",
                    "লিক হওয়া সিলিন্ডার থেকে দূরে থাকুন এবং নিরাপদ জায়গা থেকে সাহায্য নিন।"
                ]
            },

            {
                id: "electrical",
                title: "বিদ্যুৎ থেকে নিরাপত্তা",
                description:
                    "খোলা তার, ভাঙা প্লাগ এবং পানির কাছে বিদ্যুৎ ব্যবহার করলে বড় বিপদ হতে পারে।",
                tips: [
                    "খোলা বা ছেঁড়া বৈদ্যুতিক তারে হাত দেবেন না।",
                    "শিশুদের বৈদ্যুতিক সকেট ও তার থেকে দূরে রাখুন।",
                    "ভেজা হাতে বৈদ্যুতিক জিনিস ধরবেন না।",
                    "বৈদ্যুতিক তার ও যন্ত্রপাতি পানি থেকে দূরে রাখুন।",
                    "একটি সকেটে অনেক প্লাগ একসঙ্গে লাগাবেন না।",
                    "বিদ্যুতের সমস্যা হলে প্রশিক্ষিত ইলেকট্রিশিয়ান ডাকুন।"
                ]
            },

            {
                id: "fire",
                title: "বাড়িতে আগুন থেকে নিরাপত্তা",
                description:
                    "বিশেষ করে রান্নাঘর ও গ্যাসের কাছে আগুন খুব দ্রুত ছড়িয়ে পড়তে পারে।",
                tips: [
                    "দেশলাই ও লাইটার শিশুদের থেকে দূরে রাখুন।",
                    "চুলার পাশে শুকনো বা সহজে আগুন ধরে এমন জিনিস রাখবেন না।",
                    "প্রয়োজন হলে কাছে এক বালতি পানি বা আগুন নেভানোর উপযুক্ত ব্যবস্থা রাখুন।",
                    "চুলা বা আগুন জ্বালিয়ে রেখে চলে যাবেন না।",
                    "আগুন লাগলে বাড়ি থেকে বের হওয়ার পথ আগে থেকেই জানুন।",
                    "জ্বলন্ত বাড়িতে জিনিস আনতে আবার ঢুকবেন না।"
                ]
            },

            {
                id: "children",
                title: "শিশুদের নিরাপত্তা",
                description:
                    "ছোট শিশুরা বাড়ি ও গ্রামের অনেক বিপদ বুঝতে পারে না।",
                tips: [
                    "ওষুধ, রাসায়নিক, দেশলাই ও কীটনাশক শিশুদের থেকে দূরে রাখুন।",
                    "শিশুদের কুয়ো, পুকুর, নদী ও খোলা নালা থেকে দূরে রাখুন।",
                    "ছোট শিশুদের একা রাস্তার কাছে যেতে দেবেন না।",
                    "ছুরি, ধারালো যন্ত্র ও কৃষিকাজের সরঞ্জাম শিশুদের নাগালের বাইরে রাখুন।",
                    "প্রয়োজনে বিশ্বাসযোগ্য বড় মানুষের কাছে সাহায্য চাইতে শেখান।",
                    "জরুরি ফোন নম্বর এমন জায়গায় রাখুন যেখানে পরিবারের সবাই দেখতে পারে।"
                ]
            },

            {
                id: "water-safety",
                title: "পুকুর, নদী ও কুয়োর নিরাপত্তা",
                description:
                    "খোলা কুয়ো, পুকুর ও নদী শিশু ও বড়দের জন্য বিপজ্জনক হতে পারে।",
                tips: [
                    "শিশুদের একা পুকুর, নদী বা কুয়োর কাছে যেতে দেবেন না।",
                    "খোলা কুয়ো ঢেকে রাখুন বা শক্ত ঘের দিন।",
                    "একা পুকুর বা নদীতে সাঁতার কাটতে যাবেন না।",
                    "ভারী বৃষ্টির সময় গভীর বা দ্রুত স্রোতের পানিতে যাবেন না।",
                    "বিপজ্জনক পানির জায়গার কাছে প্রয়োজনে দড়ি বা নিরাপদ উদ্ধার সামগ্রী রাখুন।",
                    "সাঁতার না জানলে কাউকে বাঁচাতে নিজে পানিতে নামবেন না।"
                ]
            },

            {
                id: "farming",
                title: "মাঠ ও কৃষিকাজের নিরাপত্তা",
                description:
                    "কৃষিকাজে যন্ত্র, ধারালো সরঞ্জাম, পশু ও রাসায়নিক থেকে আঘাত লাগতে পারে।",
                tips: [
                    "মাঠে কাজ করার সময় উপযুক্ত জুতো বা বুট পরুন।",
                    "শিশুদের ট্রাক্টর ও কৃষির যন্ত্রপাতি থেকে দূরে রাখুন।",
                    "যন্ত্র পরিষ্কার বা মেরামত করার আগে সেটি বন্ধ করুন।",
                    "খুব ক্লান্ত থাকলে বা মদ খাওয়ার পরে যন্ত্র চালাবেন না।",
                    "ধারালো সরঞ্জাম ব্যবহারের পরে নিরাপদ জায়গায় রাখুন।",
                    "অনেকক্ষণ মাঠে কাজ করলে মাঝে মাঝে বিশ্রাম নিন এবং পরিষ্কার পানি পান করুন।"
                ]
            },

            {
                id: "pesticide",
                title: "কীটনাশক ও রাসায়নিক থেকে নিরাপত্তা",
                description:
                    "কীটনাশক ও কৃষির রাসায়নিক শরীরে গেলে বা ত্বকে লাগলে ক্ষতি হতে পারে।",
                tips: [
                    "কীটনাশক শিশু, খাবার ও পানীয় জল থেকে দূরে রাখুন।",
                    "সম্ভব হলে রাসায়নিক মূল লেবেলযুক্ত পাত্রে রাখুন।",
                    "পানি খাওয়ার বোতলে কখনও কীটনাশক রাখবেন না।",
                    "পাত্রে লেখা নির্দেশ অনুযায়ী ব্যবহার করুন।",
                    "রাসায়নিক ব্যবহার করার সময় উপযুক্ত পোশাক ও সুরক্ষা সামগ্রী ব্যবহার করুন।",
                    "কীটনাশক ব্যবহারের পরে হাত ও খোলা ত্বক ভালোভাবে ধুয়ে নিন।"
                ]
            },

            {
                id: "animals",
                title: "পশু থেকে নিরাপত্তা",
                description:
                    "গরু, মহিষ, ছাগল, কুকুর ও অন্য পশু ভয় পেলে বা বিরক্ত হলে আঘাত করতে পারে।",
                tips: [
                    "অচেনা পশুর কাছে হঠাৎ যাবেন না।",
                    "খাওয়ার সময় বা বাচ্চাকে রক্ষা করার সময় পশুর কাছ থেকে শিশুদের দূরে রাখুন।",
                    "বড় পশু ধরার সময় সঠিক দড়ি ও নিরাপদ পদ্ধতি ব্যবহার করুন।",
                    "অসুস্থ, আহত বা খুব আক্রমণাত্মক পশু থেকে দূরে থাকুন।",
                    "পশু ধরার পরে হাত ধুয়ে নিন।",
                    "পশু কামড়ালে বা গুরুতর আঘাত হলে ডাক্তার দেখান।"
                ]
            },

            {
                id: "snake-safety",
                title: "সাপ ও বন্য প্রাণী থেকে নিরাপত্তা",
                description:
                    "সাপ মাঠ, ঘাস, কাঠের স্তূপ এবং বাড়ির আশেপাশে লুকিয়ে থাকতে পারে।",
                tips: [
                    "রাতে বাইরে গেলে টর্চ সঙ্গে রাখুন।",
                    "ঘাস বা মাঠে গেলে জুতো বা বুট পরুন।",
                    "গর্ত, কাঠের স্তূপ বা অন্ধকার জায়গায় হাত দেবেন না।",
                    "বাড়ির আশেপাশে ঘাস ও ঝোপঝাড় বেশি বাড়তে দেবেন না।",
                    "সাপ ধরতে বা মারতে যাবেন না।",
                    "সাপ দেখলে ধীরে ধীরে দূরে সরে যান এবং প্রশিক্ষিত সাহায্য নিন।"
                ]
            },

            {
                id: "night-safety",
                title: "রাতে বাইরে যাওয়ার সময় নিরাপত্তা",
                description:
                    "রাতে অন্ধকার রাস্তা বা পথে হাঁটা বেশি ঝুঁকিপূর্ণ হতে পারে।",
                tips: [
                    "রাতে বাইরে গেলে টর্চ সঙ্গে রাখুন।",
                    "সম্ভব হলে পরিচিত ও মানুষের চলাচল আছে এমন রাস্তা ব্যবহার করুন।",
                    "নির্জন জায়গায় একা যাওয়া এড়িয়ে চলুন।",
                    "রাস্তার পাশে হাঁটার সময় উজ্জ্বল রঙের পোশাক পরুন।",
                    "রাতে দূরে গেলে বাড়ির লোককে জানিয়ে যান।",
                    "বাড়ি থেকে দূরে গেলে ফোন চার্জ করে রাখুন।"
                ]
            },

            {
                id: "storm",
                title: "ঝড় ও জোরে বাতাসের সময় নিরাপত্তা",
                description:
                    "জোরে বাতাসে গাছ, ছাদ এবং বিদ্যুতের তার পড়ে যেতে পারে।",
                tips: [
                    "প্রবল ঝড় এলে শক্ত বাড়ির ভিতরে থাকুন।",
                    "জানালা ও দুর্বল দেয়াল থেকে দূরে থাকুন।",
                    "ঝড়ের সময় বড় গাছের নিচে দাঁড়াবেন না।",
                    "পড়ে থাকা বিদ্যুতের তার থেকে দূরে থাকুন।",
                    "টর্চ, ফোন, পরিষ্কার পানি ও জরুরি জিনিস প্রস্তুত রাখুন।",
                    "স্থানীয় আবহাওয়া ও জরুরি সতর্কবার্তা শুনুন।"
                ]
            },

            {
                id: "lightning",
                title: "বজ্রপাত থেকে নিরাপত্তা",
                description:
                    "বজ্রপাতের সময় খোলা মাঠ ও জমিতে বিপদ বেশি থাকে।",
                tips: [
                    "বজ্রের শব্দ ও বিদ্যুৎ চমকালে শক্ত বাড়ির ভিতরে চলে যান।",
                    "বজ্রপাতের সময় একা দাঁড়িয়ে থাকা বড় গাছের নিচে যাবেন না।",
                    "খোলা মাঠ, পুকুর ও জলাশয় থেকে দূরে থাকুন।",
                    "লোহার খুঁটি, বেড়া ও বড় ধাতব জিনিস থেকে দূরে থাকুন।",
                    "প্রবল বজ্রপাতের সময় ঝুঁকিপূর্ণ বৈদ্যুতিক যন্ত্র ব্যবহার করবেন না।",
                    "ঝড় শেষ না হওয়া পর্যন্ত খোলা জায়গায় ফিরে যাবেন না।"
                ]
            },

            {
                id: "unsafe-building",
                title: "দুর্বল বা ভাঙা বাড়ি",
                description:
                    "ফাটল ধরা দেয়াল, দুর্বল ছাদ বা ক্ষতিগ্রস্ত বাড়ি ভেঙে পড়ে গুরুতর আঘাত করতে পারে।",
                tips: [
                    "বাড়িতে বড় ফাটল বা গুরুতর ক্ষতি থাকলে ভিতরে যাবেন না।",
                    "দুর্বল দেয়াল, ভাঙা ছাদ ও পড়ে যেতে পারে এমন জিনিস থেকে দূরে থাকুন।",
                    "শিশুদের ভাঙা বাড়ির কাছে যেতে দেবেন না।",
                    "গুরুতর ক্ষতিগ্রস্ত বাড়ি অভিজ্ঞ ব্যক্তিকে দিয়ে পরীক্ষা করান।",
                    "ভূমিকম্প বা প্রবল ঝড়ের পরে বাড়িতে ঢোকার আগে ক্ষতি পরীক্ষা করুন।",
                    "দেয়াল থেকে অস্বাভাবিক শব্দ হলে বা বাড়ি পড়ে যাওয়ার লক্ষণ দেখলে দ্রুত বেরিয়ে আসুন।"
                ]
            },

            {
                id: "food-safety",
                title: "খাবার ও পানীয় জলের নিরাপত্তা",
                description:
                    "নোংরা পানি ও পচা খাবার পেটের অসুখ এবং ডায়রিয়া করতে পারে।",
                tips: [
                    "পরিষ্কার বা ভালোভাবে শোধন করা পানি পান করুন।",
                    "খাবার তৈরি ও খাওয়ার আগে হাত ধুয়ে নিন।",
                    "রান্না করা খাবার ঢেকে রাখুন এবং মাছি থেকে দূরে রাখুন।",
                    "দুর্গন্ধযুক্ত বা পচা খাবার খাবেন না।",
                    "কাঁচা ও রান্না করা খাবার আলাদা রাখুন।",
                    "বন্যা বা পানির সমস্যা হলে নিরাপদ পানীয় জল ব্যবহার করুন।"
                ]
            },

            {
                id: "heat-safety",
                title: "গরমের সময় নিরাপত্তা",
                description:
                    "অতিরিক্ত গরমে দুর্বলতা, পানিশূন্যতা এবং গুরুতর অসুস্থতা হতে পারে।",
                tips: [
                    "গরমের সময় নিয়মিত পরিষ্কার পানি পান করুন।",
                    "বাইরে কাজ করার সময় মাঝে মাঝে ছায়ায় বিশ্রাম নিন।",
                    "হালকা ও আরামদায়ক পোশাক পরুন।",
                    "সম্ভব হলে দিনের সবচেয়ে গরম সময়ে ভারী কাজ করবেন না।",
                    "অতিরিক্ত গরমে শিশু ও বয়স্কদের ঠান্ডা জায়গায় রাখুন।",
                    "বিভ্রান্তি, অজ্ঞান হওয়া বা খুব দুর্বল হয়ে গেলে চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "slips-falls",
                title: "পড়ে যাওয়া থেকে বাঁচা",
                description:
                    "পিছলে বা পড়ে গেলে গুরুতর আঘাত লাগতে পারে, বিশেষ করে শিশু ও বয়স্কদের।",
                tips: [
                    "মেঝে ও রাস্তা থেকে পানি, কাদা ও পড়ে থাকা জিনিস সরিয়ে রাখুন।",
                    "সিঁড়ি ও দরজার কাছে ভালো আলো রাখুন।",
                    "রাস্তায় কৃষির যন্ত্র বা সরঞ্জাম ফেলে রাখবেন না।",
                    "মজবুত মই ব্যবহার করুন এবং প্রয়োজনে কাউকে ধরে রাখতে বলুন।",
                    "ভেজা, কাদাযুক্ত বা অসমান মাটিতে সাবধানে হাঁটুন।",
                    "পিচ্ছিল বা অসমান পথে বয়স্ক ব্যক্তিকে সাহায্য করুন।"
                ]
            },

            {
                id: "emergency-contacts",
                title: "জরুরি নম্বর প্রস্তুত রাখুন",
                description:
                    "জরুরি সময়ে সঠিক ব্যক্তিকে দ্রুত ফোন করলে অনেক সময় বাঁচানো যায়।",
                tips: [
                    "গুরুত্বপূর্ণ জরুরি নম্বর ফোনে সেভ করে রাখুন।",
                    "যারা ফোন ব্যবহার করেন না তাদের জন্য কাগজে গুরুত্বপূর্ণ নম্বর লিখে রাখুন।",
                    "কাছের হাসপাতাল, স্বাস্থ্যকেন্দ্র ও পরিচিত স্বাস্থ্যকর্মীর নম্বর রাখুন।",
                    "জরুরি নম্বর কোথায় রাখা আছে তা পরিবারের সবাইকে জানান।",
                    "সম্ভব হলে ফোন চার্জ করে রাখুন।",
                    "কাছের স্বাস্থ্যকেন্দ্র বা হাসপাতাল যাওয়ার রাস্তা আগে থেকে জেনে রাখুন।"
                ]
            }
        ]
    }
};

export default safetyGuidance;