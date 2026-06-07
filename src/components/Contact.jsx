import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const form = useRef(null);
  const [success, setSuccess] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-150, 150]
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q4algpj',
        'template_hqgf5cq',
        form.current,
        'h1Uwtz5dFfzRCj4pv'
      )
      .then((result) => {
        console.log('SUCCESS!', result.text);

        form.current.reset();
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.log('FULL EMAILJS ERROR');
        console.log(error);

        alert(
          `Status: ${error.status}\nText: ${error.text}`
        );
      });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background CONTACT Text */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex justify-center items-start overflow-hidden pointer-events-none z-0"
      >
        <h1
          className="
            text-[28vw]
            md:text-[24vw]
            lg:text-[22vw]
            leading-none
            font-black
            uppercase
            tracking-tighter
            select-none
            scale-y-[1.5]
            text-white/[0.05]
            whitespace-nowrap
          "
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
          }}
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Contact Form Card */}
      <div className="relative z-10 w-full flex justify-end">
        <div className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white">
          <div className="text-xs font-bold tracking-[0.2em] mb-12 uppercase opacity-90">
            Get in Touch
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col md:flex-row gap-12 md:gap-20">
              {/* Left Side */}
              <div className="flex-1 flex flex-col gap-10">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none placeholder-white"
                />

                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none placeholder-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none placeholder-white"
                />
              </div>

              {/* Right Side */}
              <div className="flex-1">
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  required
                  className="w-full min-h-[150px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none placeholder-white resize-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:items-center">
              {/* Checkbox */}
              <div className="flex-1 flex items-start gap-4 text-sm">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <span>
                  I give permission to contact me at this email address.
                </span>
              </div>

              {/* Success Message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 rounded-lg bg-green-500 text-white font-semibold"
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="flex-1 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300"
                >
                  Send →
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;