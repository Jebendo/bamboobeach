// ========================================
// CALCULATOR
// ========================================

function calculateFee() {
    const f1 = parseFloat(document.getElementById('period').value) || 0;
    const f2 = parseFloat(document.getElementById('apartment').value) || 0;
    const f3 = parseFloat(document.getElementById('commercial').value) || 0;
    const f4 = parseFloat(document.getElementById('terrace').value) || 0;
    const f5 = parseFloat(document.getElementById('support').value) || 0;
    const f6 = parseFloat(document.getElementById('parking').value) || 0;
    const exchangeRate = parseFloat(document.getElementById('xrate').value) || 0;

    const totalUSD =
        f1 * (
            f2 * 1 +
            f3 * 1 +
            f4 * 0.2 +
            f5 * 0.2 +
            f6 * 0.2
        );

    let totalGEL = 0;

    if (exchangeRate > 0) {
        totalGEL = totalUSD * exchangeRate;
    }

    document.getElementById('usdAmount').textContent =
        "$ " + totalUSD.toFixed(2);

    document.getElementById('gelAmount').textContent =
        "₾ " + totalGEL.toFixed(2);
}


function clearFields() {

    const fields = [
        'period',
        'apartment',
        'commercial',
        'terrace',
        'support',
        'parking',
        'xrate'
    ];

    fields.forEach(id => {

        const el = document.getElementById(id);

        if (!el) return;

        if (el.tagName === 'SELECT') {
            el.selectedIndex = 0;
        } else {
            el.value = '';
        }

    });

    document.getElementById('gelAmount').textContent =
        "₾ 0.00";

    document.getElementById('usdAmount').textContent =
        "$ 0.00";
}



// ========================================
// FAQ DATA
// ========================================

const searchPlaceholders = {

    ka:
        "ძებნა... (მაგ: პარკინგი, საფასური, ტერასა)",

    en:
        "Search... (e.g. parking, fee, terrace)"
};



const faqsKA = [

    {
        question: "რა არის ამხანაგობა?",
        answer:
            "ამხანაგობა არის მრავალბინიან სახლში (როგორც საცხოვრებელი, ასევე, არასაცხოვრებელი მიზნებისათვის გამოყენებული ფართების) მესაკუთრეთა გაერთიანება, რომელიც მართავს საერთო ქონებას მისი ექსპლუატაციის, მოვლისა და განვითარების მიზნით"
    },

    {
        question: "ვინ არიან ამხანაგობის წევრები?",
        answer:
            "ამხანაგობის წევრები არიან მრავალბინიან სახლში სხვადასხვა ტიპის და ფუნქციის ფართობის, (მ.შ. ბინის, საოფისე, კომერციული, სავაჭრო, საპარკინგე და ა.შ.) მესაკუთრეები."
    },

    {
        question: "როგორ იმართება ამხანაგობა?",
        answer:
            "ამხანაგობის მართვის უმაღლესი ორგანოა წევრთა საერთო კრება, ხოლო ყოველდღიურ საქმიანობას, ურთიერთობას მესამე პირებთან, უძღვება საერთო კრების მიერ არჩეული თავმჯდომარე. კორპუსის ზომის, მიზნებისა და გამოწვევების შესაბამისად, თავმჯდომარეს შესაძლებელია ყავდეს ერთი ან რამდენიმე დამხმარე, მოადგილე."
    },

    {
        question:
            "როგორ ხდება გადაწყვეტილებების მიღება ამხანაგობაში?",

        answer:
            "ყველა მნიშვნელოვანი გადაწყვეტილება მიიღება წევრთა საერთო კრებაზე უბრალო უმრავლესობით (გარდა წესდების ცვლილებისა). კრება გადაწყვეტილებაუნარიანია წევრთა 2/3-ის დასწრების შემთხვევაში, ან განმეორებით კრებაზე მონაწილეთა რაოდენობის მიუხედავად. კრების გადაწყვეტილების შესრულება სავალდებულოა ამხანაგობის ყველა წევრისთვის, მათ შორის, მათთვისაც, ვინც კენჭისყრაში მონაწილეობა არ მიიღო;"
    },

    {
        question: "რა არის ამხანაგობის წესდება?",

        answer:
            "ამხანაგობის წესდება არის დოკუმენტი, რომელიც, საქართველოს ამხანაგობის შესახებ კანონთან ერთად, არეგულირებს და განსაზღვრავს ამხანაგობის მართვის წესს იმგვარად, რომ დაცული იყოს მობინადრეთა ინტერესები და უფლებები. წესდებას ამტკიცებს ამხანაგობის საერთო კრება."
    },

    {
        question:
            "გამჭვირვალეა თუ არა ამხანაგობის ხარჯები და შემოსავლები?",

        answer:
            "კორპუსის მოვლისა და განვითარებისთვის საჭირო ბიუჯეტს ადგენს საერთო კრება, ბინათმესაკუთრეთათვის სასურველი სტანდარტის შესაბამისად. ამ მიზნის შესასრულებლად, ამხანაგობის წევრები განისაზღვრავენ საერთო ბიუჯეტში შენატანის ოდენობას და გადახდის წესს. შესაბამისად, შემოსავლები და ხარჯები ამხანაგობის საქმიანობაში გამჭვირვალეა."
    },

    {
        question:
            "რა მომსახურებას მოიცავს ამხანაგობის მიერ დადგენილი წლიური გადასახადი -კვ.მ.-ზე 1 აშშ დოლარის ოდენობით?",

        answer:
            "წლიური გადასახადი მოიცავს კომპლექსის ჩვეულებრივი ფუნქციონირებისათვის სტანდარტულ მომსახურებებს: ადმინისტრატორის მომსახურება, დასუფთავება, დაცვა, ტექნიკური უზრუნველყოფის პერსონალი. მნიშვნელოვანია ვიცოდეთ, რომ წლიური გადასახადი არ მოიცავს რაიმე ტიპის შესაძლო სარემონტო სამუშაოებს, დანადგარების შეკეთებას ან განახლებას და მსგავს გაუთვალისწინებელ ხარჯებს."
    },

    {
        question:
            "როგორ უნდა გადაიხადოს მომსახურების საფასური?",

        answer:
            "მომსახურების წლიური საფასური იყოფა ორ ტრანშად. თითოეულ მესაკუთრეს ეკისრება ვალდებულება, მთლიანი თანხის ნახევარი გადაიხადოს არაუგვიანეს 1 თებერვლისა, ხოლო მეორე — იმავე წლის არაუგვიანეს 1 ივნისისა.\n\nგადასახდელი თანხის გაანგარიშების გასამარტივებლად შეგიძლიათ ეწვიოთ ვებგვერდს: https://bamboobeach.ge/, შეავსოთ შესაბამისი ველები და დაანგარიშებული თანხა ჩარიცხოთ ამხანაგობის თიბისი ბანკის ანგარიშზე: GE48TB7986336050100001\n\nგთხოვთ გაითვალისწინოთ, რომ ლარის ანგარიშზე თანხის გადარიცხვის შემთხვევაში კონვერტაცია უნდა განხორციელდეს გადახდის დღისათვის საქართველოს ეროვნული ბანკის ოფიციალურ ვებგვერდზე გამოქვეყნებული სავალუტო კურსის შესაბამისად."
    },

    {
        question:
            "რატომ უნდა გადავიხადო წლიური გადასახადი თუ ბინა გარემონტებული არ მაქვს?",

        answer:
            "საწევრო და სხვა არაგეგმიური გადასახადი ხმარდება კომპლექსის ტექნიკური და ფუნქციური, ასევე ვიზუალური მდგომარეობის შენარჩუნებას, გაუმჯობესებას. ასევე, კომპლექსის რეპუტაციიულ მდგრადობას და ბაზარზე თქვენი ქონების მაღალი ფასის შენარჩუნებას."
    },

    {
        question:
            "რა მოხდება თუ არ გადავიხდი ამხანაგობის მიერ დადგენილ წლიურ გადასახადს?",

        answer:
            "ამხანაგობის წევრთა საერთო კრების მიერ, კომპლექსში, ხარჯების დაფარვის წყაროდ დადგენილია მესაკუთრეთა აუცილებელი მოსაკრებელი.\n\nიმ შემთხვევაში, თუკი რომელიმე ფართის მფლობელი არ ასრულებს თავის ვალდებულებას მოსაკრებელთან დაკავშირებით, ამხანაგობას უფლება აქვს დააწესოს დამატებითი პირგასამტეხლო ყოველ ვადაგადაცილებულ დღეზე. ასევე, დაარეგისტრიროს დავალიანების ოდენობა საჯარო რეესტრის ეროვნულ სააგენტოში. ასევე, შეუზღუდოს ამხანაგობის წევრს ერთ, ან რამოდინემ სერვისზე წვდომა, შენატანის სრულად დაფარვამდე."
    },

    {
        question:
            "როგორ მოვიქცე თუ 2026 წლის მომსახურების თანხა, (ან მისი ნაწილი) უკვე გადახდილი მაქვს „რედკო მენეჯმენტისთვის“?",

        answer:
            "ამხანაგობის საერთო კრების მიერ დადგენილი გადასახადის გადახდა არის ამხანაგობის წევრის ვალდებულება. ამავე დროს, „რედკო მენეჯმენტი“ არ წარმოადგენს ამხანაგობის მიერ დაქირავებულ კომპანიას. შესაბამისად, გადახდილი თანხა ვერ ჩაითვლება თქვენი ვალდებულების შესრულებად.\n\nთქვენ, ერთი მხრივ, უნდა გადაიხადოთ დადგენილი მოსაკრებელი ამხანაგობის ანგარიშზე. მეორე მხრივ, გაქვთ უფლება დაუყოვნებლივ წერილობით მიმართოთ „რედკო მენეჯმენტს“, მოითხოვოთ თქვენს შორის გაფორმებული ხელშეკრულების შეწყვეტა (ასეთის არსებობის შემთხვევაში) და გადახდილი თანხის უკან დაბრუნება."
    },

    {
        question:
            "ვინ არის პასუხისმგებელი ამხანაგობის მართვაში შესვლამდე მწყობრიდან გამოსულ და დაზიანებულ დანადგარებსა და სისტემებზე? (კანალიზაცია, აუზი, ლიფტები, სახანძრო უსაფრთხოების და სხვ.)",

        answer:
            "ერთი მხრივ, კომპლექსში არსებული ყველა დანადგარი და სისტემა შერჩეული და დამონტაჟებულია დეველოპერი კომპანიის \"რედკო ციხისძირი\" მიერ. მეორე მხრივ, ექსპლუატაციის პერიოდი დიდწილად „რედკო მენეჯმენტის“ მართვას ემთხვევა. უდავოდ, პასუხისმგებლობა ეკისრება რედკოს.\n\nამიტომ, ნებისმიერი ხარჯი, რომელიც ამხანაგობის მიერ გაწეული იქნება იმისათვის, რომ შეძლოს შეუფერხებლად და სრულყოფილად ფუნქციონირება, დაზიანებული, მწყობრიდან გამოსული აპარატურის, სისტემის თუ დანადგარის შესაკეთებლად, ან გამოსაცვლელად, ანაზღაურებული უნდა იყოს რედკოს მიერ;"
    },

    {
        question:
            "ვინ არის \"რედკო ციხისძირი\" და „რედკო მენეჯმენტი“?",

        answer:
            "\"რედკო ციხისძირი\" არის დეველოპერული კომპანია, რომელმაც ააშენა ჩვენი კორპუსი, „ბამბუ ბიჩი“.\n\n\"რედკო მენეჯმენტი\" არის \"რედკო ციხისძირის\" მიერ დაფუძნებული კომპანია. იგი, 2024-2025 წლებში უზრუნველყოფდა კომპლექს „ბამბუ ბიჩ“-ის მართვას (დასუფთავება, გამწვანების მოვლა, უსაფრთხოების დაცვა, აუზის მოვლა და ა.შ.)"
    },

    {
        question:
            "რა პრეტენზია გვაქვს დეველოპერულ კომპანიასთან \"რედკო ციხისძირი\"?",

        answer:
            "კომპანიამ ორჯერ დაარღვია მშენებლობის დასრულების ვადა, რაც ჯამში ორი წლის დაგვიანებას გულისხმობს; მან ასევე, დაარღვია ხელშეკრულებით განსაზღვრული სხვა ვალდებულებების ვადები, მ.შ. განშლის რეგისტრაციის და მყიდველის მომავალ მესაკუთრედ რეგისტრაციის ვალდებულების ვადები;\n\nმშენებლობის განმავლობაში კომუნიკაცია იყო უკიდურესად გართულებული. კომპანიის წარმომადგენლები, უმეტეს შემთხვევაში, თავს არიდებდნენ მობინადრეებთან უკუკავშირს, პრეტენზიებზე სათანადო განმარტებების გაკეთებას.\n\nსაჯარო რეესტრის ამონაწერში შენობა დღემდე „მშენებარეს“ სტატუსითაა და არ არის შეყვანილი ექსპლუატაციაში.\n\nკომპლექსის კონცეფციის მნიშვნელოვანი კომპონენტები, ფაქტობრივი იერსახე, (მეორე ღია აუზი, პირსი) არ არის, ან არ არის თანხვედრაში შეთავაზებასთან (სარეკლამო რგოლებთან, პრეზენტაციებთან, მარკეტინგულ დოკუმენტაციასთან);\n\nშენობის მოსაპირკეთებელი მასალა (აივნები, გადახურვები, ჭერები) არ შეესაბამება შეთანხმებულ პროექტს, ან საერთოდ არ არის მოპირკეთებული;\n\nწყალარინების სისტემები გაუმართავია და წყალი უკონტროლოდ იღვრება;\n\nაივნების იატაკების დახრა და იზოლაცია არ შეესაბამება სტანდარტებს და წყალი აღწევს ბინებში, ასველებს კედლებს, ჭერს;\n\nწყალგაყვანილობისა და კანალიზაციის მილები უხარისხოდაა დამონტაჟებული და სისტემატურად ხდება გაჟონვა;\n\nკანალიზაციის ცენტრალური სისტემა და მაგისტრალთან დაერთება პრობლემურია. ძრავები გამოდის მწყობრიდან და არ ხდება ავზიდან ნარჩენების გადაქაჩვა. სეზონის განმავლობაში საჭირო ხდებოდა სპეციალური მანქანების მობილიზება;\n\nსაპარკინგე სივრცეში დაუსრულებელია იატაკის მოპირკეთება;\n\nსაპარკინგე სივრცეში გამუდმებით ფიქსირდება გაურკვეველი წარმომავლობის წყალი;\n\nკომპლექსის ეზოში, წიწვოვან ნარგავებს დააყარეს ჭარბი რაოდენობის მიწა, რამაც, გამოიწვია აირაციის შეფერხება და ხეების ხმობა. საჭირო გახდა მათი ნაწილის მოჭრა;\n\nადგილობრივი კლიმატური პირობების გათვალისწინებით არ მოაპირკეთა ფასადები, სადაც შეინიშნება ჯანმრთელობისთვის საზიანო სოკოვანი წარმონაქმნები;\n\nკომპანიამ პროცედურების დარღვევით და მესაკუთრეთა გვერდის ავლით მოიწვია კრება ბინათმესაკუთრეთა ამხანაგობის დაფუძნების და თავმჯდომარედ მათი წარმომადგენლის არჩევის მიზნით. შემოთავაზებული წესდება კომპანიას ათავისუფლებდა მის საკუთრებაში არსებულ ქონებაზე მოსაკრებელის გადახდის ვალდებულებისგან.\n\nკომპანიამ სცადა, საერთო სარგებლობის ფართების (რესეფშენი, კიბის უჯრედებამდე მისასვლელი ტერიტორიის, აუზისა და მიმდებარე ტერასის) დაჩქარებულად გასხვისება, მესამე პირზე გადაფორმება."
    },

    {
        question:
            "რა პრეტენზია გვაქვს \"რედკო მენეჯმენტთან\"?",

        answer:
            "წლიური გადასახადის ფასწარმოქმნის გაუმჭვირვალობა;\n\nფასის ზრდის გამოყენება შანთაჟის მექანიზმად;\n\nპანორამული ლიფტებში, 2 წლის განმავლოვაში შუშების უსუფთაობა;\n\nსეზონზე სარემონტო სამუშაოების, ხმაურისა და მტვერის გაუკონტროლებლობა;\n\nმოსახლეობის აზრის გაუთვალისწინებლად, აუზზე უცხო პირების დაშვება დამატებითი სარგებელის მიღების მიზნით;"
    },

    {
        question:
            "რა განსხვავეებაა ამხანაგობის მიერ კორპუსის მართვასა და \"რედკო მენეჯმენტის\" მიერ კორპუსის მართვას შორის?",

        answer:
            "ამხანაგობის ინტერესშია კორპუსის მობინადრეთა ინტერესების მიხედვით მართვა და განვითარება, ხოლო \"რედკო მენეჯმენტის\" ინტერესია ფინანსური სარგებელის გაზრდა.\n\nამხანაგობის შემთხვევაში შემოსავლებიცა და ხარჯებიც გამჭვირვალეა, ხოლო, რედკოს შემთხვევაში გაუმჭვირვალე."
    }

];



const faqsEN = [

    {
        question:
            "What is a Homeowners’ Association (HOA)?",

        answer:
            "A Homeowners’ Association (the “HOA”) is a union of property owners in a multi-unit building, including both residential and non-residential premises. The HOA is established for the purpose of managing, operating, maintaining, and developing the common property in accordance with applicable law and the interests of its members."
    },

    {
        question:
            "Who are the members of the HOA?",

        answer:
            "Members of the HOA are the owners of premises within the multi-unit building, regardless of the type or function of such premises, including, but not limited to, residential apartments, office units, commercial and retail spaces, and parking areas."
    },

    {
        question:
            "How is the HOA governed?",

        answer:
            "The supreme governing body of the HOA is the General Meeting of its members. The day-to-day management of the HOA and its representation in relations with third parties are carried out by a Chairperson elected by the General Meeting. Depending on the size of the building, its operational needs, and specific circumstances, the Chairperson may be assisted by one or more deputies or authorized representatives."
    },

    {
        question:
            "How are decisions adopted within the HOA?",

        answer:
            "All significant decisions are adopted by the General Meeting by a simple majority of votes, except in cases involving amendments to the Charter/By-Laws, where a different voting requirement may apply under the law or the Charter. A General Meeting shall be deemed quorate if at least two-thirds (2/3) of the members are present. If quorum is not achieved, a repeated meeting may be convened and shall be considered valid irrespective of the number of members present. Decisions adopted by the General Meeting are binding upon all members of the HOA, including those who did not attend the meeting or did not participate in the vote."
    },

    {
        question:
            "What is the HOA’s Charter (By-Laws)?",

        answer:
            "The Charter of the HOA is a document which, together with the Law of Georgia on Homeowners’ Associations, regulates and defines the rules governing the management of the HOA in a manner that ensures the protection of residents’ rights and interests. The Charter is approved by the General Meeting of the HOA."
    },

    {
        question:
            "Are the HOA’s revenues and expenditures transparent?",

        answer:
            "Yes. The budget necessary for the maintenance and development of the building/complex is determined and approved by the General Meeting, in accordance with the standards preferred by the property owners. Members determine the amount of their contributions to the common budget and the terms of payment. Accordingly, the HOA’s revenues and expenditures are transparent and subject to review by its members."
    },

    {
        question:
            "What services are covered by the annual fee of US $1 per square meter?",

        answer:
            "The annual fee of US $1 per square meter covers standard services required for the ordinary functioning of the complex, including: administrative/management services, cleaning of common areas, security services, technical maintenance personnel. The annual fee does not include major repair works, capital improvements, replacement of defective systems or equipment, or other extraordinary and unforeseen expenses."
    },

    {
        question:
            "How should the service fee be paid?",

        answer:
            "The annual service fee shall be divided into two installments. Each property owner is obligated to pay half of the total amount no later than February 1st, and the remaining half no later than June 1st of the same year.\n\nFor ease of calculation, you may visit the website: https://bamboobeach.ge/, complete the required fields, and transfer the calculated amount to the HOA’s bank account # GE48TB7986336050100001 at TBC Bank.\n\nPlease note that if payment is made in Georgian Lari (GEL), the currency conversion shall be carried out in accordance with the official exchange rate published by the National Bank of Georgia on the date of payment."
    },

    {
        question:
            "Why should I pay the annual fee if my apartment is not renovated?",

        answer:
            "The annual membership fee and any additional non-planned contributions are allocated to maintaining and improving the technical, functional, and visual condition of the complex as a whole. Such contributions also support the long-term reputation and sustainability of the complex and contribute to preserving the market value of each individual property, regardless of its renovation status."
    },

    {
        question:
            "What are the consequences of non-payment of the annual fee?",

        answer:
            "The mandatory contribution established by the General Meeting constitutes the primary source of funding for the complex’s operational expenses.\n\nIf an owner fails to fulfill the payment obligation, the HOA is entitled to act as follows: impose a late payment penalty for each day of delay, register the outstanding debt with the National Agency of Public Registry, and restrict the member’s access to one or more services until the contribution is fully paid."
    },

    {
        question:
            "What should I do if I have already paid the 2026 service fee (or part of it) to “Redco Management”?",

        answer:
            "Payment of the fee established by the General Meeting is a legal obligation of each member of the HOA. “Redco Management” is not a company engaged or authorized by the HOA. Therefore, any payment made to “Redco Management” cannot be considered as proper fulfillment of the member’s obligation toward the HOA.\n\nIn such a case: the member must pay the approved contribution to the HOA’s designated bank account, and the member has the right to submit a written request to “Redco Management” seeking termination of any existing agreement (if applicable) and requesting reimbursement of the amount paid."
    },

    {
        question:
            "Who is responsible for systems and equipment that were damaged or became non-operational before the HOA assumed management (e.g., sewage, pool, elevators, fire safety systems)?",

        answer:
            "All systems and equipment within the complex were selected and installed by the developer company “Redco Tsikhisdziri.” Furthermore, the operational period mainly coincided with management by “Redco Management.” Accordingly, responsibility for such deficiencies rests with Redco.\n\nAny expenses incurred by the HOA to ensure the uninterrupted and proper functioning of the complex, including the repair or replacement of damaged or defective systems and equipment, shall be subject to reimbursement by Redco."
    },

    {
        question:
            "Who are “Redco Tsikhisdziri” and “Redco Management”?",

        answer:
            "“Redco Tsikhisdziri” is the developer company that constructed the “Bamboo Beach” complex.\n\n“Redco Management” is a company established by “Redco Tsikhisdziri,” which provided management and maintenance services for the “Bamboo Beach” complex during the period 2024–2025, including cleaning, landscaping, security, and pool maintenance services."
    },

    {
        question:
            "What claims exist against the developer company “Redco Tsikhisdziri”?",

        answer:
            "The construction completion deadline was breached twice, resulting in an overall delay of approximately two years. Additional contractual deadlines, including those related to registration procedures and the registration of buyers as future owners, were also violated.\n\nCommunication during construction was significantly hindered, and company representatives frequently avoided responding to residents’ inquiries and complaints.\n\nAccording to the Public Registry extract, the building continues to have “under construction” status and has not been officially commissioned.\n\nKey components of the complex concept and actual appearance (including the second open pool and the pier) are either absent or inconsistent with promotional materials, presentations, and marketing documentation.\n\nExterior finishing materials (balconies, roofing, ceilings) do not correspond to the approved project or remain unfinished.\n\nDrainage systems are defective and allow uncontrolled water discharge.\n\nBalcony floor slope and waterproofing do not meet applicable standards, resulting in water intrusion and damage to interior walls and ceilings.\n\nWater supply and sewage pipes were installed with substandard quality and are subject to recurring leaks.\n\nThe central sewage system and its connection to the main line are defective; pumps fail and waste is not properly discharged, requiring seasonal intervention by specialized service vehicles.\n\nThe parking area floor finishing remains incomplete.\n\nWater of unidentified origin is continuously observed in the parking area.\n\nExcessive soil was placed around coniferous trees in the courtyard, impairing aeration and causing tree deterioration and removal.\n\nFacades were not properly finished considering local climatic conditions, resulting in mold formation harmful to health.\n\nA meeting was convened in violation of procedural requirements and without proper participation of owners for the purpose of establishing an HOA and electing the company’s representative as Chairperson; the proposed Charter would have exempted the company from paying fees on property owned by it.\n\nThe company attempted to transfer common areas (including the reception area, access areas to stairwells, the pool, and adjacent terrace) to a third party."
    },

    {
        question:
            "What claims exist against “Redco Management”?",

        answer:
            "The concerns include:\n\n- lack of transparency in the calculation of the annual fee\n- use of fee increases as a mechanism of pressure\n- failure to maintain cleanliness of the panoramic elevator glass for an extended period (approximately two years)\n- inadequate control of seasonal repair works, including excessive noise and dust\n- granting access to the pool to non-residents for additional profit without consideration of residents’ views."
    },

    {
        question:
            "What is the difference between management by the HOA and management by “Redco Management”?",

        answer:
            "The HOA operates in the collective interest of property owners and focuses on the proper management and sustainable development of the building. In contrast, “Redco Management,” as a private entity, operates primarily to increase financial profit.\n\nUnder the HOA’s governance, revenues and expenditures are transparent and subject to member oversight, whereas under “Redco Management,” financial operations lack transparency."
    }

];



let currentFaqs = faqsKA;
let currentLang = 'ka';



// ========================================
// CONTACT TRANSLATIONS
// ========================================

const contactTranslations = {

    ka: {

        title:
            "დამატებითი კითხვების არსებობის შემთხვევაში გთხოვთ მოგვმართოთ:",

        label_email_owners:
            "ამხანაგობის ელ.ფოსტა:",

        label_email_bene:
            "მომსახურების კომპანია „Bene Comfort“ ელ.ფოსტა:",

        label_admin_phone:
            "ადმინისტრაცია:",

        label_hotline:
            "ცხელი ხაზი:"
    },

    en: {

        title:
            "For any additional questions, please contact:",

        label_email_owners:
            "HOA Email:",

        label_email_bene:
            "Service Company “Bene Comfort” Email:",

        label_admin_phone:
            "Administration:",

        label_hotline:
            "Hotline:"
    }

};



// ========================================
// FAQ RENDERING
// ========================================

function renderFAQs(filtered = currentFaqs, term = '') {

    const list =
        document.getElementById('faq-list');

    if (!list) return;


    list.innerHTML = '';


    if (filtered.length === 0) {

        list.innerHTML =
            '<p style="text-align:center; color:#ddd; padding:3rem 1rem; text-shadow:1px 1px 2px #000;">შედეგი არ მოიძებნა. სცადეთ სხვა საძიებო სიტყვა!</p>';

        return;
    }


    filtered.forEach(faq => {

        const item =
            document.createElement('div');


        item.style.cssText =
            'background:rgba(255,255,255,0.92); border-radius:12px; margin-bottom:16px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.2);';


        const btn =
            document.createElement('button');


        btn.style.cssText =
            'width:100%; padding:18px 24px; text-align:left; font-size:1.15rem; font-weight:500; background:none; border:none; cursor:pointer; display:flex; justify-content:space-between; align-items:center; transition:background 0.25s; color:#222;';


        btn.onmouseover = () =>
            btn.style.background =
                'rgba(230,137,0,0.08)';


        btn.onmouseout = () =>
            btn.style.background =
                'none';


        let q =
            faq.question;


        if (term) {

            const re =
                new RegExp(
                    `(${escapeRegExp(term)})`,
                    'gi'
                );

            q =
                faq.question.replace(
                    re,
                    '<mark class="search-highlight">$1</mark>'
                );
        }


        btn.innerHTML =
            `${q} <span style="font-size:1.6rem; color:#e68900;">+</span>`;


        const ans =
            document.createElement('div');


        ans.style.cssText =
            'display:none; padding:0 24px 24px; color:#444; line-height:1.7; border-top:1px solid #eee;';


        let a =
            faq.answer;


        if (term) {

            const re =
                new RegExp(
                    `(${escapeRegExp(term)})`,
                    'gi'
                );

            a =
                faq.answer.replace(
                    re,
                    '<mark class="search-highlight">$1</mark>'
                );
        }


        ans.innerHTML = a;


        item.appendChild(btn);
        item.appendChild(ans);

        list.appendChild(item);


        btn.onclick = () => {

            const isOpen =
                ans.style.display !== 'none';


            document
                .querySelectorAll(
                    '#faq-list > div > div'
                )
                .forEach(d => {

                    d.style.display =
                        'none';

                    d.previousElementSibling
                        .querySelector(
                            'span:last-child'
                        )
                        .textContent =
                            '+';

                });


            if (!isOpen) {

                ans.style.display =
                    'block';

                btn
                    .querySelector(
                        'span:last-child'
                    )
                    .textContent =
                        '−';

            }

        };

    });

}



function escapeRegExp(string) {

    return string.replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&'
    );

}



// ========================================
// UI TRANSLATIONS
// ========================================

function updateUIText() {

    const searchInput =
        document.getElementById(
            'faq-search'
        );


    if (searchInput) {

        searchInput.placeholder =
            searchPlaceholders[currentLang] ||
            'Search...';

    }


    const heading =
        document.querySelector(
            '#faqs h2'
        );


    if (heading) {

        heading.textContent =
            currentLang === 'ka'
                ? 'ხშირად დასმული კითხვები'
                : 'Frequently Asked Questions';

    }


    const contactTitle =
        document.getElementById(
            'contact-title'
        );


    if (contactTitle) {

        contactTitle.textContent =
            contactTranslations[
                currentLang
            ].title;

    }


    const labelOwners =
        document.getElementById(
            'label-email-owners'
        );


    if (labelOwners) {

        labelOwners.textContent =
            contactTranslations[
                currentLang
            ].label_email_owners;

    }


    const labelBene =
        document.getElementById(
            'label-email-bene'
        );


    if (labelBene) {

        labelBene.textContent =
            contactTranslations[
                currentLang
            ].label_email_bene;

    }


    const labelAdmin =
        document.getElementById(
            'label-admin-phone'
        );


    if (labelAdmin) {

        labelAdmin.textContent =
            contactTranslations[
                currentLang
            ].label_admin_phone;

    }


    const labelHotline =
        document.getElementById(
            'label-hotline'
        );


    if (labelHotline) {

        labelHotline.textContent =
            contactTranslations[
                currentLang
            ].label_hotline;

    }

}



// ========================================
// FAQ INITIALIZATION
// ========================================

function initFAQs() {

    const search =
        document.getElementById(
            'faq-search'
        );


    if (!search) return;


    renderFAQs();
    updateUIText();


    let timeout;


    search.addEventListener(
        'input',
        e => {

            clearTimeout(timeout);


            timeout =
                setTimeout(() => {

                    const val =
                        e.target.value
                            .trim()
                            .toLowerCase();


                    const clearBtn =
                        document.getElementById(
                            'clear-search'
                        );


                    if (clearBtn) {

                        clearBtn.style.display =
                            val
                                ? 'block'
                                : 'none';

                    }


                    if (!val) {

                        return renderFAQs();

                    }


                    const filtered =
                        currentFaqs.filter(
                            f =>
                                f.question
                                    .toLowerCase()
                                    .includes(val) ||

                                f.answer
                                    .toLowerCase()
                                    .includes(val)
                        );


                    renderFAQs(
                        filtered,
                        val
                    );

                }, 300);

        }
    );


    const clearBtn =
        document.getElementById(
            'clear-search'
        );


    if (clearBtn) {

        clearBtn.onclick =
            () => {

                document
                    .getElementById(
                        'faq-search'
                    )
                    .value =
                        '';


                clearBtn.style.display =
                    'none';


                renderFAQs();

            };

    }

}



// ========================================
// OLD SITE INITIALIZATION
// ========================================

document.addEventListener(
    'DOMContentLoaded',
    () => {


        // Calculator

        const inputs =
            document.querySelectorAll(
                '#period, #apartment, #commercial, #terrace, #support, #parking, #xrate'
            );


        inputs.forEach(input => {

            input.addEventListener(
                'input',
                calculateFee
            );

            input.addEventListener(
                'change',
                calculateFee
            );

        });



        // Floating menu

        const dots =
            document.getElementById(
                'floatingDots'
            );


        if (dots) {

            dots.addEventListener(
                'click',
                e => {

                    e.stopPropagation();

                    dots.classList.toggle(
                        'active'
                    );

                }
            );


            document.addEventListener(
                'click',
                e => {

                    if (
                        !dots.contains(
                            e.target
                        )
                    ) {

                        dots.classList.remove(
                            'active'
                        );

                    }

                }
            );

        }



        // Old site navigation

        const actionItems =
            document.querySelectorAll(
                '.action-item'
            );


        actionItems.forEach(item => {

            item.addEventListener(
                'click',
                e => {

                    e.preventDefault();


                    const targetId =
                        item.getAttribute(
                            'data-target'
                        );


                    if (!targetId) return;


                    document
                        .querySelectorAll(
                            '.section'
                        )
                        .forEach(sec => {

                            sec.classList.remove(
                                'section-visible'
                            );

                            sec.classList.add(
                                'section-hidden'
                            );

                        });


                    const target =
                        document.getElementById(
                            targetId
                        );


                    if (target) {

                        target.classList.remove(
                            'section-hidden'
                        );

                        target.classList.add(
                            'section-visible'
                        );


                        target.scrollIntoView({

                            behavior:
                                'smooth',

                            block:
                                'start'

                        });


                        if (
                            targetId ===
                            'faqs'
                        ) {

                            initFAQs();

                        }

                    }


                    if (dots) {

                        dots.classList.remove(
                            'active'
                        );

                    }

                }
            );

        });



        // Old site language button

        const langToggleBtn =
            document.getElementById(
                'lang-toggle'
            );


        if (langToggleBtn) {

            langToggleBtn.textContent =
                currentLang.toUpperCase();


            langToggleBtn.addEventListener(
                'click',
                () => {

                    currentLang =
                        currentLang === 'ka'
                            ? 'en'
                            : 'ka';


                    currentFaqs =
                        currentLang === 'ka'
                            ? faqsKA
                            : faqsEN;


                    langToggleBtn.textContent =
                        currentLang.toUpperCase();


                    document.documentElement.lang =
                        currentLang;


                    document.body.classList.toggle(
                        'lang-en',
                        currentLang === 'en'
                    );


                    document.body.classList.toggle(
                        'lang-ka',
                        currentLang === 'ka'
                    );


                    updateUIText();


                    const faqsSection =
                        document.getElementById(
                            'faqs'
                        );


                    if (
                        faqsSection &&
                        faqsSection.classList.contains(
                            'section-visible'
                        )
                    ) {

                        renderFAQs(
                            currentFaqs
                        );


                        const search =
                            document.getElementById(
                                'faq-search'
                            );


                        if (search) {

                            search.value =
                                '';

                        }

                    }


                    if (dots) {

                        dots.classList.remove(
                            'active'
                        );

                    }

                }
            );

        }


        updateUIText();

    }
);



// ========================================
// ENTRY GATE
// Guest / Owner + Georgian / English
// ========================================

(() => {

    const intro =
        document.getElementById(
            'video-intro'
        );


    const englishLayer =
        document.querySelector(
            '.english'
        );


    const guestTour =
        document.getElementById(
            'guest-tour'
        );

        const homeButton =
    document.getElementById(
        'home-button'
    );


const introVideo =
    document.getElementById(
        'intro-video'
    );


    const ownerPlaceholder =
        document.getElementById(
            'owner-placeholder'
        );


    const ownerPlaceholderTitle =
        document.getElementById(
            'owner-placeholder-title'
        );


    const roleButtons =
        document.querySelectorAll(
            '.role-hitbox'
        );



    // ========================================
    // DETECT CURRENTLY DISPLAYED LANGUAGE
    // ========================================

    function getCurrentLanguage() {

        if (!englishLayer) {
            return 'ka';
        }


        const animations =
            englishLayer.getAnimations();


        const circleAnimation =
            animations.find(
                animation =>
                    animation.animationName ===
                    'circleMove'
            );


        /*
            Before the animation begins,
            Georgian is visible.
        */

        if (!circleAnimation) {
            return 'ka';
        }


        const timing =
            circleAnimation
                .effect
                .getComputedTiming();


        const progress =
            timing.progress;


        /*
            During initial animation delay,
            Georgian is visible.
        */

        if (progress === null) {
            return 'ka';
        }


        /*
            Circle is completely over text.

            English is fully visible.
        */

        if (
            progress >= 0.50 &&
            progress <= 0.70
        ) {

            return 'en';

        }


        /*
            Circle is completely above text.

            Georgian is fully visible.
        */

        if (
            progress <= 0.30 ||
            progress >= 0.90
        ) {

            return 'ka';

        }


        /*
            Circle is moving.

            We do not choose a language
            until one is fully displayed.
        */

        return null;

    }



    // ========================================
    // ENTER SITE
    // ========================================

    function enterSite(
        role,
        language
    ) {


        // Save choice

        localStorage.setItem(
            'bb-role',
            role
        );


        localStorage.setItem(
            'bb-language',
            language
        );


        document.documentElement.lang =
            language;


            if (homeButton) {

    homeButton.classList.add(
        'active'
    );

}


        // ========================================
        // TRANSLATE GUEST TOUR
        // ========================================

        document
            .querySelectorAll(
                '.translatable'
            )
            .forEach(element => {


                if (language === 'ka') {

                    element.textContent =
                        element.dataset.ka;

                } else {

                    element.textContent =
                        element.dataset.en;

                }


            });

            window.dispatchEvent(
    new CustomEvent(
        'bb-language-change',
        {
            detail: {
                language: language
            }
        }
    )
);



        // ========================================
        // HIDE OLD WEBSITE IMMEDIATELY
        //
        // This happens while the video intro
        // is still covering the screen.
        // ========================================

        const oldHeader =
            document.querySelector(
                'body > header'
            );


        const oldMain =
            document.querySelector(
                'body > main'
            );


        const oldFooter =
            document.querySelector(
                'body > footer'
            );


        const oldMenu =
            document.querySelector(
                'body > .floating-dots'
            );


        if (oldHeader) {

            oldHeader.style.display =
                'none';

        }


        if (oldMain) {

            oldMain.style.display =
                'none';

        }


        if (oldFooter) {

            oldFooter.style.display =
                'none';

        }


        if (oldMenu) {

            oldMenu.style.display =
                'none';

        }



        // ========================================
        // PREPARE DESTINATION
        // BEFORE VIDEO FADES
        // ========================================

        if (
            role === 'guest' &&
            guestTour
        ) {


            guestTour.classList.add(
                'active'
            );


            guestTour.scrollTop = 0;

        }



        if (
            role === 'owner' &&
            ownerPlaceholder
        ) {


            ownerPlaceholder.classList.add(
                'active'
            );


            if (
                ownerPlaceholderTitle
            ) {


                ownerPlaceholderTitle.textContent =
                    language === 'ka'
                        ? 'მესაკუთრის სივრცე'
                        : 'Owner Area';

            }

        }



        // ========================================
        // FADE VIDEO INTRO
        // ========================================

        if (intro) {

            requestAnimationFrame(
                () => {

                    intro.classList.add(
                        'leaving'
                    );

                }
            );


            /*
                After fade is finished,
                remove intro completely.
            */

            setTimeout(
                () => {

                    intro.style.display =
                        'none';

                },
                800
            );

        }

    }



    //=======================
    // ========================================
// RETURN TO WELCOME / HOME
// ========================================

// ========================================
// RETURN TO WELCOME / HOME
// ========================================

if (homeButton) {

    homeButton.addEventListener(
        'click',
        () => {


          window.dispatchEvent(
            new CustomEvent(
            'bb-home-reset'
            )
        );


            // ========================================
            // COVER EVERYTHING WITH INTRO FIRST
            // ========================================

            if (intro) {

                intro.classList.remove(
                    'leaving'
                );

                intro.style.display =
                    'block';

            }


            // Force browser to paint intro
            // before anything moves behind it.

            if (intro) {

                void intro.offsetWidth;

            }


            // ========================================
            // RESET GUEST TOUR BEHIND INTRO
            // ========================================

            if (guestTour) {

                const previousScrollBehavior =
                    guestTour.style.scrollBehavior;


                guestTour.style.scrollBehavior =
                    'auto';


                guestTour.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'auto'
                });


                guestTour.classList.remove(
                    'active'
                );


                requestAnimationFrame(
                    () => {

                        guestTour.style.scrollBehavior =
                            previousScrollBehavior;

                    }
                );

            }


            // ========================================
            // HIDE OWNER AREA
            // ========================================

            if (ownerPlaceholder) {

                ownerPlaceholder.classList.remove(
                    'active'
                );

            }


            // ========================================
            // HIDE HOME BUTTON
            // ========================================

            homeButton.classList.remove(
                'active'
            );


            // ========================================
            // RESTART WAVES VIDEO
            // ========================================

            if (introVideo) {

                try {

                    introVideo.currentTime =
                        0;


                    const playPromise =
                        introVideo.play();


                    if (playPromise) {

                        playPromise.catch(
                            () => {}
                        );

                    }

                }

                catch (error) {

                    // Ignore playback reset errors

                }

            }


            // ========================================
            // RESTART LANGUAGE CIRCLE
            // ========================================

            const languageLayers =
                document.querySelectorAll(
                    '.english, .georgian'
                );


            languageLayers.forEach(
                layer => {

                    layer.style.animation =
                        'none';

                    layer.style.webkitAnimation =
                        'none';

                }
            );


            if (intro) {

                void intro.offsetWidth;

            }


            languageLayers.forEach(
                layer => {

                    layer.style.animation =
                        '';

                    layer.style.webkitAnimation =
                        '';

                }
            );

        }
    );

}
    //=======================


    // ========================================
    // GUEST / OWNER BUTTONS
    // ========================================

    roleButtons.forEach(button => {


        button.addEventListener(
            'click',
            () => {


                const role =
                    button.dataset.role;


                const language =
                    getCurrentLanguage();


                /*
                    If the circular transition
                    is moving right now,
                    ignore the click.
                */

                if (!language) {
                    return;
                }


                enterSite(
                    role,
                    language
                );

            }
        );


    });

})();


// ========================================
// ENTERTAINMENT ENGINE
// ========================================

(() => {


  // ========================================
  // CONTENT
  //
  // THIS is where you will later
  // replace your images.
  // ========================================

 const entertainmentData = {

  pool: {

    icon:
      'images/guest/entertainment/pool/icon.png',

    fallback:
      '🦩',

    en: {
      eyebrow:
        'Poolside',

      title:
        'Pool & Sun',

      text:
        'Slow mornings, warm afternoons and nowhere you need to be.'
    },

    ka: {
      eyebrow:
        'აუზთან',

      title:
        'აუზი და მზე',

      text:
        'მშვიდი დილა, თბილი შუადღე და ადგილი, სადაც არსად გეჩქარება.'
    },

    images: [
      'images/guest/entertainment/pool/pool-1.png',
      'images/guest/entertainment/pool/pool-2.png',
      'images/guest/entertainment/pool/pool-3.png'
    ]

  },


  bar: {

    icon:
      'images/guest/entertainment/bar/icon.png',

    fallback:
      '🍹',

    en: {
      eyebrow:
        'Drinks & Evenings',

      title:
        'Bar',

      text:
        'Cold drinks, warm evenings and somewhere to stay longer than planned.'
    },

    ka: {
      eyebrow:
        'საღამო და სასმელები',

      title:
        'ბარი',

      text:
        'გრილი სასმელები, თბილი საღამოები და ადგილი, სადაც დაგეგმილზე დიდხანს დარჩები.'
    },

    images: [
      'images/guest/entertainment/bar/bar-1.png',
      'images/guest/entertainment/bar/bar-2.png',
      'images/guest/entertainment/bar/bar-3.png'
    ]

  },


  sea: {

    icon:
      'images/guest/entertainment/sea/icon.png',

    fallback:
      '🐚',

    en: {
      eyebrow:
        'Black Sea',

      title:
        'The Sea',

      text:
        'The sound, the air and the horizon are always just a few steps away.'
    },

    ka: {
      eyebrow:
        'შავი ზღვა',

      title:
        'ზღვა',

      text:
        'ზღვის ხმა, ჰაერი და ჰორიზონტი ყოველთვის რამდენიმე ნაბიჯშია.'
    },

    images: [
      'images/guest/entertainment/sea/sea-1.png',
      'images/guest/entertainment/sea/sea-2.png',
      'images/guest/entertainment/sea/sea-3.png'
    ]

  },


  hiking: {

    icon:
      'images/guest/entertainment/hiking/icon.png',

    fallback:
      '🥾',

    en: {
      eyebrow:
        'Beyond the Beach',

      title:
        'Explore Adjara',

      text:
        'Waterfalls, mountain trails, historic ruins and unexpected places beyond the coast.'
    },

    ka: {
      eyebrow:
        'პლაჟის მიღმა',

      title:
        'აღმოაჩინე აჭარა',

      text:
        'ჩანჩქერები, მთის ბილიკები, ისტორიული ნანგრევები და საინტერესო ადგილები სანაპიროს მიღმა.'
    },

    images: [
      'images/guest/entertainment/hiking/hiking-1.png',
      'images/guest/entertainment/hiking/hiking-2.png',
      'images/guest/entertainment/hiking/hiking-3.png'
    ]

  }

};


// ========================================
// ENTERTAINMENT DETAIL CONTENT
// ========================================

const entertainmentDetailData = {

  pool: {

    en: {
      eyebrow:
        'Poolside',

      title:
        'Pool & Sun',

      text:
        'Take the day slowly. Spend the morning beside the water, cool off whenever you like, and let the Black Sea air do the rest.'
    },

    ka: {
      eyebrow:
        'აუზთან',

      title:
        'აუზი და მზე',

      text:
        'გაატარეთ დღე მშვიდად. დილა აუზთან, გამაგრილებელი წყალი და შავი ზღვის ჰაერი — ადგილი, სადაც დროის შეგრძნება მარტივად იკარგება.'
    }

  },


  bar: {

    en: {
      eyebrow:
        'Drinks & Evenings',

      title:
        'The Bar',

      text:
        'A place for a cold drink, conversation and long summer evenings when nobody feels like going inside yet.'
    },

    ka: {
      eyebrow:
        'საღამო და სასმელები',

      title:
        'ბარი',

      text:
        'ცივი სასმელი, მეგობრული საუბარი და გრძელი ზაფხულის საღამოები — როცა ოთახში დაბრუნება ჯერ არავის უნდა.'
    }

  },


  sea: {

    en: {
      eyebrow:
        'Black Sea',

      title:
        'By the Sea',

      text:
        'The coastline is part of the experience. Walk down toward the water, listen to the waves and watch the light change over the Black Sea.'
    },

    ka: {
      eyebrow:
        'შავი ზღვა',

      title:
        'ზღვასთან',

      text:
        'სანაპირო Bamboo Beach-ის გამოცდილების ნაწილია. გაისეირნეთ ზღვისკენ, მოუსმინეთ ტალღებს და უყურეთ როგორ იცვლება შუქი შავ ზღვაზე.'
    }

  },


  hiking: {

    en: {
      eyebrow:
        'Beyond Bamboo Beach',

      title:
        'Explore Adjara',

      text:
        'Leave the coast for a while and discover the other side of Adjara — green hills, waterfalls, trails and historic places waiting beyond the beach.'
    },

    ka: {
      eyebrow:
        'Bamboo Beach-ის მიღმა',

      title:
        'აღმოაჩინე აჭარა',

      text:
        'ცოტა ხნით დატოვეთ სანაპირო და აღმოაჩინეთ აჭარის მეორე მხარე — მწვანე მთები, ჩანჩქერები, ბილიკები და ისტორიული ადგილები.'
    }

  }

};


  // ========================================
  // ELEMENTS
  // ========================================

  const section =
    document.getElementById(
      'entertainment'
    );


  if (!section) {
    return;
  }


  const stage =
    section.querySelector(
      '.ent-stage'
    );


  const eyebrow =
    document.getElementById(
      'ent-eyebrow'
    );


  const title =
    document.getElementById(
      'ent-stage-title'
    );


  const text =
    document.getElementById(
      'ent-stage-text'
    );


  const photoElements = [

    document.getElementById(
      'ent-photo-1'
    ),

    document.getElementById(
      'ent-photo-2'
    ),

    document.getElementById(
      'ent-photo-3'
    )

  ];


  const selectors =
    section.querySelectorAll(
      '.ent-selector'
    );


// ========================================
// DETAIL OVERLAY ELEMENTS
// ========================================

const detailOverlay =
  document.getElementById(
    'ent-detail-overlay'
  );


const detailClose =
  document.getElementById(
    'ent-detail-close'
  );


const detailBack =
  document.getElementById(
    'ent-detail-back'
  );


const detailEyebrow =
  document.getElementById(
    'ent-detail-eyebrow'
  );


const detailTitle =
  document.getElementById(
    'ent-detail-title'
  );


const detailText =
  document.getElementById(
    'ent-detail-text'
  );


const detailPhotos = [

  document.getElementById(
    'ent-detail-photo-1'
  ),

  document.getElementById(
    'ent-detail-photo-2'
  ),

  document.getElementById(
    'ent-detail-photo-3'
  )

];   



  // ========================================
  // LANGUAGE
  // ========================================

  function getLanguage() {

    return (
      localStorage.getItem(
        'bb-language'
      ) ||

      document.documentElement.lang ||

      'ka'
    );

  }



  // ========================================
  // SET PLACEHOLDER / IMAGE
  // ========================================

  function setPhoto(
    element,
    imagePath,
    number
  ) {

    if (!element) return;


    if (imagePath) {

      element.style.backgroundImage =
        `url("${imagePath}")`;


      const placeholder =
        element.querySelector(
          'span'
        );


      if (placeholder) {

        placeholder.style.display =
          'none';

      }

    }

    else {

      element.style.backgroundImage =
        'none';


      const placeholder =
        element.querySelector(
          'span'
        );


      if (placeholder) {

        placeholder.style.display =
          'block';


        placeholder.textContent =
          `IMAGE ${number}`;

      }

    }

  }



  // ========================================
  // RENDER EXPERIENCE
  // ========================================

  function showExperience(
    experience
  ) {

    const data =
      entertainmentData[
        experience
      ];


    if (!data) return;


    const language =
      getLanguage();


    const copy =
      data[
        language === 'ka'
          ? 'ka'
          : 'en'
      ];



    // Fade current content out

    stage.classList.add(
      'is-changing'
    );


    setTimeout(
      () => {


        eyebrow.textContent =
          copy.eyebrow;


        title.textContent =
          copy.title;


        text.textContent =
          copy.text;



        data.images.forEach(
          (imagePath, index) => {

            setPhoto(
              photoElements[index],
              imagePath,
              index + 1
            );

          }
        );



        // Fade new content in

        stage.classList.remove(
          'is-changing'
        );


      },
      300
    );



    // Update selected icon

    selectors.forEach(
      button => {


        const selected =
          button.dataset.experience ===
          experience;


        button.classList.toggle(
          'active',
          selected
        );


        button.setAttribute(
          'aria-pressed',
          selected
            ? 'true'
            : 'false'
        );


      }
    );

  }



  // ========================================
  // SELECTOR ICON IMAGES
  // ========================================

  Object.entries(
    entertainmentData
  )
  .forEach(
    ([key, data]) => {


      const icon =
        document.getElementById(
          `ent-icon-${key}`
        );


      if (!icon) return;


      const fallback =
        icon.querySelector(
          '.ent-fallback'
        );


      if (data.icon) {

        icon.style.backgroundImage =
          `url("${data.icon}")`;


        if (fallback) {

          fallback.style.display =
            'none';

        }

      }

      else {

        icon.style.backgroundImage =
          'none';


        if (fallback) {

          fallback.style.display =
            'block';


          fallback.textContent =
            data.fallback;

        }

      }

    }
  );


    // ========================================
// OPEN ENTERTAINMENT DETAIL
// ========================================

function openEntertainmentDetail(
  experience
) {

  const baseData =
    entertainmentData[
      experience
    ];


  const detailData =
    entertainmentDetailData[
      experience
    ];


  if (
    !baseData ||
    !detailData ||
    !detailOverlay
  ) {
    return;
  }


  const language =
    getLanguage();


  const copy =
    detailData[
      language === 'ka'
        ? 'ka'
        : 'en'
    ];


  detailEyebrow.textContent =
    copy.eyebrow;


  detailTitle.textContent =
    copy.title;


  detailText.textContent =
    copy.text;



  baseData.images.forEach(
    (imagePath, index) => {

      const photo =
        detailPhotos[index];


      if (!photo) return;


      photo.style.backgroundImage =
        `url("${imagePath}")`;

    }
  );


  /*
    Translate Back button
  */

  if (detailBack) {

    detailBack.textContent =
      language === 'ka'
        ? '← გართობა'
        : '← Entertainment';

  }



  detailOverlay.setAttribute(
    'aria-hidden',
    'false'
  );


  /*
    Force initial hidden photo position
    before entrance animation.
  */

  detailOverlay.classList.remove(
    'active'
  );


  void detailOverlay.offsetWidth;


  detailOverlay.classList.add(
    'active'
  );

}



// ========================================
// CLOSE ENTERTAINMENT DETAIL
// ========================================

function closeEntertainmentDetail() {

  if (!detailOverlay) {
    return;
  }


  detailOverlay.classList.remove(
    'active'
  );


  detailOverlay.setAttribute(
    'aria-hidden',
    'true'
  );

}



// Close buttons

if (detailClose) {

  detailClose.addEventListener(
    'click',
    closeEntertainmentDetail
  );

}


if (detailBack) {

  detailBack.addEventListener(
    'click',
    closeEntertainmentDetail
  );

}



/*
  ESC key
*/

document.addEventListener(
  'keydown',
  event => {

    if (
      event.key === 'Escape' &&
      detailOverlay &&
      detailOverlay.classList.contains(
        'active'
      )
    ) {

      closeEntertainmentDetail();

    }

  }
);


  // ========================================
  // CLICK / TAP
  // ========================================

  
  selectors.forEach(
  button => {


    // ========================================
    // SELECT EXPERIENCE
    // ========================================

    button.addEventListener(
      'click',
      () => {

        showExperience(
          button.dataset.experience
        );

      }
    );



    // ========================================
    // SEE MORE
    // ========================================

    const seeMore =
      button.querySelector(
        '.ent-hover'
      );


    if (seeMore) {

      seeMore.addEventListener(
        'click',
        event => {

          /*
            Do not let this click
            become the regular selector click.
          */

          event.stopPropagation();


          const experience =
            button.dataset.experience;


          /*
            Make selected state match
            the detail we're opening.
          */

          showExperience(
            experience
          );


          openEntertainmentDetail(
            experience
          );

        }
      );

    }


  }
);



  // ========================================
  // LANGUAGE LABELS
  // ========================================

  function updateSelectorLabels() {

    const language =
      getLanguage();


    section
      .querySelectorAll(
        '.ent-label'
      )
      .forEach(label => {


        label.textContent =
          language === 'ka'
            ? label.dataset.ka
            : label.dataset.en;


      });

  }


// ========================================
// UPDATE ENTERTAINMENT WHEN LANGUAGE CHANGES
// ========================================

window.addEventListener(
  'bb-language-change',
  () => {

    updateSelectorLabels();


    const activeButton =
      section.querySelector(
        '.ent-selector.active'
      );


    const activeExperience =
      activeButton
        ? activeButton.dataset.experience
        : 'pool';


    showExperience(
      activeExperience
    );

  }
);

  
// ========================================
// ENTERTAINMENT ICON ENTRANCE
// ========================================

const guestTour =
  document.getElementById(
    'guest-tour'
  );


let entertainmentIsInside =
  false;


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {


          // Completely left Entertainment

          if (!entry.isIntersecting) {

            entertainmentIsInside =
              false;


            /*
              Reset WITHOUT animation.

              This prevents the little
              twitch when returning.
            */

            section.classList.add(
              'icons-resetting'
            );


            section.classList.remove(
              'icons-ready',
              'enter-up',
              'enter-down'
            );


            void section.offsetWidth;


            section.classList.remove(
              'icons-resetting'
            );


            return;
          }



          // Enter only once per visit

          if (
            entry.intersectionRatio >= 0.35 &&
            !entertainmentIsInside
          ) {

            entertainmentIsInside =
              true;


            const comingFromBelow =
              guestTour &&
              guestTour.scrollTop >
                section.offsetTop;



            /*
              Put icons into starting
              position instantly.
            */

            section.classList.add(
              'icons-resetting'
            );


            section.classList.remove(
              'icons-ready',
              'enter-up',
              'enter-down'
            );


            section.classList.add(

              comingFromBelow
                ? 'enter-down'
                : 'enter-up'

            );


            /*
              Force browser to accept
              starting position BEFORE
              animation begins.
            */

            void section.offsetWidth;


            section.classList.remove(
              'icons-resetting'
            );



            /*
              Now animate cleanly into
              final position.
            */

            requestAnimationFrame(
              () => {

                section.classList.add(
                  'icons-ready'
                );

              }
            );

          }

        }
      );

    },

    {
      root:
        guestTour || null,

      threshold:
        [0, 0.35]
    }

  );


observer.observe(
  section
);

 
  // ========================================
  // INITIAL STATE
  // ========================================

  updateSelectorLabels();

  showExperience(
    'pool'
  );


})();


// ========================================
// APARTMENTS ENGINE
// Search + inquiry share the same date-range engine
// ========================================

(() => {

  // ========================================
  // SAMPLE LISTINGS
  // ========================================

  const apartmentData = [
    {
      id: 'apt-01',
      reference: 'BB-SAMPLE-01',
      folder: 'images/guest/apartments/apt-01',
      coverNumber: 1,
      price: 95,
      guests: 4,
      bedrooms: 2,
      size: 62,
      bathrooms: 1,
      views: ['sea'],
      amenities: [
        'wifi',
        'ac',
        'parking',
        'balcony',
        'kitchen',
        'washer',
        'elevator',
        'perks'
      ],
      en: {
        view: 'Sea view',
        title: 'Sea View Residence',
        description:
          'A bright coastal apartment with generous living space and views toward the Black Sea.'
      },
      ka: {
        view: 'ზღვის ხედი',
        title: 'აპარტამენტი ზღვის ხედით',
        description:
          'ნათელი და კომფორტული აპარტამენტი ფართო საცხოვრებელი სივრცითა და შავი ზღვის ხედით.'
      }
    },
    {
      id: 'apt-02',
      reference: 'BB-SAMPLE-02',
      folder: 'images/guest/apartments/apt-02',
      coverNumber: 1,
      price: 110,
      guests: 3,
      bedrooms: 1,
      size: 51,
      bathrooms: 1,
      views: ['sea',
        'mountain'
      ],
      amenities: [
        'wifi',
        'ac',
        'balcony',
        'kitchen',
        'elevator'
      ],
      en: {
        view: 'Panorama view',
        title: 'Panorama Residence',
        description:
          'A relaxed modern apartment designed around open views, natural light and easy seaside living.'
      },
      ka: {
        view: 'პანორამული ხედი',
        title: 'პანორამული აპარტამენტი',
        description:
          'თანამედროვე აპარტამენტი ღია ხედებით, ბუნებრივი განათებით და ზღვისპირა დასვენებისთვის შექმნილი სივრცით.'
      }
    },
    {
      id: 'apt-03',
      reference: 'BB-SAMPLE-03',
      folder: 'images/guest/apartments/apt-03',
      coverNumber: 1,
      price: 85,
      guests: 4,
      bedrooms: 2,
      size: 68,
      bathrooms: 1,
      views: ['mountain'],
      amenities: [
        'wifi',
        'ac',
        'parking',
        'kitchen',
        'washer',
        'elevator',
        'pets'
      ],
      en: {
        view: 'mountain view',
        title: 'mountain Residence',
        description:
          'A comfortable residence overlooking the green side of Bamboo Beach, ideal for slower family stays.'
      },
      ka: {
        view: 'მთის ხედი',
        title: 'აპარტამენტი მთის ხედით',
        description:
          'კომფორტული აპარტამენტი Bamboo Beach-ის გამწვანებული მხარის ხედით, მშვიდი ოჯახური დასვენებისთვის.'
      }
    },
    {
      id: 'apt-04',
      reference: 'BB-SAMPLE-04',
      folder: 'images/guest/apartments/apt-04',
      coverNumber: 2,
      price: 105,
      guests: 5,
      bedrooms: 2,
      size: 74,
      bathrooms: 2,
      views: [
              'sea',
              'mountain'
            ],
      amenities: [
        'wifi',
        'ac',
        'parking',
        'balcony',
        'kitchen',
        'washer',
        'elevator',
        'perks'
      ],
      en: {
        view: 'Panorama view',
        title: 'Pano Residence',
        description:
          'A spacious apartment for longer stays, combining comfortable interiors with the atmosphere of the coast.'
      },
      ka: {
        view: 'პანორამული ხედი',
        title: 'პანო აპარტამენტი',
        description:
          'ფართო აპარტამენტი ხანგრძლივი დასვენებისთვის, კომფორტული ინტერიერითა და სანაპიროს ატმოსფეროთი.'
      }
    }
  ];


  // ========================================
  // SAMPLE AVAILABILITY
  // ========================================

  const sampleUnavailableDates = {
    'apt-01': [
      '2026-09-14',
      '2026-09-15',
      '2026-09-16',
      '2026-09-25',
      '2026-09-26'
    ],
    'apt-02': [
      '2026-09-18',
      '2026-09-19',
      '2026-09-20',
      '2026-10-03'
    ],
    'apt-03': [
      '2026-09-11',
      '2026-09-12',
      '2026-10-08',
      '2026-10-09'
    ],
    'apt-04': [
      '2026-09-22',
      '2026-09-23',
      '2026-09-24',
      '2026-10-14'
    ]
  };


  // ========================================
  // MAIN APARTMENT ELEMENTS
  // ========================================

  const section =
    document.getElementById('apartments');

  if (!section) {
    return;
  }

  const track =
    document.getElementById('apt-track');

  const viewport =
    document.getElementById('apt-viewport');

  const prevButton =
    document.getElementById('apt-prev');

  const nextButton =
    document.getElementById('apt-next');

  const position =
    document.getElementById('apt-position');


  // ========================================
  // BROWSER ELEMENTS
  // ========================================

  const browseOpen =
    document.getElementById('apt-browse-open');

  const browser =
    document.getElementById('apt-browser');

  const browserClose =
    document.getElementById('apt-browser-close');

  const browserResults =
    document.getElementById('apt-browser-results');

  const browserCount =
    document.getElementById('apt-browser-count');

  const browserEmpty =
    document.getElementById('apt-browser-empty');

  const browserSearchPanel =
    browser?.querySelector('.apt-browser-search') || null;

  const browserReturnSearch =
    document.getElementById('apt-browser-return-search');

  const filterGuests =
    document.getElementById('apt-filter-guests');

  const filterBedrooms =
    document.getElementById('apt-filter-bedrooms');

  const filterView =
    document.getElementById('apt-filter-view');

  const viewButtons =
  document.querySelectorAll(
    '.apt-view-option'
  );

  const selectedViews =
  new Set();



  const filterPrice =
    document.getElementById('apt-filter-price');

  const filterPriceDisplay =
    document.getElementById('apt-filter-price-display');

  const priceToggle =
  document.getElementById('apt-price-toggle');

const priceMenu =
  document.getElementById('apt-price-menu');

const priceOptions =
  document.querySelectorAll(
    '.apt-price-option'
  );

  const filterCheckin =
    document.getElementById('apt-filter-checkin');

  const filterCheckout =
    document.getElementById('apt-filter-checkout');

  const filterClear =
    document.getElementById('apt-filter-clear');

  const quickFilterIcon =
    document.getElementById('apt-quick-filter-icon');

  const amenityButtons =
    document.querySelectorAll('.apt-filter-chip');

  const selectedAmenities =
    new Set();

  const searchDateField =
    document.getElementById('apt-filter-dates-field');

  const searchRangeToggle =
    document.getElementById('apt-search-range-toggle');

  const searchRangeText =
    document.getElementById('apt-search-range-text');

  const searchRangeCalendar =
    document.getElementById('apt-search-range-calendar');

  const searchCalendarMonth =
    document.getElementById('apt-search-calendar-month');

  const searchCalendarDays =
    document.getElementById('apt-search-calendar-days');

  const searchCalendarWeekdays =
    document.getElementById('apt-search-calendar-weekdays');

  const searchCalendarHint =
    document.getElementById('apt-search-calendar-hint');

  const searchCalendarPrev =
    document.getElementById('apt-search-calendar-prev');

  const searchCalendarNext =
    document.getElementById('apt-search-calendar-next');

  const searchCalendarClear =
    document.getElementById('apt-search-calendar-clear');

  const searchCalendarDone =
    document.getElementById('apt-search-calendar-done');

  const filterGuestsMinus =
    document.getElementById('apt-filter-guests-minus');

  const filterGuestsPlus =
    document.getElementById('apt-filter-guests-plus');

  const filterGuestsValue =
    document.getElementById('apt-filter-guests-value');

  const filterBedroomsMinus =
    document.getElementById('apt-filter-bedrooms-minus');

  const filterBedroomsPlus =
    document.getElementById('apt-filter-bedrooms-plus');

  const filterBedroomsValue =
    document.getElementById('apt-filter-bedrooms-value');


  // ========================================
  // DETAIL ELEMENTS
  // ========================================

  const detailOverlay =
    document.getElementById('apt-detail-overlay');

  const detailClose =
    document.getElementById('apt-detail-close');

  const detailBack =
    document.getElementById('apt-detail-back');

  const detailPhoto =
    document.getElementById('apt-detail-photo');

  const detailTitle =
    document.getElementById('apt-detail-title');

  const detailVerified =
    document.getElementById('apt-detail-verified');

  const detailMeta =
    document.getElementById('apt-detail-meta');

  const detailDescription =
    document.getElementById('apt-detail-description');

  const detailAmenities =
    document.getElementById('apt-detail-amenities');

  const detailPrice =
    document.getElementById('apt-detail-price');

  const detailPriceLabel =
    document.getElementById('apt-detail-price-label');

  const detailPriceUnit =
    document.getElementById('apt-detail-price-unit');

  const detailReference =
    document.getElementById('apt-detail-reference');

  const detailReferenceLabel =
    document.getElementById('apt-detail-reference-label');

  const photoPrev =
    document.getElementById('apt-photo-prev');

  const photoNext =
    document.getElementById('apt-photo-next');

  const photoCounter =
    document.getElementById('apt-photo-counter');


  // ========================================
  // INQUIRY ELEMENTS
  // ========================================

  const inquiryOpen =
    document.getElementById('apt-inquiry-open');

  const inquiryOverlay =
    document.getElementById('apt-inquiry-overlay');

  const inquiryClose =
    document.getElementById('apt-inquiry-close');

  const inquiryForm =
    document.getElementById('apt-inquiry-form');

  const inquiryTitle =
    document.getElementById('apt-inquiry-title');

  const inquiryReference =
    document.getElementById('apt-inquiry-reference');

  const inquiryStatus =
    document.getElementById('apt-inquiry-status');

  const inquiryMessage =
    document.getElementById('apt-inquiry-message');

  const inquiryTotal =
    document.getElementById('apt-inquiry-total');

  const inquiryTotalBreakdown =
    document.getElementById('apt-inquiry-total-breakdown');

  const inquiryGuests =
    document.getElementById('apt-inquiry-guests');

  const guestsMinus =
    document.getElementById('apt-guests-minus');

  const guestsPlus =
    document.getElementById('apt-guests-plus');

  const inquiryPets =
    document.getElementById('apt-inquiry-pets');

  const petsControls =
    document.getElementById('apt-pets-controls');

  const petsUnavailable =
    document.getElementById('apt-pets-unavailable');

  const petsMinus =
    document.getElementById('apt-pets-minus');

  const petsPlus =
    document.getElementById('apt-pets-plus');

  const inquiryParking =
    document.getElementById('apt-inquiry-parking');

  const parkingControls =
    document.getElementById('apt-parking-controls');

  const parkingUnavailable =
    document.getElementById('apt-parking-unavailable');

  const parkingMinus =
    document.getElementById('apt-parking-minus');

  const parkingPlus =
    document.getElementById('apt-parking-plus');

  const serviceNo =
    document.getElementById('apt-service-no');

  const serviceYes =
    document.getElementById('apt-service-yes');

  const rangeToggle =
    document.getElementById('apt-range-toggle');

  const rangeText =
    document.getElementById('apt-range-text');

  const rangeCalendar =
    document.getElementById('apt-range-calendar');

  const calendarMonth =
    document.getElementById('apt-calendar-month');

  const calendarDays =
    document.getElementById('apt-calendar-days');

  const calendarWeekdays =
    document.getElementById('apt-calendar-weekdays');

  const calendarHint =
    document.getElementById('apt-calendar-hint');

  const calendarPrev =
    document.getElementById('apt-calendar-prev');

  const calendarNext =
    document.getElementById('apt-calendar-next');

  const calendarClear =
    document.getElementById('apt-calendar-clear');

  const calendarDone =
    document.getElementById('apt-calendar-done');


  // ========================================
  // STATE
  // ========================================

  let currentCardIndex = 0;
  let activeListingIndex = null;
  let activeImages = [];
  let activePhotoIndex = 0;

  const imageCache = new Map();

  let inquiryStartDate = null;
  let inquiryEndDate = null;
  let inquiryListingId = null;
  let serviceAnimalRequested = false;

  let searchStartDate = null;
  let searchEndDate = null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let inquiryCalendarCursor = currentMonthDate();
  let searchCalendarCursor = currentMonthDate();


  // ========================================
  // Price Menu Update
  // ========================================


  function closePriceMenu() {

  priceMenu?.classList.remove(
    'active'
  );

  priceMenu?.setAttribute(
    'aria-hidden',
    'true'
  );

  priceToggle?.setAttribute(
    'aria-expanded',
    'false'
  );

}


if (priceToggle) {

  priceToggle.addEventListener(
    'click',
    event => {

      event.stopPropagation();

      const opening =
        !priceMenu.classList.contains(
          'active'
        );

      closePriceMenu();

      if (opening) {

        priceMenu.classList.add(
          'active'
        );

        priceMenu.setAttribute(
          'aria-hidden',
          'false'
        );

        priceToggle.setAttribute(
          'aria-expanded',
          'true'
        );

      }

    }
  );

}


priceOptions.forEach(
  option => {

    option.addEventListener(
      'click',
      () => {

        filterPrice.value =
          option.dataset.value;

        filterPrice.dispatchEvent(
          new Event(
            'change',
            {
              bubbles: true
            }
          )
        );

        closePriceMenu();

      }
    );

  }
);


document.addEventListener(
  'click',
  event => {

    if (
      !event.target.closest(
        '#apt-price-field'
      )
    ) {

      closePriceMenu();

    }

  }
);


  // ========================================
  // LANGUAGE + DATE HELPERS
  // ========================================

  function getApartmentLanguage() {
    return (
      localStorage.getItem('bb-language') ||
      document.documentElement.lang ||
      'ka'
    );
  }

  function currentMonthDate() {
    return new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
  }

  function sameCalendarDate(a, b) {
    if (!a || !b) {
      return false;
    }

    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  function dateToKey(date) {
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0')
    ].join('-');
  }

  function keyToDate(key) {
    const [year, month, day] =
      key.split('-').map(Number);

    return new Date(
      year,
      month - 1,
      day
    );
  }

  function formatShortDate(date) {
    if (!date) {
      return '';
    }

    const locale =
      getApartmentLanguage() === 'ka'
        ? 'ka-GE'
        : 'en-US';

    return date.toLocaleDateString(
      locale,
      {
        month: 'short',
        day: 'numeric'
      }
    );
  }

  function getNightCount(startDate, endDate) {
    if (!startDate || !endDate) {
      return 0;
    }

    const startUTC = Date.UTC(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    );

    const endUTC = Date.UTC(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    );

    return Math.max(
      0,
      Math.round((endUTC - startUTC) / 86400000)
    );
  }


// ========================================
// AVAILABILITY HELPERS
// Shared by Search + Inquiry
// ========================================

function getActiveListing() {

  if (
    activeListingIndex === null
  ) {
    return null;
  }

  return apartmentData[
    activeListingIndex
  ] || null;

}


/*
  Check one specific listing/date.

  This does NOT depend on which
  apartment detail is currently open,
  so Search can use it too.
*/

function isListingDateUnavailable(
  listing,
  date
) {

  if (
    !listing ||
    !date
  ) {
    return false;
  }


  const unavailable =
    sampleUnavailableDates[
      listing.id
    ] || [];


  return unavailable.includes(
    dateToKey(date)
  );

}


/*
  Inquiry calendar still uses this
  active-listing version.
*/

function isDateUnavailable(
  date
) {

  return isListingDateUnavailable(
    getActiveListing(),
    date
  );

}


/*
  Check every NIGHT of a proposed stay.

  Check-in IS a booked night.

  Check-out is NOT counted because the
  guest leaves on that date.
*/

function listingRangeCrossesUnavailableDate(
  listing,
  startDate,
  endDate
) {

  if (
    !listing ||
    !startDate ||
    !endDate
  ) {
    return false;
  }


  const cursor =
    new Date(startDate);


  while (
    cursor < endDate
  ) {

    if (
      isListingDateUnavailable(
        listing,
        cursor
      )
    ) {

      return true;

    }


    cursor.setDate(
      cursor.getDate() + 1
    );

  }


  return false;

}


/*
  Existing Inquiry wrapper.
*/

function rangeCrossesUnavailableDate(
  startDate,
  endDate
) {

  return listingRangeCrossesUnavailableDate(
    getActiveListing(),
    startDate,
    endDate
  );

}


  // ========================================
  // INQUIRY DISPLAY
  // ========================================

  function updateInquiryTotal() {
    if (!inquiryTotal || !inquiryTotalBreakdown) {
      return;
    }

    const listing = getActiveListing();
    const language = getApartmentLanguage();
    const nights = getNightCount(
      inquiryStartDate,
      inquiryEndDate
    );

    if (!listing || nights < 1) {
      inquiryTotal.textContent = '—';
      inquiryTotalBreakdown.textContent =
        language === 'ka'
          ? 'აირჩიეთ თარიღები'
          : 'Select dates';
      return;
    }

    const total = nights * listing.price;

    inquiryTotal.textContent =
      `$${total.toLocaleString('en-US')}`;

    inquiryTotalBreakdown.textContent =
      language === 'ka'
        ? `${nights} ღამე × $${listing.price}`
        : `${nights} ${nights === 1 ? 'night' : 'nights'} × $${listing.price}`;
  }

  function updateInquiryRangeDisplay() {
    if (!rangeText) {
      return;
    }

    const language = getApartmentLanguage();

    if (!inquiryStartDate) {
      rangeText.textContent =
        language === 'ka'
          ? 'აირჩიეთ თარიღები'
          : 'Select dates';
    }
    else if (!inquiryEndDate) {
      rangeText.textContent =
        formatShortDate(inquiryStartDate);
    }
    else {
      rangeText.textContent =
        `${formatShortDate(inquiryStartDate)} — ${formatShortDate(inquiryEndDate)}`;
    }

    updateInquiryTotal();
  }

  function updateSearchRangeDisplay() {

  if (
    !searchRangeToggle ||
    !searchRangeText
  ) {
    return;
  }


  const language =
    getApartmentLanguage();


  const hasSelection =
    Boolean(
      searchStartDate
    );


  /*
    EMPTY
  */

  if (!searchStartDate) {

    searchRangeText.replaceChildren();

    searchRangeText.hidden =
      true;


    const label =
      language === 'ka'
        ? 'თარიღები'
        : 'Dates';


    searchRangeToggle.title =
      label;


    searchRangeToggle.setAttribute(
      'aria-label',
      label
    );


    searchDateField?.classList.remove(
      'has-selection'
    );


    return;
  }


  /*
    BUILD DATE DISPLAY
  */

  searchRangeText.replaceChildren();


  const checkin =
    document.createElement(
      'span'
    );


  checkin.className =
    'bb-search-checkin';


  checkin.textContent =
    formatShortDate(
      searchStartDate
    );


  searchRangeText.appendChild(
    checkin
  );


  /*
    CHECKOUT
  */

  if (searchEndDate) {

    const separator =
      document.createElement(
        'span'
      );


    separator.className =
      'bb-search-date-separator';


    separator.textContent =
      ' — ';


    const checkout =
      document.createElement(
        'span'
      );


    checkout.className =
      'bb-search-checkout';


    checkout.textContent =
      formatShortDate(
        searchEndDate
      );


    searchRangeText.append(
      separator,
      checkout
    );

  }


  searchRangeText.hidden =
    false;


  /*
    Accessible full description
  */

  const label =
    searchEndDate

      ? `${formatShortDate(
          searchStartDate
        )} — ${formatShortDate(
          searchEndDate
        )}`

      : formatShortDate(
          searchStartDate
        );


  searchRangeToggle.title =
    label;


  searchRangeToggle.setAttribute(
    'aria-label',
    label
  );


  searchDateField?.classList.add(
    'has-selection'
  );

}


  // ========================================
  // SHARED DATE-RANGE ENGINE
  // ========================================

  function createDateRangeEngine(config) {
    const {
      fieldRoot,
      toggle,
      panel,
      monthLabel,
      daysContainer,
      weekdaysContainer,
      hint,
      previousButton,
      nextButton,
      clearButton,
      doneButton,
      getStart,
      setStart,
      getEnd,
      setEnd,
      getCursor,
      setCursor,
      isUnavailable = () => false,
      rangeAllowed = () => true,
      onInvalidRange = () => {},
      onChange = () => {},
      updateDisplay = () => {}
    } = config;

    function isOpen() {
      return Boolean(
        panel &&
        panel.classList.contains('active')
      );
    }

    function close() {
      if (!panel) {
        return;
      }

      panel.classList.remove('active');
      panel.setAttribute('aria-hidden', 'true');
    }

    function open() {
      if (!panel) {
        return;
      }

      panel.classList.add('active');
      panel.setAttribute('aria-hidden', 'false');
      render();
    }

    function togglePanel() {
      if (isOpen()) {
        close();
      }
      else {
        open();
      }
    }

    function reset(notify = true) {
      setStart(null);
      setEnd(null);
      setCursor(currentMonthDate());

      if (notify) {
        onChange();
      }

      updateDisplay();
      render();
    }

    function getHintText() {
      const language = getApartmentLanguage();
      const start = getStart();
      const end = getEnd();

      if (!start) {
        return language === 'ka'
          ? 'აირჩიეთ ჩამოსვლის თარიღი'
          : 'Select check-in';
      }

      if (!end) {
        return language === 'ka'
          ? 'ახლა აირჩიეთ გასვლის თარიღი'
          : 'Now select check-out';
      }

      return language === 'ka'
        ? 'თარიღები არჩეულია'
        : 'Dates selected';
    }

    function render() {
      if (!daysContainer || !monthLabel) {
        updateDisplay();
        return;
      }

      const language = getApartmentLanguage();
      const locale =
        language === 'ka'
          ? 'ka-GE'
          : 'en-US';

      const cursor = getCursor();
      const start = getStart();
      const end = getEnd();

      monthLabel.textContent =
        new Intl.DateTimeFormat(
          locale,
          {
            month: 'long',
            year: 'numeric'
          }
        ).format(cursor);

      const weekdayNames =
        language === 'ka'
          ? ['კვ', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ']
          : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      if (weekdaysContainer) {
        weekdaysContainer.innerHTML =
          weekdayNames
            .map(day => `<span>${day}</span>`)
            .join('');
      }

      if (hint) {
        hint.textContent = getHintText();
      }

      daysContainer.innerHTML = '';

      const year = cursor.getFullYear();
      const month = cursor.getMonth();
      const firstDay = new Date(year, month, 1);
      const daysInMonth =
        new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < firstDay.getDay(); i++) {
        daysContainer.appendChild(
          document.createElement('span')
        );
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const button = document.createElement('button');

        button.type = 'button';
        button.className = 'apt-calendar-day';
        button.textContent = day;
        button.dataset.date = dateToKey(date);

        if (date < today) {
          button.disabled = true;
          button.classList.add('past-date');
        }

        if (isUnavailable(date)) {
          button.disabled = true;
          button.classList.add('unavailable');
          button.title =
            language === 'ka'
              ? 'დაკავებულია'
              : 'Unavailable';
        }

        if (sameCalendarDate(date, start)) {
          button.classList.add('range-start');
        }

        if (sameCalendarDate(date, end)) {
          button.classList.add('range-end');
        }

        if (
          start &&
          end &&
          date > start &&
          date < end
        ) {
          button.classList.add('in-range');
        }

        daysContainer.appendChild(button);
      }

      if (previousButton) {
        previousButton.disabled =
          cursor <= currentMonthDate();
      }

      updateDisplay();
    }

    toggle?.addEventListener(
      'click',
      event => {
        event.stopPropagation();
        togglePanel();
      }
    );

    panel?.addEventListener(
      'click',
      event => {
        event.stopPropagation();
      }
    );

    daysContainer?.addEventListener(
      'click',
      event => {
        event.stopPropagation();

        const button =
          event.target.closest('.apt-calendar-day');

        if (!button || button.disabled) {
          return;
        }

        const clickedDate =
          keyToDate(button.dataset.date);

        const start = getStart();
        const end = getEnd();

        if (!start || end) {
          setStart(clickedDate);
          setEnd(null);
        }
        else if (sameCalendarDate(clickedDate, start)) {
          setStart(null);
          setEnd(null);
        }
        else if (clickedDate < start) {
          setStart(clickedDate);
          setEnd(null);
        }
        else if (!rangeAllowed(start, clickedDate)) {
          onInvalidRange(start, clickedDate);
          return;
        }
        else {
          setEnd(clickedDate);
        }

        onChange();
        render();
      }
    );

    previousButton?.addEventListener(
      'click',
      event => {
        event.stopPropagation();

        const cursor = getCursor();
        const proposed = new Date(
          cursor.getFullYear(),
          cursor.getMonth() - 1,
          1
        );

        if (proposed < currentMonthDate()) {
          return;
        }

        setCursor(proposed);
        render();
      }
    );

    nextButton?.addEventListener(
      'click',
      event => {
        event.stopPropagation();

        const cursor = getCursor();

        setCursor(
          new Date(
            cursor.getFullYear(),
            cursor.getMonth() + 1,
            1
          )
        );

        render();
      }
    );

    clearButton?.addEventListener(
      'click',
      event => {
        event.stopPropagation();
        reset(true);
      }
    );

    doneButton?.addEventListener(
      'click',
      event => {
        event.stopPropagation();
        close();
      }
    );

    document.addEventListener(
      'click',
      event => {
        if (!isOpen()) {
          return;
        }

        if (
          fieldRoot &&
          fieldRoot.contains(event.target)
        ) {
          return;
        }

        close();
      }
    );

    return {
      render,
      open,
      close,
      reset,
      isOpen
    };
  }


  // ========================================
  // SEARCH DATE ENGINE
  // ========================================

  function syncSearchDateInputs() {
    if (filterCheckin) {
      filterCheckin.value =
        searchStartDate
          ? dateToKey(searchStartDate)
          : '';
    }

    if (filterCheckout) {
      filterCheckout.value =
        searchEndDate
          ? dateToKey(searchEndDate)
          : '';
    }

    updateSearchRangeDisplay();
    renderApartmentSearch();
  }

  const searchDateEngine =
    createDateRangeEngine({
      fieldRoot: searchDateField,
      toggle: searchRangeToggle,
      panel: searchRangeCalendar,
      monthLabel: searchCalendarMonth,
      daysContainer: searchCalendarDays,
      weekdaysContainer: searchCalendarWeekdays,
      hint: searchCalendarHint,
      previousButton: searchCalendarPrev,
      nextButton: searchCalendarNext,
      clearButton: searchCalendarClear,
      doneButton: searchCalendarDone,
      getStart: () => searchStartDate,
      setStart: value => {
        searchStartDate = value;
      },
      getEnd: () => searchEndDate,
      setEnd: value => {
        searchEndDate = value;
      },
      getCursor: () => searchCalendarCursor,
      setCursor: value => {
        searchCalendarCursor = value;
      },
      onChange: syncSearchDateInputs,
      updateDisplay: updateSearchRangeDisplay
    });


  // ========================================
  // INQUIRY DATE ENGINE
  // ========================================

  const inquiryDateEngine =
    createDateRangeEngine({
      fieldRoot: rangeToggle?.closest('.apt-inquiry-date-panel') || null,
      toggle: rangeToggle,
      panel: rangeCalendar,
      monthLabel: calendarMonth,
      daysContainer: calendarDays,
      weekdaysContainer: calendarWeekdays,
      hint: calendarHint,
      previousButton: calendarPrev,
      nextButton: calendarNext,
      clearButton: calendarClear,
      doneButton: calendarDone,
      getStart: () => inquiryStartDate,
      setStart: value => {
        inquiryStartDate = value;
      },
      getEnd: () => inquiryEndDate,
      setEnd: value => {
        inquiryEndDate = value;
      },
      getCursor: () => inquiryCalendarCursor,
      setCursor: value => {
        inquiryCalendarCursor = value;
      },
      isUnavailable: isDateUnavailable,
      rangeAllowed: (startDate, endDate) =>
        !rangeCrossesUnavailableDate(
          startDate,
          endDate
        ),
      onInvalidRange: () => {
        if (!calendarHint) {
          return;
        }

        calendarHint.textContent =
          getApartmentLanguage() === 'ka'
            ? 'ამ პერიოდში დაკავებული თარიღია.'
            : 'This stay crosses an unavailable date.';
      },
      onChange: updateInquiryRangeDisplay,
      updateDisplay: updateInquiryRangeDisplay
    });


  // ========================================
  // IMAGE FINDER
  // ========================================

  function findImage(folder, number) {
    const fileNumber =
      String(number).padStart(2, '0');

    const extensions = [
      'jpg',
      'jpeg',
      'png',
      'webp'
    ];

    return new Promise(resolve => {
      let extensionIndex = 0;

      function tryNext() {
        if (extensionIndex >= extensions.length) {
          resolve(null);
          return;
        }

        const extension =
          extensions[extensionIndex++];

        const path =
          `${folder}/${fileNumber}.${extension}`;

        const image = new Image();

        image.onload = () => resolve(path);
        image.onerror = tryNext;
        image.src = path;
      }

      tryNext();
    });
  }

  async function loadCardCover(card, listing) {
    const coverNumber =
      listing.coverNumber || 1;

    let imagePath =
      await findImage(
        listing.folder,
        coverNumber
      );

    if (!imagePath && coverNumber !== 1) {
      imagePath =
        await findImage(
          listing.folder,
          1
        );
    }

    const photo =
      card.querySelector('.apt-card-photo');

    if (photo && imagePath) {
      photo.style.backgroundImage =
        `url("${imagePath}")`;

      card.dataset.cover = imagePath;
    }
  }

  async function getListingImages(listing) {
    if (imageCache.has(listing.id)) {
      return imageCache.get(listing.id);
    }

    const promises = [];

    for (let number = 1; number <= 10; number++) {
      promises.push(
        findImage(
          listing.folder,
          number
        )
      );
    }

    const results =
      await Promise.all(promises);

    const images =
      results.filter(Boolean);

    imageCache.set(
      listing.id,
      images
    );

    return images;
  }


  // ========================================
  // CARD ICONS
  // ========================================

  const cardAmenityIcons = {
    wifi: {
      file: 'wifi.svg',
      en: 'Wi-Fi',
      ka: 'Wi-Fi'
    },
    ac: {
      file: 'air-vent.svg',
      en: 'Air conditioning',
      ka: 'კონდიციონერი'
    },
    parking: {
      file: 'circle-parking.svg',
      en: 'Parking',
      ka: 'პარკინგი'
    },
    washer: {
      file: 'washing-machine.svg',
      en: 'Washing machine',
      ka: 'სარეცხი მანქანა'
    },
    pets: {
      file: 'paw-print.svg',
      en: 'Pet friendly',
      ka: 'შინაური ცხოველები'
    },
    kitchen: {
      file: 'cooking-pot.svg',
      en: 'Kitchen',
      ka: 'სამზარეულო'
    },
    perks: {
      file: 'star.svg',
      en: 'Guest perks',
      ka: 'სტუმრის ბენეფიტები'
    }
  };

  const cardAmenityPriority = [
    'wifi',
    'ac',
    'parking',
    'washer',
    'pets',
    'kitchen',
    'perks'
  ];

  function buildCardIconRail(listing, language) {
    const visibleAmenities =
      cardAmenityPriority
        .filter(amenity =>
          listing.amenities.includes(amenity)
        )
        .slice(0, 4);

    const amenityHTML =
      visibleAmenities
        .map(amenity => {
          const data =
            cardAmenityIcons[amenity];

          const label =
            language === 'ka'
              ? data.ka
              : data.en;

          return `
            <span
              class="apt-card-icon apt-card-amenity-icon"
              style="--icon-url: url('images/icons/listing/${data.file}');"
              role="img"
              aria-label="${label}"
              title="${label}">
            </span>
          `;
        })
        .join('');

    const verifiedLabel =
      language === 'ka'
        ? 'დადასტურებული მესაკუთრე'
        : 'Verified owner';

    return `
      <div class="apt-card-icon-rail">
        <span
          class="apt-card-icon apt-card-verified-icon"
          role="img"
          aria-label="${verifiedLabel}"
          title="${verifiedLabel}">
        </span>

        <span
          class="apt-card-icon-divider"
          aria-hidden="true">
        </span>

        <div class="apt-card-amenity-icons">
          ${amenityHTML}
        </div>
      </div>
    `;
  }


  // ========================================
  // MAIN CARDS
  // ========================================

  function renderApartmentCards() {
    if (!track) {
      return;
    }

    const language =
      getApartmentLanguage();

    track.innerHTML = '';

    apartmentData.forEach(
      (listing, index) => {
        const copy =
          listing[
            language === 'ka'
              ? 'ka'
              : 'en'
          ];

        const paidPlacement =
          index < 3;

        const card =
          document.createElement('article');

        card.className =
          `apt-card${paidPlacement ? ' apt-card-paid' : ''}${index === 3 ? ' apt-card-mobile-hidden' : ''}`;

        const paidLabel =
          language === 'ka'
            ? 'ფასიანი განთავსება'
            : 'Paid placement';

        card.innerHTML = `
          <div class="apt-card-photo">
            ${
              paidPlacement
                ? `
                  <span
                    class="apt-card-paid-badge"
                    role="img"
                    aria-label="${paidLabel}"
                    title="${paidLabel}">
                    <img
                      src="images/icons/listing/circle-dollar-sign.svg"
                      alt="">
                  </span>
                `
                : ''
            }
          </div>

          <div class="apt-card-body">
            <div class="apt-card-topline">
              <span class="apt-card-view">
                ${copy.view}
              </span>

              <span class="apt-card-price">
                <strong>$${listing.price}</strong>
                ${language === 'ka' ? ' / ღამე' : ' / night'}
              </span>
            </div>

            <h3 class="apt-card-title">
              ${copy.title}
            </h3>

            <div class="apt-card-meta">
              ${listing.guests}
              ${language === 'ka' ? 'სტუმარი' : 'guests'}
              ·
              ${listing.bedrooms}
              ${language === 'ka' ? 'საძინებელი' : 'bedrooms'}
              ·
              ${listing.size} m²
            </div>

            ${buildCardIconRail(listing, language)}

            <div class="apt-card-bottom">
              <button
                type="button"
                class="apt-card-open">
                ${language === 'ka' ? 'ნახვა →' : 'View →'}
              </button>
            </div>
          </div>
        `;

        card
          .querySelector('.apt-card-open')
          ?.addEventListener(
            'click',
            () => openApartmentDetail(index)
          );

        track.appendChild(card);
        loadCardCover(card, listing);
      }
    );

    const mobileSearchCard =
      document.createElement('button');

    mobileSearchCard.type = 'button';
    mobileSearchCard.className =
      'apt-mobile-search-card';

    mobileSearchCard.setAttribute(
      'aria-label',
      language === 'ka'
        ? 'ძებნა / ყველა აპარტამენტი'
        : 'Search / View all apartments'
    );

    mobileSearchCard.innerHTML = `
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true">
        <circle cx="11" cy="11" r="7"></circle>
        <path d="m20 20-3.5-3.5"></path>
      </svg>

      <span>
        ${
          language === 'ka'
            ? 'ძებნა / ყველა'
            : 'Search / View all'
        }
      </span>
    `;

    mobileSearchCard.addEventListener(
      'click',
      openApartmentBrowser
    );

    track.appendChild(mobileSearchCard);

    currentCardIndex = 0;

    requestAnimationFrame(
      updateApartmentCarousel
    );
  }

  function getMaximumCardIndex() {
    const mobile =
      window.innerWidth <= 800;

    const visibleCards =
      mobile ? 1 : 3;

    return Math.max(
      0,
      apartmentData.length - visibleCards
    );
  }

  function updateApartmentCarousel() {
    if (!track || !viewport) {
      return;
    }

    const cards =
      track.querySelectorAll('.apt-card');

    if (!cards.length) {
      return;
    }

    if (window.innerWidth <= 800) {
      track.style.transform = 'none';

      if (prevButton) {
        prevButton.disabled = true;
      }

      if (nextButton) {
        nextButton.disabled = true;
      }

      return;
    }

    const maximum =
      getMaximumCardIndex();

    currentCardIndex =
      Math.max(
        0,
        Math.min(
          currentCardIndex,
          maximum
        )
      );

    const firstCard = cards[0];
    const cardWidth =
      firstCard.getBoundingClientRect().width;

    const trackStyle =
      getComputedStyle(track);

    const gap =
      parseFloat(trackStyle.columnGap) || 22;

    const offset =
      currentCardIndex * (cardWidth + gap);

    track.style.transform =
      `translateX(-${offset}px)`;

    if (position) {
      position.textContent =
        `${String(currentCardIndex + 1).padStart(2, '0')} / ${String(apartmentData.length).padStart(2, '0')}`;
    }

    if (prevButton) {
      prevButton.disabled =
        currentCardIndex === 0;
    }

    if (nextButton) {
      nextButton.disabled =
        currentCardIndex >= maximum;
    }
  }


  // ========================================
  // DETAIL
  // ========================================

  const amenityLabels = {
    wifi: { en: 'Wi-Fi', ka: 'Wi-Fi' },
    ac: { en: 'Air conditioning', ka: 'კონდიციონერი' },
    parking: { en: 'Parking', ka: 'პარკინგი' },
    balcony: { en: 'Balcony', ka: 'აივანი' },
    kitchen: { en: 'Kitchen', ka: 'სამზარეულო' },
    washer: { en: 'Washing machine', ka: 'სარეცხი მანქანა' },
    elevator: { en: 'Elevator', ka: 'ლიფტი' },
    pets: { en: 'Pet friendly', ka: 'შინაური ცხოველები' },
    perks: { en: 'Guest perks', ka: 'სტუმრის ბენეფიტები' }
  };

  function renderDetailPhoto() {
    if (!detailPhoto || !activeImages.length) {
      return;
    }

    activePhotoIndex =
      (
        activePhotoIndex +
        activeImages.length
      ) % activeImages.length;

    detailPhoto.style.opacity = '0';

    setTimeout(
      () => {
        detailPhoto.style.backgroundImage =
          `url("${activeImages[activePhotoIndex]}")`;

        detailPhoto.style.opacity = '1';

        if (photoCounter) {
          photoCounter.textContent =
            `${activePhotoIndex + 1} / ${activeImages.length}`;
        }
      },
      150
    );
  }

  function renderDetailAmenities(listing, language) {
    if (!detailAmenities) {
      return;
    }

    detailAmenities.innerHTML = '';

    listing.amenities.forEach(
      amenity => {
        const label =
          amenityLabels[amenity];

        if (!label) {
          return;
        }

        const element =
          document.createElement('span');

        element.className =
          'apt-detail-amenity';

        element.textContent =
          label[
            language === 'ka'
              ? 'ka'
              : 'en'
          ];

        detailAmenities.appendChild(element);
      }
    );
  }

  async function openApartmentDetail(listingIndex) {
    const listing =
      apartmentData[listingIndex];

    if (!listing || !detailOverlay) {
      return;
    }

    activeListingIndex = listingIndex;

    const language =
      getApartmentLanguage();

    const copy =
      listing[
        language === 'ka'
          ? 'ka'
          : 'en'
      ];

    if (detailTitle) {
      detailTitle.textContent = copy.title;
    }

    if (detailDescription) {
      detailDescription.textContent =
        copy.description;
    }

    renderDetailAmenities(
      listing,
      language
    );

    if (detailVerified) {
      detailVerified.textContent =
        language === 'ka'
          ? '✓ დადასტურებული მესაკუთრე'
          : '✓ Verified owner';
    }

    if (detailMeta) {
      detailMeta.textContent =
        language === 'ka'
          ? `${copy.view} · ${listing.guests} სტუმარი · ${listing.bedrooms} საძინებელი · ${listing.size} m²`
          : `${copy.view} · ${listing.guests} guests · ${listing.bedrooms} bedrooms · ${listing.size} m²`;
    }

    if (detailPrice) {
      detailPrice.textContent =
        `$${listing.price}`;
    }

    if (detailPriceLabel) {
      detailPriceLabel.textContent =
        language === 'ka'
          ? 'ღირებულება'
          : 'From';
    }

    if (detailPriceUnit) {
      detailPriceUnit.textContent =
        language === 'ka'
          ? '/ ღამე'
          : '/ night';
    }

    if (detailReferenceLabel) {
      detailReferenceLabel.textContent =
        language === 'ka'
          ? 'განცხადების კოდი'
          : 'Listing reference';
    }

    if (detailReference) {
      detailReference.textContent =
        listing.reference;
    }

    if (detailBack) {
      detailBack.textContent =
        language === 'ka'
          ? '← აპარტამენტები'
          : '← Apartments';
    }

    detailOverlay.classList.add('active');
    detailOverlay.setAttribute('aria-hidden', 'false');

    activeImages =
      await getListingImages(listing);

    activePhotoIndex = 0;

    if (activeImages.length) {
      renderDetailPhoto();
    }
  }

  function closeApartmentDetail() {
    if (!detailOverlay) {
      return;
    }

    detailOverlay.classList.remove('active');
    detailOverlay.setAttribute('aria-hidden', 'true');
    activeListingIndex = null;
  }


  // ========================================
  // SEARCH FILTERING + FAIR ROTATION
  // ========================================

  function apartmentMatchesFilters(listing) {
    const guests =
      Number(filterGuests?.value || 0);

    const bedrooms =
      Number(filterBedrooms?.value || 0);

    const maximumPrice =
      Number(filterPrice?.value || 99999);

    if (guests > 0 && listing.guests < guests) {
      return false;
    }

    if (
      bedrooms > 0 &&
      listing.bedrooms < bedrooms
    ) {
      return false;
    }

    if (
  selectedViews.size > 0
) {

  const hasEverySelectedView =
    Array.from(
      selectedViews
    ).every(
      view =>
        listing.views?.includes(
          view
        )
    );


  if (!hasEverySelectedView) {
    return false;
  }

}

    if (listing.price > maximumPrice) {
      return false;
    }

    for (const amenity of selectedAmenities) {
      if (!listing.amenities.includes(amenity)) {
        return false;
      }
    }

/*
  AVAILABILITY

  Only filter by dates after the renter
  has selected a complete stay range.
*/

if (
  searchStartDate &&
  searchEndDate &&
  listingRangeCrossesUnavailableDate(
    listing,
    searchStartDate,
    searchEndDate
  )
) {

  return false;

}



    return true;
  }

  function getApartmentSearchKey() {
    return JSON.stringify({
      guests: filterGuests?.value || '0',
      bedrooms: filterBedrooms?.value || '0',
      views:
  Array.from(
    selectedViews
  ).sort(),
      price: filterPrice?.value || '99999',
      checkin: filterCheckin?.value || '',
      checkout: filterCheckout?.value || '',
      amenities:
        Array.from(selectedAmenities).sort()
    });
  }

  function hashSearchKey(value) {
    let hash = 0;

    for (let i = 0; i < value.length; i++) {
      hash =
        (
          hash * 31 +
          value.charCodeAt(i)
        ) >>> 0;
    }

    return hash.toString(36);
  }

  function rotateSearchResults(listings) {
    if (listings.length <= 1) {
      return listings;
    }

    const searchId =
      hashSearchKey(
        getApartmentSearchKey()
      );

    const sessionKey =
      `bb-search-session-${searchId}`;

    const rotationKey =
      `bb-search-rotation-${searchId}`;

    let offset =
      sessionStorage.getItem(sessionKey);

    if (offset === null) {
      offset =
        Number(
          localStorage.getItem(rotationKey) || 0
        ) % listings.length;

      sessionStorage.setItem(
        sessionKey,
        String(offset)
      );

      localStorage.setItem(
        rotationKey,
        String(
          (Number(offset) + 1) % listings.length
        )
      );
    }

    offset =
      Number(offset) % listings.length;

    return [
      ...listings.slice(offset),
      ...listings.slice(0, offset)
    ];
  }

  
  function createSearchResultCard(
  listing,
  listingIndex
) {
  const language =
    getApartmentLanguage();

  const copy =
    listing[
      language === 'ka'
        ? 'ka'
        : 'en'
    ];

  const nights =
    getNightCount(
      searchStartDate,
      searchEndDate
    );

  const hasStay =
    nights > 0;

  const stayTotal =
    hasStay
      ? nights * listing.price
      : 0;

  const card =
    document.createElement(
      'article'
    );

  card.className =
    'apt-browser-card';

  card.innerHTML = `
    <div class="apt-card-photo"></div>

    <div class="apt-card-body">

      <div class="apt-card-topline">

        <span class="apt-card-view">
          ${copy.view}
        </span>

        <span class="apt-card-stay-total">

          ${
            hasStay

              ? `
                <strong>
                  $${stayTotal.toLocaleString('en-US')}
                </strong>

                <small>
                  ${
                    language === 'ka'
                      ? `${nights} ღამე`
                      : `${nights} ${
                          nights === 1
                            ? 'night'
                            : 'nights'
                        }`
                  }
                </small>
              `

              : `
                <small>
                  ${
                    language === 'ka'
                      ? 'აირჩიეთ თარიღები'
                      : 'Select dates'
                  }
                </small>
              `
          }

        </span>

      </div>


      <h3 class="apt-card-title">
        ${copy.title}
      </h3>


      <div class="apt-card-meta">

        ${listing.guests}

        ${
          language === 'ka'
            ? 'სტუმარი'
            : 'guests'
        }

        ·

        ${listing.bedrooms}

        ${
          language === 'ka'
            ? 'საძინებელი'
            : 'bedrooms'
        }

        ·

        ${listing.size} m²

      </div>


      <div class="apt-card-rate-row">

        ${buildCardIconRail(
          listing,
          language
        )}

        <span class="apt-card-nightly-price">

          <strong>
            $${listing.price}
          </strong>

          ${
            language === 'ka'
              ? ' / ღამე'
              : ' / night'
          }

        </span>

      </div>

    </div>
  `;


  card.addEventListener(
    'click',
    () => {
      openApartmentDetail(
        listingIndex
      );
    }
  );


  loadCardCover(
    card,
    listing
  );


  return card;
}

  function renderApartmentSearch() {
    if (!browserResults) {
      return;
    }

    const matchingListings =
      rotateSearchResults(
        apartmentData
          .map((listing, index) => ({
            listing,
            index
          }))
          .filter(item =>
            apartmentMatchesFilters(item.listing)
          )
      );

    browserResults.innerHTML = '';

    matchingListings.forEach(
      item => {
        browserResults.appendChild(
          createSearchResultCard(
            item.listing,
            item.index
          )
        );
      }
    );

    const language =
      getApartmentLanguage();

    if (browserCount) {
      browserCount.textContent =
        language === 'ka'
          ? `${matchingListings.length} აპარტამენტი`
          : `${matchingListings.length} ${
              matchingListings.length === 1
                ? 'apartment'
                : 'apartments'
            }`;
    }

    browserEmpty?.classList.toggle(
      'active',
      matchingListings.length === 0
    );
  }


  // ========================================
  // SEARCH CONTROL UI
  // ========================================

  const viewLabels = {
    all: { en: 'View', ka: 'ხედი' },
    sea: { en: 'Sea', ka: 'ზღვა' },
    mountain: { en: 'Mountain', ka: 'მთა' },
    pool: { en: 'Pool', ka: 'აუზი' },
    };

  function updateSearchStepper(
    select,
    valueElement,
    minusButton,
    plusButton,
    hideZero = false
  ) {
    if (!select || !valueElement) {
      return;
    }

    const value = Number(select.value);

    valueElement.textContent =
      String(value);

    valueElement.hidden =
      hideZero && value === 0;

    const values =
      Array.from(select.options)
        .map(option => Number(option.value))
        .filter(Number.isFinite);

    if (minusButton) {
      minusButton.disabled =
        value <= Math.min(...values);
    }

    if (plusButton) {
      plusButton.disabled =
        value >= Math.max(...values);
    }
  }

  function moveSearchStepper(
    select,
    direction,
    valueElement,
    minusButton,
    plusButton,
    hideZero = false
  ) {
    if (!select) {
      return;
    }

    const values =
      Array.from(select.options)
        .map(option => Number(option.value))
        .filter(Number.isFinite)
        .sort((a, b) => a - b);

    const currentIndex =
      values.indexOf(Number(select.value));

    const nextIndex =
      Math.max(
        0,
        Math.min(
          currentIndex + direction,
          values.length - 1
        )
      );

    select.value =
      String(values[nextIndex]);

    updateSearchStepper(
      select,
      valueElement,
      minusButton,
      plusButton,
      hideZero
    );

    select.dispatchEvent(
      new Event(
        'change',
        { bubbles: true }
      )
    );
  }

  function refreshApartmentSearchUI() {
    const language =
      getApartmentLanguage();

    updateSearchRangeDisplay();

    updateSearchStepper(
      filterGuests,
      filterGuestsValue,
      filterGuestsMinus,
      filterGuestsPlus
    );

    updateSearchStepper(
      filterBedrooms,
      filterBedroomsValue,
      filterBedroomsMinus,
      filterBedroomsPlus,
    
    );

    const guestCount =
      Number(filterGuests?.value || 1);

    const bedroomCount =
      Number(filterBedrooms?.value || 1);

    const guestField =
      filterGuests?.closest('.apt-filter-field');

    const bedroomField =
      filterBedrooms?.closest('.apt-filter-field');

    const viewField =
      filterView?.closest('.apt-filter-field');

    const priceField =
      filterPrice?.closest('.apt-filter-field');

    guestField?.setAttribute(
      'title',
      language === 'ka'
        ? `სტუმრები: ${guestCount}`
        : `Guests: ${guestCount}`
    );

    bedroomField?.setAttribute(
      'title',
      language === 'ka'
        ? `საძინებლები: ${bedroomCount || 'ნებისმიერი'}`
        : `Bedrooms: ${bedroomCount || 'Any'}`
    );

viewButtons.forEach(
  button => {

    const view =
      button.dataset.view;

    const selected =
      selectedViews.has(view);

    button.classList.toggle(
      'active',
      selected
    );

    button.setAttribute(
      'aria-pressed',
      selected ? 'true' : 'false'
    );

    const label =
      view === 'mountain'
        ? (
            language === 'ka'
              ? 'მთის ხედი'
              : 'Mountain view'
          )
        : (
            language === 'ka'
              ? 'ზღვის ხედი'
              : 'Sea view'
          );

    button.title = label;

    button.setAttribute(
      'aria-label',
      label
    );

  }
);

    const priceValue =
      filterPrice?.value || '99999';

      priceOptions.forEach(
  option => {

    option.setAttribute(
      'aria-selected',
      option.dataset.value === priceValue
        ? 'true'
        : 'false'
    );

  }
);

    const priceLabel =
      priceValue === '99999'
        ? (
            language === 'ka'
              ? 'მაქს. ფასი'
              : 'Max price'
          )
        : `$${priceValue}`;

    priceField?.setAttribute(
      'title',
      priceLabel
    );

    filterPrice?.setAttribute(
      'aria-label',
      priceLabel
    );

    const priceHasSelection =
      priceValue !== '99999';

    priceField?.classList.toggle(
      'has-selection',
      priceHasSelection
    );

    if (filterPriceDisplay) {
      filterPriceDisplay.textContent =
        priceHasSelection
          ? priceLabel
          : '';

      filterPriceDisplay.hidden =
        !priceHasSelection;
    }

    if (quickFilterIcon) {
      quickFilterIcon.title =
        language === 'ka'
          ? 'სწრაფი ფილტრები'
          : 'Quick filters';
    }

    if (filterClear) {
      const clearLabel =
        language === 'ka'
          ? 'ფილტრების გასუფთავება'
          : 'Clear filters';

      filterClear.title = clearLabel;
      filterClear.setAttribute(
        'aria-label',
        clearLabel
      );
    }

    if (searchDateEngine.isOpen()) {
      searchDateEngine.render();
    }
  }

  function resetApartmentSearchUI() {
    if (filterGuests) {
      filterGuests.value = '1';
    }

    if (filterBedrooms) {
      filterBedrooms.value = '1';
    }

    if (filterView) {
      filterView.value = 'all';
    }

    selectedViews.clear();


viewButtons.forEach(
  button => {

    button.classList.remove(
      'active'
    );


    button.setAttribute(
      'aria-pressed',
      'false'
    );

  }
);

    if (filterPrice) {
      filterPrice.value = '99999';
    }

    searchStartDate = null;
    searchEndDate = null;
    searchCalendarCursor = currentMonthDate();

    if (filterCheckin) {
      filterCheckin.value = '';
    }

    if (filterCheckout) {
      filterCheckout.value = '';
    }

    selectedAmenities.clear();

    amenityButtons.forEach(
      button => {
        button.classList.remove('active');
      }
    );

    searchDateEngine.close();
    refreshApartmentSearchUI();
    renderApartmentSearch();

  }
    window.addEventListener(
  'bb-home-reset',
  () => {
    resetApartmentSearchUI();
  }
);





  // ========================================
// VIEW TOGGLE
// Mountain / Sea
// ========================================

function syncViewFilter() {

  /*
    None or both selected means:
    don't restrict the view.
  */

  viewButtons.forEach(
    button => {

      const selected =
        selectedViews.has(
          button.dataset.view
        );


      button.classList.toggle(
        'active',
        selected
      );


      button.setAttribute(
        'aria-pressed',
        selected
          ? 'true'
          : 'false'
      );

    }
  );


  renderApartmentSearch();

}


viewButtons.forEach(
  button => {

    button.addEventListener(
      'click',
      () => {

        const view =
          button.dataset.view;


        if (!view) {
          return;
        }


        if (
          selectedViews.has(
            view
          )
        ) {

          selectedViews.delete(
            view
          );

        }

        else {

          selectedViews.add(
            view
          );

        }


        syncViewFilter();

      }
    );

  }
);

  // ========================================
  // FLOATING RETURN-TO-SEARCH BUTTON
  // ========================================

  function updateBrowserReturnSearchButton() {
    if (
      !browser ||
      !browserSearchPanel ||
      !browserReturnSearch ||
      !browser.classList.contains('active')
    ) {
      browserReturnSearch?.classList.remove('active');
      return;
    }

    const browserRect =
      browser.getBoundingClientRect();

    const searchRect =
      browserSearchPanel.getBoundingClientRect();

    const searchControlsAreGone =
      searchRect.bottom < browserRect.top + 12;

    browserReturnSearch.classList.toggle(
      'active',
      searchControlsAreGone
    );
  }

  function returnToBrowserSearch() {
    if (!browser || !browserSearchPanel) {
      return;
    }

    const browserRect =
      browser.getBoundingClientRect();

    const searchRect =
      browserSearchPanel.getBoundingClientRect();

    const targetTop =
      browser.scrollTop +
      searchRect.top -
      browserRect.top -
      12;

    browser.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth'
    });
  }

  // ========================================
  // BROWSER OPEN / CLOSE
  // ========================================

  function openApartmentBrowser() {
    if (!browser) {
      return;
    }

    browser.classList.add('active');
    browser.setAttribute('aria-hidden', 'false');

    browser.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

    refreshApartmentSearchUI();
    renderApartmentSearch();

    requestAnimationFrame(
      updateBrowserReturnSearchButton
    );
  }

  function closeApartmentBrowser() {
    if (!browser) {
      return;
    }

    searchDateEngine.close();
    browser.classList.remove('active');
    browser.setAttribute('aria-hidden', 'true');
    browserReturnSearch?.classList.remove('active');
  }


  // ========================================
  // INQUIRY STEPPERS
  // ========================================

  function readStepperValue(element) {
    return Number(element?.textContent || 0);
  }

  function setStepperValue(element, value) {
    if (!element) {
      return;
    }

    element.textContent = String(value);
  }

  function setServiceAnimal(requested) {
    serviceAnimalRequested = requested;

    serviceNo?.classList.toggle(
      'active',
      !requested
    );

    serviceYes?.classList.toggle(
      'active',
      requested
    );
  }

  function updateInquiryStepperButtons(
    listing = getActiveListing()
  ) {
    if (!listing) {
      return;
    }

    const guestCount =
      readStepperValue(inquiryGuests);

    const petCount =
      readStepperValue(inquiryPets);

    const parkingCount =
      readStepperValue(inquiryParking);

    if (guestsMinus) {
      guestsMinus.disabled =
        guestCount <= 1;
    }

    if (guestsPlus) {
      guestsPlus.disabled =
        guestCount >= listing.guests;
    }

    if (petsMinus) {
      petsMinus.disabled =
        petCount <= 0;
    }

    if (petsPlus) {
      petsPlus.disabled =
        !listing.amenities.includes('pets') ||
        petCount >= 3;
    }

    if (parkingMinus) {
      parkingMinus.disabled =
        parkingCount <= 0;
    }

    if (parkingPlus) {
      parkingPlus.disabled =
        !listing.amenities.includes('parking') ||
        parkingCount >= 1;
    }
  }

  function configureRequestDetails(
    listing,
    resetValues = false
  ) {
    const language =
      getApartmentLanguage();

    const petsAllowed =
      listing.amenities.includes('pets');

    const parkingAvailable =
      listing.amenities.includes('parking');

    if (resetValues) {
      setStepperValue(
        inquiryGuests,
        Math.min(2, listing.guests) || 1
      );

      setStepperValue(inquiryPets, 0);
      setStepperValue(inquiryParking, 0);
      setServiceAnimal(false);

      if (inquiryMessage) {
        inquiryMessage.value = '';
      }
    }

    if (petsControls) {
      petsControls.hidden = !petsAllowed;
    }

    if (petsUnavailable) {
      petsUnavailable.hidden = petsAllowed;
      petsUnavailable.textContent =
        language === 'ka'
          ? 'შინაური ცხოველები არ დაიშვება'
          : 'No pets allowed';
    }

    if (parkingControls) {
      parkingControls.hidden = !parkingAvailable;
    }

    if (parkingUnavailable) {
      parkingUnavailable.hidden = parkingAvailable;
      parkingUnavailable.textContent =
        language === 'ka'
          ? 'პარკინგი მიუწვდომელია'
          : 'Not available';
    }

    if (inquiryMessage) {
      inquiryMessage.placeholder =
        language === 'ka'
          ? 'არასავალდებულო'
          : 'Optional';
    }

    updateInquiryStepperButtons(listing);
  }

  function changeInquiryStepper(type, direction) {
    const listing = getActiveListing();

    if (!listing) {
      return;
    }

    if (type === 'guests') {
      const current =
        readStepperValue(inquiryGuests);

      setStepperValue(
        inquiryGuests,
        Math.max(
          1,
          Math.min(
            listing.guests,
            current + direction
          )
        )
      );
    }

    if (type === 'pets') {
      if (!listing.amenities.includes('pets')) {
        return;
      }

      const current =
        readStepperValue(inquiryPets);

      setStepperValue(
        inquiryPets,
        Math.max(
          0,
          Math.min(
            3,
            current + direction
          )
        )
      );
    }

    if (type === 'parking') {
      if (!listing.amenities.includes('parking')) {
        return;
      }

      const current =
        readStepperValue(inquiryParking);

      setStepperValue(
        inquiryParking,
        Math.max(
          0,
          Math.min(
            1,
            current + direction
          )
        )
      );
    }

    updateInquiryStepperButtons(listing);
  }


  // ========================================
  // INQUIRY OPEN / CLOSE
  // ========================================

  function openApartmentInquiry() {
    if (
      activeListingIndex === null ||
      !inquiryOverlay
    ) {
      return;
    }

    const listing =
      apartmentData[activeListingIndex];

    if (!listing) {
      return;
    }

    const language =
      getApartmentLanguage();

    const copy =
      listing[
        language === 'ka'
          ? 'ka'
          : 'en'
      ];

    const differentListing =
      inquiryListingId !== listing.id;

    if (differentListing) {
      inquiryListingId = listing.id;
      inquiryStartDate = null;
      inquiryEndDate = null;
      if (differentListing) {

  inquiryListingId =
    listing.id;


  /*
    If the renter searched using
    a complete date range, carry
    those dates into the inquiry.
  */

  if (
    searchStartDate &&
    searchEndDate
  ) {

    inquiryStartDate =
      new Date(
        searchStartDate
      );


    inquiryEndDate =
      new Date(
        searchEndDate
      );


    inquiryCalendarCursor =
      new Date(
        inquiryStartDate.getFullYear(),
        inquiryStartDate.getMonth(),
        1
      );

  }

  else {

    inquiryStartDate =
      null;


    inquiryEndDate =
      null;


    inquiryCalendarCursor =
      currentMonthDate();

  }

}

/*
  Same listing, but inquiry has
  no dates yet:

  use the current search dates.
*/

if (
  !inquiryStartDate &&
  !inquiryEndDate &&
  searchStartDate &&
  searchEndDate
) {

  inquiryStartDate =
    new Date(
      searchStartDate
    );


  inquiryEndDate =
    new Date(
      searchEndDate
    );


  inquiryCalendarCursor =
    new Date(
      inquiryStartDate.getFullYear(),
      inquiryStartDate.getMonth(),
      1
    );

}
    }

    if (inquiryTitle) {
      inquiryTitle.textContent = copy.title;
    }

    if (inquiryReference) {
      inquiryReference.textContent =
        listing.reference;
    }

    if (inquiryStatus) {
      inquiryStatus.textContent = '';
    }

    configureRequestDetails(
      listing,
      differentListing
    );

    if (inquiryStartDate) {
      inquiryCalendarCursor =
        new Date(
          inquiryStartDate.getFullYear(),
          inquiryStartDate.getMonth(),
          1
        );
    }

    inquiryDateEngine.close();
    inquiryDateEngine.render();
    updateInquiryRangeDisplay();

    inquiryOverlay.classList.add('active');
    inquiryOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeApartmentInquiry() {
    if (!inquiryOverlay) {
      return;
    }

    inquiryDateEngine.close();
    inquiryOverlay.classList.remove('active');
    inquiryOverlay.setAttribute('aria-hidden', 'true');
  }


  // ========================================
  // EVENT WIRING
  // ========================================

  prevButton?.addEventListener(
    'click',
    () => {
      currentCardIndex--;
      updateApartmentCarousel();
    }
  );

  nextButton?.addEventListener(
    'click',
    () => {
      currentCardIndex++;
      updateApartmentCarousel();
    }
  );

  window.addEventListener(
    'resize',
    updateApartmentCarousel
  );

  browseOpen?.addEventListener(
    'click',
    openApartmentBrowser
  );

  browserClose?.addEventListener(
    'click',
    closeApartmentBrowser
  );

  browser?.addEventListener(
    'scroll',
    updateBrowserReturnSearchButton,
    { passive: true }
  );

  browserReturnSearch?.addEventListener(
    'click',
    returnToBrowserSearch
  );

  detailClose?.addEventListener(
    'click',
    closeApartmentDetail
  );

  detailBack?.addEventListener(
    'click',
    closeApartmentDetail
  );

  photoPrev?.addEventListener(
    'click',
    () => {
      if (!activeImages.length) {
        return;
      }

      activePhotoIndex--;
      renderDetailPhoto();
    }
  );

  photoNext?.addEventListener(
    'click',
    () => {
      if (!activeImages.length) {
        return;
      }

      activePhotoIndex++;
      renderDetailPhoto();
    }
  );

  detailPhoto?.addEventListener(
    'click',
    event => {
      if (!activeImages.length) {
        return;
      }

      const rectangle =
        detailPhoto.getBoundingClientRect();

      const clickX =
        event.clientX - rectangle.left;

      if (clickX < rectangle.width / 2) {
        activePhotoIndex--;
      }
      else {
        activePhotoIndex++;
      }

      renderDetailPhoto();
    }
  );

  inquiryOpen?.addEventListener(
    'click',
    openApartmentInquiry
  );

  inquiryClose?.addEventListener(
    'click',
    closeApartmentInquiry
  );

  guestsMinus?.addEventListener(
    'click',
    () => changeInquiryStepper('guests', -1)
  );

  guestsPlus?.addEventListener(
    'click',
    () => changeInquiryStepper('guests', 1)
  );

  petsMinus?.addEventListener(
    'click',
    () => changeInquiryStepper('pets', -1)
  );

  petsPlus?.addEventListener(
    'click',
    () => changeInquiryStepper('pets', 1)
  );

  parkingMinus?.addEventListener(
    'click',
    () => changeInquiryStepper('parking', -1)
  );

  parkingPlus?.addEventListener(
    'click',
    () => changeInquiryStepper('parking', 1)
  );

  serviceNo?.addEventListener(
    'click',
    () => setServiceAnimal(false)
  );

  serviceYes?.addEventListener(
    'click',
    () => setServiceAnimal(true)
  );

  filterGuestsMinus?.addEventListener(
    'click',
    () => {
      moveSearchStepper(
        filterGuests,
        -1,
        filterGuestsValue,
        filterGuestsMinus,
        filterGuestsPlus
      );
    }
  );

  filterGuestsPlus?.addEventListener(
    'click',
    () => {
      moveSearchStepper(
        filterGuests,
        1,
        filterGuestsValue,
        filterGuestsMinus,
        filterGuestsPlus
      );
    }
  );

  filterBedroomsMinus?.addEventListener(
    'click',
    () => {
      moveSearchStepper(
        filterBedrooms,
        -1,
        filterBedroomsValue,
        filterBedroomsMinus,
        filterBedroomsPlus,
        true
      );
    }
  );

  filterBedroomsPlus?.addEventListener(
    'click',
    () => {
      moveSearchStepper(
        filterBedrooms,
        1,
        filterBedroomsValue,
        filterBedroomsMinus,
        filterBedroomsPlus,
        true
      );
    }
  );

  [
    filterGuests,
    filterBedrooms,
    filterView,
    filterPrice
  ].forEach(
    control => {
      control?.addEventListener(
        'change',
        () => {
          refreshApartmentSearchUI();
          renderApartmentSearch();
        }
      );
    }
  );

  amenityButtons.forEach(
    button => {
      button.addEventListener(
        'click',
        () => {
          const amenity =
            button.dataset.amenity;

          if (!amenity) {
            return;
          }

          if (selectedAmenities.has(amenity)) {
            selectedAmenities.delete(amenity);
            button.classList.remove('active');
          }
          else {
            selectedAmenities.add(amenity);
            button.classList.add('active');
          }

          renderApartmentSearch();
        }
      );
    }
  );

  filterClear?.addEventListener(
    'click',
    resetApartmentSearchUI
  );


  // ========================================
  // SUBMIT AVAILABILITY REQUEST
  // ========================================

  inquiryForm?.addEventListener(
    'submit',
    event => {
      event.preventDefault();

      const language =
        getApartmentLanguage();

      if (!inquiryStartDate || !inquiryEndDate) {
        if (inquiryStatus) {
          inquiryStatus.textContent =
            language === 'ka'
              ? 'გთხოვთ აირჩიოთ ჩამოსვლის და გასვლის თარიღები.'
              : 'Please select both check-in and check-out dates.';
        }

        return;
      }

      const listing =
        getActiveListing();

      const requestDraft = {
        listingId: listing?.id || null,
        listingReference:
          listing?.reference || null,
        checkIn: dateToKey(inquiryStartDate),
        checkOut: dateToKey(inquiryEndDate),
        nights:
          getNightCount(
            inquiryStartDate,
            inquiryEndDate
          ),
        guests:
          readStepperValue(inquiryGuests),
        pets:
          readStepperValue(inquiryPets),
        parkingSpacesRequested:
          readStepperValue(inquiryParking),
        serviceAnimal:
          serviceAnimalRequested,
        message:
          inquiryMessage?.value.trim() || ''
      };

      console.log(
        'Bamboo Beach inquiry draft:',
        requestDraft
      );

      if (inquiryStatus) {
        inquiryStatus.textContent =
          language === 'ka'
            ? 'პროტოტიპი: მოთხოვნა მზადაა. მესაკუთრესთან გაგზავნა backend-ის ეტაპზე დაემატება.'
            : 'Prototype: request ready. Delivery to the owner will be connected with the backend.';
      }
    }
  );


  // ========================================
  // KEYBOARD
  // ========================================

  document.addEventListener(
    'keydown',
    event => {
      if (event.key !== 'Escape') {
        if (
          detailOverlay &&
          detailOverlay.classList.contains('active')
        ) {
          if (
            event.key === 'ArrowLeft' &&
            activeImages.length
          ) {
            activePhotoIndex--;
            renderDetailPhoto();
          }

          if (
            event.key === 'ArrowRight' &&
            activeImages.length
          ) {
            activePhotoIndex++;
            renderDetailPhoto();
          }
        }

        return;
      }

      if (
        inquiryOverlay &&
        inquiryOverlay.classList.contains('active')
      ) {
        if (inquiryDateEngine.isOpen()) {
          inquiryDateEngine.close();
        }
        else {
          closeApartmentInquiry();
        }

        return;
      }

      if (
        detailOverlay &&
        detailOverlay.classList.contains('active')
      ) {
        closeApartmentDetail();
        return;
      }

      if (
        browser &&
        browser.classList.contains('active')
      ) {
        if (searchDateEngine.isOpen()) {
          searchDateEngine.close();
        }
        else {
          closeApartmentBrowser();
        }
      }
    }
  );


  // ========================================
  // LANGUAGE CHANGE
  // ========================================

  window.addEventListener(
    'bb-language-change',
    () => {
      renderApartmentCards();
      renderApartmentSearch();
      refreshApartmentSearchUI();
      updateInquiryRangeDisplay();

      const activeInquiryListing =
        getActiveListing();

      if (activeInquiryListing) {
        configureRequestDetails(
          activeInquiryListing,
          false
        );
      }

      if (
        activeListingIndex !== null &&
        detailOverlay &&
        detailOverlay.classList.contains('active')
      ) {
        openApartmentDetail(activeListingIndex);
      }

      if (inquiryDateEngine.isOpen()) {
        inquiryDateEngine.render();
      }

      if (searchDateEngine.isOpen()) {
        searchDateEngine.render();
      }
    }
  );


  // ========================================
  // INITIALIZE
  // ========================================

  renderApartmentCards();
  refreshApartmentSearchUI();
  updateInquiryRangeDisplay();

})();


// ========================================
// GUEST TOUR — ONE GESTURE = ONE PAGE
// ========================================

(() => {

  const guestTour =
    document.getElementById('guest-tour');
    
    

    if (!guestTour) return;


  const sections =
    Array.from(
      guestTour.querySelectorAll('.tour-section')
    );

  if (!sections.length) return;



  let currentIndex = 0;

  // Page animation itself
  let isScrolling = false;


  // Trackpad / mouse gesture
  let wheelGestureActive = false;

  let lastWheelTime = 0;
  let lastWheelMagnitude = 0;
  let lastWheelDirection = 0;

  let wheelEndTimer = null;
  let apartmentWheelLocked = false;
  let apartmentWheelEndTimer = null;


  // Mobile
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartedInApartmentScroller = false;



  // ========================================
  // MOVE EXACTLY ONE PAGE
  // ========================================

  function goToSection(index) {

    index =
      Math.max(
        0,
        Math.min(
          index,
          sections.length - 1
        )
      );


    if (
      index === currentIndex ||
      isScrolling
    ) {
      return;
    }


    currentIndex = index;

    isScrolling = true;


    guestTour.scrollTo({
      top: sections[currentIndex].offsetTop,
      behavior: 'smooth'
    });

  }



  // ========================================
  // PAGE MOVEMENT ACTUALLY FINISHED
  // ========================================

  guestTour.addEventListener(
    'scrollend',
    () => {

      isScrolling = false;

    }
  );



  // ========================================
  // DESKTOP / TRACKPAD
  // ========================================

guestTour.addEventListener(
  'wheel',
  event => {

    const apartmentScroller =
      event.target.closest(
        '.apt-viewport'
      );


    const horizontalGesture =
      apartmentScroller &&
      Math.abs(event.deltaX) >
        Math.abs(event.deltaY);


if (horizontalGesture) {

  event.preventDefault();


  /*
    Ignore the tiny momentum tail.
  */

  if (
    Math.abs(event.deltaX) < 10
  ) {
    return;
  }


  /*
    One listing per impulse.
  */

  if (apartmentWheelLocked) {
    return;
  }


  apartmentWheelLocked = true;


  /*
    IMPORTANT:
    Unlock from the FIRST accepted event.

    Do NOT keep resetting this timer
    with every momentum event.
  */

  clearTimeout(
    apartmentWheelEndTimer
  );


  apartmentWheelEndTimer =
    setTimeout(
      () => {

        apartmentWheelLocked =
          false;

      },
      220
    );


  const visibleCard =
    apartmentScroller.querySelector(
      '.apt-card:not(.apt-card-mobile-hidden)'
    );


  const track =
    apartmentScroller.querySelector(
      '.apt-track'
    );


  if (
    !visibleCard ||
    !track
  ) {

    apartmentWheelLocked =
      false;

    return;

  }


  const cardWidth =
    visibleCard
      .getBoundingClientRect()
      .width;


  const gap =
    parseFloat(
      getComputedStyle(
        track
      ).gap
    ) || 0;


  apartmentScroller.scrollBy({

    left:
      Math.sign(event.deltaX) *
      (cardWidth + gap),

    behavior:
      'smooth'

  });


  return;
}

    /*
      Everything else belongs to the
      vertical one-page Guest Tour.
    */

      event.preventDefault();


      const now =
        performance.now();


      const magnitude =
        Math.abs(event.deltaY);


      const direction =
        Math.sign(event.deltaY);


      if (magnitude < 5) {
        return;
      }



      const gap =
        now - lastWheelTime;



      /*
        A new gesture can be recognized by:

        1. Previous wheel stream already ended.

        2. A noticeable gap between events.

        3. User suddenly reverses direction.

        4. A strong new same-direction swipe
           appears after the page has finished.
      */

      const strongNewImpulse =
        !isScrolling &&
        magnitude > 24 &&
        magnitude >
          lastWheelMagnitude * 2.2;


      const reversedDirection =
        !isScrolling &&
        lastWheelDirection !== 0 &&
        direction !== lastWheelDirection;


      const newGesture =
        !wheelGestureActive ||
        gap > 65 ||
        strongNewImpulse ||
        reversedDirection;



      /*
        Remember current wheel event.
      */

      lastWheelTime = now;
      lastWheelDirection = direction;



      /*
        Every incoming wheel event keeps
        the current physical gesture alive.

        65ms here is NOT a page cooldown.
        It only determines when trackpad
        momentum has actually stopped.
      */

      clearTimeout(wheelEndTimer);


      wheelEndTimer =
        setTimeout(() => {

          wheelGestureActive = false;

          lastWheelMagnitude = 0;
          lastWheelDirection = 0;

        }, 65);



      /*
        Page still physically moving.

        Consume leftover momentum,
        but DO NOT change page.
      */

      if (isScrolling) {

        lastWheelMagnitude =
          magnitude;

        return;

      }



      /*
        Same old trackpad gesture.

        Consume its remaining momentum.
      */

      if (!newGesture) {

        lastWheelMagnitude =
          magnitude;

        return;

      }



      // ========================================
      // REAL NEW GESTURE
      // ========================================

      wheelGestureActive = true;

      lastWheelMagnitude =
        magnitude;



      if (direction > 0) {

        goToSection(
          currentIndex + 1
        );

      }

      else {

        goToSection(
          currentIndex - 1
        );

      }

    },

    {
      passive: false
    }
  );



  // ========================================
  // MOBILE TOUCH
  // ========================================

  guestTour.addEventListener(
    'touchstart',
    event => {

      touchStartX =
        event.touches[0].clientX;

      touchStartY =
        event.touches[0].clientY;

      touchStartedInApartmentScroller =
        Boolean(
          event.target.closest('.apt-viewport')
        );

    },

    {
      passive: true
    }
  );



  guestTour.addEventListener(
    'touchmove',
    event => {

      const touch =
        event.touches[0];

      const horizontalDistance =
        Math.abs(
          touch.clientX - touchStartX
        );

      const verticalDistance =
        Math.abs(
          touch.clientY - touchStartY
        );

      /*
        Page 03 apartment cards are allowed
        to use native horizontal scrolling.
      */

      if (
        touchStartedInApartmentScroller &&
        horizontalDistance > verticalDistance
      ) {
        return;
      }

      /*
        Everywhere else, consume native
        movement so one vertical gesture
        still equals one tour page.
      */

      event.preventDefault();

    },

    {
      passive: false
    }
  );



  guestTour.addEventListener(
    'touchend',
    event => {

      if (isScrolling) {
        return;
      }


      const touchEndX =
        event.changedTouches[0].clientX;


      const touchEndY =
        event.changedTouches[0].clientY;


      const horizontalDistance =
        touchStartX -
        touchEndX;


      const distance =
        touchStartY -
        touchEndY;


      if (
        touchStartedInApartmentScroller &&
        Math.abs(horizontalDistance) >
          Math.abs(distance)
      ) {
        return;
      }


      if (
        Math.abs(distance) < 45
      ) {
        return;
      }



      if (distance > 0) {

        goToSection(
          currentIndex + 1
        );

      }

      else {

        goToSection(
          currentIndex - 1
        );

      }

    },

    {
      passive: true
    }
  );



  // ========================================
  // KEEP CURRENT PAGE INDEX CORRECT
  // ========================================

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting &&
              entry.intersectionRatio >= 0.7
            ) {

              const index =
                sections.indexOf(
                  entry.target
                );


              if (index !== -1) {

                currentIndex =
                  index;

              }

            }

          }
        );

      },

      {
        root: guestTour,
        threshold: [0.7]
      }

    );


  sections.forEach(
    section => {

      observer.observe(section);

    }
  );


})();
