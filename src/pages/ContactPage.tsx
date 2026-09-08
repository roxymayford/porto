import * as React from "react";
import { 
  Mail, 
  Send, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldAlert
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function ContactPage() {
  // Live Jakarta / WIB Time State
  const [timeString, setTimeString] = React.useState<string>("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form State
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    service: "Full-Stack Web Development",
    budget: "$1,000 - $3,000",
    message: "",
  });
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Booking Slot State
  const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null);
  const [bookedSlotMessage, setBookedSlotMessage] = React.useState<string | null>(null);

  const availableSlots = [
    { day: "Tomorrow", time: "14:00 WIB (UTC+7)" },
    { day: "Tomorrow", time: "16:30 WIB (UTC+7)" },
    { day: "Thursday", time: "10:00 WIB (UTC+7)" },
    { day: "Thursday", time: "15:00 WIB (UTC+7)" },
    { day: "Friday", time: "13:30 WIB (UTC+7)" },
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      newErrors.message = "Please provide project details (at least 15 characters).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="bg-[#1F2022] min-h-screen text-[#E8F8F5]">
      {/* Header Banner */}
      <div className="border-b-4 border-[#292929] bg-[#141517] p-6 sm:p-10">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4F00]/10 border border-[#FF4F00]/30 font-mono text-xs font-bold text-[#FF4F00] uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Consultation & Direct Booking</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            Get In <span className="text-[#FF4F00]">Touch</span> / Hire Raihan
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/70 max-w-3xl leading-relaxed">
            Have an engineering challenge, machine learning pipeline, or high-performance web project to build? Let's discuss requirements and delivery timelines.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-[#141517] border-4 border-[#292929] shadow-[8px_8px_0px_#FF4F00] space-y-6">
              <div className="flex items-center justify-between border-b border-[#292929] pb-4">
                <div>
                  <h2 className="font-mono font-black text-xl text-white uppercase">
                    Project Inquiry Form
                  </h2>
                  <span className="font-mono text-xs text-[#E8F8F5]/60">
                    Typical response time: &lt; 12 hours
                  </span>
                </div>
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#1F2022] text-[#00BFFF] border border-[#292929]">
                  ENCRYPTED TLS
                </span>
              </div>

              {isSuccess ? (
                <div className="p-6 bg-[#1F2022] border-2 border-[#00BFFF] text-center space-y-4">
                  <div className="w-12 h-12 bg-[#00BFFF]/10 border-2 border-[#00BFFF] rounded-full flex items-center justify-center mx-auto text-[#00BFFF]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-mono font-black text-xl text-white uppercase">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="font-mono text-xs text-[#E8F8F5]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#FFEA00]">{formData.name}</strong>. Your message regarding <strong className="text-white">{formData.service}</strong> has been transmitted. I will review your requirements and reply to <strong className="text-[#00BFFF]">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "Full-Stack Web Development",
                        budget: "$1,000 - $3,000",
                        message: "",
                      });
                    }}
                    className="btn-brutal px-5 py-2 bg-[#FF4F00] text-white font-mono text-xs font-bold uppercase"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs font-bold uppercase text-[#E8F8F5]/80 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full p-3 bg-[#1F2022] border-2 border-[#292929] font-mono text-xs text-white placeholder-[#E8F8F5]/30 focus:border-[#FF4F00] focus:outline-none"
                      />
                      {errors.name && (
                        <span className="font-mono text-[11px] text-red-400 block">{errors.name}</span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs font-bold uppercase text-[#E8F8F5]/80 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full p-3 bg-[#1F2022] border-2 border-[#292929] font-mono text-xs text-white placeholder-[#E8F8F5]/30 focus:border-[#FF4F00] focus:outline-none"
                      />
                      {errors.email && (
                        <span className="font-mono text-[11px] text-red-400 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Service & Budget Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs font-bold uppercase text-[#E8F8F5]/80 block">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full p-3 bg-[#1F2022] border-2 border-[#292929] font-mono text-xs text-white focus:border-[#FF4F00] focus:outline-none"
                      >
                        <option value="Machine Learning Pipeline">Machine Learning / AI Solution</option>
                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="Cloud Architecture & DevOps">Cloud Architecture & DevOps</option>
                        <option value="Performance & Latency Optimization">Latency & Performance Optimization</option>
                        <option value="Technical Advisory & Consulting">Technical Advisory & Consulting</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs font-bold uppercase text-[#E8F8F5]/80 block">
                        Target Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full p-3 bg-[#1F2022] border-2 border-[#292929] font-mono text-xs text-white focus:border-[#FF4F00] focus:outline-none"
                      >
                        <option value="< $1,000">&lt; $1,000 (Sprint / Prototype)</option>
                        <option value="$1,000 - $3,000">$1,000 — $3,000 (MVP / Feature)</option>
                        <option value="$3,000 - $8,000">$3,000 — $8,000 (Full Production System)</option>
                        <option value="$8,000+">$8,000+ (Enterprise / Retainer)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-bold uppercase text-[#E8F8F5]/80 block">
                      Project Goals & Context *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to build, expected deliverables, and any hard deadlines..."
                      className="w-full p-3 bg-[#1F2022] border-2 border-[#292929] font-mono text-xs text-white placeholder-[#E8F8F5]/30 focus:border-[#FF4F00] focus:outline-none leading-relaxed"
                    />
                    {errors.message && (
                      <span className="font-mono text-[11px] text-red-400 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-brutal w-full py-3.5 bg-[#FF4F00] text-white font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? "animate-bounce" : ""}`} />
                    <span>{isSubmitting ? "Transmitting Packet..." : "Submit Inquiry Dispatch"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Time, Booking & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Clock & Location Widget */}
            <div className="p-6 bg-[#141517] border-4 border-[#292929] shadow-[8px_8px_0px_#00BFFF] space-y-4">
              <div className="flex items-center justify-between border-b border-[#292929] pb-3">
                <div className="flex items-center gap-2 text-[#00BFFF] font-mono text-xs font-bold uppercase">
                  <Clock className="w-4 h-4" />
                  <span>Real-Time Local Clock</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse inline-block"></span>
                  <span className="font-mono text-[10px] text-[#00BFFF] font-bold">WIB (UTC+7)</span>
                </div>
              </div>

              <div className="text-center py-3 bg-[#1F2022] border-2 border-[#292929]">
                <span className="font-mono text-3xl sm:text-4xl font-black text-[#FFEA00] tracking-widest block">
                  {timeString || "13:00:00"}
                </span>
                <span className="font-mono text-xs text-[#E8F8F5]/60 mt-1 block">
                  Western Indonesia Time • Jakarta / Bandung
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#E8F8F5]/80">
                <MapPin className="w-4 h-4 text-[#FF4F00] shrink-0" />
                <span>Base: Bandung, West Java, Indonesia (Open to worldwide remote)</span>
              </div>
            </div>

            {/* Quick 1:1 Coffee Chat Selector */}
            <div className="p-6 bg-[#141517] border-4 border-[#292929] shadow-[8px_8px_0px_#FFEA00] space-y-4">
              <div className="flex items-center justify-between border-b border-[#292929] pb-3">
                <div className="flex items-center gap-2 text-[#FFEA00] font-mono text-xs font-bold uppercase">
                  <Calendar className="w-4 h-4" />
                  <span>Instant 20-min Intro Chat</span>
                </div>
                <span className="font-mono text-[10px] text-[#FFEA00] bg-[#1F2022] px-2 py-0.5 border border-[#292929]">
                  FREE
                </span>
              </div>

              <p className="font-mono text-xs text-[#E8F8F5]/70 leading-relaxed">
                Prefer a quick exploratory sync? Select an available slot below:
              </p>

              <div className="space-y-2">
                {availableSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedSlot(`${slot.day} at ${slot.time}`);
                      setBookedSlotMessage(`Reserved: ${slot.day} at ${slot.time}! Confirmation invitation will be sent via email.`);
                    }}
                    className={`w-full p-2.5 text-left font-mono text-xs flex items-center justify-between border transition-all ${
                      selectedSlot === `${slot.day} at ${slot.time}`
                        ? "bg-[#FFEA00] text-[#1F2022] border-[#FFEA00] font-bold"
                        : "bg-[#1F2022] text-[#E8F8F5]/80 border-[#292929] hover:border-[#FFEA00]"
                    }`}
                  >
                    <span>{slot.day}</span>
                    <span className="text-[11px] font-bold">{slot.time}</span>
                  </button>
                ))}
              </div>

              {bookedSlotMessage && (
                <div className="p-3 bg-[#1F2022] border border-[#FFEA00] text-[#FFEA00] font-mono text-xs">
                  {bookedSlotMessage}
                </div>
              )}
            </div>

            {/* Direct Channels */}
            <div className="p-6 bg-[#141517] border-4 border-[#292929] space-y-3">
              <span className="font-mono text-xs font-bold uppercase text-[#E8F8F5] block border-b border-[#292929] pb-2">
                Direct Channels & Social
              </span>

              <div className="space-y-2 font-mono text-xs">
                <a
                  href="mailto:yuliahari65@gmail.com"
                  className="flex items-center justify-between p-2.5 bg-[#1F2022] border border-[#292929] hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FF4F00]" />
                    <span>yuliahari65@gmail.com</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/roxymayford"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-[#1F2022] border border-[#292929] hover:border-[#00BFFF] hover:text-[#00BFFF] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[#00BFFF]" />
                    <span>github.com/roxymayford</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-[#1F2022] border border-[#292929] hover:border-[#FFEA00] hover:text-[#FFEA00] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-[#FFEA00]" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
