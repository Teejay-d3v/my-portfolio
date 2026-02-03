<template>
  <section
    id="contact"
    class="relative py-16 md:py-20 flex items-center px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Animated floating elements -->
    <div class="absolute inset-0">
      <div v-for="i in 8" :key="i" 
           class="absolute w-48 h-48 border border-blue-400/10 rounded-full"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animation: `float ${15 + i * 2}s linear infinite`,
             animationDelay: `${i * 0.5}s`
           }"></div>
    </div>

    <!-- Content - Wider layout -->
    <div class="relative z-10 w-full max-w-5xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        <!-- Left Column: Contact Info (4 columns) -->
        <div class="lg:col-span-4 space-y-8 animate-fadeIn">
          <div class="text-left">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Let's <span class="text-yellow-400">Connect</span>
            </h2>
            <div class="h-1.5 w-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2"></div>
          </div>

          <p class="text-gray-300 text-base leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'm always open to interesting conversations and collaborations.
          </p>

          <!-- Contact Details -->
          <div class="space-y-6">
            <div class="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-1">Email</h3>
                <p class="text-gray-400 text-sm">timlozada5@gmail.com</p>
              </div>
            </div>

            <div class="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-1">Location</h3>
                <p class="text-gray-400 text-sm">Metro Manila, Philippines</p>
              </div>
            </div>
          </div>

          <!-- Quick Response -->
          <div class="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl p-5 border border-yellow-400/20">
            <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Quick Response
            </h3>
            <p class="text-gray-300 text-sm">
              I typically respond within <span class="text-yellow-400 font-semibold">24 hours</span> on weekdays.
            </p>
          </div>
        </div>

        <!-- Right Column: Contact Form (8 columns) -->
        <div class="lg:col-span-8">
          <div
            class="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col gap-6 animate-fadeIn delay-100"
          >
            <!-- Form Header -->
            <div class="text-left mb-4">
              <h3 class="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p class="text-gray-400 text-sm">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <!-- Contact Form -->
            <form
              @submit.prevent="sendEmail"
              class="w-full flex flex-col gap-5"
            >
              <!-- Two-column name & email -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="group">
                  <label class="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="John Doe"
                    required
                    class="w-full p-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  />
                </div>

                <div class="group">
                  <label class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    class="w-full p-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div class="group">
                <label class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="Project Inquiry"
                  required
                  class="w-full p-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                />
              </div>

              <div class="group">
                <label class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  placeholder="Tell me about your project..."
                  required
                  rows="6"
                  class="w-full p-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="mt-2 px-8 py-3.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-600 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>

            <!-- Social Links -->
            <div class="mt-6 pt-6 border-t border-white/10">
              <h4 class="text-lg font-semibold text-white mb-4 text-center">Connect with me</h4>
              <div class="flex justify-center gap-6">
                <a
                  href="https://github.com/Teejay-d3v"
                  target="_blank"
                  class="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span class="text-sm">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/timothy-john-lozada-b7461b248/"
                  target="_blank"
                  class="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span class="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-12 text-center animate-fadeIn delay-300">
        <p class="text-gray-500 text-sm">
          © 2024 Timothy John Lozada. All rights reserved.
          <br class="sm:hidden">
          Built with <span class="text-blue-400">Vue.js</span> & <span class="text-cyan-400">Nuxt 3</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// Form state
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);

// Send email function
const sendEmail = async () => {
  // Validation
  if (!form.value.name || !form.value.email || !form.value.message) {
    Swal.fire({
      icon: "warning",
      title: "Incomplete Form",
      text: "Please fill in all required fields.",
      confirmButtonColor: "#facc15",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.value.email)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
      confirmButtonColor: "#facc15",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    return;
  }

  isSubmitting.value = true;

  try {
    await emailjs.send(
      "service_5wypmfa",  
      "template_x799iii", 
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject || "Contact Form Submission",
        message: form.value.message,
      },
      "both2APooon9onScB"   
    );

    // Success notification
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for your message. I'll get back to you soon.",
      confirmButtonColor: "#facc15",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    // Clear the form
    form.value = { name: "", email: "", subject: "", message: "" };
    
  } catch (error) {
    console.error("EmailJS error:", error);
    
    Swal.fire({
      icon: "error",
      title: "Oops! Something went wrong",
      text: "Please try again or contact me directly at timlozada5@gmail.com",
      confirmButtonColor: "#facc15",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
    });
    
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style>
/* Floating animation */
@keyframes float {
  0%, 100% { 
    transform: translateY(0) translateX(0) scale(1); 
    opacity: 0.05;
  }
  50% { 
    transform: translateY(-20px) translateX(10px) scale(1.05); 
    opacity: 0.1;
  }
}

/* Fade-in animation */
@keyframes fadeIn {
  0% { 
    opacity: 0; 
    transform: translateY(30px) scale(0.95); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
}

.animate-fadeIn { 
  animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.animate-fadeIn.delay-100 { animation-delay: 0.1s; }
.animate-fadeIn.delay-300 { animation-delay: 0.3s; }

/* Form focus effects */
input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #facc15, #fb923c);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #fbbf24, #f97316);
}

/* Loading spinner animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Placeholder styling */
::placeholder {
  color: rgba(156, 163, 175, 0.7);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glass morphism */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Hover gradient effect */
.hover-gradient {
  background: linear-gradient(135deg, 
    rgba(250, 204, 21, 0.1), 
    rgba(251, 146, 60, 0.1));
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .p-6 {
    padding: 1.5rem;
  }
  
  .gap-5 {
    gap: 1rem;
  }
}

/* Disabled button styling */
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none !important;
}
</style>