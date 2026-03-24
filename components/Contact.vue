<template>
  <section  class="portfolio-section">
    <!-- Overlay and backgrounds -->
    <div class="section-overlay"></div>
    
    <!-- Floating elements -->
    <div class="floating-elements">
      <div
        v-for="element in floatingElements"
        :key="element.id"
        class="floating-circle"
        :style="element.style"
      ></div>
    </div>

    <!-- Grid pattern -->
    <div class="absolute inset-0 grid-pattern opacity-30"></div>

    <!-- Content -->
    <div  class="section-anchor relative z-10 w-full">
      <div id="contact" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <!-- Section Header -->
        <div class="text-center mb-8 md:mb-12 animate-fadeInUp">
          <div class="section-badge mx-auto">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>Get in Touch</span>
          </div>
          <h2 class="section-title">
            Let's <span>Connect</span>
          </h2>
          <p class="section-subtitle mt-4">
            Have a project in mind? Let's bring your ideas to life
          </p>
        </div>

        <!-- Contact Grid -->
        <div class="grid lg:grid-cols-5 gap-6 md:gap-8 animate-fadeInUp delay-100">
          <!-- Contact Info - Left Column -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Contact Cards -->
            <div class="portfolio-card p-6">
              <h3 class="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div class="space-y-4">
                <div class="group flex items-start gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="min-w-0">
                    <div class="text-sm text-gray-400">Email</div>
                    <div class="text-white font-medium break-all">timlozada5@gmail.com</div>
                  </div>
                </div>

                <div class="group flex items-start gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm text-gray-400">Location</div>
                    <div class="text-white font-medium">Metro Manila, Philippines</div>
                  </div>
                </div>

                <div class="group flex items-start gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm text-gray-400">Response Time</div>
                    <div class="text-white font-medium">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="portfolio-card p-6">
              <h3 class="text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div class="flex gap-4">
                <a 
                  href="https://github.com/Teejay-d3v" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 flex flex-col items-center gap-2 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <svg class="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="text-xs text-gray-400">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/timothy-john-lozada-b7461b248/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 flex flex-col items-center gap-2 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <svg class="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span class="text-xs text-gray-400">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form - Right Column -->
          <div class="lg:col-span-3">
            <div class="portfolio-card p-6 md:p-8">
              <h3 class="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form @submit.prevent="sendEmail" class="space-y-5">
                <div class="grid md:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                    <input 
                      v-model="form.name" 
                      type="text" 
                      required
                      class="w-full p-3.5 glass-light text-white rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input 
                      v-model="form.email" 
                      type="email" 
                      required
                      class="w-full p-3.5 glass-light text-white rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    v-model="form.subject" 
                    type="text" 
                    required
                    class="w-full p-3.5 glass-light text-white rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    v-model="form.message" 
                    rows="5" 
                    required
                    class="w-full p-3.5 glass-light text-white rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg v-if="isSubmitting" class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const config = useRuntimeConfig()
const floatingElements = ref(
  Array.from({ length: 8 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${16 + i * 2}s linear infinite`,
      animationDelay: `${i * 0.4}s`
    }
  }))
)

// Form state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// Send email function
const sendEmail = async () => {
  // Validation
  if (!form.value.name || !form.value.email || !form.value.message) {
    Swal.fire({
      icon: 'warning',
      title: 'Incomplete Form',
      text: 'Please fill in all required fields.',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#1e293b',
      color: '#fff'
    })
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#1e293b',
      color: '#fff'
    })
    return
  }

  isSubmitting.value = true

  try {
    const serviceId = config.public.emailjs?.serviceId
    const templateId = config.public.emailjs?.templateId
    const publicKey = config.public.emailjs?.publicKey

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('Missing EmailJS public runtime configuration')
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject || "Contact Form Submission",
        message: form.value.message,
      },
      publicKey
    )

    // Success notification
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: "Thank you for your message. I'll get back to you soon.",
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#1e293b',
      color: '#fff'
    })

    // Clear the form
    form.value = { 
      name: "", 
      email: "", 
      subject: "", 
      message: "" 
    }
    
  } catch (error) {
    console.error("EmailJS error:", error)
    
    Swal.fire({
      icon: "error",
      title: "Oops! Something went wrong",
      text: "Please try again or contact me directly at timlozada5@gmail.com",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      background: '#1e293b',
      color: '#fff'
    })
    
  } finally {
    isSubmitting.value = false
  }
}
</script>
