"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Camera, Code, Palette, Sparkles, Target } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "features" },
            { name: "Work", id: "testimonials" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="The Studio Door"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Creative Solutions That Drive Results"
          description="We partner with ambitious brands to create compelling digital experiences that connect with audiences and deliver measurable outcomes."
          tag="Creative Studio"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "testimonials"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern creative studio workspace"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="We Craft Digital Excellence"
          description={[
            "At The Studio Door, we believe exceptional design is more than aesthetics—it's about creating meaningful connections between brands and their audiences.",
            "Our multidisciplinary team combines strategic thinking with creative execution to deliver solutions that don't just look good, they perform exceptionally."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "features"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Our Core Services"
          description="We offer comprehensive creative solutions tailored to your business needs"
          tag="Services"
          features={[
            {
              title: "Brand Identity",
              description: "Complete brand development from strategy to visual identity, creating cohesive brand experiences that resonate with your target audience.",
              icon: Palette,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Web Development",
              description: "Custom websites and web applications built with modern technologies, optimized for performance and user experience.",
              icon: Code,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Digital Strategy",
              description: "Data-driven digital strategies that align with your business goals and drive measurable results across all channels.",
              icon: Target,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Content Creation",
              description: "Engaging content that tells your story, from photography and videography to copywriting and social media management.",
              icon: Camera,
              button: {
                text: "Learn More",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Success Stories"
          description="Hear from the brands we've helped transform and grow"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechFlow Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Founder",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Creative Director",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8089250/pexels-photo-8089250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Marketing VP",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716031/pexels-photo-5716031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Creative Team"
          description="The talented individuals behind our award-winning work"
          tag="Team"
          members={[
            {
              id: "1",
              name: "Alex Rivera",
              role: "Creative Director",
              imageSrc: "https://images.pexels.com/photos/8089250/pexels-photo-8089250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alex Rivera"
            },
            {
              id: "2",
              name: "Jordan Smith",
              role: "Senior Designer",
              imageSrc: "https://images.pexels.com/photos/7989037/pexels-photo-7989037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Jordan Smith"
            },
            {
              id: "3",
              name: "Casey Park",
              role: "Lead Developer",
              imageSrc: "https://images.pexels.com/photos/7652243/pexels-photo-7652243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Casey Park"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Let's Create Something Amazing Together"
          description="Ready to elevate your brand? Get in touch and let's discuss how we can help bring your vision to life."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: false
            },
            {
              name: "budget",
              type: "text",
              placeholder: "Project Budget",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Brand Identity",
                  href: "features"
                },
                {
                  label: "Web Development",
                  href: "features"
                },
                {
                  label: "Digital Strategy",
                  href: "features"
                },
                {
                  label: "Content Creation",
                  href: "features"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Our Work",
                  href: "testimonials"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Blog",
                  href: "#"
                },
                {
                  label: "Case Studies",
                  href: "#"
                },
                {
                  label: "FAQs",
                  href: "#"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | The Studio Door"
        />
      </div>
    </ThemeProvider>
  );
}