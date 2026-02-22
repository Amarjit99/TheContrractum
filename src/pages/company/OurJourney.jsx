import React, { useState } from 'react';

const OurJourney = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  const companyMilestones = [
    { id: 1, year: '2015', title: 'Foundation Year', description: 'Started with a vision to revolutionize technology. A team of 5 passionate developers began from a small office.' },
    { id: 2, year: '2016', title: 'First Major Client', description: 'Secured our first enterprise client and delivered a groundbreaking digital platform.' },
    { id: 3, year: '2017', title: 'Market Expansion', description: 'Expanded services to 5 major industries: healthcare, finance, education, retail, manufacturing.' },
    { id: 4, year: '2018', title: 'Team Growth', description: 'Grew from 5 to 50+ employees with dedicated departments for design, development, QA.' },
    { id: 5, year: '2019', title: 'Global Reach', description: 'Opened offices in USA, UK, Australia, Canada, and India with 24/7 operations.' },
    { id: 6, year: '2020', title: 'Digital Transformation', description: 'Transitioned to remote-first and launched 50+ digital transformation projects.' },
    { id: 7, year: '2021', title: 'Innovation Lab', description: 'Established innovation lab focusing on AI, ML, IoT, Blockchain, Cloud solutions.' },
    { id: 8, year: '2022', title: 'Industry Recognition', description: 'Awarded as "Best Digital Solutions Provider" and Forbes 30 Under 40.' },
    { id: 9, year: '2023', title: 'Industry Leader', description: 'Completed 500+ projects with 200+ team members across 5 continents.' },
    { id: 10, year: '2024', title: 'Sustainability Focus', description: 'Achieved carbon neutrality and launched sustainability-focused solutions.' }
  ];

  const coreValues = [
    { icon: '🚀', title: 'Innovation First', description: 'Constantly pushing boundaries and embracing emerging technologies.' },
    { icon: '🤝', title: 'Client Partnership', description: 'Working as true partners with our clients for mutual success.' },
    { icon: '✨', title: 'Excellence', description: 'Maintaining highest standards of quality, security, and performance.' },
    { icon: '🌍', title: 'Global Impact', description: 'Creating solutions that improve millions of lives globally.' },
    { icon: '👥', title: 'People Focus', description: 'Investing in our team for continuous learning and growth.' },
    { icon: '🔒', title: 'Trust & Security', description: 'Prioritizing security and ethical practices in all operations.' }
  ];

  const keyStats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '200+', label: 'Team Members' },
    { number: '15+', label: 'Industries Served' },
    { number: '5', label: 'Countries Operating' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Global Support' }
  ];

  const successStories = [
    { id: 1, title: 'Healthcare Revolution', description: 'Transformed legacy healthcare system into cloud platform for 2M+ users.', impact: '+300% Efficiency', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
    { id: 2, title: 'E-Commerce Excellence', description: 'Built scalable platform processing $500M+ with 99.99% uptime.', impact: '+250% Revenue', image: 'https://images.unsplash.com/photo-1563461369811-4f56a08ca94f?w=400&h=300&fit=crop' },
    { id: 3, title: 'Financial Transform', description: 'Modernized banking systems with AI insights and blockchain security.', impact: '+150% Quality', image: 'https://images.unsplash.com/photo-1563206965-74185b417601?w=400&h=300&fit=crop' },
    { id: 4, title: 'EdTech Innovation', description: 'Connected 1M+ students with AI-powered personalized learning.', impact: '+400% Engagement', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' }
  ];

  const visionPoints = [
    { icon: '🔮', title: 'Future-Ready Solutions', description: 'AI-powered, sustainable, scalable solutions for tomorrow.' },
    { icon: '🌐', title: 'Global Expansion', description: 'Expanding to 20+ countries with localized expertise.' },
    { icon: '🚀', title: 'Tech Leadership', description: 'Forefront of AI, blockchain, and quantum computing.' },
    { icon: '🌍', title: 'Positive Impact', description: 'Solutions addressing global challenges.' }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[550px] flex items-center justify-center overflow-hidden mb-16 md:mb-20">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-108"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-blue-900 opacity-55 transition-all duration-400 hover:opacity-65" />
        </div>
        <div className="relative z-10 text-center text-white animate-fadeInDown">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 drop-shadow-lg tracking-wider">Our Journey</h1>
          <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md tracking-wide">From Vision to Innovation - Transformed Over a Decade</p>
          <div className="flex gap-3 md:gap-5 justify-center flex-wrap">
            <button className="px-6 md:px-9 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold uppercase tracking-wide rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Explore Our Story</span>
            </button>
            <button className="px-6 md:px-9 py-3 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-white hover:text-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Company Origin Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4 pb-4 border-b-4 border-blue-600 w-fit mx-auto">How It All Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">A Dream Born From Passion</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed hover:text-blue-600 transition-colors duration-300 hover:translate-x-1">
                In 2015, four college friends came together with a vision to harness technology to solve real-world problems. They started from a cramped apartment with just passion and determination.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed hover:text-blue-600 transition-colors duration-300 hover:translate-x-1">
                Their first app became the foundation of what would grow into a global technology powerhouse. What started as a side project became their full-time commitment.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed hover:text-blue-600 transition-colors duration-300 hover:translate-x-1">
                Through all the growth, they never lost sight of their core mission: <strong className="text-blue-600">to create technology that matters.</strong>
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6 rounded-lg hover:bg-blue-100 transition-colors duration-300 shadow-md">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-blue-600">First Office:</span>
                    <span className="text-gray-600">A 500 sq ft apartment</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-blue-600">Initial Team:</span>
                    <span className="text-gray-600">4 passionate developers</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-blue-600">First Budget:</span>
                    <span className="text-gray-600">$5,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop" 
                alt="Company Beginning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-112 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                <p className="text-white font-bold text-lg p-6">Our team in 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4 pb-4 border-b-4 border-blue-600 w-fit mx-auto">Our Growth Timeline</h2>
          <p className="text-center text-gray-600 text-lg mb-12 mt-6">A decade of achievements, challenges, and continuous growth</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyMilestones.map((milestone) => (
              <div
                key={milestone.id}
                onMouseEnter={() => setHoveredMilestone(milestone.id)}
                onMouseLeave={() => setHoveredMilestone(null)}
                className={`bg-gray-50 border-2 border-gray-300 rounded-2xl p-6 transition-all duration-400 cursor-pointer group ${
                  hoveredMilestone === milestone.id 
                    ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-cyan-50 transform -translate-y-3 shadow-2xl' 
                    : 'hover:border-blue-600 hover:transform hover:-translate-y-3 hover:shadow-2xl'
                }`}
              >
                <div className="w-full h-40 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 group/img">
                  <div className="w-full h-full object-cover bg-gradient-to-br from-blue-400 to-cyan-400">
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 transition-all duration-300 group-hover:text-cyan-500 group-hover:scale-110">{milestone.year}</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-2 mb-2 transition-colors duration-300 group-hover:text-blue-600">{milestone.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{milestone.description}</p>
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-4 transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:shadow-lg group-hover:shadow-cyan-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4 pb-4 border-b-4 border-blue-600 w-fit mx-auto">Our Core Values</h2>
          <p className="text-center text-gray-600 text-lg mb-12 mt-6">The principles that guide every decision we make</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard('value-' + index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-400 border-2 border-transparent hover:border-blue-600 hover:-translate-y-4 hover:rotate-1 group"
              >
                <div className="text-5xl mb-4 transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12 inline-block">{value.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-3 transition-colors duration-300 group-hover:text-cyan-500">{value.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{value.description}</p>
                <div className="h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 mt-4 mx-auto transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4 pb-4 border-b-4 border-blue-600 w-fit mx-auto">Success Stories</h2>
          <p className="text-center text-gray-600 text-lg mb-12 mt-6">Real projects, real results, real impact</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                onMouseEnter={() => setHoveredCard('story-' + story.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-4"
              >
                <div className="relative h-56 overflow-hidden group/img bg-gradient-to-br from-blue-200 to-cyan-200">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-115 group-hover/img:rotate-2"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg transition-transform duration-300 group-hover/img:scale-110">
                    {story.impact}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">{story.title}</h3>
                  <p className="text-gray-700 mb-4 text-base leading-relaxed">{story.description}</p>
                  <a href="#" className="text-blue-600 font-bold hover:text-cyan-500 transition-colors duration-300 inline-flex items-center gap-2">
                    Read Case Study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-108"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-blue-900 opacity-72 transition-all duration-400 hover:opacity-82 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 pb-4">Our Impact by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {keyStats.map((stat, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard('stat-' + index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white bg-opacity-12 backdrop-blur-xl border-2 border-white border-opacity-25 rounded-2xl p-6 text-center transition-all duration-400 hover:bg-opacity-18 hover:border-opacity-50 hover:-translate-y-3 hover:shadow-2xl group"
              >
                <div className="text-4xl md:text-5xl font-black text-cyan-400 transition-all duration-300 group-hover:scale-125 group-hover:text-white">{stat.number}</div>
                <p className="text-white font-bold text-sm md:text-base mt-3 transition-all duration-300 group-hover:tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12 pb-4 border-b-4 border-blue-600 w-fit mx-auto">Our Team & Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">Talented People, Collaborative Culture</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Our strength lies in our diverse team of 200+ professionals spread across 5 continents. We're not just colleagues—we're a family united by a common purpose.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:translate-x-2">
                  <span className="text-2xl">🎯</span>
                  <span className="text-base md:text-lg">Diverse talent from 30+ countries</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:translate-x-2">
                  <span className="text-2xl">📚</span>
                  <span className="text-base md:text-lg">Continuous learning and skill development</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:translate-x-2">
                  <span className="text-2xl">🌟</span>
                  <span className="text-base md:text-lg">Annual team building and hackathons</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:translate-x-2">
                  <span className="text-2xl">💪</span>
                  <span className="text-base md:text-lg">Competitive compensation and benefits</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:translate-x-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-base md:text-lg">Career growth and leadership opportunities</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:translate-x-2">
                  <span className="text-2xl">🌱</span>
                  <span className="text-base md:text-lg">Work-life balance and wellness programs</span>
                </li>
              </ul>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto">
                Join Our Team
              </button>
            </div>
            <div className="relative h-96 md:h-full rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop" 
                alt="Our Team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12 pb-4 border-b-4 border-blue-600 w-fit mx-auto">Our Vision for Tomorrow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 border-2 border-transparent hover:border-blue-600 group"
              >
                <div className="text-4xl md:text-5xl mb-4 transition-transform duration-300 group-hover:scale-120 inline-block">{point.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-3 transition-colors duration-300 group-hover:text-cyan-500">{point.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-108"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-blue-900 opacity-75 transition-all duration-400 hover:opacity-85 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl text-white text-opacity-95 mb-10 tracking-wide">Join hundreds of companies already partnered with us for digital transformation</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Get Started Today
            </button>
            <button className="px-10 py-4 bg-transparent border-3 border-white text-white font-bold uppercase tracking-widest rounded-lg shadow-lg hover:bg-white hover:text-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurJourney;