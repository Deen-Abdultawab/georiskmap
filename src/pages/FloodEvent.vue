<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
// import Card from '../components/Cards/Card.vue'
import "../assets/styles/App.scss"

function wordsLen(str) { 
    const array = str.trim().split(/\s+/); 
    return array.length; 
}

function truncate(str, no_words) {
    wordsLen(str)
    let lengtofWord = wordsLen(str)
    if (lengtofWord > 12){
        return str.split(" ").splice(0,no_words).join(" ") + `...`;
    } else {
        return str
    }
}

const floodEvents = [
    {
        link: 'https://www.arcgis.com/home/item.html?id=2b0fa66b05534e7780e7396234b7c6f3',
        title: 'Flood Susceptibility Map of Ikorodu',
        formatTitle: truncate(`Global Flood Risk Assessment - Regional Realities`,11),
        src: 'default1.png',
        id: 1
    },
    {
        link: 'https://precisegis.com.ng/humanitarian-mapping-exercise-for-improvement-in-hiv-aids-gender-based-violence-gbv-projects-in-nigeria',
        title: `humanitarian mapping exercise for improvement in hiv aids gnder based violence projects in nigeria`,
        formatTitle: truncate(`humanitarian mapping exercise for improvement in hiv aids gnder based violence projects in nigeria`,11),
        src: 'default1.png',
        id: 2
    },
    {
        link: 'https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=d07dba63dbd84fbbb555d6c6087759f3',
        title: `Flood Susceptibility Map of Ilorin`,
        formatTitle: truncate(`using geospatial technology in geohazard mapping saves lives`,11),
        src: 'default1.png',
        id: 3
    },
    {
        link: 'Flood Susceptibility Map of Ikorodu',
        title: `Flood Susceptibility Map of Maiduguri City`,
        formatTitle: truncate(`All about GRMI hashnode mapathon`,11),
        src: 'default1.png',
        id: 4
    },
    
]

    const getImgUrl = (path) => {
        return new URL(`../../public/${path}`, import.meta.url).href;
    };
</script>

<template>
    <Navbar />
    <div class="py-8 px-8 lg:py-20 lg:px-20 mob:px-4" style="background-color: #EAF7F3;min-height: 100vh;">
        <div>
            <div class="row text-center mb-5">
                <div class="text-[2.8rem] md:text-[3.08rem] font-extrabold cabin uppercase">
                   past flood events
                </div>
            </div>

            <div class="">
                <div class="">
                    <div class="grid grid-cols-2 mob:grid-cols-1 gap-6">
                        <a :href="card.link" v-for="card in floodEvents" :key="card.id" class=" transition p-4 rounded-[0.5rem] cursor-pointer">
                            <div class="pic hover:scale-105 duration-500">
                                <img :src="getImgUrl(card.src)" class="img-fluid overflow-hidden h-[15rem] w-full object-fill rounded-t-[0.5rem]" alt="Responsive image">
                            </div>
                            <div class="C31 mt-3 uppercase text-[#134A39] text-[1rem] lg:text-[1rem] font-bold mob:text-[0.7rem]">
                                 {{ card.title }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>


<style scoped>

</style>
