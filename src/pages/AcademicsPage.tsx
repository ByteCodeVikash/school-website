import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, Users, Target } from 'lucide-react';

export default function AcademicsPage() {
  const classes = [
    {
      grade: 'Class 1',
      focus: 'Foundation Building',
      subjects: ['English', 'Hindi', 'Mathematics', 'EVS', 'Art & Craft', 'Physical Education'],
      description: 'Introduction to basic concepts with play-based learning and activity-oriented teaching methods.',
    },
    {
      grade: 'Class 2',
      focus: 'Skill Development',
      subjects: ['English', 'Hindi', 'Mathematics', 'EVS', 'Art & Craft', 'Physical Education', 'Computer Basics'],
      description: 'Building upon foundational skills with enhanced reading, writing, and numerical abilities.',
    },
    {
      grade: 'Class 3',
      focus: 'Conceptual Learning',
      subjects: ['English', 'Hindi', 'Mathematics', 'EVS', 'General Knowledge', 'Art', 'Computer', 'Physical Education'],
      description: 'Developing conceptual understanding and critical thinking through interactive learning.',
    },
    {
      grade: 'Class 4',
      focus: 'Knowledge Expansion',
      subjects: ['English', 'Hindi', 'Mathematics', 'EVS', 'General Knowledge', 'Computer Science', 'Art', 'Physical Education'],
      description: 'Expanding knowledge base with emphasis on comprehension and analytical skills.',
    },
    {
      grade: 'Class 5',
      focus: 'Advanced Foundation',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art', 'Physical Education'],
      description: 'Preparing students for middle school with advanced concepts and independent learning.',
    },
    {
      grade: 'Class 6',
      focus: 'Middle School Transition',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Art', 'Physical Education'],
      description: 'Introduction to specialized subjects with focus on scientific thinking and social awareness.',
    },
    {
      grade: 'Class 7',
      focus: 'Comprehensive Learning',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Art', 'Physical Education'],
      description: 'In-depth study of subjects with practical applications and project-based learning.',
    },
    {
      grade: 'Class 8',
      focus: 'Pre-Secondary Preparation',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Art', 'Physical Education'],
      description: 'Comprehensive preparation for board examinations and higher secondary education.',
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Following updated CBSE curriculum with focus on conceptual understanding and practical application.',
    },
    {
      icon: GraduationCap,
      title: 'Qualified Teachers',
      description: 'Highly experienced faculty with specialized training in child psychology and modern teaching methods.',
    },
    {
      icon: Users,
      title: 'Small Class Size',
      description: 'Maintaining optimal student-teacher ratio for personalized attention and better learning outcomes.',
    },
    {
      icon: Target,
      title: 'Individual Focus',
      description: 'Adapting teaching style according to each student\'s learning level and pace for maximum growth.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Logo Red & Blue Theme */}
      <section className="bg-gradient-to-br from-[#d50004] via-[#b80003] to-[#00aade] text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Academic Programs
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto">
              Excellence in Education from Class 1 to Class 8
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Academic Approach
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="space-y-8 text-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  At Yoga Convent School, we provide strong education and advanced knowledge through child-friendly learning methods. Our curriculum is designed to develop critical thinking, creativity, and problem-solving skills in students.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We have the best education environment for students where learning becomes an enjoyable experience. Our highly experienced teachers adapt their teaching style according to students' learning levels, ensuring every child reaches their full potential.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="text-center border-2 hover:shadow-xl hover:border-[#00aade]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-10 pb-8 px-6">
                    <div className="bg-gradient-to-br from-[#d50004]/10 to-[#00aade]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-10 w-10 text-[#d50004]" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Class-wise Details */}
      <section className="py-6 md:py-14 bg-gradient-to-b from-[#efd598]/10 to-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Class-wise Curriculum
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum designed for each grade level
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {classes.map((classInfo, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-xl hover:border-[#00aade]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-6 space-y-4 bg-gradient-to-br from-[#d50004]/5 to-[#00aade]/5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-bold text-[#d50004]">
                      {classInfo.grade}
                    </CardTitle>
                    <Badge className="text-sm px-4 py-2 font-medium bg-[#00aade] hover:bg-[#0099cc] text-white border-0">
                      {classInfo.focus}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pb-8">
                  <p className="text-base text-muted-foreground leading-relaxed min-h-[80px]">
                    {classInfo.description}
                  </p>
                  <div>
                    <h4 className="font-bold mb-4 text-base flex items-center gap-2 text-gray-900">
                      <BookOpen className="w-4 h-4 text-[#d50004]" />
                      Subjects Offered
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {classInfo.subjects.map((subject, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-sm px-3 py-1.5 border-2 border-[#00aade]/30 text-gray-700 hover:bg-[#00aade]/10 hover:border-[#00aade]"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-6 md:py-14">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Teaching Methodology
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
            </div>

            {/* Methodology Cards */}
            <div className="space-y-8">
              <Card className="border-2 border-[#d50004]/20 hover:shadow-lg hover:border-[#d50004]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#d50004]">
                    Interactive Learning
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    We use interactive teaching methods that engage students actively in the learning process. Our classrooms are equipped with smart boards and audio-visual aids that make learning more interesting and effective.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#00aade]/20 hover:shadow-lg hover:border-[#00aade]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#00aade]">
                    Personalized Attention
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Understanding that every child learns differently, we adapt our teaching style according to students' learning levels. Our teachers provide individual attention to ensure no student is left behind.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#d50004]/20 hover:shadow-lg hover:border-[#d50004]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#d50004]">
                    Practical Application
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    We emphasize hands-on learning through experiments, projects, and real-world applications. This approach helps students understand concepts better and retain knowledge longer.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#00aade]/20 hover:shadow-lg hover:border-[#00aade]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#00aade]">
                    Continuous Assessment
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Regular assessments and feedback help us track each student's progress and identify areas that need improvement. We conduct periodic tests, assignments, and projects to evaluate learning outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#d50004]/20 hover:shadow-lg hover:border-[#d50004]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#d50004]">
                    Co-Curricular Integration
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    We also conduct various co-curricular activities that complement academic learning. Sports, arts, music, and cultural programs help in overall personality development of students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-[#efd598]/10 to-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Additional Learning Programs
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-[#d50004]/20 hover:shadow-xl hover:border-[#d50004]/40 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#d50004]/5 to-transparent">
                <CardTitle className="text-2xl font-bold text-[#d50004]">
                  Remedial Classes
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Extra support for students who need additional help in specific subjects to ensure they keep pace with their peers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00aade]/20 hover:shadow-xl hover:border-[#00aade]/40 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#00aade]/5 to-transparent">
                <CardTitle className="text-2xl font-bold text-[#00aade]">
                  Advanced Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Enrichment programs for students who excel, providing them with challenging material to further develop their abilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#d50004]/20 hover:shadow-xl hover:border-[#d50004]/40 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#d50004]/5 to-transparent">
                <CardTitle className="text-2xl font-bold text-[#d50004]">
                  Life Skills Education
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Teaching essential life skills including communication, problem-solving, decision-making, and emotional intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
