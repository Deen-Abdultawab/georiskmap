<script setup>
import emailjs from 'emailjs-com'
import { ref } from "vue";
import GetInvolvedModal from "./modals/GetInvolvedModal.vue";
const isOpen = ref(false)
const message = ref('')
  const name = ref('')
  const occupation = ref('')
  const mail = ref('')
const openModal = ()=>{
    isOpen.value=true;
}
const closeModal = ()=>{
    isOpen.value = false
  }

  function sendMail(e){
    console.log('clicked', name.value)
    if(name.value && mail.value){
      try {
        emailjs.sendForm('service_8r4m70n', 'template_f7qkatb', '#myForm', 'qMdxhbqTaNmmFVE2s',  {
  
        })
        name.value=''
        occupation.value = ''
        message.value = ''
        mail.value = ''
        closeModal()
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('form not properly filled')
    }
  }
</script>

<template>
    <div class="relative">

        <div class="hero-image flex justify-center items-center relative">
            <div class="hero-text w-full flex justify-center items-center">
                        <div class="flex max-w-[700px] items-center justify-center mb-4 ">
                            <h5 class="text-[1.5rem] cabin md:text-[1.8rem] font-semibold  lg:text-[2.4rem] white">We are always looking to expand our team. If you are a GIS Specialist we would love to work with
                            you.</h5>
                        </div>
    
                        <p class="M20 max-w-[900px] merri  lg:text-[1rem] leading-12 text-center" >
                            Join us in this vital endeavor as we work together to promote a sustainable environment, 
                            
                            safeguarding present and future generations from the adverse effects of climate change. 
                            
                            Your skills and knowledge could be the linchpin in shaping a resilient Africa, fortified 
                            
                            against the trials of geohazards.
                        </p>
    
                        <button @click="openModal" class="btn shadow-sm merri  bg-brandgreen hover:text-brandgreen hover:bg-white  mt-8">
                        Get Involved
                    </button>
                    </div>
                 
        </div>
        <div id="overlay" class="fixed top-0 backdrop-blur-sm bg-[rgba(0,0,0,0.5)] w-screen h-full transition z-[99]" v-if="isOpen">

        </div>
        <form id="myForm" class=" bg-white w-[70%] tab:w-[90%] mx-auto absolute top-[-10rem] h-[35rem] left-[50%] translate-x-[-50%] rounded-[0.5rem] z-[999]" v-if="isOpen" @submit.prevent="sendMail">
            <div class="flex flex-col min-h-full items-center justify-center p-4 text-center">
                
                <div class="flex w-full flex-col space-y-4">
                  <h3 class="font-semibold text-sm">
                    Join us in this vital endeavor as we work together to promote a sustainable environment, safeguarding present and future generations from the adverse effects of climate change. Your skills and knowledge could be the linchpin in shaping a resilient Africa, fortified against the trials of geohazards. 
                  </h3>
    
                  <div class="flex flex-col space-y-3">
                    <input type="text" class="border border-brandgreen w-full p-3 rounded-md" placeholder="Enter your name" v-model="name" name="name">
                    <input type="email" class="border border-brandgreen w-full p-3 rounded-md" placeholder="Enter Your Email" v-model="mail" name="email">
                    <input type="text" class="border border-brandgreen w-full p-3 rounded-md" placeholder="What do you do?" v-model="occupation" name="occupation">
                    <textarea placeholder="Enter your message here" class="border border-brandgreen w-full p-3 rounded-md" rows="5"  v-model="message" name="message"/>
    
                  </div>
                </div>
    
                  <div class="mt-4 flex gap-4">
                    <a
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      @click="closeModal"
                    >
                      Close
                    </a>
    
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      @click="sendMail"
                    >
                      Submit
                    </button>
                  </div>
          </div>
      </form>
    </div>
    <!-- <GetInvolvedModal v-if="isOpen" :closeModal="closeModal" :opneModal="openModal" /> -->
</template>

<style scoped>
.hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://res.cloudinary.com/waleszn/image/upload/q_30/v1695971112/get_involved_o72npf.png');
    background-position: center;
    background-repeat: no-repeat;
    height: 70vh;
    background-size: cover;
    padding: 0 40px 0 40px;
}

.hero-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
}

.btn {
   
    display: inline-block;
    padding: 15px 60px;
  transition-delay: 100ms;
  
    border-radius: 3px;
    
    text-align: center;
    cursor: pointer;
}


</style>