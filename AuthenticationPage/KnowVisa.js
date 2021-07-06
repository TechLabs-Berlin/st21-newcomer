Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    clearInvisibleValues: "onHidden",
    questions: [
        {
            type: "radiogroup",
            name: "purposeOfStay",
            title: "What is your purpose of stay in Berlin?",
            isRequired: true,
            choices: [
                "Work", "Study", "Research","Vocational training","Self-empoyment","Family reunion"
            ],
            colCount: 0
        
         
        }, 

        {
            type: "radiogroup",
            name: "Qualification",
            title: "Which qualification do you have?",
            visibleIf: "{purposeOfStay}='Work'",
            isRequired: true,
            choices: [
                "University Degree", "Vocational Qualification", "High School Diploma, IB, Matura or Abitur","IT with practical experience","I do not have any qualification."
            ],
            colCount: 0
        
         
        }, 

        {
            type: "radiogroup",
            name: "No qualification",
            title: "Do you want to learn a profession?",
            visibleIf: "{Qualification}='I do not have any qualification.'",
            isRequired: true,
            choices: [
                "Yes","No"
            ],
            colCount: 0
            
        
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is what you need to do",
            visibleIf: "{No qualification}='Yes'",
            isRequired: true,
            choices: [
                "Please select : Undergo Vocational training"
            ],
            colCount: 0
            
        
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is what you need to do",
            visibleIf: "{No qualification}='No'",
            isRequired: true,
            choices: [
                "Unfortunately, based on your answers, it seems that there is little chance for you to successfully apply for a long term stay visa for Germany as there is no visa type that matches your current situation."
            ],
            colCount: 0
            
        
        }, 


        
        {
            type: "checkbox",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{Qualification}='IT with practical experience'",
            isRequired: true,
            choices: [
                "German Work VISA for IT Specialists: To work in the IT sector in Germany, you do not need to have a recognised degree if you have been working in the IT sector elsewhere for at least three years within the last 7 years. You need a job offer in Germany that pays you 51,120 EUR before taxes or more. Get your residence permit from the local foreigners office after arrival in Germany. Your German language skills are at least at B1 level in accordance with the CEFR.",
            ],
            colCount: 0
            
        
        }, 
        
     
        
        {
            type: "radiogroup",
            name: "result",
            title: "Here is what you need to do",
            visibleIf: "{Qualification}='High School Diploma, IB, Matura or Abitur'",
            isRequired: true,
            choices: [
                "Unfortunately, you cannot immigrate to Germany as a qualified professional. You may want to study or undergo vocational training in Germany.",
            ],
            colCount: 0
            
        
        }, 
       

        {
            type: "radiogroup",
            name: "Have University Degree",
            title: "Did you get a university degree in Germany?",
            visibleIf: "{Qualification}='University Degree'",
            isRequired: true,
            choices: [
                "Yes", "No",
            ],
            colCount: 0
            
        
        }, 
        {
            type: "radiogroup",
            name: "Have University Degree",
            title: "Did you get a university degree in Germany?",
            visibleIf: "{Qualification}='Vocational Qualification'",
            isRequired: true,
            choices: [
                "Degree Obtained in Germany", "Degree Obtained outside of Germany",
            ],
            colCount: 0
            
        
        },

        {
            type: "radiogroup",
            name: "Degree recognized?",
            title: "Is your degree recognized?",
            visibleIf: "{Have University Degree}='Degree Obtained outside of Germany'",
            isRequired: true,
            choices: [
                "Yes","No","Partially recognized"
            ],
            colCount: 0
            
        
        }, 
        {
            type: "radiogroup",
            name: "JobOffer",
            title: "Do you have a job offer?",
            visibleIf: "{Degree recognized?}='Yes'",
            isRequired: true,
            choices: [
                "Yes","No"
            ],
            colCount: 0
            
        
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is what you need to do",
            visibleIf: "{Degree recognized?}='Partially recognized'",
            isRequired: true,
            choices: [
                "If your vocational qualification is not fully recognised, you can get the extra qualifications in Germany while already working. Once your additional training is completed, you can get your qualification fully recognised and apply for a long term residence permit to work. A residence permit to work and qualify will be issued for 18 months, in certain cases up to two years only. After that, you can get a residence permit to work."
            ],
            colCount: 0
            
        
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is what you need to do",
            visibleIf: "{Degree recognized?}='No'",
            isRequired: true,
            choices: [
                "If you have obtained your university degree or completed your vocational training outside of Germany, please have your degree recognised first before applying for your visa. If no one has previously requested for your qualification to be recognised, then your institution, degree type and specific degree will not be listed on Anabin and you will have to officially apply for a Statement of Comparability from ZAB. Your foreign university degree could be considered vocational qualification in Germany."
            ],
            colCount: 0
            
        
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{JobOffer}='No'",
            isRequired: true,
            choices: [
                "Job Seeker (non academic): With a Job Seeker visa you can stay for up to six months in Germany to find a job corresponding to your vocational qualification. You need to have completed a vocational training of at least two years that has been recognised in Germany. You need a ???? visa to enter Germany. Once you find an adequate job, you can get a residence permit. You do not need a residence permit while looking for a job for up to six months."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{JobOffer}='Yes'",
            isRequired: true,
            choices: [
                "Work Visa - with a contract: If you already have a recognised qualification such as a university degree or vocational qualification, and you already have a contract, you can apply for a work visa. There is a fast-track procedure for skilled workers, if your employer provides you with a pre-approval from the local foreigners office in Germany. Get your residence permit at the local foreigners office after your arrival."
            ],
            colCount: 0
        }, 
      

        

        {
            type: "radiogroup",
            name: "Degree Obtained in Germany",
            title: "Do you have a job offer?",
            visibleIf: "{Have University Degree}='Degree Obtained in Germany'",
            isRequired: true,
            choices: [
                "Yes", "No",
            ],
            colCount: 0
            
        
        }, 

        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{Degree Obtained in Germany}='Yes'",
            isRequired: true,
            choices: [
                "Work Visa - with a contract: If you already have a recognised qualification such as a university degree or vocational qualification, and you already have a contract, you can apply for a work visa. There is a fast-track procedure for skilled workers, if your employer provides you with a pre-approval from the local foreigners office in Germany. You need a ???? visa to enter Germany. Get your residence permit at the local foreigners office after your arrival."
            ],
            colCount: 0
            
        
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{Degree Obtained in Germany}='No'",
            isRequired: true,
            choices: [
                "Job Seeker (non academic): With a Job Seeker visa you can stay for up to six months in Germany to find a job corresponding to your vocational qualification. You need to have completed a vocational training of at least two years that has been recognized in Germany. Once you find an adequate job, you can get a residence permit. You do not need a residence permit while looking for a job for up to six months."
            ],
            colCount: 0
            
        
        }, 
        





        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{Job Offer}='Yes'",
            choices:["Job Seeker (non academic): With a Job Seeker visa you can stay for up to six months in Germany to find a job corresponding to your vocational qualification. You need to have completed a vocational training of at least two years that has been recognised in Germany. You need a ???? visa to enter Germany. Once you find an adequate job, you can get a residence permit. You do not need a residence permit while looking for a job for up to six months."]
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{Job Offer}='No'",
            choices:["Job Seeker (non academic): With a Job Seeker visa you can stay for up to six months in Germany to find a job corresponding to your vocational qualification. You need to have completed a vocational training of at least two years that has been recognized in Germany. Once you find an adequate job, you can get a residence permit. You do not need a residence permit while looking for a job for up to six months."]
        },
        
        {
            type: "radiogroup",
            name: "Have University Degree",
            title: "Did you get a university degree in Germany?",
            visibleIf: "{Qualification}='University Degree'",
            isRequired: true,
            choices: [
                "Yes", "No",
            ],
            colCount: 0
            
        
        }, 
        {
            type: "radiogroup",
            name: "degreeObtainedInGermany",
            title: "Which situation are you in?",
            visibleIf: "{Have University Degree}='Yes'",
            isRequired: true,
            choices: ["Salary of 56,800 euros per year or more","Physician, an engineer, a natural scientist or a mathematics or IT specialist with a salary of 44,304 euros per year or more","Salary of 56,799 euros per year or less","No Job Offer"]
        ,colCount: 0
        },
        
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeObtainedinGermany}='Physician, an engineer, a natural scientist or a mathematics or IT specialist with a salary of 44,304 euros per year or more'",
            choices:["Blue Card EU : If you have a recognized university degree, you can get a Blue Card EU if you already have a job offer that pays you 56,800 EUR before taxes per year. For physicians, engineers, natural scientists, mathematicians and IT-specialists, a yearly salary of 44,304 EUR is sufficient. You need a ???? visa to enter Germany. Get your Blue Card EU from the local foreigners office after arrival in Germany."]
        },

        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeObtainedinGermany}='Salary of 56,799 euros per year or less'",
            choices:["Work Visa - with a contract: If you already have a recognized qualification such as a university degree or vocational qualification, and you already have a contract, you can apply for a work visa. There is a fast-track procedure for skilled workers, if your employer provides you with a pre-approval from the local foreigners office in Germany. You need a ???? visa to enter Germany. Get your residence permit at the local foreigners office after your arrival."]
        },

        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeObtainedinGermany}='No Job Offer'",
            choices:["Job Seeker (academic) : Evidence of appropriate employment-seeking efforts (applications, etc.) must be submitted to the Berlin Immigration Office. While the job search continues, you may take up any employed or self-employed work. The 18-month duration of the residence permit is granted. Every new university degree successfully obtained in Germany initiates, meaning that the period of 18 months will be valid again in its entirety."]
        },

        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeObtainedinGermany}='Salary of 56,800 euros per year or more'",
            choices:["Blue Card EU : If you have a recognized university degree, you can get a Blue Card EU if you already have a job offer that pays you 56,800 EUR before taxes per year. For physicians, engineers, natural scientists, mathematicians and IT-specialists, a yearly salary of 44,304 EUR is sufficient. You need a ???? visa to enter Germany. Get your Blue Card EU from the local foreigners office after arrival in Germany."]
        },

        
        {
            type: "radiogroup",
            name: "degreeObtainedOutsideGermany",
            title: "Is your degree recognised?",
            visibleIf: "{Have University Degree}='No'",
            isRequired: true,
            choices: ["Yes","No"]
        ,colCount: 0
        

        }, 

        {
            type: "radiogroup",
            name: "degreeNotRecognized",
            title: "Which situation are you in?",
            visibleIf: "{degreeObtainedOutsideGermany}='No'",
            isRequired: true,
            choices: ["Degree not recognised","Partially - my degree has not been fully recognised"]
        ,colCount: 0
        

        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeNotRecognized}='Degree not recognised'",
            choices:["If no one has previously requested for your qualification to be recognised, then your institution, degree type and specific degree will not be listed on Anabin and you will have to officially apply for a Statement of Comparability from ZAB. Your foreign university degree could be considered vocational qualification in Germany."]
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeNotRecognized}='Partially - my degree has not been fully recognised'",
            choices:["Name of visa? : If your vocational qualification is not fully recognised, you can get the extra qualifications in Germany while already working. Once your additional training is completed, you can get your qualification fully recognised and apply for a long term residence permit to work. A residence permit to work and qualify will be issued for 18 months, in certain cases up to two years only. After that, you can get a residence permit to work."]
        },

        
        {
            type: "radiogroup",
            name: "degreeRecognized",
            title: "Which situation are you in?",
            visibleIf: "{degreeObtainedOutsideGermany}='Yes'",
            isRequired: true,
            choices: ["Salary of 56,800 euros per year or more","Physician, an engineer, a natural scientist or a mathematics or IT specialist with a salary of 44,304 euros per year or more","Salary of 56,799 euros per year or less","No Job Offer"]
        ,colCount: 0
        

        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeRecognized}='Physician, an engineer, a natural scientist or a mathematics or IT specialist with a salary of 44,304 euros per year or more'",
            choices:["Blue Card EU : If you have a recognized university degree, you can get a Blue Card EU if you already have a job offer that pays you 56,800 EUR before taxes per year. For physicians, engineers, natural scientists, mathematicians and IT-specialists, a yearly salary of 44,304 EUR is sufficient. You need a ???? visa to enter Germany. Get your Blue Card EU from the local foreigners office after arrival in Germany."]
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeRecognized}='Salary of 56,800 euros per year or more'",
            choices:["Blue Card EU : If you have a recognized university degree, you can get a Blue Card EU if you already have a job offer that pays you 56,800 EUR before taxes per year. For physicians, engineers, natural scientists, mathematicians and IT-specialists, a yearly salary of 44,304 EUR is sufficient. You need a ???? visa to enter Germany. Get your Blue Card EU from the local foreigners office after arrival in Germany."]
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeRecognized}='No Job Offer'",
            choices:["Job Seeker (academic) : Evidence of appropriate employment-seeking efforts (applications, etc.) must be submitted to the Berlin Immigration Office. While the job search continues, you may take up any employed or self-employed work. The 18-month duration of the residence permit is granted. Every new university degree successfully obtained in Germany initiates, meaning that the period of 18 months will be valid again in its entirety."]
        },

       
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeObtainedOutsideGermany}='Salary of 56,800 euros per year or more'",
            choices:["Blue Card EU : If you have a recognized university degree, you can get a Blue Card EU if you already have a job offer that pays you 56,800 EUR before taxes per year. For physicians, engineers, natural scientists, mathematicians and IT-specialists, a yearly salary of 44,304 EUR is sufficient. You need a ???? visa to enter Germany. Get your Blue Card EU from the local foreigners office after arrival in Germany."]
        },


        

        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            isRequired: true,
            visibleIf: "{degreeRecognized}='Salary of 56,799 euros per year or less'",
            choices:["Work Visa - with a contract : If you already have a recognized qualification such as a university degree or vocational qualification, and you already have a contract, you can apply for a work visa. There is a fast-track procedure for skilled workers, if your employer provides you with a pre-approval from the local foreigners office in Germany. You need a ???? visa to enter Germany. Get your residence permit at the local foreigners office after your arrival."]
        },





        {
            type: "radiogroup",
            name: "study",
            title: "Are you admitted to a German University?",
            visibleIf:"{purposeOfStay}='Study'",
            isRequired: true,
            choices: [
                "Yes","No",
            ],
            colCount: 0
        
         
        },
        {
            type: "radiogroup",
            name: "Admitted to university",
            title: "Here is the visa you need",
            visibleIf:"{study}='Yes'",
            isRequired: true,
            choices: [
                "Study visa with admission to a German university: If you wish to study in Germany and you are already admitted to a university, be it a direct general admission or an admission under certain conditions, you can apply for a study visa if you can prove that you have enough money to support yourself. You need a national visa to enter Germany. After arrival, you need to apply for a residence permit at the local foreigners office.",
            ],
            colCount: 0
        
         
        },
        {
            type: "radiogroup",
            name: "Not Admitted to university",
            title: "Which one is your situation?",
            visibleIf:"{study}='No'",
            isRequired: true,
            choices: [
                "Admitted to a preparatory language course/internship","Not admitted to any language course and want to travel to Germany to apply to a German university","Not admitted to any language course and do not want to travel currently","Not admitted yet but will prepare"            ],
            colCount: 0
        
         
        },
        {
            type: "radiogroup",
            name: "Not Admitted to university, Language class",
            title: "Here is the visa you need",
            visibleIf:"{Not Admitted to university}='Admitted to a preparatory language course/internship'",
            isRequired: true,
            choices: [
                "Study Visa for Language : You can study with a prior language course or internship. You can apply for a study visa, if you can prove that you have enough money to support yourself. After your arrival in Germany you have to apply for a residence permit with the aliens department that is responsible for your place of residence."],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "Not Admitted to university, No Language class",
            title: "Here is the visa you need",
            visibleIf:"{Not Admitted to university}='Not admitted to any language course and want to travel to Germany to apply to a German university'",
            isRequired: true,
            choices: [
                "Study visa without admission : If you wish to travel to Germany in order to apply for admission to a German university, you can get a study visa if you can prove that you have enough money to support yourself. You need a national visa to enter Germany. You need a national visa to enter Germany. After arrival, you need to apply for a residence permit at the local foreigners office."],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "Not Admitted to university, No Language class, No travel",
            title: "Here is the visa you need",
            visibleIf:"{Not Admitted to university}='Not admitted to any language course and do not want to travel currently'",
            isRequired: true,
            choices: [
                "Find more information on studying in Germany and how to get admitted visiting www.daad.org."],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "Not Admitted to university, No Language class",
            title: "Here is the visa you need",
            visibleIf:"{Not Admitted to university}='Not admitted yet but will prepare'",
            isRequired: true,
            choices: [
                "Study Preparation Visa: For those who are required to meet prerequisites before being accepted into university. It can be granted for a maximum of two years for the purpose of intensive German language courses of over 18 lesson hours per week, study college (Studienkolleg), or preparatory courses. This residency permit cannot be issued for any intensive language courses other than German. It will require a private interview, preferably by appointment, school leaving certificate (German Abitur certificate, high school diploma, proof of completion of secondary education). With official acceptance to a German university and proof of a registered residence in Berlin, the Study Preparation Visa can be transferred to a Student Permit (Aufenthaltserlaubnis zum Studium)."],
            colCount: 0
        },

        {
            type: "radiogroup",
            name: "ResearchPurpose",
            title: "Which situation are you in?",
            visibleIf: "{purposeOfStay}='Research'",
            isRequired: true,
            choices: [
                "Have an agreement with a university or a research institute (Fraunhofer, Max Planck, Helmholtz or Leibniz)",
                "Have an agreement/contract with a company","No research agreement yet","I want to do a Ph.D and hence do not have any research agreements/ contracts"
            ],
            colCount: 0
        
         
        }, 
        {
            type: "radiogroup",
            name: "CompanyPay",
            title: "How much does the company pay for?",
            visibleIf: "{ResearchPurpose}='Have an agreement/contract with a company'",
            isRequired: true,
            choices: [
                "The company you are working for pays you 56,800 euros per year or more","The company pays you lesser than 56800 euros per year"
            ],
            colCount: 0
        
         
        }, 

        

        {
            type: "radiogroup",
            name: "result",
            title: "Here is what you need to do",
            visibleIf: "{ResearchPurpose}='No research agreement yet'",
            isRequired: true,
            choices: [
                "Get information on how to obtain a research agreement at www.research-in-germany.org."
            ],
            colCount: 0
        
         
        }, 

        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{ResearchPurpose}='I want to do a Ph.D and hence do not have any research agreements/ contracts'",
            isRequired: true,
            choices: [
                "Research visa - PhD : If you wish to get a PhD in Germany and you have already been accepted into a PhD programme, you can apply for a study visa if you can proof that you have enough financial means to cover your living expenses. You need a national visa to enter Germany. After arrival, you need to apply for a residence permit at the local foreigners office."
            ],
            colCount: 0
        
         
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{ResearchPurpose}='Have an agreement with a university or a research institute (Fraunhofer, Max Planck, Helmholtz or Leibniz)'",
            isRequired: true,
            choices: [
                "Research Visa: You can apply for a visa to do research in Germany if you have a cooperation agreement with a university, private or public research institute in Germany. If you also qualify for a Blue Card, you can chose which residence permit you prefer to obtain. After entering Germany with a D-Visa, apply for a residence permit as researcher"
            ],
            colCount: 0
        
         
        }, 

        
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{CompanyPay}='The company you are working for pays you 56,800 euros per year or more'",
            isRequired: true,
            choices: [
                "Blue Card EU : If you have a recognised university degree, you can get a Blue Card EU if you already have a job offer that pays you 56,800 EUR before taxes per year. For physicians, engineers, natural scientists, mathematicians and IT-specialists, a yearly salary of 44,304 EUR is sufficient. You need a visa to enter Germany. Get your Blue Card EU from the local foreigners office after arrival in Germany."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{CompanyPay}='The company pays you lesser than 56800 euros per year'",
            isRequired: true,
            choices: [
                "Research Visa ?? or work visa?? : You can apply for a visa to do research in Germany if you have a cooperation agreement with a university, private or public research institute in Germany. If you also qualify for a Blue Card, you can chose which residence permit you prefer to obtain. After entering Germany with a D-Visa, you can apply for a residence permit as researcher."
            ],
            colCount: 0
         }, 

         {
            type: "radiogroup",
            name: "Vocational Training",
            title: "Do you have a contract with a company as an apprentice?",
            visibleIf:"{purposeOfStay}='Vocational training'",
            isRequired: true,
            choices: [
                "Yes","No",
            ],
            colCount: 0
        
         
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{Vocational Training}='Yes'",
            isRequired: true,
            choices: [
                "Vocational training visa with a contract as a trainee or apprentice : You can learn a profession (vocational training) in Germany if you have a contract with a company as an apprentice and you speak German (level B1). You might also learn German first in Germany before starting your vocational training. You need a ????? visa to enter Germany. You can get your residence permit for vocational training from the local foreigners office after arrival in Germany. During professional training, trainees are permitted to work for up to ten hours per week."
            ],
            colCount: 0
         }, 
         {
            type: "radiogroup",
            name: "No contract Vocational Training",
            title: "Are you : ",
            visibleIf: "{Vocational Training}='No'",
            isRequired: true,
            choices: [
                "25 years old or younger","older than 25 years"
            ],
            colCount: 0
         }, 
         {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need",
            visibleIf: "{No contract Vocational Training}='25 years old or younger'",
            isRequired: true,
            choices: [
                "Vocational training visa to look for a company with a vocational training programme : If you are looking to complete a qualified training program in Germany but have not found a training position, you can apply for this visa.  With a visa for the purpose of finding a training position in accordance with Section 17 (1) AufenthG (German Residence Act), you can come to Germany to apply for, and find suitable training positions. You can enter Germany to find a company for your vocational training if you speak German (level B2) and you are younger than 25. You need a ????? visa to enter Germany. The vocational training seeker visa allows you to stay in Germany to look for vocational training for up to 6 months."
            ],
            colCount: 0
         }, 
         {
            type: "radiogroup",
            name: "result",
            title: "Here is what you need to do",
            visibleIf: "{No contract Vocational Training}='older than 25 years'",
            isRequired: true,
            choices: [
                "Unfortunately, based on your answers, it seems that there is little chance for you to successfully apply for a long term stay visa for Germany as there is no visa type that matches your current situation."
            ],
            colCount: 0
         }, 
         
         
        {
            type: "radiogroup",
            name: "Self-employment",
            title: "Do you have have a good business idea and wish to finance the start-up of a company?",
            visibleIf:"{purposeOfStay}='Self-empoyment'",
            isRequired: true,
            choices: [
                "Yes","No",
            ],
            colCount: 0
        
         
        },
         {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{Self-Employment}='Yes'",
            isRequired: true,
            choices: [
                "Self-employment Visa- Start a business ?? : If you wish to start a business in Germany, you can get a visa if there is commercial interest or regional demand for your products and services, your business activity is creating jobs and you have secured financing for your business. You need a ?????? visa to enter Germany. After your arrival you will get your residence permit for self-employment at your local foreigners office."
            ],
            colCount: 0
        
         
        }, 
        {
            type: "radiogroup",
            name: "No business idea",
            title: "Which situation are you in? ",
            visibleIf: "{Self-Employment}='No'",
            isRequired: true,
            choices: [
                "Want to work in a liberal profession and want to work in Germany as a freelancer? (e.g. as a physician, dentist, veterinarian, lawyer, tax adviser, engineer, architect, artist, writer, translator, midwife, journalist, editor or teacher",
                "Not interested in a liberal profession"],
            colCount: 0
        
         
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{No business idea}='Want to work in a liberal profession and want to work in Germany as a freelancer? (e.g. as a physician, dentist, veterinarian, lawyer, tax adviser, engineer, architect, artist, writer, translator, midwife, journalist, editor or teacher'",
            isRequired: true,
            choices: [
                "Visa for Liberal Professions ?? If you wish to work self-employed in one of the liberal professions (science, art or education), you can get a visa if you have the funds for your project and your living expenses and if your have the permit from Germany to exercise that profession. You need a ????? visa to enter Germany. After your arrival you need to apply for your residence permit for freelance work at your local foreigners office."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is what you need to do: ",
            visibleIf: "{No business idea}='Not interested in a liberal profession'",
            isRequired: true,
            choices: [
                "Unfortunately, based on your answers, it seems that there is little chance for you to successfully apply for a long term stay visa for Germany as there is no visa type that matches your current situation."
            ],
            colCount: 0
        }, 



        {
            type: "radiogroup",
            name: "FamilyReunion",
            title: "Which situation are you in?",
            visibleIf:"{purposeOfStay}='Family reunion'",
            isRequired: true,
            choices: [
               "Want to move to my Spouse","Want to move to my Child over 18","Want to move to my Child under 18","Want to move to my parents","Want to move to my other family member"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "MoveToSpouse",
            title: "Which nationality does your spouse/fiance(e) have?",
            visibleIf:"{FamilyReunion}='Want to move to my Spouse'",
            isRequired: true,
            choices: [
               "My spouse/fiance(e) is German","My spouse/fiance(e) belongs to an EU country, the United Kingdom. Iceland, Liechtenstein, Norway or Switzerland","My spouse/fiance(e) belongs to other nationality than the above stated."
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "MarriedOrNotGerman",
            title: "Are you married?",
            visibleIf:"{MoveToSpouse}='My spouse/fiance(e) is German'",
            isRequired: true,
            choices: [
               "Yes","We want to marry in Germany"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "MarriedOrNotEU",
            title: "Are you married?",
            visibleIf:"{MoveToSpouse}='My spouse/fiance(e) belongs to an EU country, the United Kingdom. Iceland, Liechtenstein, Norway or Switzerland'",
            isRequired: true,
            choices: [
               "Yes","We want to marry in Germany"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "MarriedOrNotOther",
            title: "Are you married?",
            visibleIf:"{MoveToSpouse}='My spouse/fiance(e) belongs to other nationality than the above stated.'",
            isRequired: true,
            choices: [
               "Yes","We want to marry in Germany"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{MarriedOrNotGerman}='Yes'",
            isRequired: true,
            choices: [
                "Visa to join your German wife or husband: You can get a visa for family reunion if you are married to a German national and if you and your spouse are both at least 18 years old. You need to have a basic knowledge of German (A1). You need a ????? visa to enter Germany. Upon arrival in Germany you have to get a residence permit at the local foreigners office."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{MarriedOrNotEU}='Yes'",
            isRequired: true,
            choices: [
                "Visa to join your wife or husband? You can enter Germany if you are married to a national of an EU country, the United Kingdom, Liechtenstein, Iceland, Norway or Switzerland. You do not need to speak German. You have to prove enough financial means for living in Germany if your spouse is not working in Germany. You need a ??? visa to enter Germany. After your arrival in Germany you have to apply for a residence permit with the local foreigners office."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{MarriedOrNotOther}='Yes'",
            isRequired: true,
            choices: [
                "Visa to join your wife or husband who is a foreign national: You can get a visa for Germany if you are married to a foreign national who holds either a residence permit, a Blue Card EU, an ICT Card, a permanent settlement permit or a permit for permanent stay in the European Union and if you and your spouse are both at least 18 years old. Generally, you need to have at least basic German language skills (A1). No language skills are required if your spouse hold a Blue Card EU. You must have adequate accommodation and financial means to live in Germany. You need a ????? visa to enter Germany. Upon arrival in Germany you must contact the local foreigners office to apply for a residence permit."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{MarriedOrNotGerman}='We want to marry in Germany'",
            isRequired: true,
            choices: [
                "Visa to marry a German national: You can get a visa for Germany if you wish to marry a German national, you have registered the wedding at a registry office in Germany and if both you and your fiance(e) are at least 18 years old. You need to prove that you have enough financial means cover your living expenses in Germany. You also need to have a basic knowledge of German (A1). You need a ???? visa to enter Germany. After getting married you have to apply for your residence permit at the local foreigners office presenting your marriage certificate."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{MarriedOrNotEU}='We want to marry in Germany'",
            isRequired: true,
            choices: [
                "Visa to marry a foreign national in Germany : You can get a visa to get married in Germany if you have registered the wedding at a registry office in Germany and if your foreign fiancé/e holds either a residence permit, a Blue Card EU, an ICT Card, a permanent settlement permit or a permit for permanent stay in the European Union. Both you and your fiance(e) must be at least 18 years old and you need to have a basic knowledge of German (A1). You need an adequate place to stay and enough financial means to cover your living expenses. You need a ??????? visa to enter Germany. After getting married you have to contact the foreigners office at your place of residence to apply for a residence permit presenting your marriage certificate."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{MarriedOrNotOther}='We want to marry in Germany'",
            isRequired: true,
            choices: [
                "Visa to marry a foreign national in Germany : You can get a visa to get married in Germany if you have registered the wedding at a registry office in Germany and if your foreign fiancé/e holds either a residence permit, a Blue Card EU, an ICT Card, a permanent settlement permit or a permit for permament stay in the European Union. Both you and your fiancé/e must be at least 18 years old and you need to have a basic knowledge of German (A1). You need an adequate place to stay and enough financial means to cover your living expenses. You need a ????? visa to enter Germany. After getting married you have to contact the foreigners office at your place of residence to apply for a residence permit presenting your marriage certificate."
            ],
            colCount: 0
        }, 

        {
            type: "radiogroup",
            name: "moveToChildOver18",
            title: "Which nationality does your child have?",
            visibleIf:"{FamilyReunion}='Want to move to my Child over 18'",
            isRequired: true,
            choices: [
               "My child is a national of another EU country, the United Kingdom, Liechtenstein Iceland, Norway or Switzerland","My child is a German or other citizen"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{moveToChildOver18}='My child is a national of another EU country, the United Kingdom, Liechtenstein Iceland, Norway or Switzerland'",
            isRequired: true,
            choices: [
                "Visa to join your foreign adult child with EU/EEA, UK or Swiss nationality : If your child is older than 18 years and a national of another EU country, the United Kingdom, Liechtenstein, Iceland, Norway or Switzerland, you can move to Germany according to the EU law of free movement. Your child is financially responsible for you. You need a ????? visa to enter Germany. After your arrival in Germany you have to apply for a residence permit with the local foreigners office."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{moveToChildOver18}='My child is a German or other citizen'",
            isRequired: true,
            choices: [
                "Family reunion in exceptional hardship cases According to your answers, you can get a visa to join your family member only in an exceptional hardship case that affects your family particularly and is not only related to the general political or economic situation in your country of residence. Please contact the German Embassy or Consulate where you live for consultation on your particular case."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "moveToChildUnder18",
            title: "Which nationality does your child have?",
            visibleIf:"{FamilyReunion}='Want to move to my Child under 18'",
            isRequired: true,
            choices: [
               "My child is a German National","My child is a national from EU, the United Kingdom, Liechtenstein, Iceland, Norway or Switzerland","Other Citizen"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "moveToChildUnder18OtherCitizen",
            title: "Which situation is your child in?",
            visibleIf:"{moveToChildUnder18}='Other Citizen'",
            isRequired: true,
            choices: [
               "My child has one of the following legal statuses: asylum, refugee, subsidiary protection","My child does not have any of the above legal status"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{moveToChildUnder18}='My child is a German National'",
            isRequired: true,
            choices: [
                "Joining a minor German child : You can get a visa for Germany if your child is younger than 18 years, a German national and if you have custody for your child. You need a visa to enter Germany. After your arrival, you have to apply for a residence permit with the local foreigners office."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{moveToChildUnder18}='My child is a national from EU, the United Kingdom, Liechtenstein, Iceland, Norway or Switzerland'",
            isRequired: true,
            choices: [
                "Visa to join your minor child with EU/EEA nationality, the United Kingdom or Switzerland : If you have a minor child who is a national of an EU country, the United Kingdom, Iceland, Liechtenstein, Norway or Switzerland, you can live with your child in Germany according to the EU law of free movement. You must personally and financially take care of your child, and be able to cover your living expenses. You need a ????? visa to enter Germany. After your arrival, you have to apply for a residence permit at the local foreigners office."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{moveToChildUnder18OtherCitizen}='My child has one of the following legal statuses: asylum, refugee, subsidiary protection'",
            isRequired: true,
            choices: [
                "Visa to join your foreign minor child : You can enter Germany if your child is without a parent in Germany, younger than 18 years and possesses asylum status, a refugee status or subsidiarian protection status in Germany. You need a ???? visa to enter Germany. After your arrival in Germany you have to apply for a residence permit with the aliens department that is responsible for your place of residence."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need : ",
            visibleIf: "{moveToChildUnder18OtherCitizen}='My child does not have any of the above legal status'",
            isRequired: true,
            choices: [
                "Family reunion in exceptional hardship casees : According to your answers, you can get a visa to join your family member only in an exceptional hardship case that affects your family particularly and is not only related to the general political or economic situation in your country of residence. Please contact the German Embassy or Consulate where you live for consultation on your particular case."
            ],
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "MoveToParents",
            title: "Which nationality does your parents have?",
            visibleIf:"{FamilyReunion}='Want to move to my parents'",
            isRequired: true,
            choices: [
               "My parent living in Germany is a German National","My parent living in Germany belongs to an EU country, the United Kingdom, Iceland, Liechtenstein, Norway or Switzerland","My parent living in Germany belongs to another nationality."
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "MoveToParentsGerman",
            title: "You are : ",
            visibleIf:"{MoveToParents}='My parent living in Germany is a German National'",
            isRequired: true,
            choices: [
               "I am over 18 years old","I am under 18 years old"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need: ",
            visibleIf:"{MoveToParentsGerman}='I am over 18 years old'",
            isRequired: true,
            choices: [
               "Family reunion in exceptional hardship cases. According to your answers, you can get a visa to join your family member only in an exceptional hardship case that affects your family particularly and is not only related to the general political or economic situation in your country of residence. Please contact the German Embassy or Consulate where you live for consultation on your particular case."
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need: ",
            visibleIf:"{MoveToParentsGerman}='I am under 18 years old'",
            isRequired: true,
            choices: [
               "Visa for a child under 18 to join a German parent : The child can get a visa for Germany if he or she is under 18 and not married and one of the parents is a German national and permanently residing in Germany. The child does not need to speak German. The child needs a national Visa first. After arrival, the child needs to apply for a residence permit from the local foreigners office."
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "MoveToParentsEU",
            title: "You are : ",
            visibleIf:"{MoveToParents}='My parent living in Germany belongs to an EU country, the United Kingdom, Iceland, Liechtenstein, Norway or Switzerland'",
            isRequired: true,
            choices: [
               "I am over 21 years old","I am under 21 years old"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need: ",
            visibleIf:"{MoveToParentsEU}='I am over 21 years old'",
            isRequired: true,
            choices: [
               "Visa for a child above 21 to join a parent who is a national of an EU member state, Liechtenstein, Iceland, Norway or Switzerland. You can enter Germany if one of your parents is a national of an EU member state, Liechtenstein, Iceland, Norway or Switzerland, permanently residing in Germany and paying for you. You do not need to speak German.You need a national visa first. After your arrival, you can apply for a residence permit at the local foreigners office."
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need: ",
            visibleIf:"{MoveToParentsEU}='I am under 21 years old'",
            isRequired: true,
            choices: [
               "Visa for a child under 21 to join a parent who is a national of an EU member state, Liechtenstein, Iceland, Norway or Switzerland. The child is entitled to enter Germany if one of the parents is a national of an EU member state, Liechtenstein, Iceland, Norway or Switzerland and permanently residing in Germany. The child does not need to speak German. To enter Germany, the child needs a national visa first. After arrival, the child can apply for a residence permit at the local foreigners office."
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "MoveToParentsOther",
            title: "You are:  ",
            visibleIf:"{MoveToParents}='My parent living in Germany belongs to another nationality.'",
            isRequired: true,
            choices: [
               "I am over 18 years old","I am over 16, under 18 years old","I am under 16 years old"
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need: ",
            visibleIf:"{MoveToParentsOther}='I am over 18 years old'",
            isRequired: true,
            choices: [
               "Family reunion in exceptional hardship cases. According to your answers, you can get a visa to join your family member only in an exceptional hardship case that affects your family particularily and is not only related to the general political or economic situation in your country of residence. Please contact the German Embassy or Consulate where you live for consultation on your particular case."
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need: ",
            visibleIf:"{MoveToParentsOther}='I am over 16, under 18 years old'",
            isRequired: true,
            choices: [
               "Visa for a child between 16 and 18 to join a foreign parent. The child can get a visa for Germany if he or she is between 16 and 18 and if both parents or the parent with sole custody possesses a certain kind of residence permit and is permanently living in Germany. If the child is not entering Germany together with the parents, the child needs to have advanced German language skills (level C1 of the European Reference Frame). In certain cases, language skills are not necessary. Adequate living space and financial means are required. To enter Germany, the child needs a national visa first. After arrival, the child needs to apply for a residence permit at the local foreigners office."
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need: ",
            visibleIf:"{MoveToParentsOther}='I am under 16 years old'",
            isRequired: true,
            choices: [
               "Visa for a child under 16 to join foreign parent. The child can enter Germany if one of the parents or the parent who has the sole custody possesses a certain kind of residence permit and is permanently residing in Germany. The child does not need to speak German. Adequate living space and financial means are required. The child needs a national visa first. After arrival, the child can apply for a residence permit at the local foreigners office."
            ],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "result",
            title: "Here is the visa you need: ",
            visibleIf:"{FamilyReunion}='Want to move to my other family member'",
            isRequired: true,
            choices: [
               "Family reunion in exceptional hardship cases. According to your answers, you can get a visa to join your family member only in an exceptional hardship case that affects your family particularly  and is not only related to the general political or economic situation in your country of residence. Please contact the German Embassy or Consulate where you live for consultation on your particular case."
            ],
            colCount: 0
        },





        

        
        
        
     
        
    
    
        
    ]
}


window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (render) {
        document
            .querySelector('#surveyResult')
            
    });
    

survey.render("surveyResult");