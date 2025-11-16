
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-9415981641'],
      color: 'bg-[#d50004]',
      link: 'tel:+919415981641',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@yogaconvent.edu.in', 'admissions@yogaconvent.edu.in'],
      color: 'bg-[#00aade]',
      link: 'mailto:info@yogaconvent.edu.in',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Bhirbhanpur, Varanasi, Near Bheronath Mandir, Uttar Pradesh - 221311'],
      color: 'bg-[#d50004]',
      link: null,
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 4:00 PM', 'Saturday: 8:00 AM - 1:00 PM'],
      color: 'bg-[#00aade]',
      link: null,
    },
  ];

  const admissionSteps = [
    {
      step: '1',
      title: 'Enquiry',
      description: 'Contact us via phone, email, or visit our school to get information about admission process and requirements.',
    },
    {
      step: '2',
      title: 'Application Form',
      description: 'Collect and fill the admission application form with required details and attach necessary documents.',
    },
    {
      step: '3',
      title: 'Interaction',
      description: 'Parents and child meet with our faculty for a friendly interaction to understand the child\'s learning needs.',
    },
    {
      step: '4',
      title: 'Admission',
      description: 'Upon successful completion, admission is confirmed and the child becomes part of our school family.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Logo Color Theme */}
      <section className="bg-gradient-to-br from-[#d50004] via-[#b80003] to-[#00aade] text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Contact Us</h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto">
              Get in Touch for Admissions, Enquiries, or Any Questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="text-center border-2 hover:shadow-xl hover:border-[#00aade]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-10 pb-8 px-6">
                  <div className={`${info.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <info.icon className="h-10 w-10" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-base text-muted-foreground mb-2 leading-relaxed">
                      {info.link && idx === 0 ? (
                        <a href={info.link} className="hover:text-[#00aade] transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#d50004]/5 to-[#00aade]/5">
                <CardTitle className="text-3xl font-bold text-gray-900">Send Us a Message</CardTitle>
                <p className="text-muted-foreground mt-2">We'll respond within 24 hours</p>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-base font-semibold">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={6}
                      className="mt-2 resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base bg-gradient-to-r from-[#d50004] to-[#00aade] hover:opacity-90" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Location */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#00aade]/5 to-[#d50004]/5">
                <CardTitle className="text-3xl font-bold text-gray-900">Visit Our School</CardTitle>
                <p className="text-muted-foreground mt-2">Find us on the map</p>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Google Maps Embed - Responsive */}
                <div className="relative w-full pb-[75%] mb-8 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3988796947795!2d82.95!3d25.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db92bcaaaab%3A0x1e7c23bdb4381d64!2sBhirbhanpur%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-[#efd598]/20 to-transparent rounded-lg border-2 border-[#efd598]/30">
                    <h4 className="font-bold mb-3 text-lg text-gray-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#d50004]" />
                      School Address
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Yoga Convent School<br />
                      Bhirbhanpur, Varanasi<br />
                      Near Bheronath Mandir<br />
                      Uttar Pradesh, India - 221311
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-lg text-gray-900">How to Reach</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Our school is easily accessible by public transport and has ample parking space for visitors. Located near the famous Bheronath Mandir.
                    </p>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full h-12 border-2 border-[#00aade] text-[#00aade] hover:bg-[#00aade] hover:text-white transition-all"
                    asChild
                  >
                    <a href="https://maps.google.com/?q=Bhirbhanpur,+Varanasi" target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-5 w-5" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-[#efd598]/10 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Admission Process</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple and transparent admission process in 4 easy steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {admissionSteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:shadow-xl hover:border-[#00aade]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-br from-[#d50004] to-[#00aade] text-white w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold shadow-lg">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Documents Required for Admission</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
            </div>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-10 pb-10 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Birth Certificate (Original & Photocopy)',
                    'Transfer Certificate (if applicable)',
                    'Previous Year Report Card',
                    'Aadhaar Card (Student & Parents)',
                    'Passport Size Photographs (4 copies)',
                    'Address Proof (Electricity Bill/Rent Agreement)',
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#00aade] to-[#0099cc] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow">
                        ✓
                      </div>
                      <span className="text-base text-gray-700 pt-2 leading-relaxed">{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-gradient-to-br from-[#efd598]/20 to-transparent rounded-lg border-2 border-[#efd598]/30">
                  <p className="text-base leading-relaxed text-gray-700">
                    <strong className="text-[#d50004]">Note:</strong> All documents should be self-attested. Original documents will be verified and returned at the time of admission.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-[#efd598]/10 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'What classes does Yoga Convent School offer?',
                  answer: 'We offer classes from Class 1 to Class 8, providing quality education with a focus on overall personality development.',
                },
                {
                  question: 'What is the student-teacher ratio?',
                  answer: 'We maintain an optimal student-teacher ratio to ensure personalized attention for each child. Our class sizes are kept small for better learning outcomes.',
                },
                {
                  question: 'Do you provide transport facilities?',
                  answer: 'Yes, we provide safe and secure school transport facilities covering various routes across the city.',
                },
                {
                  question: 'When does the admission process start?',
                  answer: 'Admissions typically open in January-February for the new academic session starting in April. However, you can contact us anytime for enquiries.',
                },
              ].map((faq, index) => (
                <Card key={index} className="border-2 hover:shadow-lg hover:border-[#00aade]/30 transition-all">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-[#d50004] via-[#b80003] to-[#00aade] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our School Family?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Contact us today to schedule a visit or learn more about our admission process. We look forward to welcoming your child to Yoga Convent School.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="h-14 px-8 text-lg bg-white text-[#d50004] hover:bg-gray-100"
              asChild
            >
              <a href="tel:+919415981641">
                <Phone className="mr-2 h-6 w-6" />
                Call Us Now
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-2 border-white"
              asChild
            >
              <a href="mailto:info@yogaconvent.edu.in">
                <Mail className="mr-2 h-6 w-6" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
