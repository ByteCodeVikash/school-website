// import { Card, CardContent } from '@/components/ui/card';
import { Mail, GraduationCap, Award, Users } from 'lucide-react';

export default function TeachersPage() {
  const teachers = [
    {
      name: 'Mrs. Sunita Sharma',
      designation: 'English Teacher',
      description: 'Leading with vision and excellence, specializing in English literature and educational leadership.',
      email: 'sunita.sharma@yogaconvent.edu.in',
      subject: 'English & Administration',
      hue: 0
    },
    {
      name: 'Mr. Rajesh Kumar',
      designation: 'Mathematics Teacher',
      description: 'Making complex mathematical concepts simple and engaging for students of all levels.',
      email: 'rajesh.kumar@yogaconvent.edu.in',
      subject: 'Mathematics',
      hue: 0
    },
    {
      name: 'Mrs. Priya Verma',
      designation: 'Science Teacher',
      description: 'Inspiring scientific curiosity through hands-on experiments and practical learning.',
      email: 'priya.verma@yogaconvent.edu.in',
      subject: 'Science',
      hue: 0
    },
    {
      name: 'Ms. Anjali Singh',
      designation: 'Hindi Teacher',
      description: 'Fostering love for Hindi language and literature through creative teaching methods.',
      email: 'anjali.singh@yogaconvent.edu.in',
      subject: 'Hindi',
      hue: 0
    },
    {
      name: 'Mr. Amit Patel',
      designation: 'Social Science Teacher',
      description: 'Bringing history and civics to life with engaging storytelling and real-world connections.',
      email: 'amit.patel@yogaconvent.edu.in',
      subject: 'Social Science',
      hue: 0
    },
    {
      name: 'Mrs. Kavita Gupta',
      designation: 'English Teacher',
      description: 'Building strong communication skills and confidence through interactive English lessons.',
      email: 'kavita.gupta@yogaconvent.edu.in',
      subject: 'English',
      hue: 0
    },
    {
      name: 'Mr. Vikram Mehta',
      designation: 'Computer Science Teacher',
      description: 'Preparing students for the digital future with cutting-edge technology education.',
      email: 'vikram.mehta@yogaconvent.edu.in',
      subject: 'Computer Science',
      hue: 0
    },
    {
      name: 'Mrs. Neha Reddy',
      designation: 'Mathematics Teacher',
      description: 'Developing problem-solving skills and logical thinking through personalized attention.',
      email: 'neha.reddy@yogaconvent.edu.in',
      subject: 'Mathematics',
      hue: 0
    },
    {
      name: 'Ms. Pooja Joshi',
      designation: 'EVS Teacher',
      description: 'Creating environmental awareness and connecting students with nature through exploration.',
      email: 'pooja.joshi@yogaconvent.edu.in',
      subject: 'Environmental Studies',
      hue: 0
    },
    {
      name: 'Mr. Sanjay Nair',
      designation: 'Physical Education Teacher',
      description: 'Promoting fitness, sportsmanship, and healthy lifestyle habits among students.',
      email: 'sanjay.nair@yogaconvent.edu.in',
      subject: 'Physical Education',
      hue: 0
    },
    {
      name: 'Mrs. Rekha Desai',
      designation: 'Art & Craft Teacher',
      description: 'Nurturing creativity and artistic expression through diverse art forms and techniques.',
      email: 'rekha.desai@yogaconvent.edu.in',
      subject: 'Art & Craft',
      hue: 0
    },
    {
      name: 'Ms. Divya Sharma',
      designation: 'Music Teacher',
      description: 'Cultivating musical talent and appreciation through vocal and instrumental training.',
      email: 'divya.sharma@yogaconvent.edu.in',
      subject: 'Music',
      hue: 0
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 md:py-28 overflow-hidden">
        {/* Logo Watermark */}
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

      {/* Teachers Cards */}
      <section className="py-16 md:py-24 relative bg-white">
        {/* Background Logo Watermark */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="teacher-card group"
                style={{
                    ["--hue" as any]: teacher.hue,
                    ["--saturation" as any]: "100%",
                    ["--lightness" as any]: "45%"
                }}
              >
                <div className="card-content">
                  {/* Teacher Name */}
                  <h3 className="text-xl font-semibold mb-2">
                    {teacher.name}
                  </h3>

                  {/* Designation */}
                  <p className="text-sm font-semibold uppercase tracking-wide opacity-80 mb-3">
                    {teacher.designation}
                  </p>

                  {/* Subject Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium mb-3 bg-red-50 border border-red-200 text-red-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    {teacher.subject}
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4 opacity-80">
                    {teacher.description}
                  </p>

                  {/* Email */}
                  <div className="flex items-center gap-2 text-sm opacity-70 mb-4">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="break-all text-xs">{teacher.email}</span>
                  </div>

                  {/* CTA Button */}
                  <a href={`mailto:${teacher.email}`} className="cta-button">
                    Contact Teacher
                  </a>
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
        .teacher-card {
          padding: 1.5em;
          display: flex;
          flex-direction: column;
          color: #1f2937;
          background-color: #ffffff;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 15px;
          transition: all ease-in-out 0.3s;
          min-height: 400px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.08);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .teacher-card .cta-button {
          display: block;
          margin-top: auto;
          text-align: center;
          text-decoration: none;
          color: #dc2626;
          background-color: transparent;
          outline: 2px solid #dc2626;
          padding: 0.7em;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .teacher-card:hover {
          background: rgba(254, 242, 242, 0.8);
          color: #1f2937;
          outline: 2px solid #dc2626;
          transform: translateY(-4px);
          box-shadow: 
            inset 0 0 60px rgba(254, 226, 226, 0.8),
            inset 15px 0 60px rgba(220, 38, 38, 0.3),
            inset -15px 0 60px rgba(220, 38, 38, 0.3),
            inset 15px 0 200px rgba(220, 38, 38, 0.2),
            inset -15px 0 200px rgba(220, 38, 38, 0.2),
            0 0 40px rgba(220, 38, 38, 0.2),
            -8px 0 50px rgba(220, 38, 38, 0.3),
            8px 0 50px rgba(220, 38, 38, 0.3);
        }

        .teacher-card:hover .cta-button {
          outline: none;
          background-color: #dc2626;
          color: #fff;
        }

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
      `}</style>
    </div>
  );
}