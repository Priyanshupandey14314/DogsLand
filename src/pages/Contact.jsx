import React from 'react';
import { useForm } from 'react-hook-form';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { AnimatedCard } from '../components/ui/AnimatedCard';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    alert('Thank you for contacting us! We will get back to you soon.');
    reset();
  };

  const contactInfo = [
    { icon: <MapPin className="w-6 h-6 text-white" />, title: "Visit Us", details: "123 Canine Ave, Pet City, PC 12345" },
    { icon: <Phone className="w-6 h-6 text-white" />, title: "Call Us", details: "(555) 123-4567" },
    { icon: <Mail className="w-6 h-6 text-white" />, title: "Email Us", details: "hello@dogsland.com" },
    { icon: <Clock className="w-6 h-6 text-white" />, title: "Working Hours", details: "Mon - Sat: 8:00 AM - 6:00 PM" },
  ];

  return (
    <div className="pt-24 pb-24 bg-background">
      {/* Hero Section */}
      <section className="bg-secondary dark:bg-black py-20 mb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Let's Talk About Your Dog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have questions about our programs or ready to book a consultation? We're here to help!
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Info & Map */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-primary/30">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] shadow-lg border border-border">
              <iframe
                title="Google Maps Location Placeholder"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911446.6246527056!2d82.15567594999999!3d26.829187799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa014d1df4bde0e47%3A0xdff2b62cab6acf48!2sDogsland%20training!5e0!3m2!1sen!2sin!4v1778654857655!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <SectionHeading title="Send Us a Message" subtitle="Get In Touch" centered={false} />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Your Name</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email Address</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" }
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Phone Number</label>
                    <input
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Interested Service</label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                    >
                      <option value="">Select a service</option>
                      <option value="puppy">Puppy Training</option>
                      <option value="obedience">Obedience Training</option>
                      <option value="behavior">Behavior Modification</option>
                      <option value="boarding">Boarding & Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Tell us about your dog and goals</label>
                  <textarea
                    {...register("message", { required: "Please provide some details" })}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-shadow resize-none"
                    placeholder="My dog is a 2-year old Golden Retriever..."
                  ></textarea>
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-lg mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};
