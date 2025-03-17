<template>
  <div>
    <!-- Page Header -->
    <section class="relative py-20 bg-primary/10">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">Certification Process</h1>
        <p class="text-xl text-dark/70 dark:text-light/70 max-w-3xl">
          Learn about AWISSEN's certification process, benefits, and how to obtain your industry-recognized certificate.
        </p>
      </div>
    </section>

    <!-- Certification Process -->
    <section class="py-16">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">How Our Certification Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in certificationSteps" :key="index" class="glass-card p-8 rounded-xl text-center">
            <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary">{{ index + 1 }}</span>
            </div>
            <h3 class="text-xl font-heading font-bold mb-4">{{ step.title }}</h3>
            <p class="text-dark/80 dark:text-light/80">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certification Benefits -->
    <section class="py-16 bg-light/50 dark:bg-dark/50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-title">Benefits of AWISSEN Certification</h2>
            <ul class="space-y-4">
              <li v-for="(benefit, index) in certificationBenefits" :key="index" class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="text-lg font-medium mb-1">{{ benefit.title }}</h3>
                  <p class="text-dark/80 dark:text-light/80">{{ benefit.description }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative">
            <div class="glass-card p-1 rounded-2xl overflow-hidden">
              <img src="/images/certification-image.jpg" alt="AWISSEN Certification" class="w-full h-auto rounded-xl" />
            </div>
            <div class="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl max-w-xs">
              <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div>
                  <div class="font-medium">Industry Recognized</div>
                  <div class="text-sm text-dark/70 dark:text-light/70">Trusted by employers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Verification Process -->
    <section class="py-16">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">Certificate Verification</h2>
        <div class="glass-card p-8 rounded-xl max-w-3xl mx-auto">
          <p class="mb-6 text-center">
            Employers and organizations can verify the authenticity of AWISSEN certificates using our online verification system.
          </p>
          <div class="mb-8">
            <label for="certificate-id" class="block text-sm font-medium mb-2">Certificate ID</label>
            <input type="text" id="certificate-id" placeholder="Enter certificate ID (e.g., AW-2023-12345)" class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          </div>
          <div class="text-center">
            <button class="btn-primary">Verify Certificate</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-light/50 dark:bg-dark/50">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">Frequently Asked Questions</h2>
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="glass-card p-6 rounded-xl mb-4">
            <div class="flex justify-between items-center cursor-pointer" @click="faq.isOpen = !faq.isOpen">
              <h3 class="text-lg font-medium">{{ faq.question }}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300" :class="faq.isOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div v-if="faq.isOpen" class="mt-4 text-dark/80 dark:text-light/80">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CertificationView',
  data() {
    return {
      certificationSteps: [
        {
          title: 'Course Enrollment',
          description: 'Enroll in one of our certification courses and complete the registration process.'
        },
        {
          title: 'Course Completion',
          description: 'Attend all required sessions and complete the course curriculum with a minimum attendance of 80%.'
        },
        {
          title: 'Assessment',
          description: 'Successfully pass the final assessment with a minimum score of 70% to qualify for certification.'
        },
        {
          title: 'Certificate Issuance',
          description: 'Receive your digital certificate and physical copy (optional) with a unique verification ID.'
        }
      ],
      certificationBenefits: [
        {
          title: 'Industry Recognition',
          description: 'AWISSEN certificates are recognized by leading companies in the mechanical, ECE, and EEE sectors.'
        },
        {
          title: 'Career Advancement',
          description: 'Our certifications can help you advance in your career by demonstrating specialized skills to employers.'
        },
        {
          title: 'Skill Validation',
          description: 'Validate your technical skills and knowledge with a credential that reflects industry standards.'
        },
        {
          title: 'Networking Opportunities',
          description: 'Join our alumni network and connect with professionals in your field for career opportunities.'
        }
      ],
      faqs: [
        {
          question: 'How long is the certification valid?',
          answer: 'AWISSEN certifications are valid for a lifetime. However, we recommend updating your skills periodically to stay current with industry trends.',
          isOpen: false
        },
        {
          question: 'Can I get a replacement certificate if I lose mine?',
          answer: 'Yes, you can request a replacement certificate through our portal. Digital certificates can be downloaded again at no cost, while physical replacements may incur a small fee.',
          isOpen: false
        },
        {
          question: 'Are AWISSEN certifications internationally recognized?',
          answer: 'Yes, our certifications are designed to meet international standards and are recognized by companies and institutions globally.',
          isOpen: false
        },
        {
          question: 'Is there a minimum attendance requirement for certification?',
          answer: 'Yes, you must maintain at least 80% attendance in the course sessions to be eligible for certification.',
          isOpen: false
        },
        {
          question: 'Can I upgrade my certification in the future?',
          answer: 'Yes, we offer advanced certification courses that build upon the knowledge gained in our basic courses. You can upgrade your certification by enrolling in these advanced courses.',
          isOpen: false
        }
      ]
    }
  },
  metaInfo: {
    title: 'Certification Process - AWISSEN',
    meta: [
      { name: 'description', content: 'Learn about AWISSEN\'s certification process, benefits, and how to obtain your industry-recognized certificate in mechanical, ECE, and EEE sectors.' },
      { name: 'keywords', content: 'AWISSEN certification, technical certification, engineering certification, certificate verification, industry recognition' }
    ]
  }
}
</script>