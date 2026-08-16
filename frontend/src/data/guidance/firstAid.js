const firstAidGuidance = {
    en: {
        title: "First Aid Awareness",
        description:
            "Learn simple first-aid steps that can help keep someone safe until professional medical help arrives.",
        notice:
            "First aid is meant to provide temporary help. It does not replace a doctor or hospital. Get professional medical help for serious injuries and emergencies.",
        steps: "What to do",

        topics: [
            {
                id: "bleeding",
                title: "Bleeding and Wounds",
                description:
                    "A cut or wound can cause anything from a small amount of bleeding to dangerous blood loss.",
                steps: [
                    "Make sure the area is safe before helping the injured person.",
                    "Use a clean cloth or gauze and press firmly on the bleeding area.",
                    "Keep pressing until the bleeding slows or help arrives.",
                    "If blood soaks through the cloth, place another clean cloth on top instead of removing the first one.",
                    "Get medical help quickly if the bleeding is heavy or does not stop."
                ]
            },

            {
                id: "minor-cuts",
                title: "Small Cuts and Scratches",
                description:
                    "Small cuts and scratches are common at home, on farms and during daily work.",
                steps: [
                    "Wash your hands before helping if possible.",
                    "Rinse the wound gently with clean running water.",
                    "Clean the area around the wound and remove visible dirt carefully.",
                    "Cover the wound with a clean bandage or cloth.",
                    "See a healthcare worker if the wound is deep, dirty or shows signs of infection."
                ]
            },

            {
                id: "burns",
                title: "Burns",
                description:
                    "Burns can happen from fire, hot water, steam, chemicals or electricity.",
                steps: [
                    "Move away from the source of the burn if it is safe.",
                    "Cool a thermal burn with clean, cool running water for about 20 minutes when possible.",
                    "Remove jewellery or tight items near the burn if they are not stuck to the skin.",
                    "Cover the burn loosely with a clean cloth or sterile dressing.",
                    "Do not put ice, toothpaste, oil, butter or mud on the burn.",
                    "Get medical help for large, deep, chemical or electrical burns."
                ]
            },

            {
                id: "choking",
                title: "Choking",
                description:
                    "Food or another object can block the airway and make breathing difficult.",
                steps: [
                    "Ask the person to cough if they can still breathe and cough.",
                    "If the person cannot breathe, speak or cough properly, get emergency help immediately.",
                    "Use the correct choking first-aid method for the person's age if you are trained.",
                    "If the person becomes unconscious, get emergency help and begin CPR if trained.",
                    "Do not blindly put your fingers inside the person's mouth."
                ]
            },

            {
                id: "cpr",
                title: "CPR and Not Breathing",
                description:
                    "CPR can help when a person is unconscious and not breathing normally.",
                steps: [
                    "Check that the area is safe before helping.",
                    "Check whether the person responds and is breathing normally.",
                    "Call emergency medical services or ask someone nearby to call.",
                    "If the person is not breathing normally, start CPR if you are trained.",
                    "Continue CPR until professional help arrives or the person starts breathing normally."
                ]
            },

            {
                id: "fracture",
                title: "Broken Bone",
                description:
                    "Falls, road accidents and strong injuries can break bones.",
                steps: [
                    "Keep the injured person calm and as still as possible.",
                    "Do not try to straighten a bent or broken body part.",
                    "Support the injured area without putting pressure on the broken bone.",
                    "If there is bleeding, control it with clean material when possible.",
                    "Get medical help as soon as possible."
                ]
            },

            {
                id: "sprain",
                title: "Sprain and Muscle Injury",
                description:
                    "A fall or sudden movement can hurt muscles, joints or ligaments.",
                steps: [
                    "Stop the activity and let the injured part rest.",
                    "Use a cold pack wrapped in cloth for a short period to help with swelling.",
                    "Keep the injured area raised when comfortable.",
                    "Do not massage a badly swollen or painful injury immediately.",
                    "Get medical help if there is severe pain, major swelling or difficulty using the limb."
                ]
            },

            {
                id: "nosebleed",
                title: "Nosebleed",
                description:
                    "Nosebleeds can happen because of dryness, minor injury, heat or other causes.",
                steps: [
                    "Sit the person upright and keep them calm.",
                    "Ask them to lean slightly forward.",
                    "Pinch the soft part of the nose gently for about 10 to 15 minutes.",
                    "Tell the person to breathe through their mouth.",
                    "Get medical help if the bleeding is heavy or does not stop."
                ]
            },

            {
                id: "fainting",
                title: "Fainting",
                description:
                    "A person may faint because of heat, weakness, dehydration, fear or illness.",
                steps: [
                    "Help the person lie down safely.",
                    "Check whether they are breathing normally.",
                    "Keep the area clear and allow fresh air.",
                    "Do not give food or water while the person is unconscious.",
                    "If they do not wake up quickly or have serious symptoms, get medical help."
                ]
            },

            {
                id: "seizure",
                title: "Seizure",
                description:
                    "During a seizure, a person may suddenly shake, become stiff or lose awareness.",
                steps: [
                    "Move sharp, hot or dangerous objects away from the person.",
                    "Place something soft under their head if possible.",
                    "Do not hold the person down or try to stop the shaking.",
                    "Do not put food, water, medicine or objects in their mouth.",
                    "After the seizure stops, place the person on their side if they are breathing.",
                    "Get medical help if it is their first seizure, lasts several minutes or happens repeatedly."
                ]
            },

            {
                id: "snake-bite",
                title: "Snake Bite",
                description:
                    "Some snake bites can be dangerous and need treatment at a hospital.",
                steps: [
                    "Move away from the snake and keep yourself safe.",
                    "Keep the person calm and as still as possible.",
                    "Keep the bitten arm or leg still.",
                    "Remove rings, watches or tight items before swelling becomes worse.",
                    "Take the person to a hospital as quickly as possible.",
                    "Do not cut the wound, suck the venom, apply ice or use a tight rope or tourniquet."
                ]
            },

            {
                id: "animal-bite",
                title: "Dog or Animal Bite",
                description:
                    "Animal bites can cause infection and may require treatment to prevent rabies.",
                steps: [
                    "Move away from the animal and stay somewhere safe.",
                    "Wash the wound well with soap and clean running water.",
                    "Cover the wound with a clean cloth.",
                    "Go to a healthcare centre or hospital as soon as possible.",
                    "Ask a healthcare worker about rabies vaccination and other treatment.",
                    "Do not wait for symptoms before getting medical advice."
                ]
            },

            {
                id: "insect-sting",
                title: "Insect Sting",
                description:
                    "Bee, wasp and other insect stings can cause pain, swelling or sometimes a serious allergic reaction.",
                steps: [
                    "Move away from the insects to a safe place.",
                    "Wash the area gently with clean water.",
                    "Use a cold cloth or cold pack wrapped in cloth to reduce swelling.",
                    "Watch for breathing difficulty, face swelling or severe dizziness.",
                    "Get emergency medical help immediately if a serious allergic reaction develops."
                ]
            },

            {
                id: "electric-shock",
                title: "Electric Shock",
                description:
                    "Electric shock can cause burns, unconsciousness, breathing problems or heart problems.",
                steps: [
                    "Do not touch the person while they are still connected to electricity.",
                    "Switch off the main power if it is safe to do so.",
                    "Call for emergency medical help.",
                    "After the person is safely away from the electricity, check their breathing.",
                    "Start CPR if they are not breathing and you are trained to do so.",
                    "Get medical help even if the person appears to feel better."
                ]
            },

            {
                id: "heat-exhaustion",
                title: "Heat Exhaustion",
                description:
                    "Working or staying outside in strong heat can cause heavy sweating, weakness and dizziness.",
                steps: [
                    "Move the person to a cool or shaded place.",
                    "Let them rest and loosen tight clothing.",
                    "Give small amounts of clean water or ORS if they are awake and able to drink.",
                    "Cool the person with a wet cloth or cool water.",
                    "Get medical help if the person becomes confused, faints or gets worse."
                ]
            },

            {
                id: "dehydration",
                title: "Dehydration",
                description:
                    "Diarrhoea, vomiting, fever, heavy sweating and heat can cause loss of water from the body.",
                steps: [
                    "Give small, frequent sips of clean water if the person can drink.",
                    "Give ORS according to the instructions on the packet.",
                    "Continue fluids while arranging medical help.",
                    "Keep the person in a cool and comfortable place.",
                    "Get medical help if there is severe weakness, very little urine, confusion or inability to drink."
                ]
            },

            {
                id: "drowning",
                title: "Drowning",
                description:
                    "Drowning can happen in ponds, rivers, wells, tanks and other water bodies.",
                steps: [
                    "Do not enter the water if you cannot rescue the person safely.",
                    "Call for emergency medical help.",
                    "Once the person is safely out of the water, check whether they are breathing.",
                    "Start CPR if the person is not breathing and you are trained.",
                    "Keep the person warm and get medical help even if they seem better."
                ]
            },

            {
                id: "eye-injury",
                title: "Eye Injury",
                description:
                    "Dust, small objects, chemicals or injuries can damage the eye.",
                steps: [
                    "Do not rub the injured eye.",
                    "If dust is present, gently rinse the eye with clean water.",
                    "If a chemical enters the eye, rinse continuously with clean running water and get medical help.",
                    "Do not try to remove an object that is stuck in the eye.",
                    "Cover or protect the eye gently and seek medical care for serious injuries."
                ]
            },

            {
                id: "foreign-object",
                title: "Object Stuck in the Body",
                description:
                    "Glass, metal, wood or other objects can become stuck in the skin after an injury.",
                steps: [
                    "Do not pull out a deeply stuck object.",
                    "Keep the object as still as possible.",
                    "Control bleeding around the object with clean material without pressing directly on the object.",
                    "Get medical help as soon as possible.",
                    "Keep the injured person calm and still."
                ]
            },

            {
                id: "poisoning",
                title: "Poisoning",
                description:
                    "Poisoning can happen after swallowing chemicals, medicines, pesticides or other harmful substances.",
                steps: [
                    "Move the person away from the harmful substance if it is safe.",
                    "Get medical help immediately.",
                    "Keep the packet, bottle or name of the substance if available.",
                    "Do not make the person vomit unless a healthcare professional tells you to.",
                    "Do not give milk, food or other home remedies unless advised by a healthcare professional."
                ]
            },

            {
                id: "shock",
                title: "Shock After Injury",
                description:
                    "Heavy bleeding, serious injury, burns or other emergencies can cause the body to go into shock.",
                steps: [
                    "Call for emergency medical help.",
                    "Lay the person down safely if there is no serious injury preventing it.",
                    "Keep the person warm with a clean blanket or cloth.",
                    "Do not give food or drink if they are seriously injured or may need emergency treatment.",
                    "Stay with the person and keep checking their breathing."
                ]
            }
        ]
    },

    hi: {
        title: "प्राथमिक उपचार जागरूकता",
        description:
            "डॉक्टर या चिकित्सा सहायता आने तक किसी घायल या बीमार व्यक्ति की मदद करने के आसान तरीके जानें।",
        notice:
            "प्राथमिक उपचार केवल तुरंत मदद के लिए है। यह डॉक्टर या अस्पताल का इलाज नहीं है। गंभीर चोट या आपात स्थिति में चिकित्सा सहायता जरूर लें।",
        steps: "क्या करें",

        topics: [
            {
                id: "bleeding",
                title: "खून बहना और घाव",
                description:
                    "घाव में थोड़ा खून भी आ सकता है और कभी-कभी बहुत ज्यादा खून भी बह सकता है।",
                steps: [
                    "मदद करने से पहले देखें कि जगह सुरक्षित है या नहीं।",
                    "साफ कपड़े या गॉज से घाव पर मजबूती से दबाव दें।",
                    "खून कम होने तक दबाव बनाए रखें।",
                    "कपड़ा खून से भीग जाए तो उसे हटाने के बजाय ऊपर से दूसरा साफ कपड़ा रखें।",
                    "खून बहुत ज्यादा हो या बंद न हो तो तुरंत चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "minor-cuts",
                title: "छोटे कट और खरोंच",
                description:
                    "घर, खेत या रोजमर्रा के काम में छोटे कट और खरोंच लगना आम बात है।",
                steps: [
                    "संभव हो तो मदद करने से पहले अपने हाथ साफ करें।",
                    "घाव को साफ बहते पानी से धीरे-धीरे धोएं।",
                    "घाव के आसपास की गंदगी को सावधानी से साफ करें।",
                    "घाव को साफ पट्टी या कपड़े से ढक दें।",
                    "घाव गहरा, बहुत गंदा हो या संक्रमण के लक्षण दिखें तो स्वास्थ्यकर्मी को दिखाएं।"
                ]
            },

            {
                id: "burns",
                title: "जलना",
                description:
                    "आग, गर्म पानी, भाप, रसायन या बिजली से जलने की चोट हो सकती है।",
                steps: [
                    "सुरक्षित होने पर व्यक्ति को जलने के स्रोत से दूर करें।",
                    "जहां संभव हो जले हिस्से पर लगभग 20 मिनट तक साफ ठंडा बहता पानी डालें।",
                    "त्वचा से चिपकी न हो तो पास की अंगूठी या तंग चीज हटा दें।",
                    "जले हिस्से को साफ कपड़े या पट्टी से हल्के से ढकें।",
                    "जले हुए हिस्से पर बर्फ, टूथपेस्ट, तेल, मक्खन या मिट्टी न लगाएं।",
                    "बड़े, गहरे, रासायनिक या बिजली से हुए जलने पर तुरंत डॉक्टर को दिखाएं।"
                ]
            },

            {
                id: "choking",
                title: "गले में खाना अटकना",
                description:
                    "खाना या कोई वस्तु सांस की नली में फंसने से दम घुट सकता है।",
                steps: [
                    "अगर व्यक्ति सांस ले और खांस सके तो उसे खांसने दें।",
                    "अगर वह सांस या बोल नहीं पा रहा है तो तुरंत आपातकालीन मदद लें।",
                    "प्रशिक्षण होने पर व्यक्ति की उम्र के अनुसार सही चोकिंग फर्स्ट एड दें।",
                    "व्यक्ति बेहोश हो जाए तो मदद बुलाएं और प्रशिक्षित होने पर CPR शुरू करें।",
                    "मुंह में उंगली डालकर वस्तु निकालने की कोशिश न करें।"
                ]
            },

            {
                id: "cpr",
                title: "CPR और सांस न चलना",
                description:
                    "जब व्यक्ति बेहोश हो और सामान्य रूप से सांस न ले रहा हो, CPR मदद कर सकता है।",
                steps: [
                    "सबसे पहले देखें कि आसपास की जगह सुरक्षित है।",
                    "जांचें कि व्यक्ति जवाब दे रहा है और सामान्य रूप से सांस ले रहा है या नहीं।",
                    "आपातकालीन चिकित्सा सहायता के लिए कॉल करें या किसी दूसरे व्यक्ति से करवाएं।",
                    "सांस सामान्य न होने पर प्रशिक्षित होने पर CPR शुरू करें।",
                    "मदद आने तक या व्यक्ति सामान्य रूप से सांस लेने तक सहायता जारी रखें।"
                ]
            },

            {
                id: "fracture",
                title: "हड्डी टूटना",
                description:
                    "गिरने, सड़क दुर्घटना या जोर की चोट से हड्डी टूट सकती है।",
                steps: [
                    "व्यक्ति को शांत और जितना हो सके स्थिर रखें।",
                    "टेढ़े या टूटे अंग को सीधा करने की कोशिश न करें।",
                    "चोट वाले हिस्से को बिना ज्यादा दबाव दिए सहारा दें।",
                    "खून बह रहा हो तो साफ कपड़े से उचित दबाव दें।",
                    "जितनी जल्दी हो सके चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "sprain",
                title: "मोच और मांसपेशियों की चोट",
                description:
                    "गिरने या अचानक मुड़ने से पैर, हाथ या जोड़ में मोच आ सकती है।",
                steps: [
                    "काम या खेल रोक दें और चोट वाले हिस्से को आराम दें।",
                    "सूजन कम करने के लिए कपड़े में लपेटकर ठंडी पट्टी थोड़ी देर लगाएं।",
                    "आरामदायक हो तो चोट वाले हिस्से को थोड़ा ऊंचा रखें।",
                    "बहुत दर्द या ज्यादा सूजन वाली चोट पर तुरंत मालिश न करें।",
                    "बहुत दर्द, ज्यादा सूजन या अंग का इस्तेमाल न कर पाने पर डॉक्टर को दिखाएं।"
                ]
            },

            {
                id: "nosebleed",
                title: "नाक से खून आना",
                description:
                    "गर्मी, सूखापन या हल्की चोट के कारण नाक से खून आ सकता है।",
                steps: [
                    "व्यक्ति को सीधा बैठाएं और शांत रखें।",
                    "उसे थोड़ा आगे की ओर झुकने दें।",
                    "नाक के नरम हिस्से को लगभग 10 से 15 मिनट तक हल्के दबाव से बंद रखें।",
                    "मुंह से सांस लेने को कहें।",
                    "खून बहुत ज्यादा हो या बंद न हो तो चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "fainting",
                title: "बेहोशी",
                description:
                    "गर्मी, कमजोरी, पानी की कमी, डर या बीमारी से व्यक्ति बेहोश हो सकता है।",
                steps: [
                    "व्यक्ति को सुरक्षित जगह पर लिटाएं।",
                    "जांचें कि वह सामान्य रूप से सांस ले रहा है या नहीं।",
                    "भीड़ हटाएं और हवा आने दें।",
                    "बेहोश व्यक्ति को खाना या पानी न दें।",
                    "जल्दी होश न आए या गंभीर लक्षण हों तो चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "seizure",
                title: "दौरा पड़ना",
                description:
                    "दौरे में व्यक्ति का शरीर कांप सकता है, अकड़ सकता है या होश जा सकता है।",
                steps: [
                    "आग, धारदार वस्तु और खतरनाक चीजें दूर करें।",
                    "संभव हो तो सिर के नीचे कुछ नरम रखें।",
                    "व्यक्ति को पकड़कर झटके रोकने की कोशिश न करें।",
                    "मुंह में पानी, दवा, खाना या कोई वस्तु न डालें।",
                    "दौरा रुकने और सांस चलने के बाद व्यक्ति को करवट पर रखें।",
                    "पहली बार दौरा पड़ा हो या कई मिनट तक चले तो तुरंत चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "snake-bite",
                title: "सांप का काटना",
                description:
                    "कुछ सांपों के काटने से जहर फैल सकता है और अस्पताल में इलाज जरूरी हो सकता है।",
                steps: [
                    "सांप से दूर सुरक्षित जगह पर जाएं।",
                    "व्यक्ति को शांत रखें और कम से कम हिलाएं।",
                    "काटे हुए हाथ या पैर को स्थिर रखें।",
                    "सूजन बढ़ने से पहले अंगूठी, घड़ी या तंग चीजें हटा दें।",
                    "जितनी जल्दी हो सके अस्पताल ले जाएं।",
                    "घाव न काटें, जहर न चूसें, बर्फ न लगाएं और बहुत कसकर पट्टी न बांधें।"
                ]
            },

            {
                id: "animal-bite",
                title: "कुत्ते या जानवर का काटना",
                description:
                    "जानवर के काटने से संक्रमण हो सकता है और रेबीज से बचाव के लिए इलाज जरूरी हो सकता है।",
                steps: [
                    "जानवर से दूर सुरक्षित जगह पर जाएं।",
                    "घाव को साबुन और साफ बहते पानी से अच्छी तरह धोएं।",
                    "घाव को साफ कपड़े से ढकें।",
                    "जितनी जल्दी हो सके स्वास्थ्य केंद्र या अस्पताल जाएं।",
                    "रेबीज के टीके और अन्य इलाज के बारे में स्वास्थ्यकर्मी से पूछें।",
                    "लक्षण आने का इंतजार न करें।"
                ]
            },

            {
                id: "insect-sting",
                title: "कीड़े का डंक",
                description:
                    "मधुमक्खी, ततैया या अन्य कीड़े के डंक से दर्द और सूजन हो सकती है।",
                steps: [
                    "कीड़े से दूर सुरक्षित जगह पर जाएं।",
                    "डंक वाली जगह को साफ पानी से धोएं।",
                    "सूजन कम करने के लिए कपड़े में लपेटकर ठंडी पट्टी लगाएं।",
                    "सांस लेने में परेशानी, चेहरे पर सूजन या तेज चक्कर पर ध्यान दें।",
                    "गंभीर एलर्जी के लक्षण हों तो तुरंत चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "electric-shock",
                title: "बिजली का झटका",
                description:
                    "बिजली का झटका जलने, बेहोशी, सांस की परेशानी या दिल की समस्या पैदा कर सकता है।",
                steps: [
                    "बिजली का संपर्क रहते व्यक्ति को हाथ न लगाएं।",
                    "सुरक्षित होने पर मुख्य बिजली सप्लाई बंद करें।",
                    "तुरंत चिकित्सा सहायता के लिए संपर्क करें।",
                    "बिजली से अलग करने के बाद सांस की जांच करें।",
                    "सांस न चलने पर प्रशिक्षित होने पर CPR शुरू करें।",
                    "व्यक्ति ठीक लगे तब भी डॉक्टर से जांच करवाएं।"
                ]
            },

            {
                id: "heat-exhaustion",
                title: "गर्मी से कमजोरी",
                description:
                    "तेज गर्मी में काम करने से बहुत पसीना, कमजोरी और चक्कर आ सकते हैं।",
                steps: [
                    "व्यक्ति को ठंडी या छायादार जगह पर ले जाएं।",
                    "उसे आराम करने दें और तंग कपड़े ढीले करें।",
                    "होश में हो और पी सकता हो तो थोड़ी-थोड़ी मात्रा में पानी या ORS दें।",
                    "गीले कपड़े या ठंडे पानी से शरीर ठंडा करें।",
                    "भ्रम, बेहोशी या हालत बिगड़ने पर तुरंत चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "dehydration",
                title: "पानी की कमी",
                description:
                    "दस्त, उल्टी, बुखार, ज्यादा पसीना और गर्मी से शरीर में पानी की कमी हो सकती है।",
                steps: [
                    "व्यक्ति पी सकता हो तो थोड़ी-थोड़ी मात्रा में साफ पानी दें।",
                    "पैकेट पर दिए निर्देश के अनुसार ORS बनाकर दें।",
                    "चिकित्सा सहायता की व्यवस्था करते हुए तरल देते रहें।",
                    "व्यक्ति को ठंडी और आरामदायक जगह पर रखें।",
                    "बहुत कमजोरी, बहुत कम पेशाब, भ्रम या पानी न पी पाने पर तुरंत मदद लें।"
                ]
            },

            {
                id: "drowning",
                title: "पानी में डूबना",
                description:
                    "तालाब, नदी, कुएं, टंकी या अन्य पानी की जगहों में डूबने का खतरा हो सकता है।",
                steps: [
                    "अगर सुरक्षित बचाव करना नहीं आता तो पानी में खुद न उतरें।",
                    "तुरंत आपातकालीन चिकित्सा सहायता लें।",
                    "व्यक्ति को सुरक्षित बाहर निकालने के बाद सांस की जांच करें।",
                    "सांस न चलने पर प्रशिक्षित होने पर CPR शुरू करें।",
                    "व्यक्ति को गर्म रखें और डॉक्टर से जांच करवाएं।"
                ]
            },

            {
                id: "eye-injury",
                title: "आंख में चोट",
                description:
                    "धूल, छोटा कण, रसायन या चोट आंख को नुकसान पहुंचा सकती है।",
                steps: [
                    "आंख को रगड़ें नहीं।",
                    "धूल गई हो तो साफ पानी से धीरे-धीरे आंख धोएं।",
                    "रसायन आंख में चला जाए तो लगातार साफ बहते पानी से आंख धोते रहें और चिकित्सा सहायता लें।",
                    "आंख में फंसी वस्तु को खुद निकालने की कोशिश न करें।",
                    "गंभीर चोट में आंख को हल्के से सुरक्षित करके डॉक्टर को दिखाएं।"
                ]
            },

            {
                id: "foreign-object",
                title: "शरीर में वस्तु फंसना",
                description:
                    "कांच, लोहे, लकड़ी या दूसरी चीजें चोट लगने पर शरीर में फंस सकती हैं।",
                steps: [
                    "गहराई से फंसी वस्तु को बाहर निकालने की कोशिश न करें।",
                    "वस्तु को जितना हो सके स्थिर रखें।",
                    "वस्तु के आसपास साफ कपड़े से खून रोकने की कोशिश करें।",
                    "जितनी जल्दी हो सके चिकित्सा सहायता लें।",
                    "घायल व्यक्ति को शांत और स्थिर रखें।"
                ]
            },

            {
                id: "poisoning",
                title: "जहर या जहरीली चीज",
                description:
                    "रसायन, दवा, कीटनाशक या दूसरी जहरीली चीज खाने से विषाक्तता हो सकती है।",
                steps: [
                    "सुरक्षित होने पर व्यक्ति को जहरीली चीज से दूर करें।",
                    "तुरंत चिकित्सा सहायता लें।",
                    "जहर की बोतल, पैकेट या नाम उपलब्ध हो तो संभालकर रखें।",
                    "स्वास्थ्यकर्मी की सलाह के बिना उल्टी कराने की कोशिश न करें।",
                    "डॉक्टर की सलाह के बिना दूध, खाना या घरेलू नुस्खा न दें।"
                ]
            },

            {
                id: "shock",
                title: "चोट के बाद शॉक",
                description:
                    "बहुत ज्यादा खून बहने, गंभीर चोट या जलने से शरीर शॉक में जा सकता है।",
                steps: [
                    "तुरंत चिकित्सा सहायता के लिए संपर्क करें।",
                    "अगर कोई गंभीर चोट रोक नहीं रही है तो व्यक्ति को सुरक्षित जगह पर लिटाएं।",
                    "साफ कंबल या कपड़े से व्यक्ति को गर्म रखें।",
                    "गंभीर चोट में खाना या पानी न दें।",
                    "व्यक्ति के पास रहें और सांस पर नजर रखें।"
                ]
            }
        ]
    },

    bn: {
        title: "প্রাথমিক চিকিৎসা সম্পর্কে সচেতনতা",
        description:
            "ডাক্তার বা চিকিৎসা সহায়তা আসার আগে আহত বা অসুস্থ ব্যক্তিকে সাহায্য করার সহজ উপায় জানুন।",
        notice:
            "প্রাথমিক চিকিৎসা শুধুমাত্র তাৎক্ষণিক সাহায্যের জন্য। এটি ডাক্তার বা হাসপাতালের চিকিৎসার বিকল্প নয়। গুরুতর আঘাত বা জরুরি অবস্থায় অবশ্যই চিকিৎসা সহায়তা নিন।",
        steps: "কী করবেন",

        topics: [
            {
                id: "bleeding",
                title: "রক্তপাত ও ক্ষত",
                description:
                    "ক্ষত থেকে অল্প রক্তপাত হতে পারে, আবার কখনও অনেক বেশি রক্তপাতও হতে পারে।",
                steps: [
                    "সাহায্য করার আগে জায়গাটি নিরাপদ কি না দেখুন।",
                    "পরিষ্কার কাপড় বা গজ দিয়ে ক্ষতের উপর শক্তভাবে চাপ দিন।",
                    "রক্তপাত কমা পর্যন্ত চাপ দিয়ে রাখুন।",
                    "কাপড় ভিজে গেলে প্রথম কাপড়টি না খুলে তার উপর আরেকটি পরিষ্কার কাপড় দিন।",
                    "রক্তপাত বেশি হলে বা বন্ধ না হলে দ্রুত চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "minor-cuts",
                title: "ছোট কাটা ও আঁচড়",
                description:
                    "বাড়ি, মাঠ বা দৈনন্দিন কাজের সময় ছোট কাটা বা আঁচড় লাগা সাধারণ ঘটনা।",
                steps: [
                    "সম্ভব হলে সাহায্য করার আগে হাত পরিষ্কার করুন।",
                    "পরিষ্কার প্রবাহিত পানি দিয়ে ক্ষতটি ধীরে ধীরে ধুয়ে নিন।",
                    "ক্ষতের চারপাশের ময়লা সাবধানে পরিষ্কার করুন।",
                    "পরিষ্কার ব্যান্ডেজ বা কাপড় দিয়ে ক্ষত ঢেকে দিন।",
                    "ক্ষত গভীর, খুব নোংরা বা সংক্রমণের লক্ষণ দেখা দিলে স্বাস্থ্যকর্মীর কাছে যান।"
                ]
            },

            {
                id: "burns",
                title: "পোড়া",
                description:
                    "আগুন, গরম পানি, বাষ্প, রাসায়নিক বা বিদ্যুৎ থেকে পোড়ার আঘাত হতে পারে।",
                steps: [
                    "নিরাপদ হলে ব্যক্তিকে আগুন বা তাপের উৎস থেকে দূরে সরিয়ে নিন।",
                    "সম্ভব হলে প্রায় ২০ মিনিট পরিষ্কার ঠান্ডা প্রবাহিত পানি দিয়ে পোড়া অংশ ঠান্ডা করুন।",
                    "ত্বকের সঙ্গে আটকে না থাকলে কাছের আংটি বা শক্ত জিনিস খুলে দিন।",
                    "পরিষ্কার কাপড় বা ড্রেসিং দিয়ে পোড়া অংশ আলতোভাবে ঢেকে দিন।",
                    "পোড়া জায়গায় বরফ, টুথপেস্ট, তেল, মাখন বা মাটি লাগাবেন না।",
                    "বড়, গভীর, রাসায়নিক বা বিদ্যুৎজনিত পোড়ায় দ্রুত চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "choking",
                title: "গলায় খাবার আটকে যাওয়া",
                description:
                    "খাবার বা কোনো বস্তু শ্বাসনালীতে আটকে গেলে দম বন্ধ হতে পারে।",
                steps: [
                    "ব্যক্তি শ্বাস নিতে ও কাশতে পারলে তাকে কাশতে দিন।",
                    "শ্বাস বা কথা বলতে না পারলে অবিলম্বে জরুরি সাহায্য নিন।",
                    "প্রশিক্ষণ থাকলে ব্যক্তির বয়স অনুযায়ী সঠিক ফার্স্ট এইড দিন।",
                    "ব্যক্তি অজ্ঞান হলে সাহায্য ডাকুন এবং প্রশিক্ষণ থাকলে CPR শুরু করুন।",
                    "মুখের ভিতরে আঙুল ঢুকিয়ে বস্তু বের করার চেষ্টা করবেন না।"
                ]
            },

            {
                id: "cpr",
                title: "CPR ও শ্বাস না চলা",
                description:
                    "কেউ অজ্ঞান এবং স্বাভাবিকভাবে শ্বাস না নিলে CPR জীবন বাঁচাতে সাহায্য করতে পারে।",
                steps: [
                    "প্রথমে জায়গাটি নিরাপদ কি না দেখুন।",
                    "ব্যক্তি সাড়া দিচ্ছেন এবং স্বাভাবিকভাবে শ্বাস নিচ্ছেন কি না দেখুন।",
                    "জরুরি চিকিৎসা সহায়তার জন্য ফোন করুন বা অন্য কাউকে ফোন করতে বলুন।",
                    "স্বাভাবিকভাবে শ্বাস না নিলে প্রশিক্ষণ থাকলে CPR শুরু করুন।",
                    "চিকিৎসা সহায়তা আসা পর্যন্ত বা ব্যক্তি স্বাভাবিকভাবে শ্বাস নেওয়া শুরু করা পর্যন্ত সাহায্য চালিয়ে যান।"
                ]
            },

            {
                id: "fracture",
                title: "হাড় ভেঙে যাওয়া",
                description:
                    "পড়ে যাওয়া, রাস্তার দুর্ঘটনা বা জোরে আঘাতের কারণে হাড় ভেঙে যেতে পারে।",
                steps: [
                    "ব্যক্তিকে শান্ত ও যতটা সম্ভব স্থির রাখুন।",
                    "বেঁকে যাওয়া বা ভাঙা অঙ্গ সোজা করার চেষ্টা করবেন না।",
                    "আহত অংশে বেশি চাপ না দিয়ে সেটিকে সমর্থন দিন।",
                    "রক্তপাত হলে পরিষ্কার কাপড় দিয়ে উপযুক্তভাবে চাপ দিন।",
                    "যত দ্রুত সম্ভব চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "sprain",
                title: "মচকানো ও পেশির আঘাত",
                description:
                    "পড়ে যাওয়া বা হঠাৎ মোচড় লাগলে হাত, পা বা জয়েন্টে মচকাতে পারে।",
                steps: [
                    "কাজ বা খেলা বন্ধ করে আহত অংশকে বিশ্রাম দিন।",
                    "ফোলা কমাতে কাপড়ে মোড়ানো ঠান্ডা প্যাক কিছুক্ষণ ব্যবহার করুন।",
                    "আরামদায়ক হলে আহত অংশটি একটু উঁচু করে রাখুন।",
                    "খুব ব্যথা বা বেশি ফোলা থাকলে সঙ্গে সঙ্গে মালিশ করবেন না।",
                    "তীব্র ব্যথা, বেশি ফোলা বা অঙ্গ ব্যবহার করতে না পারলে ডাক্তার দেখান।"
                ]
            },

            {
                id: "nosebleed",
                title: "নাক দিয়ে রক্ত পড়া",
                description:
                    "গরম, শুষ্কতা বা সামান্য আঘাতের কারণে নাক দিয়ে রক্ত পড়তে পারে।",
                steps: [
                    "ব্যক্তিকে সোজা বসিয়ে শান্ত রাখুন।",
                    "তাকে সামান্য সামনে ঝুঁকতে বলুন।",
                    "নাকের নরম অংশ প্রায় ১০ থেকে ১৫ মিনিট হালকা চাপ দিয়ে ধরে রাখুন।",
                    "মুখ দিয়ে শ্বাস নিতে বলুন।",
                    "রক্তপাত বেশি হলে বা বন্ধ না হলে চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "fainting",
                title: "অজ্ঞান হয়ে যাওয়া",
                description:
                    "গরম, দুর্বলতা, পানিশূন্যতা, ভয় বা অসুস্থতার কারণে কেউ অজ্ঞান হতে পারেন।",
                steps: [
                    "ব্যক্তিকে নিরাপদ জায়গায় শুইয়ে দিন।",
                    "তিনি স্বাভাবিকভাবে শ্বাস নিচ্ছেন কি না দেখুন।",
                    "ভিড় সরিয়ে বাতাস চলাচলের ব্যবস্থা করুন।",
                    "অজ্ঞান ব্যক্তিকে খাবার বা পানি দেবেন না।",
                    "দ্রুত জ্ঞান না ফিরলে বা গুরুতর লক্ষণ থাকলে চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "seizure",
                title: "খিঁচুনি",
                description:
                    "খিঁচুনির সময় শরীর কাঁপতে, শক্ত হয়ে যেতে বা জ্ঞান চলে যেতে পারে।",
                steps: [
                    "আগুন, ধারালো জিনিস ও বিপজ্জনক জিনিস দূরে সরিয়ে দিন।",
                    "সম্ভব হলে মাথার নিচে নরম কিছু রাখুন।",
                    "ব্যক্তিকে চেপে ধরে খিঁচুনি বন্ধ করার চেষ্টা করবেন না।",
                    "মুখের ভিতরে পানি, ওষুধ, খাবার বা কোনো জিনিস দেবেন না।",
                    "খিঁচুনি থামার পর শ্বাস চললে ব্যক্তিকে পাশ ফিরিয়ে রাখুন।",
                    "প্রথমবার খিঁচুনি হলে বা কয়েক মিনিট ধরে চললে দ্রুত চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "snake-bite",
                title: "সাপের কামড়",
                description:
                    "কিছু সাপের কামড়ে বিষ ছড়িয়ে পড়তে পারে এবং হাসপাতালে চিকিৎসা প্রয়োজন হতে পারে।",
                steps: [
                    "সাপ থেকে দূরে নিরাপদ জায়গায় যান।",
                    "ব্যক্তিকে শান্ত রাখুন এবং যতটা সম্ভব কম নড়াচড়া করান।",
                    "কামড়ানো হাত বা পা স্থির রাখুন।",
                    "ফোলা বাড়ার আগে আংটি, ঘড়ি বা শক্ত জিনিস খুলে দিন।",
                    "যত দ্রুত সম্ভব হাসপাতালে নিয়ে যান।",
                    "ক্ষত কাটবেন না, বিষ চুষবেন না, বরফ লাগাবেন না এবং খুব শক্ত করে বাঁধবেন না।"
                ]
            },

            {
                id: "animal-bite",
                title: "কুকুর বা অন্য প্রাণীর কামড়",
                description:
                    "প্রাণীর কামড়ে সংক্রমণ হতে পারে এবং জলাতঙ্ক প্রতিরোধের জন্য চিকিৎসা দরকার হতে পারে।",
                steps: [
                    "প্রাণীটি থেকে দূরে নিরাপদ জায়গায় যান।",
                    "সাবান ও পরিষ্কার প্রবাহিত পানি দিয়ে ক্ষত ভালোভাবে ধুয়ে নিন।",
                    "পরিষ্কার কাপড় দিয়ে ক্ষত ঢেকে দিন।",
                    "যত দ্রুত সম্ভব স্বাস্থ্যকেন্দ্র বা হাসপাতালে যান।",
                    "জলাতঙ্কের টিকা ও অন্য চিকিৎসা সম্পর্কে স্বাস্থ্যকর্মীর পরামর্শ নিন।",
                    "লক্ষণ দেখা দেওয়ার অপেক্ষা করবেন না।"
                ]
            },

            {
                id: "insect-sting",
                title: "পোকামাকড়ের কামড় বা হুল",
                description:
                    "মৌমাছি, বোলতা বা অন্য পোকামাকড়ের হুলে ব্যথা ও ফোলা হতে পারে।",
                steps: [
                    "পোকামাকড় থেকে দূরে নিরাপদ জায়গায় যান।",
                    "জায়গাটি পরিষ্কার পানি দিয়ে ধুয়ে নিন।",
                    "ফোলা কমাতে কাপড়ে মোড়ানো ঠান্ডা প্যাক ব্যবহার করুন।",
                    "শ্বাসকষ্ট, মুখ ফুলে যাওয়া বা তীব্র মাথা ঘোরার লক্ষণ দেখুন।",
                    "গুরুতর অ্যালার্জির লক্ষণ হলে অবিলম্বে চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "electric-shock",
                title: "বিদ্যুৎস্পৃষ্ট হওয়া",
                description:
                    "বিদ্যুৎস্পৃষ্ট হলে পোড়া, অজ্ঞান হওয়া, শ্বাসকষ্ট বা হৃদযন্ত্রের সমস্যা হতে পারে।",
                steps: [
                    "বিদ্যুতের সংযোগ থাকা অবস্থায় ব্যক্তিকে স্পর্শ করবেন না।",
                    "নিরাপদ হলে মূল বিদ্যুৎ সংযোগ বন্ধ করুন।",
                    "অবিলম্বে চিকিৎসা সহায়তার জন্য ফোন করুন।",
                    "বিদ্যুৎ থেকে আলাদা করার পর শ্বাস পরীক্ষা করুন।",
                    "শ্বাস না থাকলে প্রশিক্ষণ থাকলে CPR শুরু করুন।",
                    "ব্যক্তি ভালো মনে হলেও চিকিৎসকের কাছে নিয়ে যান।"
                ]
            },

            {
                id: "heat-exhaustion",
                title: "গরমে দুর্বল হয়ে যাওয়া",
                description:
                    "তীব্র গরমে কাজ করলে বেশি ঘাম, দুর্বলতা ও মাথা ঘোরা হতে পারে।",
                steps: [
                    "ব্যক্তিকে ঠান্ডা বা ছায়াযুক্ত জায়গায় নিয়ে যান।",
                    "বিশ্রাম নিতে দিন এবং শক্ত পোশাক ঢিলে করুন।",
                    "জ্ঞান থাকলে এবং পান করতে পারলে অল্প অল্প করে পানি বা ORS দিন।",
                    "ভেজা কাপড় বা ঠান্ডা পানি দিয়ে শরীর ঠান্ডা করুন।",
                    "বিভ্রান্তি, অজ্ঞান হওয়া বা অবস্থা খারাপ হলে দ্রুত চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "dehydration",
                title: "পানিশূন্যতা",
                description:
                    "ডায়রিয়া, বমি, জ্বর, অতিরিক্ত ঘাম এবং গরমে শরীরে পানি কমে যেতে পারে।",
                steps: [
                    "ব্যক্তি পান করতে পারলে অল্প অল্প করে পরিষ্কার পানি দিন।",
                    "প্যাকেটের নির্দেশ অনুযায়ী ORS তৈরি করে দিন।",
                    "চিকিৎসা সহায়তার ব্যবস্থা করার সময় তরল দিতে থাকুন।",
                    "ব্যক্তিকে ঠান্ডা ও আরামদায়ক জায়গায় রাখুন।",
                    "অতিরিক্ত দুর্বলতা, খুব কম প্রস্রাব, বিভ্রান্তি বা পানি পান করতে না পারলে দ্রুত চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "drowning",
                title: "পানিতে ডুবে যাওয়া",
                description:
                    "পুকুর, নদী, কুয়ো, ট্যাঙ্ক বা অন্য জলাশয়ে ডুবে যাওয়ার ঝুঁকি থাকে।",
                steps: [
                    "নিরাপদে উদ্ধার করতে না পারলে নিজে পানিতে নামবেন না।",
                    "অবিলম্বে জরুরি চিকিৎসা সহায়তা নিন।",
                    "নিরাপদে পানি থেকে তোলার পর শ্বাস পরীক্ষা করুন।",
                    "শ্বাস না থাকলে প্রশিক্ষণ থাকলে CPR শুরু করুন।",
                    "ব্যক্তিকে গরম রাখুন এবং চিকিৎসকের কাছে নিয়ে যান।"
                ]
            },

            {
                id: "eye-injury",
                title: "চোখে আঘাত",
                description:
                    "ধুলো, ছোট কণা, রাসায়নিক বা আঘাতে চোখ ক্ষতিগ্রস্ত হতে পারে।",
                steps: [
                    "চোখ ঘষবেন না।",
                    "ধুলো ঢুকলে পরিষ্কার পানি দিয়ে ধীরে ধীরে চোখ ধুয়ে নিন।",
                    "রাসায়নিক চোখে গেলে পরিষ্কার প্রবাহিত পানি দিয়ে চোখ ধুতে থাকুন এবং চিকিৎসা সহায়তা নিন।",
                    "চোখে আটকে থাকা কোনো বস্তু নিজে বের করার চেষ্টা করবেন না।",
                    "গুরুতর আঘাতে চোখটি হালকা করে সুরক্ষিত রাখুন এবং ডাক্তার দেখান।"
                ]
            },

            {
                id: "foreign-object",
                title: "শরীরে কোনো বস্তু আটকে যাওয়া",
                description:
                    "কাচ, লোহা, কাঠ বা অন্য কোনো বস্তু আঘাতের পরে শরীরে আটকে যেতে পারে।",
                steps: [
                    "গভীরভাবে আটকে থাকা বস্তু টেনে বের করার চেষ্টা করবেন না।",
                    "বস্তুটিকে যতটা সম্ভব স্থির রাখুন।",
                    "বস্তুর চারপাশে পরিষ্কার কাপড় দিয়ে রক্তপাত কমানোর চেষ্টা করুন।",
                    "যত দ্রুত সম্ভব চিকিৎসা সহায়তা নিন।",
                    "আহত ব্যক্তিকে শান্ত ও স্থির রাখুন।"
                ]
            },

            {
                id: "poisoning",
                title: "বিষক্রিয়া",
                description:
                    "রাসায়নিক, ওষুধ, কীটনাশক বা অন্য বিষাক্ত জিনিস খেলে বিষক্রিয়া হতে পারে।",
                steps: [
                    "নিরাপদ হলে ব্যক্তিকে বিষাক্ত জিনিস থেকে দূরে সরিয়ে নিন।",
                    "অবিলম্বে চিকিৎসা সহায়তা নিন।",
                    "বিষের বোতল, প্যাকেট বা নাম থাকলে সঙ্গে রাখুন।",
                    "স্বাস্থ্যকর্মীর পরামর্শ ছাড়া বমি করানোর চেষ্টা করবেন না।",
                    "ডাক্তারের পরামর্শ ছাড়া দুধ, খাবার বা ঘরোয়া কোনো উপায় ব্যবহার করবেন না।"
                ]
            },

            {
                id: "shock",
                title: "আঘাতের পরে শক",
                description:
                    "অতিরিক্ত রক্তপাত, গুরুতর আঘাত বা পোড়ার কারণে শরীর শকের মধ্যে যেতে পারে।",
                steps: [
                    "অবিলম্বে চিকিৎসা সহায়তার জন্য ফোন করুন।",
                    "গুরুতর আঘাতের কারণে বাধা না থাকলে ব্যক্তিকে নিরাপদভাবে শুইয়ে দিন।",
                    "পরিষ্কার কম্বল বা কাপড় দিয়ে ব্যক্তিকে উষ্ণ রাখুন।",
                    "গুরুতর আঘাত থাকলে খাবার বা পানি দেবেন না।",
                    "ব্যক্তির পাশে থাকুন এবং শ্বাসের দিকে নজর রাখুন।"
                ]
            }
        ]
    }
};

export default firstAidGuidance;