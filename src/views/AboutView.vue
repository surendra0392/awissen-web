<template>
  <div>
    <!-- Page Header -->
    <section class="relative py-20 bg-primary/10">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">About AWISSEN</h1>
        <p class="text-xl text-dark/70 dark:text-light/70 max-w-3xl">
          Learn more about our mission, vision, and the team behind AWISSEN's educational seminars.
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="glass-card p-8 rounded-xl">
            <h2 class="text-2xl font-heading font-bold mb-6">Our Mission</h2>
            <p class="mb-4">
              At AWISSEN, our mission is to bridge the gap between academic knowledge and industry requirements by providing high-quality, practical certification courses in the mechanical, ECE, and EEE sectors.
            </p>
            <p>
              We are committed to empowering students and professionals with the skills and knowledge needed to excel in their careers and contribute meaningfully to technological advancement.
            </p>
          </div>
          <div class="glass-card p-8 rounded-xl">
            <h2 class="text-2xl font-heading font-bold mb-6">Our Vision</h2>
            <p class="mb-4">
              We envision a future where every engineering student and professional has access to industry-relevant education that prepares them for the challenges of tomorrow's technological landscape.
            </p>
            <p>
              AWISSEN aims to be the leading provider of specialized certification courses, recognized globally for excellence in technical education and training.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16 bg-light/50 dark:bg-dark/50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="section-title text-center">Our Story</h2>
          <div class="glass-card p-8 rounded-xl">
            <p class="mb-4">
              AWISSEN was founded in 2015 by a group of industry professionals and academics who recognized the need for specialized, practical education in engineering fields. What began as a small initiative to conduct weekend workshops for local engineering students has grown into a comprehensive educational platform offering certification courses across multiple engineering disciplines.
            </p>
            <p class="mb-4">
              Over the years, we have expanded our course offerings, built partnerships with industry leaders, and developed a reputation for excellence in technical education. Our commitment to quality and relevance has helped thousands of students and professionals advance their careers and contribute to technological innovation.
            </p>
            <p>
              Today, AWISSEN continues to evolve, staying at the forefront of engineering education by continuously updating our curriculum to reflect the latest industry trends and technological advancements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="py-16">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">Meet Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(member, index) in teamMembers" :key="index" class="glass-card p-6 rounded-xl text-center">
            <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="text-xl font-heading font-bold mb-1">{{ member.name }}</h3>
            <p class="text-primary mb-2">{{ member.role }}</p>
            <p class="text-dark/70 dark:text-light/70 text-sm mb-4">{{ member.bio }}</p>
            <div class="flex justify-center space-x-3">
              <a v-for="(link, linkIndex) in member.socialLinks" :key="linkIndex" :href="link.url" class="text-dark/60 dark:text-light/60 hover:text-primary transition-colors duration-300">
                <component :is="link.icon" class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      teamMembers: [
        {
          name: 'Dr. Rajesh Kumar',
          role: 'Founder & CEO',
          image: '/images/team/team1.jpg',
          bio: 'With over 20 years of experience in mechanical engineering and education, Dr. Kumar leads AWISSEN\'s vision and strategic direction.',
          socialLinks: [
            { icon: 'LinkedInIcon', url: '#' },
            { icon: 'TwitterIcon', url: '#' }
          ]
        },
        {
          name: 'Prof. Anita Desai',
          role: 'Academic Director',
          image: '/images/team/team2.jpg',
          bio: 'Prof. Desai oversees curriculum development and ensures that all courses meet the highest academic and industry standards.',
          socialLinks: [
            { icon: 'LinkedInIcon', url: '#' },
            { icon: 'TwitterIcon', url: '#' }
          ]
        },
        {
          name: 'Vikram Singh',
          role: 'Head of ECE Department',
          image: '/images/team/team3.jpg',
          bio: 'An expert in VLSI design and embedded systems, Vikram brings cutting-edge industry knowledge to our ECE courses.',
          socialLinks: [
            { icon: 'LinkedInIcon', url: '#' },
            { icon: 'TwitterIcon', url: '#' }
          ]
        },
        {
          name: 'Dr. Meera Patel',
          role: 'Head of EEE Department',
          image: '/images/team/team4.jpg',
          bio: 'Specializing in power systems and renewable energy, Dr. Patel leads our EEE certification programs.',
          socialLinks: [
            { icon: 'LinkedInIcon', url: '#' },
            { icon: 'TwitterIcon', url: '#' }
          ]
        }
      ]
    }
  },
  components: {
    LinkedInIcon: {
      template: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
    },
    TwitterIcon: {
      template: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
    }
  },
  metaInfo: {
    title: 'About AWISSEN - Our Mission, Vision & Team',
    meta: [
      { name: 'description', content: 'Learn about AWISSEN\'s mission, vision, and the team behind our educational seminars and certification courses in mechanical, ECE, and EEE sectors.' },
      { name: 'keywords', content: 'AWISSEN, about us, mission, vision, team, engineering education, certification courses' }
    ]
  }
}
</script>