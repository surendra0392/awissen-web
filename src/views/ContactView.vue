<template>
  <div>
    <!-- Page Header -->
    <section class="relative py-20 bg-primary/10">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
        <p class="text-xl text-dark/70 dark:text-light/70 max-w-3xl">
          Get in touch with AWISSEN for inquiries about our courses, certification process, or any other information.
        </p>
      </div>
    </section>

    <!-- Contact Form and Info -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="glass-card p-8 rounded-xl">
            <h2 class="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" class="block text-sm font-medium mb-2">Your Name</label>
                  <input type="text" id="name" v-model="form.name" required class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium mb-2">Email Address</label>
                  <input type="email" id="email" v-model="form.email" required class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                </div>
              </div>
              <div class="mb-6">
                <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                <input type="text" id="subject" v-model="form.subject" required class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              </div>
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <div class="mb-6">
                <label class="flex items-center">
                  <input type="checkbox" v-model="form.consent" required class="mr-2">
                  <span class="text-sm">I consent to AWISSEN processing my data for the purpose of responding to my inquiry.</span>
                </label>
              </div>
              <button type="submit" class="btn-primary w-full">Send Message</button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <div class="glass-card p-8 rounded-xl mb-8">
              <h2 class="text-2xl font-heading font-bold mb-6">Contact Information</h2>
              <ul class="space-y-6">
                <li class="flex items-start">
                  <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium mb-1">Address</h3>
                    <p class="text-dark/80 dark:text-light/80">123 Education Street, Tech City, 600001</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium mb-1">Email</h3>
                    <p class="text-dark/80 dark:text-light/80">info@awissen.com</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium mb-1">Phone</h3>
                    <p class="text-dark/80 dark:text-light/80">+91 9876543210</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium mb-1">Office Hours</h3>
                    <p class="text-dark/80 dark:text-light/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p class="text-dark/80 dark:text-light/80">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="glass-card p-8 rounded-xl">
              <h2 class="text-2xl font-heading font-bold mb-6">Connect With Us</h2>
              <div class="flex space-x-4">
                <a href="#" class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-light/50 dark:bg-dark/50">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">Find Us</h2>
        <div class="glass-card p-1 rounded-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9976945869!2d80.24863007381!3d12.9756381163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzMyLjMiTiA4MMKwMTUnMDIuMCJF!5e0!3m2!1sen!2sin!4v1623825647043!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            class="rounded-xl"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false
      },
      formSubmitted: false,
      formError: null
    }
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to a backend API
      // For now, we'll just simulate a successful submission
      
      console.log('Form submitted:', this.form);
      
      // Reset form after submission
      this.formSubmitted = true;
      setTimeout(() => {
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
          consent: false
        };
        this.formSubmitted = false;
      }, 3000);
    }
  },
  metaInfo: {
    title: 'Contact Us - AWISSEN',
    meta: [
      { name: 'description', content: 'Contact AWISSEN for inquiries about our certification courses, seminars, or any other information. We\'re here to help you advance your career in mechanical, ECE, and EEE sectors.' },
      { name: 'keywords', content: 'contact AWISSEN, AWISSEN contact information, engineering certification inquiries, technical education contact' }
    ]
  }
}
</script>