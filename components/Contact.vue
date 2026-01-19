<template>
  <section
    id="contact"
    class="relative min-h-screen flex items-center p-6 md:px-20 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800"></div>
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Animated blobs -->
    <div class="absolute top-0 left-1/4 w-72 h-72 bg-blue-700/10 rounded-full blur-3xl animate-blob"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

    <!-- Content -->
    <div
      class="relative z-10 w-full max-w-2xl mx-auto
             bg-white/10 backdrop-blur-lg
             border border-white/20
             rounded-2xl p-8 md:p-12
             flex flex-col items-center text-center gap-6"
    >
      <h2 class="text-4xl md:text-5xl font-bold text-white animate-fadeIn">
        Let’s Work Together
      </h2>
      <p class="text-gray-300 text-lg animate-fadeIn delay-200">
        Have a project or job opportunity? Send me a message.
      </p>

      <!-- Contact Form -->
      <form
        @submit.prevent="sendEmail"
        class="w-full flex flex-col gap-4 mt-6"
      >
        <input
          v-model="form.name"
          type="text"
          placeholder="Your Name"
          required
          class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="Your Email"
          required
          class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <input
          v-model="form.subject"
          type="text"
          placeholder="Subject"
          required
          class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <textarea
          v-model="form.message"
          placeholder="Your Message"
          required
          rows="5"
          class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
        ></textarea>
        <button
          type="submit"
          class="mt-2 px-6 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-lg hover:bg-yellow-500 hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>

      <!-- Links -->
      <div class="mt-6 flex flex-wrap justify-center gap-6">
        <a
          href="https://github.com/Teejay-d3v"
          target="_blank"
          class="text-gray-300 hover:text-yellow-400 transition transform hover:scale-110"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/timothy-john-lozada-b7461b248/"
          target="_blank"
          class="text-gray-300 hover:text-yellow-400 transition transform hover:scale-110"
        >
          LinkedIn
        </a>
      </div>

      <p class="mt-8 text-gray-400 text-sm">
        © 2026 Timothy John Lozada. All rights reserved.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser"; // npm install @emailjs/browser
import Swal from "sweetalert2";        // npm install sweetalert2

// Form state
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// Send email function
const sendEmail = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    Swal.fire({
      icon: "warning",
      title: "Incomplete Form",
      text: "Please fill in all required fields.",
      confirmButtonColor: "#facc15"
    });
    return;
  }

  emailjs
    .send(
      "service_5wypmfa",  
      "template_x799iii", 
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
      "both2APooon9onScB"   
    )
    .then(
      () => {
        // Toast-style success notification
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message Sent Successfully!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          toast: true
        });

        // Clear the form
        form.value = { name: "", email: "", subject: "", message: "" };
      },
      (error) => {
        // Toast-style error notification
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops... Something went wrong!",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          toast: true
        });
        console.error("EmailJS error:", error);
      }
    );
};
</script>

<style>
.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(20px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
.animate-blob {
  animation: blob 8s infinite;
}
.animation-delay-2000 { animation-delay: 2s; }
</style>
