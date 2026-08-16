const medicalGuidance = {
    en: {
        title: "Medical Emergency Awareness",
        description:
            "Learn to recognize common medical emergencies and what you can do immediately while waiting for medical help.",
        whatToDo: "What to do",

        topics: [
            {
                id: "heart-attack",
                title: "Heart Attack",
                description:
                    "A heart attack can happen when blood flow to the heart becomes blocked.",
                warning:
                    "Strong or lasting chest pain, pressure, sweating or breathing trouble needs urgent medical help.",
                actions: [
                    "Get emergency medical help immediately.",
                    "Keep the person calm and let them rest in a comfortable position.",
                    "Do not leave the person alone.",
                    "Do not make the person walk or do heavy work.",
                    "Follow the instructions given by medical professionals."
                ]
            },

            {
                id: "stroke",
                title: "Stroke",
                description:
                    "A stroke can suddenly affect a person's face, hand, leg, speech or vision.",
                warning:
                    "Sudden face drooping, weakness in one arm or difficulty speaking is an emergency.",
                actions: [
                    "Get emergency medical help immediately.",
                    "Note the time when the symptoms first started.",
                    "Keep the person safe and resting.",
                    "Do not give food, water or medicine if the person has trouble swallowing.",
                    "Take the person to a hospital as quickly as possible."
                ]
            },

            {
                id: "severe-bleeding",
                title: "Severe Bleeding",
                description:
                    "Heavy bleeding can become dangerous very quickly.",
                warning:
                    "Bleeding that does not stop or is flowing heavily needs immediate medical help.",
                actions: [
                    "Get emergency medical help immediately.",
                    "Press firmly on the bleeding area with clean cloth or gauze.",
                    "Keep pressure on the wound until help arrives.",
                    "Keep the person lying or sitting safely if they feel weak.",
                    "Do not remove a deeply stuck object from the wound."
                ]
            },

            {
                id: "choking",
                title: "Choking",
                description:
                    "Choking can happen when food or another object blocks a person's airway.",
                warning:
                    "If the person cannot breathe, speak or cough properly, treat it as an emergency.",
                actions: [
                    "Ask the person to cough if they can still breathe and cough.",
                    "Get emergency medical help if the blockage does not clear.",
                    "If the person cannot breathe, use appropriate choking first aid if you are trained.",
                    "If the person becomes unconscious, begin CPR if trained and get emergency help.",
                    "Do not blindly put your fingers inside the person's mouth."
                ]
            },

            {
                id: "severe-burn",
                title: "Severe Burns",
                description:
                    "Burns can happen from fire, hot water, steam, chemicals or electricity.",
                warning:
                    "Large, deep or serious burns need urgent medical attention.",
                actions: [
                    "Move the person away from the source of the burn if it is safe.",
                    "Cool the burn with clean, cool running water for about 20 minutes when possible.",
                    "Remove tight jewellery or clothing near the burn if it is not stuck to the skin.",
                    "Cover the burn loosely with a clean cloth or sterile dressing.",
                    "Do not apply toothpaste, oil, butter or mud to the burn."
                ]
            },

            {
                id: "fracture-injury",
                title: "Fracture or Serious Injury",
                description:
                    "A fall, accident or strong hit can cause a broken bone or serious injury.",
                warning:
                    "Severe pain, unusual bending, swelling or inability to move a body part may indicate a serious injury.",
                actions: [
                    "Keep the injured person still and comfortable.",
                    "Do not try to straighten a bent or broken limb.",
                    "Support the injured area and avoid unnecessary movement.",
                    "Control any bleeding with clean cloth and gentle pressure when appropriate.",
                    "Get medical help as soon as possible."
                ]
            },

            {
                id: "fainting",
                title: "Fainting",
                description:
                    "A person may faint because of heat, dehydration, low blood pressure, illness or other problems.",
                warning:
                    "Fainting with chest pain, breathing trouble, severe injury or continued unconsciousness is an emergency.",
                actions: [
                    "Lay the person safely on their back if there is no serious injury.",
                    "Check whether the person is breathing normally.",
                    "Keep the area around them clear and provide fresh air.",
                    "Do not give food or water while the person is unconscious.",
                    "Get medical help if the person does not wake up quickly or has other serious symptoms."
                ]
            },

            {
                id: "seizure",
                title: "Seizure",
                description:
                    "A seizure can cause sudden shaking, stiffness or loss of awareness.",
                warning:
                    "A first seizure, a seizure lasting several minutes or repeated seizures needs urgent medical attention.",
                actions: [
                    "Keep the person away from fire, sharp objects and other dangers.",
                    "Place something soft under their head if possible.",
                    "Turn them gently onto their side after the shaking stops if they are breathing.",
                    "Do not hold the person down or try to stop the shaking.",
                    "Do not put food, water or objects inside their mouth."
                ]
            },

            {
                id: "poisoning",
                title: "Poisoning",
                description:
                    "Poisoning can happen after swallowing, breathing in or coming into contact with harmful substances.",
                warning:
                    "Vomiting, severe sleepiness, breathing problems, confusion or unconsciousness can be signs of serious poisoning.",
                actions: [
                    "Get emergency medical help immediately.",
                    "Move away from the harmful substance if it is safe.",
                    "Keep the container, label or name of the substance if available.",
                    "Do not make the person vomit unless a medical professional tells you to.",
                    "Do not give food, milk or other substances unless advised by a medical professional."
                ]
            },

            {
                id: "snake-bite",
                title: "Snake Bite",
                description:
                    "Some snake bites can cause serious poisoning and need quick medical treatment.",
                warning:
                    "Swelling, severe pain, weakness, vomiting, breathing trouble or unusual bleeding can be serious signs.",
                actions: [
                    "Get medical help and reach a hospital as quickly as possible.",
                    "Keep the person calm and as still as possible.",
                    "Keep the bitten arm or leg still and avoid unnecessary movement.",
                    "Remove rings, watches or tight items near the bite before swelling increases.",
                    "Do not cut the bite, suck the venom, apply ice or use a tight rope or tourniquet."
                ]
            },

            {
                id: "animal-bite",
                title: "Dog or Animal Bite",
                description:
                    "Animal bites can cause serious wounds and infections and may require vaccination.",
                warning:
                    "Any bite that breaks the skin should be medically checked, especially from an unknown or stray animal.",
                actions: [
                    "Move away from the animal and stay safe.",
                    "Wash the wound thoroughly with soap and running water.",
                    "Cover the wound with a clean cloth.",
                    "Get medical help as soon as possible.",
                    "Do not wait for symptoms before seeking advice about rabies vaccination."
                ]
            },

            {
                id: "severe-allergy",
                title: "Severe Allergic Reaction",
                description:
                    "A serious allergic reaction can happen after food, medicine, an insect sting or another trigger.",
                warning:
                    "Swelling of the face or throat, difficulty breathing, severe dizziness or collapse is an emergency.",
                actions: [
                    "Get emergency medical help immediately.",
                    "Help the person use their prescribed emergency allergy medicine if available.",
                    "Keep the person in a safe and comfortable position.",
                    "Do not give food or drink if they are having trouble breathing or swallowing.",
                    "Stay with the person until medical help arrives."
                ]
            },

            {
                id: "breathing-difficulty",
                title: "Breathing Difficulty",
                description:
                    "Breathing problems can happen because of asthma, infection, allergy, smoke or other emergencies.",
                warning:
                    "Severe difficulty breathing, blue lips or inability to speak normally needs urgent medical help.",
                actions: [
                    "Get emergency medical help immediately.",
                    "Help the person sit upright and stay calm.",
                    "Move them away from smoke, dust or other triggers if safe.",
                    "Help them use their prescribed inhaler or medicine if available.",
                    "Do not force the person to lie flat if breathing is difficult."
                ]
            },

            {
                id: "electric-shock",
                title: "Electric Shock",
                description:
                    "Electric shock can cause burns, breathing problems, unconsciousness or heart problems.",
                warning:
                    "Any serious electric shock should be medically checked, even if the person appears fine.",
                actions: [
                    "Do not touch the person while they are still connected to the electricity.",
                    "Switch off the power source if it is safe to do so.",
                    "Call for emergency medical help.",
                    "Check breathing after the person is safely away from the electrical source.",
                    "Start CPR if the person is not breathing and you are trained to do so."
                ]
            },

            {
                id: "heatstroke",
                title: "Heatstroke",
                description:
                    "Heatstroke can happen when the body becomes dangerously hot, especially during extreme heat.",
                warning:
                    "Very high body temperature, confusion, fainting or unusual behaviour is an emergency.",
                actions: [
                    "Get emergency medical help immediately.",
                    "Move the person to a cool or shaded place.",
                    "Remove unnecessary outer clothing.",
                    "Cool the person with cool wet cloths or cool water while waiting for help.",
                    "Do not give drinks if the person is confused or unconscious."
                ]
            },

            {
                id: "drowning",
                title: "Drowning",
                description:
                    "Drowning can happen in ponds, rivers, wells, tanks or other water bodies.",
                warning:
                    "A person who has been underwater and is not breathing normally needs immediate emergency help.",
                actions: [
                    "Do not enter the water unless you can rescue the person safely.",
                    "Get emergency medical help immediately.",
                    "Once safely out of the water, check breathing.",
                    "Start CPR if the person is not breathing and you are trained.",
                    "Keep the person warm and get medical evaluation even if they seem better."
                ]
            },

            {
                id: "severe-dehydration",
                title: "Severe Dehydration",
                description:
                    "Severe loss of water can happen because of diarrhoea, vomiting, fever, heavy sweating or extreme heat.",
                warning:
                    "Very little urine, extreme weakness, confusion, fainting or inability to drink needs urgent medical attention.",
                actions: [
                    "Give small, frequent sips of clean water or oral rehydration solution if the person is awake and able to swallow.",
                    "Use packaged ORS according to the instructions on the packet.",
                    "Continue giving fluids while arranging medical help.",
                    "Keep the person in a cool and comfortable place.",
                    "Get medical help quickly if the person becomes confused, very weak or unable to drink."
                ]
            }
        ]
    },

    hi: {
        title: "चिकित्सीय आपातकाल जागरूकता",
        description:
            "आम चिकित्सा आपात स्थितियों के संकेत पहचानें और डॉक्टर या मदद आने तक क्या करना है जानें।",
        whatToDo: "क्या करें",

        topics: [
            {
                id: "heart-attack",
                title: "हार्ट अटैक",
                description:
                    "जब हृदय तक खून का प्रवाह रुकने लगे तो हार्ट अटैक हो सकता है।",
                warning:
                    "तेज या लगातार सीने में दर्द, दबाव, पसीना या सांस लेने में परेशानी होने पर तुरंत मदद लें।",
                actions: [
                    "तुरंत आपातकालीन चिकित्सा सहायता लें।",
                    "व्यक्ति को शांत रखें और आराम करने दें।",
                    "व्यक्ति को अकेला न छोड़ें।",
                    "उसे चलने या भारी काम करने के लिए मजबूर न करें।",
                    "डॉक्टर या स्वास्थ्यकर्मी के निर्देशों का पालन करें।"
                ]
            },

            {
                id: "stroke",
                title: "स्ट्रोक",
                description:
                    "स्ट्रोक में अचानक चेहरे, हाथ, पैर, बोलने या देखने में परेशानी हो सकती है।",
                warning:
                    "अचानक चेहरा टेढ़ा होना, एक हाथ कमजोर होना या बोलने में परेशानी होना आपात स्थिति है।",
                actions: [
                    "तुरंत चिकित्सा सहायता लें।",
                    "लक्षण पहली बार कब शुरू हुए, उसका समय याद रखें।",
                    "व्यक्ति को सुरक्षित और आरामदायक रखें।",
                    "निगलने में परेशानी हो तो खाना, पानी या दवा न दें।",
                    "व्यक्ति को जल्द से जल्द अस्पताल पहुंचाएं।"
                ]
            },

            {
                id: "severe-bleeding",
                title: "बहुत ज्यादा खून बहना",
                description:
                    "बहुत ज्यादा खून बहने पर व्यक्ति की हालत जल्दी गंभीर हो सकती है।",
                warning:
                    "खून लगातार या बहुत तेजी से बह रहा हो और रुक नहीं रहा हो तो तुरंत मदद लें।",
                actions: [
                    "तुरंत चिकित्सा सहायता के लिए संपर्क करें।",
                    "साफ कपड़े या गॉज से घाव पर मजबूती से दबाव दें।",
                    "मदद आने तक घाव पर दबाव बनाए रखें।",
                    "कमजोरी महसूस होने पर व्यक्ति को सुरक्षित बैठाएं या लिटाएं।",
                    "घाव में गहराई से फंसी वस्तु को बाहर निकालने की कोशिश न करें।"
                ]
            },

            {
                id: "choking",
                title: "गले में खाना अटकना",
                description:
                    "खाना या कोई वस्तु सांस की नली में फंसने से व्यक्ति का दम घुट सकता है।",
                warning:
                    "यदि व्यक्ति सांस नहीं ले पा रहा, बोल नहीं पा रहा या ठीक से खांस नहीं पा रहा है, तो यह आपात स्थिति है।",
                actions: [
                    "अगर व्यक्ति सांस ले और खांस सके तो उसे खांसने दें।",
                    "रुकावट न हटे तो तुरंत चिकित्सा सहायता लें।",
                    "अगर व्यक्ति सांस नहीं ले पा रहा है तो प्रशिक्षित होने पर सही फर्स्ट एड दें।",
                    "व्यक्ति बेहोश हो जाए तो प्रशिक्षित होने पर CPR शुरू करें।",
                    "मुंह के अंदर उंगली डालकर वस्तु निकालने की कोशिश न करें।"
                ]
            },

            {
                id: "severe-burn",
                title: "गंभीर जलना",
                description:
                    "आग, गर्म पानी, भाप, रसायन या बिजली से गंभीर जलन हो सकती है।",
                warning:
                    "बड़े, गहरे या गंभीर जलने पर तुरंत चिकित्सा सहायता जरूरी है।",
                actions: [
                    "सुरक्षित होने पर व्यक्ति को जलने के स्रोत से दूर करें।",
                    "जहां संभव हो जले हुए हिस्से पर लगभग 20 मिनट तक साफ ठंडा बहता पानी डालें।",
                    "जले हिस्से के पास की अंगूठी या तंग चीज हटाएं, यदि वह त्वचा से चिपकी न हो।",
                    "जले हिस्से को साफ कपड़े या पट्टी से हल्के से ढकें।",
                    "जलने पर टूथपेस्ट, तेल, मक्खन या मिट्टी न लगाएं।"
                ]
            },

            {
                id: "fracture-injury",
                title: "हड्डी टूटना या गंभीर चोट",
                description:
                    "गिरने, दुर्घटना या तेज चोट से हड्डी टूट सकती है या गंभीर चोट लग सकती है।",
                warning:
                    "बहुत दर्द, असामान्य आकार, सूजन या अंग हिलाने में परेशानी गंभीर चोट का संकेत हो सकता है।",
                actions: [
                    "व्यक्ति को शांत और स्थिर रखें।",
                    "टेढ़े या टूटे हुए अंग को सीधा करने की कोशिश न करें।",
                    "चोट वाले हिस्से को सहारा दें और अनावश्यक हिलाने से बचें।",
                    "खून बह रहा हो तो उचित तरीके से साफ कपड़े से दबाव दें।",
                    "जितनी जल्दी हो सके चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "fainting",
                title: "बेहोशी",
                description:
                    "गर्मी, पानी की कमी, कमजोरी या किसी बीमारी के कारण व्यक्ति बेहोश हो सकता है।",
                warning:
                    "बेहोशी के साथ सीने में दर्द, सांस की परेशानी, गंभीर चोट या लंबे समय तक होश न आना आपात स्थिति है।",
                actions: [
                    "गंभीर चोट न होने पर व्यक्ति को सुरक्षित जगह पर लिटाएं।",
                    "जांचें कि व्यक्ति सामान्य रूप से सांस ले रहा है या नहीं।",
                    "आसपास की भीड़ हटाएं और हवा आने दें।",
                    "बेहोश व्यक्ति को खाना या पानी न दें।",
                    "जल्दी होश न आने पर चिकित्सा सहायता लें।"
                ]
            },

            {
                id: "seizure",
                title: "दौरा पड़ना",
                description:
                    "दौरे में व्यक्ति का शरीर अचानक कांप सकता है, अकड़ सकता है या होश जा सकता है।",
                warning:
                    "पहली बार दौरा पड़ना, कई मिनट तक दौरा चलना या बार-बार दौरा पड़ना गंभीर स्थिति हो सकती है।",
                actions: [
                    "व्यक्ति को आग, तेज वस्तुओं और खतरनाक जगहों से दूर रखें।",
                    "संभव हो तो सिर के नीचे कुछ नरम रखें।",
                    "दौरा रुकने के बाद सांस चल रही हो तो व्यक्ति को करवट पर रखें।",
                    "व्यक्ति को पकड़कर झटके रोकने की कोशिश न करें।",
                    "मुंह में पानी, खाना या कोई वस्तु न डालें।"
                ]
            },

            {
                id: "poisoning",
                title: "जहर या जहरीली चीज का असर",
                description:
                    "जहरीली चीज निगलने, सांस में जाने या शरीर पर लगने से विषाक्तता हो सकती है।",
                warning:
                    "उल्टी, बहुत ज्यादा नींद, सांस की परेशानी, भ्रम या बेहोशी गंभीर संकेत हो सकते हैं।",
                actions: [
                    "तुरंत चिकित्सा सहायता लें।",
                    "सुरक्षित होने पर व्यक्ति को जहरीली चीज से दूर करें।",
                    "यदि उपलब्ध हो तो दवा या रसायन का पैकेट डॉक्टर को दिखाने के लिए रखें।",
                    "डॉक्टर की सलाह के बिना उल्टी कराने की कोशिश न करें।",
                    "डॉक्टर की सलाह के बिना दूध या कोई अन्य चीज न दें।"
                ]
            },

            {
                id: "snake-bite",
                title: "सांप का काटना",
                description:
                    "कुछ सांपों के काटने से शरीर में जहर फैल सकता है और जल्दी इलाज जरूरी होता है।",
                warning:
                    "सूजन, तेज दर्द, कमजोरी, उल्टी, सांस लेने में परेशानी या असामान्य खून बहना गंभीर संकेत हो सकते हैं।",
                actions: [
                    "जितनी जल्दी हो सके अस्पताल ले जाएं।",
                    "व्यक्ति को शांत रखें और कम से कम हिलाएं।",
                    "काटे हुए हाथ या पैर को स्थिर रखें।",
                    "सूजन बढ़ने से पहले अंगूठी, घड़ी या तंग चीजें हटा दें।",
                    "घाव को काटें नहीं, जहर चूसें नहीं और बर्फ या बहुत कसकर पट्टी न लगाएं।"
                ]
            },

            {
                id: "animal-bite",
                title: "कुत्ते या जानवर का काटना",
                description:
                    "जानवर के काटने से घाव और संक्रमण हो सकता है और रेबीज से बचाव के लिए इलाज जरूरी हो सकता है।",
                warning:
                    "त्वचा टूटने वाला कोई भी जानवर का काटना, खासकर आवारा या अज्ञात जानवर का, डॉक्टर को दिखाना चाहिए।",
                actions: [
                    "जानवर से दूर सुरक्षित जगह पर जाएं।",
                    "घाव को साबुन और बहते पानी से अच्छी तरह धोएं।",
                    "घाव को साफ कपड़े से ढकें।",
                    "जितनी जल्दी हो सके डॉक्टर या अस्पताल जाएं।",
                    "रेबीज के लक्षण आने का इंतजार न करें।"
                ]
            },

            {
                id: "severe-allergy",
                title: "गंभीर एलर्जी",
                description:
                    "खाने, दवा, कीड़े के काटने या किसी अन्य कारण से गंभीर एलर्जी हो सकती है।",
                warning:
                    "चेहरे या गले में सूजन, सांस लेने में परेशानी, तेज चक्कर या बेहोशी आपात स्थिति है।",
                actions: [
                    "तुरंत आपातकालीन चिकित्सा सहायता लें।",
                    "यदि डॉक्टर ने कोई आपातकालीन एलर्जी की दवा दी है तो उसका उपयोग करने में मदद करें।",
                    "व्यक्ति को सुरक्षित और आरामदायक स्थिति में रखें।",
                    "सांस या निगलने में परेशानी हो तो खाना या पानी न दें।",
                    "मदद आने तक व्यक्ति के साथ रहें।"
                ]
            },

            {
                id: "breathing-difficulty",
                title: "सांस लेने में परेशानी",
                description:
                    "अस्थमा, संक्रमण, एलर्जी, धुआं या अन्य कारणों से सांस लेने में परेशानी हो सकती है।",
                warning:
                    "बहुत ज्यादा सांस फूलना, होंठ नीले पड़ना या ठीक से बोल न पाना आपात स्थिति है।",
                actions: [
                    "तुरंत चिकित्सा सहायता लें।",
                    "व्यक्ति को सीधा बैठाएं और शांत रखें।",
                    "सुरक्षित होने पर धुआं, धूल या परेशानी पैदा करने वाली चीज से दूर करें।",
                    "यदि डॉक्टर की दी हुई इनहेलर या दवा है तो उसे लेने में मदद करें।",
                    "सांस लेने में परेशानी होने पर व्यक्ति को जबरदस्ती सीधा न लिटाएं।"
                ]
            },

            {
                id: "electric-shock",
                title: "बिजली का झटका",
                description:
                    "बिजली का झटका जलने, सांस रुकने, बेहोशी या दिल की समस्या का कारण बन सकता है।",
                warning:
                    "गंभीर बिजली का झटका लगने पर व्यक्ति ठीक दिखे तब भी डॉक्टर से जांच करवाना जरूरी है।",
                actions: [
                    "जब तक बिजली का संपर्क बंद न हो, व्यक्ति को हाथ न लगाएं।",
                    "सुरक्षित होने पर बिजली का स्रोत बंद करें।",
                    "तुरंत चिकित्सा सहायता के लिए संपर्क करें।",
                    "बिजली से अलग करने के बाद सांस की जांच करें।",
                    "सांस न चलने पर प्रशिक्षित होने पर CPR शुरू करें।"
                ]
            },

            {
                id: "heatstroke",
                title: "लू लगना",
                description:
                    "बहुत ज्यादा गर्मी में शरीर का तापमान खतरनाक रूप से बढ़ने पर लू लग सकती है।",
                warning:
                    "बहुत तेज गर्म शरीर, भ्रम, बेहोशी या असामान्य व्यवहार आपात स्थिति है।",
                actions: [
                    "तुरंत चिकित्सा सहायता लें।",
                    "व्यक्ति को ठंडी या छायादार जगह पर ले जाएं।",
                    "अनावश्यक बाहरी कपड़े हटा दें।",
                    "गीले ठंडे कपड़े या ठंडे पानी से शरीर ठंडा करने की कोशिश करें।",
                    "बेहोश या भ्रमित व्यक्ति को पीने के लिए कुछ न दें।"
                ]
            },

            {
                id: "drowning",
                title: "डूबना",
                description:
                    "तालाब, नदी, कुएं, टंकी या अन्य पानी की जगहों में डूबने का खतरा हो सकता है।",
                warning:
                    "पानी से निकालने के बाद व्यक्ति सामान्य रूप से सांस नहीं ले रहा हो तो तुरंत मदद जरूरी है।",
                actions: [
                    "अगर तैरना या बचाव करना नहीं आता तो पानी में खुद न उतरें।",
                    "तुरंत चिकित्सा सहायता लें।",
                    "सुरक्षित रूप से बाहर निकालने के बाद सांस की जांच करें।",
                    "सांस न चलने पर प्रशिक्षित होने पर CPR शुरू करें।",
                    "व्यक्ति को गर्म रखें और डॉक्टर से जांच करवाएं, भले ही वह ठीक लगे।"
                ]
            },

            {
                id: "severe-dehydration",
                title: "बहुत ज्यादा पानी की कमी",
                description:
                    "दस्त, उल्टी, बुखार, ज्यादा पसीना या तेज गर्मी से शरीर में पानी की बहुत कमी हो सकती है।",
                warning:
                    "बहुत कम पेशाब, अत्यधिक कमजोरी, भ्रम, बेहोशी या पानी न पी पाना गंभीर संकेत हैं।",
                actions: [
                    "यदि व्यक्ति होश में है और निगल सकता है तो थोड़ी-थोड़ी मात्रा में साफ पानी या ORS दें।",
                    "पैकेट वाला ORS पैकेट पर दिए निर्देश के अनुसार बनाएं।",
                    "मदद की व्यवस्था करते हुए तरल देते रहें।",
                    "व्यक्ति को ठंडी और आरामदायक जगह पर रखें।",
                    "भ्रम, बहुत ज्यादा कमजोरी या पानी न पी पाने पर तुरंत चिकित्सा सहायता लें।"
                ]
            }
        ]
    },

    bn: {
        title: "চিকিৎসা জরুরি অবস্থা সম্পর্কে সচেতনতা",
        description:
            "সাধারণ চিকিৎসা জরুরি অবস্থার লক্ষণ চিনুন এবং চিকিৎসা সহায়তা আসা পর্যন্ত কী করবেন তা জানুন।",
        whatToDo: "কী করবেন",

        topics: [
            {
                id: "heart-attack",
                title: "হার্ট অ্যাটাক",
                description:
                    "হৃদপিণ্ডে রক্ত চলাচল বাধাগ্রস্ত হলে হার্ট অ্যাটাক হতে পারে।",
                warning:
                    "তীব্র বা দীর্ঘস্থায়ী বুকে ব্যথা, চাপ, ঘাম বা শ্বাসকষ্ট হলে দ্রুত চিকিৎসা সহায়তা নিন।",
                actions: [
                    "অবিলম্বে জরুরি চিকিৎসা সহায়তা নিন।",
                    "ব্যক্তিকে শান্ত রাখুন এবং আরাম করে বিশ্রাম নিতে দিন।",
                    "ব্যক্তিকে একা রাখবেন না।",
                    "তাকে হাঁটতে বা ভারী কাজ করতে দেবেন না।",
                    "চিকিৎসক বা স্বাস্থ্যকর্মীর নির্দেশ অনুসরণ করুন।"
                ]
            },

            {
                id: "stroke",
                title: "স্ট্রোক",
                description:
                    "স্ট্রোক হলে হঠাৎ মুখ, হাত, পা, কথা বলা বা দেখার সমস্যা হতে পারে।",
                warning:
                    "হঠাৎ মুখ বেঁকে যাওয়া, একটি হাত দুর্বল হয়ে যাওয়া বা কথা বলতে সমস্যা হওয়া জরুরি অবস্থা।",
                actions: [
                    "অবিলম্বে চিকিৎসা সহায়তা নিন।",
                    "লক্ষণ প্রথম কখন শুরু হয়েছে সেই সময়টি মনে রাখুন।",
                    "ব্যক্তিকে নিরাপদ ও আরামদায়ক রাখুন।",
                    "গিলতে সমস্যা হলে খাবার, পানি বা ওষুধ দেবেন না।",
                    "যত দ্রুত সম্ভব হাসপাতালে নিয়ে যান।"
                ]
            },

            {
                id: "severe-bleeding",
                title: "অতিরিক্ত রক্তপাত",
                description:
                    "অনেক বেশি রক্তপাত হলে খুব দ্রুত অবস্থা গুরুতর হতে পারে।",
                warning:
                    "রক্তপাত খুব বেশি হলে বা বন্ধ না হলে দ্রুত চিকিৎসা সহায়তা প্রয়োজন।",
                actions: [
                    "অবিলম্বে চিকিৎসা সহায়তার জন্য যোগাযোগ করুন।",
                    "পরিষ্কার কাপড় বা গজ দিয়ে ক্ষতের উপর শক্তভাবে চাপ দিন।",
                    "সাহায্য না আসা পর্যন্ত চাপ দিয়ে রাখুন।",
                    "দুর্বল লাগলে ব্যক্তিকে নিরাপদভাবে বসিয়ে বা শুইয়ে রাখুন।",
                    "ক্ষতের মধ্যে গভীরভাবে আটকে থাকা কোনো জিনিস বের করার চেষ্টা করবেন না।"
                ]
            },

            {
                id: "choking",
                title: "গলায় খাবার আটকে যাওয়া",
                description:
                    "খাবার বা কোনো বস্তু শ্বাসনালীতে আটকে গেলে দম বন্ধ হতে পারে।",
                warning:
                    "ব্যক্তি শ্বাস নিতে, কথা বলতে বা ঠিকমতো কাশতে না পারলে এটি জরুরি অবস্থা।",
                actions: [
                    "ব্যক্তি যদি শ্বাস নিতে ও কাশতে পারেন, তাকে কাশতে দিন।",
                    "আটকে থাকা বস্তু না বের হলে দ্রুত চিকিৎসা সহায়তা নিন।",
                    "ব্যক্তি শ্বাস নিতে না পারলে প্রশিক্ষণ থাকলে সঠিক ফার্স্ট এইড দিন।",
                    "ব্যক্তি অজ্ঞান হলে প্রশিক্ষণ থাকলে CPR শুরু করুন।",
                    "মুখের ভিতরে আঙুল ঢুকিয়ে বস্তু বের করার চেষ্টা করবেন না।"
                ]
            },

            {
                id: "severe-burn",
                title: "গুরুতর পোড়া",
                description:
                    "আগুন, গরম পানি, বাষ্প, রাসায়নিক বা বিদ্যুৎ থেকে গুরুতর পোড়া হতে পারে।",
                warning:
                    "বড়, গভীর বা গুরুতর পোড়ার ক্ষেত্রে দ্রুত চিকিৎসা সহায়তা প্রয়োজন।",
                actions: [
                    "নিরাপদ হলে ব্যক্তিকে আগুন বা তাপের উৎস থেকে দূরে সরিয়ে নিন।",
                    "সম্ভব হলে প্রায় ২০ মিনিট পরিষ্কার ঠান্ডা প্রবাহিত পানি দিয়ে পোড়া অংশ ঠান্ডা করুন।",
                    "ত্বকের সঙ্গে আটকে না থাকলে কাছাকাছি আংটি বা শক্ত জিনিস খুলে দিন।",
                    "পোড়া অংশ পরিষ্কার কাপড় বা ড্রেসিং দিয়ে আলতোভাবে ঢেকে দিন।",
                    "পোড়া জায়গায় টুথপেস্ট, তেল, মাখন বা মাটি লাগাবেন না।"
                ]
            },

            {
                id: "fracture-injury",
                title: "হাড় ভাঙা বা গুরুতর আঘাত",
                description:
                    "পড়ে যাওয়া, দুর্ঘটনা বা জোরে আঘাতের কারণে হাড় ভেঙে যেতে পারে।",
                warning:
                    "তীব্র ব্যথা, অস্বাভাবিক আকৃতি, ফোলা বা অঙ্গ নাড়াতে না পারা গুরুতর আঘাতের লক্ষণ হতে পারে।",
                actions: [
                    "ব্যক্তিকে শান্ত ও স্থির রাখুন।",
                    "বেঁকে যাওয়া বা ভাঙা অঙ্গ সোজা করার চেষ্টা করবেন না।",
                    "আহত অংশকে সমর্থন দিন এবং অপ্রয়োজনীয় নড়াচড়া এড়ান।",
                    "রক্তপাত হলে পরিষ্কার কাপড় দিয়ে উপযুক্তভাবে চাপ দিন।",
                    "যত দ্রুত সম্ভব চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "fainting",
                title: "অজ্ঞান হয়ে যাওয়া",
                description:
                    "গরম, পানিশূন্যতা, দুর্বলতা বা অসুস্থতার কারণে কেউ অজ্ঞান হয়ে যেতে পারেন।",
                warning:
                    "অজ্ঞান হওয়ার সঙ্গে বুক ব্যথা, শ্বাসকষ্ট, গুরুতর আঘাত বা দীর্ঘ সময় জ্ঞান না ফিরলে জরুরি সাহায্য প্রয়োজন।",
                actions: [
                    "গুরুতর আঘাত না থাকলে ব্যক্তিকে নিরাপদ জায়গায় শুইয়ে দিন।",
                    "ব্যক্তি স্বাভাবিকভাবে শ্বাস নিচ্ছেন কি না দেখুন।",
                    "ভিড় সরিয়ে বাতাস চলাচলের ব্যবস্থা করুন।",
                    "অজ্ঞান ব্যক্তিকে খাবার বা পানি দেবেন না।",
                    "দ্রুত জ্ঞান না ফিরলে চিকিৎসা সহায়তা নিন।"
                ]
            },

            {
                id: "seizure",
                title: "খিঁচুনি",
                description:
                    "খিঁচুনির সময় শরীর হঠাৎ কাঁপতে পারে, শক্ত হয়ে যেতে পারে বা জ্ঞান চলে যেতে পারে।",
                warning:
                    "প্রথমবার খিঁচুনি, কয়েক মিনিট ধরে খিঁচুনি চলা বা বারবার খিঁচুনি হওয়া গুরুতর হতে পারে।",
                actions: [
                    "আগুন, ধারালো জিনিস ও বিপজ্জনক স্থান থেকে ব্যক্তিকে দূরে রাখুন।",
                    "সম্ভব হলে মাথার নিচে নরম কিছু রাখুন।",
                    "খিঁচুনি থামার পর শ্বাস চললে ব্যক্তিকে পাশ ফিরিয়ে রাখুন।",
                    "ব্যক্তিকে চেপে ধরে খিঁচুনি বন্ধ করার চেষ্টা করবেন না।",
                    "মুখের ভিতরে পানি, খাবার বা কোনো জিনিস দেবেন না।"
                ]
            },

            {
                id: "poisoning",
                title: "বিষক্রিয়া",
                description:
                    "বিষাক্ত কিছু খাওয়া, শ্বাসের সঙ্গে শরীরে যাওয়া বা শরীরে লাগার কারণে বিষক্রিয়া হতে পারে।",
                warning:
                    "বমি, অতিরিক্ত ঘুম, শ্বাসকষ্ট, বিভ্রান্তি বা অজ্ঞান হয়ে যাওয়া গুরুতর লক্ষণ হতে পারে।",
                actions: [
                    "অবিলম্বে চিকিৎসা সহায়তা নিন।",
                    "নিরাপদ হলে ব্যক্তিকে বিষাক্ত জিনিস থেকে দূরে সরিয়ে নিন।",
                    "সম্ভব হলে বিষাক্ত জিনিসের প্যাকেট বা বোতলটি সঙ্গে রাখুন।",
                    "চিকিৎসকের পরামর্শ ছাড়া বমি করানোর চেষ্টা করবেন না।",
                    "চিকিৎসকের পরামর্শ ছাড়া দুধ বা অন্য কিছু খাওয়াবেন না।"
                ]
            },

            {
                id: "snake-bite",
                title: "সাপের কামড়",
                description:
                    "কিছু সাপের কামড়ে শরীরে বিষ ছড়িয়ে পড়তে পারে এবং দ্রুত চিকিৎসা প্রয়োজন।",
                warning:
                    "ফোলা, তীব্র ব্যথা, দুর্বলতা, বমি, শ্বাসকষ্ট বা অস্বাভাবিক রক্তপাত গুরুতর লক্ষণ হতে পারে।",
                actions: [
                    "যত দ্রুত সম্ভব হাসপাতালে নিয়ে যান।",
                    "ব্যক্তিকে শান্ত রাখুন এবং যতটা সম্ভব কম নড়াচড়া করান।",
                    "কামড়ানো হাত বা পা স্থির রাখুন।",
                    "ফোলা শুরু হওয়ার আগে আংটি, ঘড়ি বা শক্ত জিনিস খুলে দিন।",
                    "কামড়ের জায়গা কাটবেন না, বিষ চুষবেন না এবং বরফ বা খুব শক্ত বাঁধন ব্যবহার করবেন না।"
                ]
            },

            {
                id: "animal-bite",
                title: "কুকুর বা অন্য প্রাণীর কামড়",
                description:
                    "প্রাণীর কামড়ে ক্ষত ও সংক্রমণ হতে পারে এবং জলাতঙ্ক প্রতিরোধের জন্য চিকিৎসা প্রয়োজন হতে পারে।",
                warning:
                    "ত্বক কেটে গেলে, বিশেষ করে অজানা বা রাস্তার প্রাণীর কামড় হলে অবশ্যই চিকিৎসকের পরামর্শ নিন।",
                actions: [
                    "প্রাণীটি থেকে দূরে নিরাপদ জায়গায় যান।",
                    "সাবান ও পরিষ্কার প্রবাহিত পানি দিয়ে ক্ষত ভালোভাবে ধুয়ে নিন।",
                    "ক্ষত পরিষ্কার কাপড় দিয়ে ঢেকে দিন।",
                    "যত দ্রুত সম্ভব ডাক্তার বা হাসপাতালে যান।",
                    "জলাতঙ্কের লক্ষণ দেখা দেওয়ার অপেক্ষা করবেন না।"
                ]
            },

            {
                id: "severe-allergy",
                title: "গুরুতর অ্যালার্জি",
                description:
                    "খাবার, ওষুধ, পোকামাকড়ের কামড় বা অন্য কোনো কারণে গুরুতর অ্যালার্জি হতে পারে।",
                warning:
                    "মুখ বা গলা ফুলে যাওয়া, শ্বাসকষ্ট, তীব্র মাথা ঘোরা বা অজ্ঞান হওয়া জরুরি অবস্থা।",
                actions: [
                    "অবিলম্বে জরুরি চিকিৎসা সহায়তা নিন।",
                    "ডাক্তার নির্ধারিত জরুরি অ্যালার্জির ওষুধ থাকলে তা ব্যবহার করতে সাহায্য করুন।",
                    "ব্যক্তিকে নিরাপদ ও আরামদায়ক অবস্থায় রাখুন।",
                    "শ্বাস নিতে বা গিলতে সমস্যা হলে খাবার বা পানি দেবেন না।",
                    "চিকিৎসা সহায়তা না আসা পর্যন্ত ব্যক্তির সঙ্গে থাকুন।"
                ]
            },

            {
                id: "breathing-difficulty",
                title: "শ্বাস নিতে সমস্যা",
                description:
                    "অ্যাজমা, সংক্রমণ, অ্যালার্জি, ধোঁয়া বা অন্য কারণে শ্বাসকষ্ট হতে পারে।",
                warning:
                    "অতিরিক্ত শ্বাসকষ্ট, ঠোঁট নীল হয়ে যাওয়া বা ঠিকমতো কথা বলতে না পারা জরুরি অবস্থা।",
                actions: [
                    "অবিলম্বে চিকিৎসা সহায়তা নিন।",
                    "ব্যক্তিকে সোজা বসিয়ে শান্ত রাখুন।",
                    "নিরাপদ হলে ধোঁয়া, ধুলো বা সমস্যার কারণ থেকে দূরে সরিয়ে নিন।",
                    "ডাক্তারের দেওয়া ইনহেলার বা ওষুধ থাকলে তা নিতে সাহায্য করুন।",
                    "শ্বাসকষ্ট হলে জোর করে শুইয়ে দেবেন না।"
                ]
            },

            {
                id: "electric-shock",
                title: "বিদ্যুৎস্পৃষ্ট হওয়া",
                description:
                    "বিদ্যুৎস্পৃষ্ট হলে পোড়া, শ্বাস বন্ধ হওয়া, অজ্ঞান হওয়া বা হৃদযন্ত্রের সমস্যা হতে পারে।",
                warning:
                    "গুরুতর বিদ্যুৎস্পৃষ্ট হওয়ার পর ব্যক্তি ভালো দেখালেও চিকিৎসকের পরীক্ষা করা দরকার।",
                actions: [
                    "বিদ্যুতের সংযোগ বন্ধ না হওয়া পর্যন্ত ব্যক্তিকে স্পর্শ করবেন না।",
                    "নিরাপদ হলে বিদ্যুতের উৎস বন্ধ করুন।",
                    "অবিলম্বে জরুরি চিকিৎসা সহায়তা নিন।",
                    "বিদ্যুৎ থেকে আলাদা করার পর শ্বাস পরীক্ষা করুন।",
                    "শ্বাস না থাকলে প্রশিক্ষণ থাকলে CPR শুরু করুন।"
                ]
            },

            {
                id: "heatstroke",
                title: "হিটস্ট্রোক",
                description:
                    "অতিরিক্ত গরমে শরীরের তাপমাত্রা বিপজ্জনকভাবে বেড়ে গেলে হিটস্ট্রোক হতে পারে।",
                warning:
                    "অতিরিক্ত শরীরের গরম, বিভ্রান্তি, অজ্ঞান হওয়া বা অস্বাভাবিক আচরণ জরুরি লক্ষণ।",
                actions: [
                    "অবিলম্বে চিকিৎসা সহায়তা নিন।",
                    "ব্যক্তিকে ঠান্ডা বা ছায়াযুক্ত জায়গায় নিয়ে যান।",
                    "অপ্রয়োজনীয় বাইরের পোশাক খুলে দিন।",
                    "ঠান্ডা ভেজা কাপড় বা ঠান্ডা পানি দিয়ে শরীর ঠান্ডা করার চেষ্টা করুন।",
                    "অজ্ঞান বা বিভ্রান্ত ব্যক্তিকে কিছু পান করতে দেবেন না।"
                ]
            },

            {
                id: "drowning",
                title: "পানিতে ডুবে যাওয়া",
                description:
                    "পুকুর, নদী, কুয়ো, ট্যাঙ্ক বা অন্য জলাশয়ে ডুবে যাওয়ার ঝুঁকি থাকে।",
                warning:
                    "পানি থেকে তোলার পর ব্যক্তি স্বাভাবিকভাবে শ্বাস না নিলে দ্রুত জরুরি সাহায্য প্রয়োজন।",
                actions: [
                    "সাঁতার বা উদ্ধার করার প্রশিক্ষণ না থাকলে নিজে পানিতে নামবেন না।",
                    "অবিলম্বে জরুরি চিকিৎসা সহায়তা নিন।",
                    "নিরাপদে পানি থেকে তোলার পর শ্বাস পরীক্ষা করুন।",
                    "শ্বাস না থাকলে প্রশিক্ষণ থাকলে CPR শুরু করুন।",
                    "ব্যক্তিকে গরম রাখুন এবং ভালো মনে হলেও চিকিৎসকের কাছে নিয়ে যান।"
                ]
            },

            {
                id: "severe-dehydration",
                title: "অতিরিক্ত পানিশূন্যতা",
                description:
                    "ডায়রিয়া, বমি, জ্বর, অতিরিক্ত ঘাম বা প্রচণ্ড গরমে শরীরে অনেক পানি কমে যেতে পারে।",
                warning:
                    "খুব কম প্রস্রাব, অতিরিক্ত দুর্বলতা, বিভ্রান্তি, অজ্ঞান হওয়া বা পানি পান করতে না পারা গুরুতর লক্ষণ।",
                actions: [
                    "ব্যক্তি জ্ঞান থাকলে এবং গিলতে পারলে অল্প অল্প করে পরিষ্কার পানি বা ORS দিন।",
                    "প্যাকেটের নির্দেশ অনুযায়ী ORS তৈরি করুন।",
                    "চিকিৎসা সহায়তার ব্যবস্থা করার সময় তরল দিতে থাকুন।",
                    "ব্যক্তিকে ঠান্ডা ও আরামদায়ক জায়গায় রাখুন।",
                    "বিভ্রান্তি, অতিরিক্ত দুর্বলতা বা পানি পান করতে না পারলে দ্রুত চিকিৎসা সহায়তা নিন।"
                ]
            }
        ]
    }
};

export default medicalGuidance;