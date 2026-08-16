const healthcareGuidance = {
    en: {
        title: "Healthcare Assistance",
        description:
            "Learn where to get help, when to go to a doctor or hospital, and what information to keep ready during an emergency.",
        remember: "Remember",

        topics: [
            {
                id: "ambulance",
                title: "When to Call an Ambulance",
                description:
                    "An ambulance is needed when a person is seriously ill or badly injured and needs quick medical help.",
                points: [
                    "Call an ambulance for serious problems like severe chest pain, breathing trouble, heavy bleeding, unconsciousness or a serious accident.",
                    "Tell the ambulance operator what happened and what condition the person is in.",
                    "Give the correct village, house name or number, nearby landmark and road information.",
                    "Keep the road or entrance clear so the ambulance can reach the person.",
                    "Follow the instructions given by the emergency medical team."
                ]
            },

            {
                id: "hospital",
                title: "When to Go to a Hospital",
                description:
                    "A hospital is the right place for serious illness, major injury or problems that cannot be safely treated at home.",
                points: [
                    "Go to a hospital quickly for severe pain, breathing problems, unconsciousness, serious injury or heavy bleeding.",
                    "Do not wait for the problem to become worse if it looks serious.",
                    "Take any medical papers, test reports or prescription papers if available.",
                    "Tell the doctor about regular medicines and known allergies.",
                    "If the person is very sick, ask someone to travel with them."
                ]
            },

            {
                id: "health-centre",
                title: "When to Visit a Health Centre",
                description:
                    "A nearby health centre or government health centre can help with many common illnesses and basic treatment.",
                points: [
                    "Visit a health centre for common problems such as fever, cough, weakness, minor wounds or stomach problems.",
                    "Ask the health worker if you are unsure about the illness.",
                    "Take the person's old prescription or health records if available.",
                    "Follow the health worker's advice about medicines and tests.",
                    "Go to a hospital if the health worker says the problem is serious."
                ]
            },

            {
                id: "doctor",
                title: "When to See a Doctor",
                description:
                    "A doctor can check the cause of a health problem and decide what treatment is needed.",
                points: [
                    "See a doctor if fever, pain, cough, vomiting or other symptoms continue or become worse.",
                    "Tell the doctor when the problem started.",
                    "Explain all important symptoms instead of mentioning only one problem.",
                    "Tell the doctor about medicines already taken.",
                    "Do not hide any important health information."
                ]
            },

            {
                id: "pharmacy",
                title: "Getting Medicines Safely",
                description:
                    "A pharmacy or medicine shop can provide medicines, but serious illness should be checked by a doctor or health worker.",
                points: [
                    "Take the doctor's prescription when buying prescription medicines.",
                    "Check the medicine name and expiry date before using it.",
                    "Take the medicine in the amount and at the time advised by the doctor or health worker.",
                    "Do not share your medicines with another person.",
                    "Ask a pharmacist or health worker if you are unsure how to take a medicine."
                ]
            },

            {
                id: "medical-information",
                title: "Information to Tell the Doctor",
                description:
                    "Simple and clear information helps the doctor understand the problem faster.",
                points: [
                    "Tell the doctor what problem the person is having.",
                    "Tell when the problem started.",
                    "Tell if the problem is getting better or worse.",
                    "Mention any regular medicines the person takes.",
                    "Mention known allergies and serious illnesses.",
                    "Tell the doctor about any medicine already taken for the current problem."
                ]
            },

            {
                id: "medical-records",
                title: "Keep Health Papers Ready",
                description:
                    "Keeping important health papers together can save time during an emergency.",
                points: [
                    "Keep prescriptions, test reports and important medical papers in one safe place.",
                    "Keep a list of regular medicines if possible.",
                    "Keep information about known medicine allergies.",
                    "Carry important health papers when going to a hospital.",
                    "Keep emergency contact numbers where family members can easily find them."
                ]
            },

            {
                id: "medicines",
                title: "Taking Medicines Safely",
                description:
                    "Taking the wrong medicine or the wrong amount can cause harm.",
                points: [
                    "Take medicines exactly as advised by a doctor or health worker.",
                    "Do not take someone else's medicine just because they have similar symptoms.",
                    "Do not take extra tablets because the problem is not getting better quickly.",
                    "Check the medicine name before taking it.",
                    "Ask a doctor or pharmacist if you are unsure about a medicine."
                ]
            },

            {
                id: "children",
                title: "When a Child Needs Medical Help",
                description:
                    "Children can become seriously ill quickly, especially with breathing problems, high fever or dehydration.",
                points: [
                    "Get medical help if a child has trouble breathing, becomes unusually sleepy or is difficult to wake.",
                    "Take a child for medical care if they cannot drink or keep fluids down.",
                    "Watch for repeated vomiting, severe diarrhoea or signs of dehydration.",
                    "Do not give adult medicines to a child unless advised by a healthcare professional.",
                    "If the child becomes unconscious or has a seizure, seek emergency help immediately."
                ]
            },

            {
                id: "pregnancy",
                title: "Pregnancy Emergency",
                description:
                    "Some problems during pregnancy need quick medical attention for the mother and baby.",
                points: [
                    "Get medical help for heavy bleeding during pregnancy.",
                    "Seek urgent care for severe stomach pain, fainting or serious weakness.",
                    "Get help if there is severe headache, blurred vision or sudden swelling.",
                    "During labour, contact a trained healthcare worker or go to the appropriate health facility.",
                    "Keep pregnancy check-up papers and important medicines ready."
                ]
            },

            {
                id: "elderly",
                title: "Helping an Older Person",
                description:
                    "Older people may need extra care during illness, falls, weakness or sudden health problems.",
                points: [
                    "Help the person sit or lie down safely if they feel weak or dizzy.",
                    "Check whether they are taking their regular medicines as advised.",
                    "Get medical help after a serious fall, especially if they hit their head.",
                    "Watch for sudden confusion, weakness, speech problems or breathing trouble.",
                    "Do not leave a seriously ill older person alone."
                ]
            },

            {
                id: "fever",
                title: "Fever and Common Illness",
                description:
                    "Fever can happen because of many different illnesses and sometimes needs medical checking.",
                points: [
                    "Give plenty of safe fluids if the person can drink.",
                    "Allow the person to rest.",
                    "Check the temperature if a thermometer is available.",
                    "Follow the doctor's advice about fever medicine.",
                    "Get medical help if the fever is very high, continues for several days or the person becomes very weak."
                ]
            },

            {
                id: "breathing",
                title: "Breathing Problem",
                description:
                    "Breathing trouble can sometimes become serious very quickly.",
                points: [
                    "Help the person sit in a comfortable position.",
                    "Keep smoke, dust and crowds away from the person.",
                    "Use prescribed breathing medicine or an inhaler if the person has been told to use it.",
                    "Get emergency medical help if breathing becomes very difficult or the person cannot speak normally.",
                    "Do not leave a person with severe breathing trouble alone."
                ]
            },

            {
                id: "chest-pain",
                title: "Chest Pain",
                description:
                    "Strong or continuing chest pain can be a sign of a serious heart problem.",
                points: [
                    "Stop the person's activity and let them rest.",
                    "Get emergency medical help for severe or continuing chest pain.",
                    "Tell the emergency team when the pain started.",
                    "Do not make the person walk long distances if they are very weak or unwell.",
                    "Follow instructions from the emergency medical team."
                ]
            },

            {
                id: "follow-up",
                title: "After Visiting a Doctor",
                description:
                    "Following the doctor's advice helps the person recover and prevents the problem from becoming worse.",
                points: [
                    "Take medicines for the full time advised by the doctor.",
                    "Follow instructions about food, rest and daily activities.",
                    "Complete recommended tests or follow-up visits.",
                    "Return to the doctor if symptoms become worse or new serious symptoms appear.",
                    "Keep the prescription for future reference."
                ]
            }
        ]
    },

    hi: {
        title: "स्वास्थ्य सहायता",
        description:
            "जानें कि मदद कहां से लें, कब डॉक्टर या अस्पताल जाएं और आपातकाल में कौन-सी जानकारी तैयार रखें।",
        remember: "ध्यान रखें",

        topics: [
            {
                id: "ambulance",
                title: "एम्बुलेंस कब बुलाएं",
                description:
                    "जब व्यक्ति बहुत ज्यादा बीमार या गंभीर रूप से घायल हो और जल्दी चिकित्सा सहायता की जरूरत हो, तब एम्बुलेंस बुलाएं।",
                points: [
                    "सीने में तेज दर्द, सांस लेने में बहुत परेशानी, ज्यादा खून बहना, बेहोशी या गंभीर दुर्घटना में एम्बुलेंस बुलाएं।",
                    "एम्बुलेंस वाले को बताएं कि क्या हुआ है और व्यक्ति की हालत कैसी है।",
                    "गांव का नाम, घर का नंबर या नाम, पास की पहचान वाली जगह और सड़क की जानकारी सही बताएं।",
                    "एम्बुलेंस के आने के लिए रास्ता साफ रखें।",
                    "आपातकालीन चिकित्सा टीम के निर्देशों का पालन करें।"
                ]
            },

            {
                id: "hospital",
                title: "अस्पताल कब जाएं",
                description:
                    "गंभीर बीमारी, बड़ी चोट या ऐसी परेशानी जिसे घर पर ठीक करना सुरक्षित नहीं है, उसके लिए अस्पताल जाएं।",
                points: [
                    "बहुत तेज दर्द, सांस की परेशानी, बेहोशी, गंभीर चोट या ज्यादा खून बहने पर जल्दी अस्पताल जाएं।",
                    "स्थिति गंभीर लग रही हो तो ज्यादा बिगड़ने का इंतजार न करें।",
                    "संभव हो तो पुराने इलाज के कागज, जांच रिपोर्ट या डॉक्टर की पर्ची साथ ले जाएं।",
                    "डॉक्टर को चल रही दवाओं और एलर्जी के बारे में बताएं।",
                    "व्यक्ति बहुत बीमार हो तो उसके साथ किसी भरोसेमंद व्यक्ति को भेजें।"
                ]
            },

            {
                id: "health-centre",
                title: "स्वास्थ्य केंद्र कब जाएं",
                description:
                    "नजदीकी स्वास्थ्य केंद्र या सरकारी स्वास्थ्य केंद्र में कई सामान्य बीमारियों और छोटी-मोटी परेशानियों का इलाज मिल सकता है।",
                points: [
                    "बुखार, खांसी, कमजोरी, छोटे घाव या पेट की सामान्य परेशानी में स्वास्थ्य केंद्र जाएं।",
                    "बीमारी समझ में न आए तो स्वास्थ्यकर्मी से सलाह लें।",
                    "संभव हो तो पुरानी डॉक्टर की पर्ची या स्वास्थ्य कागज साथ रखें।",
                    "दवा और जांच के बारे में स्वास्थ्यकर्मी की सलाह मानें।",
                    "स्वास्थ्यकर्मी समस्या को गंभीर बताए तो अस्पताल जाएं।"
                ]
            },

            {
                id: "doctor",
                title: "डॉक्टर को कब दिखाएं",
                description:
                    "डॉक्टर बीमारी का कारण समझकर सही इलाज बताने में मदद करते हैं।",
                points: [
                    "बुखार, दर्द, खांसी, उल्टी या दूसरी परेशानी लगातार बनी रहे या बढ़ जाए तो डॉक्टर को दिखाएं।",
                    "डॉक्टर को बताएं कि परेशानी कब शुरू हुई।",
                    "सिर्फ एक लक्षण नहीं, बाकी जरूरी लक्षण भी बताएं।",
                    "पहले से ली गई दवाओं के बारे में बताएं।",
                    "कोई जरूरी स्वास्थ्य जानकारी न छिपाएं।"
                ]
            },

            {
                id: "pharmacy",
                title: "दवा सुरक्षित तरीके से लें",
                description:
                    "दवा की दुकान से दवा मिल सकती है, लेकिन गंभीर बीमारी में डॉक्टर या स्वास्थ्यकर्मी से जांच जरूरी है।",
                points: [
                    "डॉक्टर की लिखी दवा लेते समय पर्ची साथ रखें।",
                    "दवा लेने से पहले उसका नाम और एक्सपायरी तारीख देखें।",
                    "डॉक्टर या स्वास्थ्यकर्मी ने जितनी और जिस समय दवा लेने को कहा है, उसी तरह लें।",
                    "अपनी दवा किसी दूसरे व्यक्ति को न दें।",
                    "दवा कैसे लेनी है समझ न आए तो दवा दुकानदार या स्वास्थ्यकर्मी से पूछें।"
                ]
            },

            {
                id: "medical-information",
                title: "डॉक्टर को क्या बताएं",
                description:
                    "साफ और सही जानकारी देने से डॉक्टर को बीमारी समझने में आसानी होती है।",
                points: [
                    "व्यक्ति को क्या परेशानी हो रही है, साफ बताएं।",
                    "परेशानी कब शुरू हुई बताएं।",
                    "परेशानी कम हो रही है या बढ़ रही है, बताएं।",
                    "रोज कौन-सी दवाएं लेते हैं, बताएं।",
                    "किसी दवा से एलर्जी है तो बताएं।",
                    "इस परेशानी के लिए पहले कौन-सी दवा ली है, यह भी बताएं।"
                ]
            },

            {
                id: "medical-records",
                title: "इलाज के कागज संभालकर रखें",
                description:
                    "जरूरी स्वास्थ्य कागज एक जगह रखने से आपातकाल में समय बच सकता है।",
                points: [
                    "डॉक्टर की पर्ची, जांच रिपोर्ट और जरूरी स्वास्थ्य कागज सुरक्षित रखें।",
                    "रोज लेने वाली दवाओं की सूची बना सकते हैं।",
                    "किस दवा से एलर्जी है, इसकी जानकारी लिखकर रखें।",
                    "अस्पताल जाते समय जरूरी कागज साथ ले जाएं।",
                    "आपातकालीन संपर्क नंबर घर के सभी लोगों को पता होना चाहिए।"
                ]
            },

            {
                id: "medicines",
                title: "दवा सही तरीके से लें",
                description:
                    "गलत दवा या गलत मात्रा लेने से नुकसान हो सकता है।",
                points: [
                    "डॉक्टर या स्वास्थ्यकर्मी की सलाह के अनुसार दवा लें।",
                    "सिर्फ इसलिए किसी दूसरे व्यक्ति की दवा न लें कि उसके लक्षण आपके जैसे हैं।",
                    "परेशानी जल्दी ठीक न होने पर अपनी तरफ से ज्यादा गोलियां न लें।",
                    "दवा लेने से पहले उसका नाम जांचें।",
                    "दवा को लेकर शक हो तो डॉक्टर या दवा दुकानदार से पूछें।"
                ]
            },

            {
                id: "children",
                title: "बच्चे को कब डॉक्टर को दिखाएं",
                description:
                    "बच्चों की हालत सांस की परेशानी, तेज बुखार या पानी की कमी में जल्दी बिगड़ सकती है।",
                points: [
                    "बच्चे को सांस लेने में परेशानी हो या वह बहुत ज्यादा सुस्त हो तो तुरंत मदद लें।",
                    "बच्चा पानी न पी पा रहा हो या बार-बार उल्टी कर रहा हो तो डॉक्टर को दिखाएं।",
                    "बार-बार दस्त, उल्टी या पानी की कमी के लक्षणों पर ध्यान दें।",
                    "बिना डॉक्टर की सलाह बच्चे को बड़ों की दवा न दें।",
                    "बच्चा बेहोश हो जाए या दौरा पड़े तो तुरंत आपातकालीन सहायता लें।"
                ]
            },

            {
                id: "pregnancy",
                title: "गर्भावस्था में आपात स्थिति",
                description:
                    "गर्भावस्था के दौरान कुछ परेशानियों में मां और बच्चे दोनों के लिए तुरंत चिकित्सा सहायता जरूरी होती है।",
                points: [
                    "गर्भावस्था में ज्यादा खून आए तो तुरंत चिकित्सा सहायता लें।",
                    "बहुत तेज पेट दर्द, बेहोशी या बहुत ज्यादा कमजोरी में तुरंत मदद लें।",
                    "तेज सिरदर्द, धुंधला दिखना या अचानक सूजन होने पर डॉक्टर को दिखाएं।",
                    "प्रसव का समय आने पर प्रशिक्षित स्वास्थ्यकर्मी या उचित स्वास्थ्य केंद्र से संपर्क करें।",
                    "गर्भावस्था की जांच के कागज और जरूरी दवाएं तैयार रखें।"
                ]
            },

            {
                id: "elderly",
                title: "बुजुर्ग व्यक्ति की मदद",
                description:
                    "बीमारी, गिरने, कमजोरी या अचानक परेशानी में बुजुर्ग व्यक्ति को ज्यादा देखभाल की जरूरत हो सकती है।",
                points: [
                    "कमजोरी या चक्कर आने पर उन्हें सुरक्षित बैठाएं या लिटाएं।",
                    "देखें कि वे अपनी रोज की दवाएं सही समय पर ले रहे हैं या नहीं।",
                    "गंभीर रूप से गिरने या सिर पर चोट लगने के बाद डॉक्टर को दिखाएं।",
                    "अचानक भ्रम, कमजोरी, बोलने में परेशानी या सांस की समस्या पर तुरंत मदद लें।",
                    "गंभीर रूप से बीमार बुजुर्ग को अकेला न छोड़ें।"
                ]
            },

            {
                id: "fever",
                title: "बुखार और सामान्य बीमारी",
                description:
                    "बुखार कई कारणों से हो सकता है और कभी-कभी डॉक्टर से जांच जरूरी होती है।",
                points: [
                    "व्यक्ति पानी पी सकता हो तो पर्याप्त साफ पानी और तरल दें।",
                    "उसे आराम करने दें।",
                    "थर्मामीटर हो तो तापमान जांचें।",
                    "बुखार की दवा डॉक्टर की सलाह के अनुसार दें।",
                    "बुखार बहुत तेज हो, कई दिनों तक रहे या कमजोरी बहुत बढ़ जाए तो डॉक्टर को दिखाएं।"
                ]
            },

            {
                id: "breathing",
                title: "सांस लेने में परेशानी",
                description:
                    "सांस की परेशानी कभी-कभी बहुत जल्दी गंभीर हो सकती है।",
                points: [
                    "व्यक्ति को आराम से बैठने दें।",
                    "धुआं, धूल और भीड़ को दूर रखें।",
                    "अगर डॉक्टर ने इनहेलर या सांस की दवा दी है तो निर्देश के अनुसार इस्तेमाल करें।",
                    "सांस बहुत ज्यादा फूल रही हो या व्यक्ति ठीक से बोल न पा रहा हो तो तुरंत चिकित्सा सहायता लें।",
                    "सांस की गंभीर परेशानी वाले व्यक्ति को अकेला न छोड़ें।"
                ]
            },

            {
                id: "chest-pain",
                title: "सीने में दर्द",
                description:
                    "सीने में तेज या लगातार दर्द दिल की गंभीर परेशानी का संकेत हो सकता है।",
                points: [
                    "व्यक्ति का काम रुकवाकर उसे आराम करने दें।",
                    "सीने में तेज या लगातार दर्द होने पर तुरंत आपातकालीन चिकित्सा सहायता लें।",
                    "दर्द कब शुरू हुआ, यह बताएं।",
                    "बहुत कमजोर व्यक्ति को ज्यादा चलने के लिए मजबूर न करें।",
                    "आपातकालीन चिकित्सा टीम के निर्देशों का पालन करें।"
                ]
            },

            {
                id: "follow-up",
                title: "डॉक्टर को दिखाने के बाद",
                description:
                    "डॉक्टर की सलाह मानने से बीमारी ठीक होने में मदद मिलती है और परेशानी बढ़ने का खतरा कम होता है।",
                points: [
                    "डॉक्टर ने जितने दिन दवा लेने को कहा है, उतने दिन लें।",
                    "खाने, आराम और रोज के काम के बारे में डॉक्टर की सलाह मानें।",
                    "जरूरी जांच और दोबारा दिखाने की तारीख न भूलें।",
                    "परेशानी बढ़े या नए गंभीर लक्षण आएं तो फिर डॉक्टर को दिखाएं।",
                    "डॉक्टर की पर्ची भविष्य के लिए संभालकर रखें।"
                ]
            }
        ]
    },

    bn: {
        title: "স্বাস্থ্যসেবা সহায়তা",
        description:
            "কোথায় সাহায্য পাবেন, কখন ডাক্তার বা হাসপাতালে যাবেন এবং জরুরি সময়ে কী তথ্য প্রস্তুত রাখবেন তা জানুন।",
        remember: "মনে রাখুন",

        topics: [
            {
                id: "ambulance",
                title: "কখন অ্যাম্বুলেন্স ডাকবেন",
                description:
                    "কেউ খুব অসুস্থ বা গুরুতর আহত হলে এবং দ্রুত চিকিৎসার দরকার হলে অ্যাম্বুলেন্স ডাকুন।",
                points: [
                    "বুকে তীব্র ব্যথা, শ্বাসকষ্ট, অতিরিক্ত রক্তপাত, অজ্ঞান হওয়া বা গুরুতর দুর্ঘটনায় অ্যাম্বুলেন্স ডাকুন।",
                    "অ্যাম্বুলেন্স কর্মীকে কী হয়েছে এবং ব্যক্তির অবস্থা কেমন তা পরিষ্কার করে বলুন।",
                    "গ্রামের নাম, বাড়ির নাম বা নম্বর, কাছের পরিচিত জায়গা এবং রাস্তার তথ্য সঠিকভাবে জানান।",
                    "অ্যাম্বুলেন্স আসার জন্য রাস্তা বা প্রবেশের পথ পরিষ্কার রাখুন।",
                    "জরুরি চিকিৎসা কর্মীদের নির্দেশ অনুসরণ করুন।"
                ]
            },

            {
                id: "hospital",
                title: "কখন হাসপাতালে যাবেন",
                description:
                    "গুরুতর অসুস্থতা, বড় আঘাত বা বাড়িতে নিরাপদে সামলানো যায় না এমন সমস্যায় হাসপাতালে যান।",
                points: [
                    "তীব্র ব্যথা, শ্বাসকষ্ট, অজ্ঞান হওয়া, গুরুতর আঘাত বা অতিরিক্ত রক্তপাত হলে দ্রুত হাসপাতালে যান।",
                    "সমস্যা গুরুতর মনে হলে আরও খারাপ হওয়ার জন্য অপেক্ষা করবেন না।",
                    "সম্ভব হলে পুরনো চিকিৎসার কাগজ, পরীক্ষার রিপোর্ট বা ডাক্তারের প্রেসক্রিপশন সঙ্গে নিন।",
                    "ডাক্তারের কাছে নিয়মিত ওষুধ এবং কোনো অ্যালার্জি আছে কিনা জানান।",
                    "ব্যক্তি খুব অসুস্থ হলে তার সঙ্গে একজন পরিবারের সদস্য বা পরিচিত মানুষকে রাখুন।"
                ]
            },

            {
                id: "health-centre",
                title: "কখন স্বাস্থ্যকেন্দ্রে যাবেন",
                description:
                    "কাছের স্বাস্থ্যকেন্দ্র বা সরকারি স্বাস্থ্যকেন্দ্রে অনেক সাধারণ অসুখ ও ছোটখাটো সমস্যার চিকিৎসা পাওয়া যায়।",
                points: [
                    "জ্বর, কাশি, দুর্বলতা, ছোট ক্ষত বা সাধারণ পেটের সমস্যায় স্বাস্থ্যকেন্দ্রে যেতে পারেন।",
                    "অসুখ বুঝতে না পারলে স্বাস্থ্যকর্মীর পরামর্শ নিন।",
                    "সম্ভব হলে পুরনো প্রেসক্রিপশন বা চিকিৎসার কাগজ সঙ্গে নিন।",
                    "ওষুধ ও পরীক্ষার বিষয়ে স্বাস্থ্যকর্মীর পরামর্শ মেনে চলুন।",
                    "স্বাস্থ্যকর্মী সমস্যা গুরুতর বললে হাসপাতালে যান।"
                ]
            },

            {
                id: "doctor",
                title: "কখন ডাক্তার দেখাবেন",
                description:
                    "ডাক্তার অসুস্থতার কারণ বুঝে সঠিক চিকিৎসা ঠিক করতে সাহায্য করেন।",
                points: [
                    "জ্বর, ব্যথা, কাশি, বমি বা অন্য সমস্যা চলতে থাকলে বা বাড়লে ডাক্তার দেখান।",
                    "সমস্যা কখন শুরু হয়েছে তা ডাক্তারকে বলুন।",
                    "শুধু একটি নয়, সব গুরুত্বপূর্ণ লক্ষণ বলুন।",
                    "আগে কী ওষুধ খেয়েছেন তা জানান।",
                    "গুরুত্বপূর্ণ কোনো স্বাস্থ্য তথ্য গোপন করবেন না।"
                ]
            },

            {
                id: "pharmacy",
                title: "ওষুধ নিরাপদে নেওয়া",
                description:
                    "ওষুধের দোকান থেকে ওষুধ পাওয়া যায়, কিন্তু গুরুতর অসুস্থতায় ডাক্তার বা স্বাস্থ্যকর্মীর পরামর্শ জরুরি।",
                points: [
                    "ডাক্তারের প্রেসক্রিপশন অনুযায়ী ওষুধ কিনুন।",
                    "ওষুধ নেওয়ার আগে নাম এবং মেয়াদ শেষ হওয়ার তারিখ দেখুন।",
                    "ডাক্তার বা স্বাস্থ্যকর্মী যতটা এবং যে সময়ে খেতে বলেছেন সেইভাবে ওষুধ নিন।",
                    "নিজের ওষুধ অন্য কাউকে দেবেন না।",
                    "ওষুধ কীভাবে খেতে হবে বুঝতে না পারলে ফার্মাসিস্ট বা স্বাস্থ্যকর্মীকে জিজ্ঞাসা করুন।"
                ]
            },

            {
                id: "medical-information",
                title: "ডাক্তারকে কী বলবেন",
                description:
                    "পরিষ্কার ও সঠিক তথ্য দিলে ডাক্তার দ্রুত সমস্যাটি বুঝতে পারেন।",
                points: [
                    "ব্যক্তির কী সমস্যা হচ্ছে তা পরিষ্কার করে বলুন।",
                    "সমস্যা কখন শুরু হয়েছে বলুন।",
                    "সমস্যা কমছে না বাড়ছে তা বলুন।",
                    "নিয়মিত কোন ওষুধ খান তা জানান।",
                    "কোনো ওষুধে অ্যালার্জি থাকলে জানান।",
                    "এই সমস্যার জন্য আগে কী ওষুধ খেয়েছেন তাও জানান।"
                ]
            },

            {
                id: "medical-records",
                title: "চিকিৎসার কাগজপত্র রাখুন",
                description:
                    "গুরুত্বপূর্ণ চিকিৎসার কাগজ এক জায়গায় রাখলে জরুরি সময়ে সময় বাঁচে।",
                points: [
                    "ডাক্তারের প্রেসক্রিপশন, পরীক্ষার রিপোর্ট এবং গুরুত্বপূর্ণ চিকিৎসার কাগজ নিরাপদে রাখুন।",
                    "নিয়মিত খাওয়া ওষুধের একটি তালিকা রাখতে পারেন।",
                    "কোন ওষুধে অ্যালার্জি আছে তা লিখে রাখুন।",
                    "হাসপাতালে যাওয়ার সময় প্রয়োজনীয় কাগজ সঙ্গে নিন।",
                    "জরুরি যোগাযোগের নম্বর বাড়ির সবাইকে জানিয়ে রাখুন।"
                ]
            },

            {
                id: "medicines",
                title: "ওষুধ সঠিকভাবে খাওয়া",
                description:
                    "ভুল ওষুধ বা ভুল পরিমাণে ওষুধ খেলে ক্ষতি হতে পারে।",
                points: [
                    "ডাক্তার বা স্বাস্থ্যকর্মীর পরামর্শ অনুযায়ী ওষুধ খান।",
                    "কারও একই রকম সমস্যা আছে বলে তার ওষুধ নিজে থেকে খাবেন না।",
                    "সমস্যা দ্রুত ভালো না হলে নিজের ইচ্ছায় বেশি ওষুধ খাবেন না।",
                    "ওষুধ খাওয়ার আগে নাম দেখে নিন।",
                    "ওষুধ নিয়ে সন্দেহ থাকলে ডাক্তার বা ফার্মাসিস্টকে জিজ্ঞাসা করুন।"
                ]
            },

            {
                id: "children",
                title: "শিশুকে কখন ডাক্তার দেখাবেন",
                description:
                    "শিশুর শ্বাসকষ্ট, বেশি জ্বর বা শরীরে পানি কমে গেলে অবস্থা দ্রুত খারাপ হতে পারে।",
                points: [
                    "শিশুর শ্বাসকষ্ট হলে বা অস্বাভাবিকভাবে ঘুমিয়ে থাকলে দ্রুত চিকিৎসা সহায়তা নিন।",
                    "শিশু পানি খেতে না পারলে বা বারবার বমি করলে ডাক্তার দেখান।",
                    "বারবার ডায়রিয়া, বমি বা পানিশূন্যতার লক্ষণ দেখুন।",
                    "ডাক্তারের পরামর্শ ছাড়া শিশুকে বড়দের ওষুধ দেবেন না।",
                    "শিশু অজ্ঞান হলে বা খিঁচুনি হলে অবিলম্বে জরুরি সাহায্য নিন।"
                ]
            },

            {
                id: "pregnancy",
                title: "গর্ভাবস্থায় জরুরি সমস্যা",
                description:
                    "গর্ভাবস্থায় কিছু সমস্যা হলে মা ও শিশুর জন্য দ্রুত চিকিৎসা দরকার হতে পারে।",
                points: [
                    "গর্ভাবস্থায় বেশি রক্তপাত হলে দ্রুত চিকিৎসা সহায়তা নিন।",
                    "তীব্র পেটব্যথা, অজ্ঞান হওয়া বা খুব বেশি দুর্বল হলে দ্রুত সাহায্য নিন।",
                    "তীব্র মাথাব্যথা, চোখে ঝাপসা দেখা বা হঠাৎ শরীর ফুলে গেলে ডাক্তার দেখান।",
                    "প্রসবের সময় প্রশিক্ষিত স্বাস্থ্যকর্মী বা উপযুক্ত স্বাস্থ্যকেন্দ্রের সঙ্গে যোগাযোগ করুন।",
                    "গর্ভাবস্থার পরীক্ষা-নিরীক্ষার কাগজ ও প্রয়োজনীয় ওষুধ প্রস্তুত রাখুন।"
                ]
            },

            {
                id: "elderly",
                title: "বয়স্ক ব্যক্তির যত্ন",
                description:
                    "অসুস্থতা, পড়ে যাওয়া, দুর্বলতা বা হঠাৎ সমস্যা হলে বয়স্ক ব্যক্তির অতিরিক্ত যত্নের প্রয়োজন হতে পারে।",
                points: [
                    "দুর্বল বা মাথা ঘুরলে তাকে নিরাপদে বসান বা শুইয়ে দিন।",
                    "নিয়মিত ওষুধ ঠিক সময়ে খাচ্ছেন কিনা দেখুন।",
                    "গুরুতরভাবে পড়ে গেলে বা মাথায় আঘাত লাগলে ডাক্তার দেখান।",
                    "হঠাৎ বিভ্রান্তি, দুর্বলতা, কথা বলার সমস্যা বা শ্বাসকষ্ট হলে দ্রুত সাহায্য নিন।",
                    "গুরুতর অসুস্থ বয়স্ক ব্যক্তিকে একা রাখবেন না।"
                ]
            },

            {
                id: "fever",
                title: "জ্বর ও সাধারণ অসুস্থতা",
                description:
                    "বিভিন্ন কারণে জ্বর হতে পারে এবং কখনও কখনও ডাক্তার দেখানো দরকার হয়।",
                points: [
                    "ব্যক্তি পান করতে পারলে পর্যাপ্ত পরিষ্কার পানি ও তরল দিন।",
                    "বিশ্রাম নিতে দিন।",
                    "থার্মোমিটার থাকলে তাপমাত্রা মাপুন।",
                    "জ্বরের ওষুধ ডাক্তার বা স্বাস্থ্যকর্মীর পরামর্শ অনুযায়ী দিন।",
                    "জ্বর খুব বেশি হলে, কয়েক দিন থাকলে বা দুর্বলতা বাড়লে ডাক্তার দেখান।"
                ]
            },

            {
                id: "breathing",
                title: "শ্বাস নিতে সমস্যা",
                description:
                    "শ্বাসকষ্ট কখনও কখনও খুব দ্রুত গুরুতর হয়ে যেতে পারে।",
                points: [
                    "ব্যক্তিকে আরাম করে বসতে সাহায্য করুন।",
                    "ধোঁয়া, ধুলো ও ভিড় থেকে দূরে রাখুন।",
                    "ডাক্তার ইনহেলার বা শ্বাসের ওষুধ দিয়ে থাকলে নির্দেশ অনুযায়ী ব্যবহার করুন।",
                    "শ্বাস নিতে খুব কষ্ট হলে বা ঠিকমতো কথা বলতে না পারলে জরুরি চিকিৎসা সহায়তা নিন।",
                    "গুরুতর শ্বাসকষ্টের ব্যক্তিকে একা রাখবেন না।"
                ]
            },

            {
                id: "chest-pain",
                title: "বুকে ব্যথা",
                description:
                    "তীব্র বা দীর্ঘক্ষণ বুকে ব্যথা হৃদযন্ত্রের গুরুতর সমস্যার লক্ষণ হতে পারে।",
                points: [
                    "কাজ বন্ধ করে ব্যক্তিকে বিশ্রাম নিতে দিন।",
                    "তীব্র বা দীর্ঘক্ষণ বুকে ব্যথা হলে অবিলম্বে জরুরি চিকিৎসা সহায়তা নিন।",
                    "ব্যথা কখন শুরু হয়েছে তা জানান।",
                    "ব্যক্তি খুব দুর্বল হলে তাকে বেশি হাঁটতে বলবেন না।",
                    "জরুরি চিকিৎসা কর্মীদের নির্দেশ অনুসরণ করুন।"
                ]
            },

            {
                id: "follow-up",
                title: "ডাক্তার দেখানোর পরে",
                description:
                    "ডাক্তারের পরামর্শ মেনে চললে দ্রুত সুস্থ হতে সাহায্য করে এবং সমস্যা বাড়ার ঝুঁকি কমে।",
                points: [
                    "ডাক্তার যতদিন ওষুধ খেতে বলেছেন ততদিন ওষুধ খান।",
                    "খাবার, বিশ্রাম ও দৈনন্দিন কাজের বিষয়ে ডাক্তারের পরামর্শ মেনে চলুন।",
                    "প্রয়োজনীয় পরীক্ষা এবং আবার ডাক্তার দেখানোর তারিখ মনে রাখুন।",
                    "সমস্যা বাড়লে বা নতুন গুরুতর লক্ষণ দেখা দিলে আবার ডাক্তার দেখান।",
                    "ডাক্তারের প্রেসক্রিপশন ভবিষ্যতের জন্য রেখে দিন।"
                ]
            }
        ]
    }
};

export default healthcareGuidance;