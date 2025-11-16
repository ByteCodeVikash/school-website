// import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, GraduationCap, Award, Users, BookOpen } from 'lucide-react';

export default function TeachersPage() {
  const teachers = [
    {
      name: 'Mrs. Sunita Sharma',
      designation: 'English Teacher',
      email: 'sunita.sharma@yogaconvent.edu.in',
      phone: '+91 98765 43210',
      subject: 'English & Administration',
      experience: '15 Years'
    },
    {
      name: 'Mr. Rajesh Kumar',
      designation: 'Mathematics Teacher',
      email: 'rajesh.kumar@yogaconvent.edu.in',
      phone: '+91 98765 43211',
      subject: 'Mathematics',
      experience: '12 Years'
    },
    {
      name: 'Mrs. Priya Verma',
      designation: 'Science Teacher',
      email: 'priya.verma@yogaconvent.edu.in',
      phone: '+91 98765 43212',
      subject: 'Science',
      experience: '10 Years'
    },
    {
      name: 'Ms. Anjali Singh',
      designation: 'Hindi Teacher',
      email: 'anjali.singh@yogaconvent.edu.in',
      phone: '+91 98765 43213',
      subject: 'Hindi',
      experience: '8 Years'
    },
    {
      name: 'Mr. Amit Patel',
      designation: 'Social Science Teacher',
      email: 'amit.patel@yogaconvent.edu.in',
      phone: '+91 98765 43214',
      subject: 'Social Science',
      experience: '11 Years'
    },
    {
      name: 'Mrs. Kavita Gupta',
      designation: 'English Teacher',
      email: 'kavita.gupta@yogaconvent.edu.in',
      phone: '+91 98765 43215',
      subject: 'English',
      experience: '9 Years'
    },
    {
      name: 'Mr. Vikram Mehta',
      designation: 'Computer Science Teacher',
      email: 'vikram.mehta@yogaconvent.edu.in',
      phone: '+91 98765 43216',
      subject: 'Computer Science',
      experience: '7 Years'
    },
    {
      name: 'Mrs. Neha Reddy',
      designation: 'Mathematics Teacher',
      email: 'neha.reddy@yogaconvent.edu.in',
      phone: '+91 98765 43217',
      subject: 'Mathematics',
      experience: '10 Years'
    },
    {
      name: 'Ms. Pooja Joshi',
      designation: 'EVS Teacher',
      email: 'pooja.joshi@yogaconvent.edu.in',
      phone: '+91 98765 43218',
      subject: 'Environmental Studies',
      experience: '6 Years'
    },
    {
      name: 'Mr. Sanjay Nair',
      designation: 'Physical Education Teacher',
      email: 'sanjay.nair@yogaconvent.edu.in',
      phone: '+91 98765 43219',
      subject: 'Physical Education',
      experience: '13 Years'
    },
    {
      name: 'Mrs. Rekha Desai',
      designation: 'Art & Craft Teacher',
      email: 'rekha.desai@yogaconvent.edu.in',
      phone: '+91 98765 43220',
      subject: 'Art & Craft',
      experience: '8 Years'
    },
    {
      name: 'Ms. Divya Sharma',
      designation: 'Music Teacher',
      email: 'divya.sharma@yogaconvent.edu.in',
      phone: '+91 98765 43221',
      subject: 'Music',
      experience: '5 Years'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5 flex items-center justify-center">
          <img 
            src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png" 
            alt="Yoga Convent School Logo"
            className="w-96 h-96 object-contain"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <GraduationCap className="w-96 h-96" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-20 w-20 mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Faculty</h1>
            <p className="text-xl md:text-2xl opacity-95 font-light">
              Meet Our Highly Experienced and Dedicated Teachers
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              Excellence in Teaching
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Passionate Educators</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Yoga Convent School, we take pride in having highly experienced and best teachers who are passionate about education and committed to student success. Our faculty members bring years of expertise, dedication, and a genuine love for teaching.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each teacher is specially trained in modern teaching methodologies and child psychology. They understand that every child is unique and adapt their teaching style according to students' learning levels.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Visiting Cards */}
      <section className="py-16 md:py-24 relative bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <img 
              src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png" 
              alt="Logo"
              className="w-[500px] h-[500px] object-contain"
            />
          </div>
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
            <img 
              src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png" 
              alt="Logo"
              className="w-[500px] h-[500px] object-contain"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">Dedicated professionals shaping tomorrow's leaders</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => (
              <div key={index} className="visiting-card-wrapper">
                <div className="visiting-card">
                  {/* Top Red Bar with Logo */}
                  <div className="card-top-bar">
                    <img 
                      src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png" 
                      alt="Logo"
                      className="card-logo"
                    />
                    <div className="school-title">
                      <h4>Yoga Convent School</h4>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body-section">
                    {/* Teacher Name */}
                    <h3 className="teacher-name">{teacher.name}</h3>
                    
                    {/* Designation */}
                    <p className="teacher-role">{teacher.designation}</p>
                    
                    {/* Subject Badge */}
                    <div className="subject-tag">
                      <BookOpen className="subject-icon" />
                      <span>{teacher.subject}</span>
                    </div>

                    {/* Divider */}
                    <div className="card-divider"></div>

                    {/* Contact Info */}
                    <div className="contact-section">
                      <div className="contact-row">
                        <Mail className="contact-icon" />
                        <span className="contact-value">{teacher.email}</span>
                      </div>
                      <div className="contact-row">
                        <Phone className="contact-icon" />
                        <span className="contact-value">{teacher.phone}</span>
                      </div>
                    </div>

                    {/* Experience Badge */}
                    <div className="experience-badge">
                      <Award className="exp-icon" />
                      <span>{teacher.experience} Experience</span>
                    </div>
                  </div>

                  {/* Bottom Red Strip */}
                  <div className="card-bottom-bar">
                    <span>Excellence in Education</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Qualities */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">What Makes Our Teachers Special</h2>
              <p className="text-gray-600 text-lg">The qualities that set our educators apart</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: 1, title: 'Highly Qualified', desc: 'All our teachers hold relevant degrees and certifications with years of teaching experience.' },
                { num: 2, title: 'Child-Centric Approach', desc: 'Trained in child psychology to understand unique needs of each student.' },
                { num: 3, title: 'Adaptive Teaching', desc: 'Teaching style adapted according to students\' learning levels and pace.' },
                { num: 4, title: 'Passionate & Dedicated', desc: 'Genuinely passionate about education and student success.' },
                { num: 5, title: 'Continuous Development', desc: 'Regular training keeps teachers updated with latest methodologies.' },
                { num: 6, title: 'Parent Communication', desc: 'Regular communication with parents about student progress.' }
              ].map((item, idx) => (
                <div key={idx} className="quality-card">
                  <div className="quality-number">{item.num}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80 text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Visiting Card Container */
        .visiting-card-wrapper {
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        /* Main Card - Standard Visiting Card Dimensions (89mm x 51mm ratio) */
        .visiting-card {
          width: 320px;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.1),
            0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(220, 38, 38, 0.15);
        }

        .visiting-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 
            0 8px 16px rgba(220, 38, 38, 0.2),
            0 12px 32px rgba(220, 38, 38, 0.15);
        }

        /* Top Red Bar */
        .card-top-bar {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          padding: 0.7rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .card-logo {
          width: 35px;
          height: 35px;
          background: white;
          border-radius: 6px;
          padding: 3px;
          object-fit: contain;
        }

        .school-title h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
          margin: 0;
          line-height: 1.2;
        }

        /* Card Body */
        .card-body-section {
          padding: 1rem;
          background: white;
        }

        .teacher-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.3rem 0;
          line-height: 1.3;
        }

        .teacher-role {
          font-size: 0.8rem;
          font-weight: 600;
          color: #dc2626;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin: 0 0 0.7rem 0;
        }

        .subject-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: #fef2f2;
          border: 1px solid #fca5a5;
          color: #991b1b;
          padding: 0.3rem 0.6rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .subject-icon {
          width: 12px;
          height: 12px;
        }

        .card-divider {
          height: 1.5px;
          background: linear-gradient(to right, #dc2626, #ef4444, #dc2626);
          margin: 0.8rem 0;
          border-radius: 2px;
        }

        /* Contact Section */
        .contact-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
        }

        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .contact-icon {
          width: 14px;
          height: 14px;
          color: #dc2626;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-value {
          font-size: 0.7rem;
          color: #4b5563;
          font-weight: 500;
          word-break: break-all;
          line-height: 1.4;
        }

        /* Experience Badge */
        .experience-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          padding: 0.35rem 0.6rem;
          border-radius: 6px;
          font-size: 0.7rem;
          color: #374151;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .exp-icon {
          width: 12px;
          height: 12px;
          color: #dc2626;
        }

        /* Bottom Red Strip */
        .card-bottom-bar {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          padding: 0.5rem;
          text-align: center;
        }

        .card-bottom-bar span {
          font-size: 0.7rem;
          color: white;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* Quality Cards */
        .quality-card {
          padding: 2em;
          color: #1f2937;
          background-color: #ffffff;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 15px;
          transition: all ease-in-out 0.3s;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.08);
        }

        .quality-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.5em;
          height: 3.5em;
          border-radius: 12px;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
          font-size: 1.5em;
          font-weight: 700;
          margin-bottom: 1em;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .quality-card:hover {
          background: rgba(254, 242, 242, 0.8);
          outline: 2px solid #dc2626;
          transform: translateY(-4px);
          box-shadow: 
            inset 0 0 50px rgba(254, 226, 226, 0.8),
            inset 12px 0 50px rgba(220, 38, 38, 0.25),
            inset -12px 0 50px rgba(220, 38, 38, 0.25),
            0 0 30px rgba(220, 38, 38, 0.15),
            -6px 0 40px rgba(220, 38, 38, 0.25),
            6px 0 40px rgba(220, 38, 38, 0.25);
        }

        /* Responsive Design */
        @media (max-width: 640px) {
          .visiting-card {
            width: 300px;
          }

          .teacher-name {
            font-size: 1rem;
          }

          .card-body-section {
            padding: 0.9rem;
          }
        }

        @media (min-width: 1280px) {
          .visiting-card {
            width: 310px;
          }
        }
      `}</style>
    </div>
  );
}
