'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
  {
    "question": "What is customer advocacy in your organization?",
    "answer": "Customer advocacy in our organization involves representing and supporting individuals from marginalized communities, ensuring their voices are heard in decisions affecting their lives. We work to empower those who are socially underrepresented, economically disadvantaged, and politically ignored by advocating for their rights and access to essential resources. Our advocacy efforts include direct support, policy change initiatives, and collaboration with other organizations to address systemic issues like discrimination, poverty, and lack of access to services such as healthcare, education, and housing. We aim to create a more equitable society by amplifying these communities' needs and concerns.",
    "category": "Customer Advocacy"
  },
  {
    "question": "Who can access your advocacy services?",
    "answer": "Our advocacy services are available to individuals and families from socially underrepresented, economically backward, and politically ignored communities. This includes people facing barriers due to poverty, lack of education, discrimination, and other systemic issues. We specifically focus on those who have been historically marginalized and struggle to access essential services and opportunities. Whether they need support navigating bureaucratic systems, seeking legal help, or simply need someone to voice their concerns, our organization is dedicated to assisting these individuals and ensuring their rights are protected.",
    "category": "Customer Advocacy"
  },
  {
    "question": "How do you identify the needs of the communities you serve?",
    "answer": "We identify community needs through direct engagement, including surveys, focus groups, and one-on-one consultations. We regularly hold community meetings and collaborate with local leaders, organizations, and residents to stay informed about the pressing issues affecting them. Additionally, we monitor social, economic, and political trends that impact these communities, ensuring our advocacy efforts are timely and relevant. By maintaining an open line of communication with those we serve, we can adapt our strategies and initiatives to address the most urgent and significant challenges faced by underrepresented and economically disadvantaged populations.",
    "category": "Customer Advocacy"
  },
  {
    "question": "What types of issues do you advocate for?",
    "answer": "Our organization advocates for a broad spectrum of issues impacting marginalized communities, including access to affordable housing, healthcare, education, and employment opportunities. We also address social justice concerns, such as combating discrimination, promoting environmental justice, and ensuring political representation. Additionally, we work on specific issues like access to clean water, transportation, and legal assistance. Our advocacy aims to dismantle systemic barriers that hinder these communities\u2019 progress and ensure they have the resources and support needed to thrive. We work closely with stakeholders to drive policy changes and create long-term solutions.",
    "category": "Customer Advocacy"
  },
  {
    "question": "How can individuals from underrepresented communities participate in your advocacy efforts?",
    "answer": "Individuals can participate in our advocacy efforts by attending community meetings, joining our campaigns, volunteering, or sharing their experiences and concerns with us. We believe in empowering individuals to become their own advocates, providing them with the training, tools, and resources needed to effectively voice their needs. By involving community members in our advocacy initiatives, we ensure that our efforts are grounded in the real, lived experiences of those we serve. We also encourage them to take on leadership roles within our organization, fostering a sense of ownership and agency in our shared work.",
    "category": "Customer Advocacy"
  },
  {
    "question": "What is the process for requesting advocacy support?",
    "answer": "To request advocacy support, individuals can contact us via our website, phone, or by visiting our office. During an initial consultation, we listen to their concerns and assess their needs. Based on this assessment, we connect them with an advocate who specializes in the relevant area, whether it's housing, healthcare, legal assistance, or another issue. Our advocates work closely with individuals to develop a personalized action plan, providing ongoing support and guidance. We aim to make the process as accessible and straightforward as possible, ensuring that everyone who needs our help can easily access it.",
    "category": "Customer Advocacy"
  },
  {
    "question": "How do you ensure confidentiality for those seeking advocacy support?",
    "answer": "We prioritize confidentiality for all individuals seeking advocacy support. Personal information and details shared with our advocates are kept strictly confidential, used solely to provide necessary assistance. We adhere to robust data protection policies, ensuring that all information is stored securely and only accessible to authorized personnel. Additionally, we respect the wishes of individuals regarding the sharing of their information and provide options for anonymous reporting or advocacy. Our commitment to confidentiality is fundamental to building trust with the communities we serve, ensuring they feel safe and secure when seeking our help.",
    "category": "Customer Advocacy"
  },
  {
    "question": "How does your organization measure the impact of its advocacy work?",
    "answer": "We measure the impact of our advocacy work through a combination of qualitative and quantitative methods. This includes tracking policy changes, improvements in service access, and positive outcomes for individuals and communities. We also gather feedback from those we serve, using surveys, interviews, and focus groups to assess satisfaction and the effectiveness of our efforts. Additionally, we monitor broader social and economic indicators to evaluate long-term change. Regular impact assessments help us refine our strategies, ensuring that our advocacy remains responsive to the evolving needs of underrepresented and economically disadvantaged communities.",
    "category": "Customer Advocacy"
  },
  {
    "question": "How can supporters contribute to your advocacy work?",
    "answer": "Supporters can contribute to our advocacy work by making financial donations, volunteering their time, or offering in-kind support such as legal expertise, office supplies, or other resources. We also welcome partnerships with organizations and individuals who share our commitment to social justice. Engaging with our campaigns, spreading awareness, and advocating for policy changes are other valuable ways supporters can help. By contributing to our efforts, supporters play a critical role in amplifying the voices of marginalized communities and helping us achieve our mission of creating a more just and equitable society.",
    "category": "Customer Advocacy"
  },
  {
    "question": "What challenges do you face in your advocacy work?",
    "answer": "Our advocacy work faces several challenges, including limited funding, resistance from policymakers, and the deeply entrenched systemic barriers that marginalized communities encounter. Additionally, raising awareness and mobilizing public support for the issues faced by underrepresented groups can be difficult in a crowded advocacy space. Despite these obstacles, we remain committed to our mission, using creativity, collaboration, and persistence to overcome barriers. We continuously adapt our strategies, seek new partnerships, and work to ensure that the voices of socially underrepresented, economically disadvantaged, and politically ignored communities are heard and respected.",
    "category": "Customer Advocacy"
  },
  {
    "question": "What is community development, and how does your organization approach it?",
    "answer": "Community development in our organization involves empowering socially underprivileged, economically underserved, and politically underrepresented communities by providing resources, skills, and support to improve their quality of life. We focus on sustainable development, working closely with community members to identify their needs and co-create solutions. Our approach includes initiatives in education, healthcare, economic development, and civic engagement, aiming to address systemic barriers and promote self-sufficiency. By fostering local leadership and collaboration, we help communities build the capacity to advocate for themselves and drive long-term, positive change.",
    "category": "Community Development"
  },
  {
    "question": "Who benefits from your community development programs?",
    "answer": "Our community development programs are designed to benefit socially underprivileged, economically underserved, and politically underrepresented individuals and families. This includes those living in poverty, facing discrimination, or lacking access to essential services such as education, healthcare, and employment opportunities. We focus on marginalized communities that are often overlooked by mainstream development efforts. By providing targeted support and resources, we aim to uplift these communities, helping them achieve greater social, economic, and political equity and empowering them to take charge of their own development.",
    "category": "Community Development"
  },
  {
    "question": "How does your organization identify the needs of the communities you serve?",
    "answer": "We identify the needs of the communities we serve through direct engagement, including community meetings, surveys, and one-on-one consultations. We also collaborate with local leaders, grassroots organizations, and residents to understand their challenges and priorities. By actively listening and involving community members in decision-making processes, we ensure that our programs address the most pressing issues. We continually assess and adapt our initiatives based on feedback and changing circumstances, ensuring that our efforts remain relevant and effective in meeting the evolving needs of the communities we serve.",
    "category": "Community Development"
  },
  {
    "question": "What types of community development projects does your organization undertake?",
    "answer": "Our organization undertakes a wide range of community development projects, including educational programs, healthcare initiatives, economic empowerment activities, and infrastructure development. We also focus on promoting civic engagement and political representation for marginalized communities. Specific projects might include building community centers, providing vocational training, improving access to healthcare services, and creating affordable housing solutions. Each project is tailored to the specific needs of the community, with the goal of fostering long-term, sustainable development and empowering residents to take an active role in their own growth and progress.",
    "category": "Community Development"
  },
  {
    "question": "How can community members get involved in your development initiatives?",
    "answer": "Community members can get involved in our development initiatives by participating in community meetings, volunteering, and joining our programs. We encourage local residents to take on leadership roles in projects and decision-making processes, ensuring that our work reflects the community's needs and priorities. We also offer training and resources to help individuals build skills and knowledge that can contribute to their own and their community's development. By involving community members at every stage, we foster a sense of ownership and collaboration, essential for the success and sustainability of our initiatives.",
    "category": "Community Development"
  },
  {
    "question": "What is the process for requesting community development support?",
    "answer": "To request community development support, individuals or community groups can contact us through our website, by phone, or by visiting our office. We begin with an initial consultation to understand the specific needs and challenges facing the community. Based on this assessment, we collaborate with community members to design and implement tailored programs or projects. Our approach is participatory, ensuring that those we serve are actively involved in shaping the solutions. We aim to make the process as inclusive and accessible as possible, ensuring that every community has the opportunity to benefit from our support.",
    "category": "Community Development"
  },
  {
    "question": "How does your organization ensure the sustainability of its community development projects?",
    "answer": "We ensure the sustainability of our community development projects by involving local communities in the planning, implementation, and management of initiatives. We focus on building local capacity and providing training that empowers community members to take ownership of projects. Additionally, we emphasize creating self-sustaining models, such as income-generating activities, that can continue without external support. We also establish partnerships with local organizations, businesses, and government agencies to provide ongoing resources and support. By fostering local leadership and self-reliance, we help ensure that our projects have a lasting, positive impact.",
    "category": "Community Development"
  },
  {
    "question": "How does your organization measure the impact of its community development work?",
    "answer": "We measure the impact of our community development work through a combination of quantitative and qualitative methods. This includes tracking key indicators such as improved access to education, healthcare, and economic opportunities, as well as increased civic engagement and political representation. We also gather feedback from community members through surveys, interviews, and focus groups to assess satisfaction and the effectiveness of our initiatives. Regular monitoring and evaluation allow us to adjust our strategies and ensure that our work continues to meet the needs of the communities we serve and achieve sustainable outcomes.",
    "category": "Community Development"
  },
  {
    "question": "How can donors and partners support your community development work?",
    "answer": "Donors and partners can support our community development work by providing financial contributions, volunteering their time, or offering in-kind donations such as materials or expertise. We also welcome partnerships with organizations that share our commitment to social justice and equity. Supporters can engage with specific projects, sponsor programs, or collaborate on joint initiatives that align with their mission and values. By contributing to our efforts, donors and partners play a critical role in helping us empower socially underprivileged, economically underserved, and politically underrepresented communities to achieve sustainable development and improved quality of life.",
    "category": "Community Development"
  },
  {
    "question": "What challenges does your organization face in community development work?",
    "answer": "Our community development work faces several challenges, including limited funding, resistance from policymakers, and the deeply entrenched systemic barriers that marginalized communities face. Additionally, working in areas with limited infrastructure or political instability can pose logistical and operational difficulties. Overcoming skepticism and gaining trust within communities that have been historically ignored or exploited can also be challenging. Despite these obstacles, we remain committed to our mission, using creativity, collaboration, and persistence to drive positive change. We continuously adapt our strategies and seek new partnerships to ensure our work effectively addresses the needs of the communities we serve.",
    "category": "Community Development"
  },
  {
    "question": "Who can benefit from your economic empowerment programs?",
    "answer": "Our economic empowerment programs are designed to benefit socially underprivileged, economically underserved, and politically underrepresented individuals and families. This includes people living in poverty, those with limited access to education and job opportunities, and individuals facing systemic barriers due to discrimination or political marginalization. We specifically target women, youth, and minorities who are often excluded from economic participation. By providing tailored support and resources, we help these individuals improve their economic prospects, gain financial independence, and contribute positively to their communities.",
    "category": "Economic Empowerment"
  },
  {
    "question": "What is economic empowerment, and how does your organization promote it?",
    "answer": "Economic empowerment involves providing individuals with the skills, resources, and opportunities needed to improve their economic situation and achieve financial independence. Our organization promotes economic empowerment by offering vocational training, financial literacy programs, entrepreneurship support, and access to microloans. We focus on marginalized communities that face barriers to economic participation, helping them overcome these obstacles and build sustainable livelihoods. By empowering individuals economically, we aim to reduce poverty, promote self-sufficiency, and enhance the overall well-being of the communities we serve.",
    "category": "Economic Empowerment"
  },
  {
    "question": "How does your organization identify the economic needs of the communities you serve?",
    "answer": "We identify the economic needs of the communities we serve through direct engagement, including surveys, focus groups, and consultations with local leaders and residents. We also analyze economic data and trends to understand the challenges and opportunities specific to these communities. By involving community members in the needs assessment process, we ensure that our programs are relevant and responsive to their unique circumstances. This participatory approach helps us design targeted interventions that address the root causes of economic disadvantage and create sustainable pathways to financial stability.",
    "category": "Economic Empowerment"
  },
  {
    "question": "What types of economic empowerment programs does your organization offer?",
    "answer": "Our organization offers a variety of economic empowerment programs, including vocational training, financial literacy workshops, entrepreneurship support, and microfinance initiatives. We also provide mentorship and networking opportunities to help individuals build professional connections and access job markets. Specific programs might include skills development in trades such as carpentry, tailoring, or digital marketing, as well as business incubation for aspiring entrepreneurs. Each program is designed to equip participants with the tools and knowledge needed to achieve economic self-sufficiency and improve their quality of life.",
    "category": "Economic Empowerment"
  },
  {
    "question": "How can individuals from underserved communities participate in your programs?",
    "answer": "Individuals from underserved communities can participate in our programs by enrolling through our website, visiting our offices, or attending community outreach events. We actively recruit participants by collaborating with local organizations, community centers, and leaders to reach those most in need. Our programs are designed to be accessible and inclusive, with minimal barriers to entry. We also offer flexible schedules, childcare, and transportation assistance to ensure that everyone has the opportunity to benefit. By making participation as easy as possible, we aim to empower as many people as possible.",
    "category": "Economic Empowerment"
  },
  {
    "question": "How does your organization ensure the long-term success of its economic empowerment initiatives?",
    "answer": "We ensure the long-term success of our economic empowerment initiatives by focusing on sustainability and self-sufficiency. This includes providing ongoing support and mentorship to program participants, helping them apply their new skills and knowledge in real-world settings. We also create linkages to job markets, financial institutions, and business networks to ensure participants have access to opportunities beyond our programs. Regular monitoring and evaluation allow us to adapt our initiatives based on feedback and outcomes, ensuring they continue to meet the needs of the communities we serve.",
    "category": "Economic Empowerment"
  },
  {
    "question": "How does your organization measure the impact of its economic empowerment programs?",
    "answer": "We measure the impact of our economic empowerment programs through both qualitative and quantitative methods. This includes tracking participants' employment rates, income levels, and business success post-program. We also gather feedback through surveys, interviews, and focus groups to assess participant satisfaction and program effectiveness. Additionally, we monitor broader economic indicators within the communities we serve, such as reductions in poverty rates and increased access to financial services. By evaluating these metrics, we can refine our programs to ensure they deliver meaningful, lasting change for economically underserved populations.",
    "category": "Economic Empowerment"
  },
  {
    "question": "How can donors and partners support your economic empowerment work?",
    "answer": "Donors and partners can support our economic empowerment work by providing financial contributions, offering mentorship, or sharing expertise in areas such as business development, financial literacy, or vocational training. In-kind donations, such as tools, equipment, or educational materials, are also valuable. We welcome partnerships with businesses, educational institutions, and other organizations to expand our reach and impact. By supporting our work, donors and partners help us provide the resources and opportunities needed to uplift socially underprivileged, economically underserved, and politically underrepresented communities, driving sustainable economic growth.",
    "category": "Economic Empowerment"
  },
  {
    "question": "What challenges does your organization face in economic empowerment work?",
    "answer": "Our economic empowerment work faces several challenges, including limited funding, access to markets, and the systemic barriers that marginalized communities encounter, such as discrimination and lack of education. Additionally, changing economic conditions and political instability can impact the effectiveness of our programs. Ensuring participants' long-term success requires overcoming these challenges through innovative solutions, partnerships, and a focus on sustainability. Despite these obstacles, we remain committed to empowering individuals economically, using a holistic approach that addresses both immediate needs and the underlying causes of economic disadvantage.",
    "category": "Economic Empowerment"
  },
  {
    "question": "How does your organization address gender disparities in economic empowerment?",
    "answer": "Our organization addresses gender disparities in economic empowerment by offering targeted programs for women, who are often disproportionately affected by economic marginalization. This includes providing vocational training in non-traditional fields, access to microloans, and entrepreneurship support tailored to women\u2019s needs. We also focus on building financial literacy and confidence, helping women overcome cultural and societal barriers to economic participation. By creating safe, supportive environments for women to learn and grow, we empower them to achieve financial independence, contribute to their communities, and advocate for their rights in the economic sphere.",
    "category": "Economic Empowerment"
  },
  {
    "question": "What are your educational initiatives, and how do they benefit the community?",
    "answer": "Our educational initiatives aim to provide access to quality education for socially underprivileged, economically underserved, and politically underrepresented communities. We offer programs that include tutoring, scholarships, vocational training, and digital literacy courses. These initiatives are designed to bridge educational gaps, enhance skills, and create opportunities for personal and professional growth. By focusing on marginalized populations, we empower individuals to overcome barriers, achieve academic success, and improve their future prospects. Our goal is to foster a more equitable society by ensuring that everyone, regardless of their background, has access to education.",
    "category": "Educational Initiatives"
  },
  {
    "question": "Who can participate in your educational programs?",
    "answer": "Our educational programs are open to individuals from socially underprivileged, economically underserved, and politically underrepresented communities. This includes children, youth, and adults who face barriers to accessing quality education due to factors such as poverty, discrimination, or lack of resources. We specifically target those who have been historically marginalized and excluded from educational opportunities. By offering inclusive and accessible programs, we aim to support learners of all ages and backgrounds, helping them acquire the knowledge and skills needed to succeed academically and professionally.",
    "category": "Educational Initiatives"
  },
  {
    "question": "How does your organization identify the educational needs of the communities you serve?",
    "answer": "We identify the educational needs of the communities we serve through direct engagement with residents, educators, and local leaders. This includes conducting surveys, focus groups, and community meetings to understand the specific challenges and gaps in educational access. We also analyze data on school performance, enrollment rates, and other relevant indicators to inform our initiatives. By involving community members in the needs assessment process, we ensure that our programs are tailored to address the most pressing educational issues and create meaningful, lasting impact.",
    "category": "Educational Initiatives"
  },
  {
    "question": "What types of educational programs do you offer?",
    "answer": "We offer a variety of educational programs designed to meet the diverse needs of the communities we serve. These include after-school tutoring, literacy classes, scholarships, vocational training, and digital literacy courses. We also provide mentorship and career counseling to help students navigate their educational and professional paths. Additionally, we offer teacher training and support to improve the quality of education in underserved schools. Each program is designed to address specific educational barriers, empower learners, and promote academic and professional success.",
    "category": "Educational Initiatives"
  },
  {
    "question": "How can community members get involved in your educational initiatives?",
    "answer": "Community members can get involved in our educational initiatives by enrolling in our programs, volunteering as tutors or mentors, or participating in community events and workshops. We encourage parents, educators, and local leaders to collaborate with us in identifying needs and developing programs that best serve the community. Additionally, we welcome partnerships with local schools, businesses, and organizations to expand our reach and impact. By engaging with our initiatives, community members can contribute to creating a supportive and enriching educational environment for all.",
    "category": "Educational Initiatives"
  },
  {
    "question": "How does your organization ensure the effectiveness of its educational initiatives?",
    "answer": "We ensure the effectiveness of our educational initiatives through continuous monitoring and evaluation. This includes tracking student progress, measuring program outcomes, and gathering feedback from participants, educators, and community members. We use this data to assess the impact of our programs and make necessary adjustments to improve their effectiveness. Additionally, we collaborate with educational experts and institutions to ensure our programs are aligned with best practices and meet the needs of our target populations. By maintaining a focus on quality and impact, we strive to achieve meaningful and lasting educational outcomes.",
    "category": "Educational Initiatives"
  },
  {
    "question": "How do you address barriers to education in underserved communities?",
    "answer": "We address barriers to education in underserved communities by providing resources, support, and programs tailored to the specific challenges these communities face. This includes offering scholarships, providing free or low-cost educational materials, and creating flexible learning opportunities for those with work or family responsibilities. We also focus on digital literacy and access to technology, ensuring that students can participate in online learning. Additionally, we work to raise awareness of the importance of education and advocate for policies that improve educational access and quality in marginalized communities.",
    "category": "Educational Initiatives"
  },
  {
    "question": "How can donors and partners support your educational initiatives?",
    "answer": "Donors and partners can support our educational initiatives by providing financial contributions, donating educational materials, or offering their expertise and services. We also welcome partnerships with businesses, schools, and organizations that share our commitment to education equity. Supporters can sponsor scholarships, fund specific programs, or collaborate on joint initiatives that expand access to education. By contributing to our efforts, donors and partners help us empower socially underprivileged, economically underserved, and politically underrepresented communities, providing them with the tools and opportunities needed to succeed academically and professionally.",
    "category": "Educational Initiatives"
  },
  {
    "question": "What challenges do you face in implementing educational initiatives?",
    "answer": "We face several challenges in implementing educational initiatives, including limited funding, inadequate infrastructure, and the systemic barriers that marginalized communities encounter. Additionally, addressing the diverse needs of students in underserved areas can be challenging, particularly when resources are scarce. Overcoming these challenges requires creativity, collaboration, and persistence. We work closely with community members, educators, and partners to develop innovative solutions and ensure our programs are accessible and effective. Despite these obstacles, we remain committed to providing quality education to those who need it most.",
    "category": "Educational Initiatives"
  },
  {
    "question": "How does your organization promote lifelong learning in the communities you serve?",
    "answer": "We promote lifelong learning by offering programs that cater to learners of all ages and stages of life. This includes early childhood education, adult literacy classes, vocational training, and continuous professional development opportunities. We also encourage a culture of learning by providing access to educational resources, organizing community workshops, and fostering an environment that values education. By supporting lifelong learning, we help individuals adapt to changing circumstances, pursue their personal and professional goals, and contribute meaningfully to their communities. Our goal is to create a society where everyone has the opportunity to learn and grow.",
    "category": "Educational Initiatives"
  }
]

  const categories = ['All', 'Customer Advocacy', 'Community Development', 'Economic Empowerment', 'Educational Initiatives']

  const filtered = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory)

  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Frequently Asked Questions</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Find answers to common questions about our advocacy, community development, economic empowerment, and educational initiatives.</p>
        </div>
      </section>

      <section className="section max-w-4xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-brand-green text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-green-200' : 'text-gray-400'}`}>
                  ({faqs.filter(f => f.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filtered.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                openIndex === i ? 'border-brand-green shadow-md' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-semibold text-base leading-snug ${openIndex === i ? 'text-brand-green' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 mt-0.5 transition-transform ${openIndex === i ? 'text-brand-green' : 'text-gray-400'}`}>
                  {openIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-brand-cream rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-brand-green-dark mb-3">Still have questions?</h2>
          <p className="text-gray-500 mb-6">Our team is happy to help. Reach out directly and we'll get back to you promptly.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/confidential-contact" className="btn-secondary">Confidential Contact</Link>
          </div>
        </div>
      </section>
    </>
  )
}
