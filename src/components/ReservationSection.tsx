import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const ReservationSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return false;
    }
    if (!formData.phone.trim()) {
      toast({ title: "Please enter your phone number", variant: "destructive" });
      return false;
    }
    if (!formData.date) {
      toast({ title: "Please select a date", variant: "destructive" });
      return false;
    }
    if (!formData.time) {
      toast({ title: "Please select a time", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Reservation Request Received!",
      description: `Thank you, ${formData.name}. We'll confirm your reservation for ${formData.guests} guest(s) on ${formData.date} at ${formData.time} shortly.`,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
    });

    setIsSubmitting(false);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";

  return (
    <section id="reservation" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Info */}
          <div className="animate-slide-up">
            <span className="inline-block text-accent font-body text-sm uppercase tracking-[0.2em] mb-4">
              Book Your Experience
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Make a Reservation
            </h2>
            <p className="font-body text-primary-foreground/80 leading-relaxed mb-10">
              Join us for an unforgettable dining experience. Reserve your table today and 
              let us take care of the rest. For parties larger than 8, please contact us directly.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-sm text-primary-foreground/60 uppercase tracking-wide">Phone</p>
                  <p className="font-heading text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-sm text-primary-foreground/60 uppercase tracking-wide">Email</p>
                  <p className="font-heading text-lg">reservations@lamaison.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-sm text-primary-foreground/60 uppercase tracking-wide">Hours</p>
                  <p className="font-heading text-lg">Tue-Sun: 6pm - 11pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-elegant-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputClasses} pl-12`}
                  maxLength={100}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClasses} pl-12`}
                  maxLength={255}
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputClasses} pl-12`}
                  maxLength={20}
                />
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`${inputClasses} pl-12`}
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`${inputClasses} pl-12 appearance-none`}
                  >
                    <option value="">Select Time</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={`${inputClasses} pl-12 appearance-none`}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>

              {/* Special Requests */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <textarea
                  name="message"
                  placeholder="Special Requests (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClasses} pl-12 resize-none`}
                  maxLength={500}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Reservation"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
