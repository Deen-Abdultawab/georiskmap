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

const insights = [
    {
        link: 'https://water.leeds.ac.uk/news/waterleeds-seminar-global-flood-risk-assessment-regional-realities/',
        title: 'Global Flood Risk Assessment - Regional Realities',
        formatTitle: truncate(`Global Flood Risk Assessment - Regional Realities`,11),
        src: 'ins1.png',
        id: 1
    },
    {
        link: 'https://www.fairplanet.org/story/youth-led-initiative-tackles-nigerias-flood-crisis/',
        title: `youth led initiative tackles nigeria's flood crisis`,
        formatTitle: truncate(`youth led initiative tackles nigeria's flood crisis`,11),
        src: 'ins2.png',
        id: 2
    },
    {
        link: 'https://precisegis.com.ng/humanitarian-mapping-exercise-for-improvement-in-hiv-aids-gender-based-violence-gbv-projects-in-nigeria',
        title: `humanitarian mapping exercise for improvement in hiv aids gnder based violence projects in nigeria`,
        formatTitle: truncate(`humanitarian mapping exercise for improvement in hiv aids gnder based violence projects in nigeria`,11),
        src: 'ins3.png',
        id: 3
    },
    {
        link: 'https://geospatiallypodcast.wordpress.com/2021/04/01/using-geospatial-technology-in-geohazard-mapping-saves-lives/',
        title: `using geospatial technology in geohazard mapping saves lives`,
        formatTitle: truncate(`using geospatial technology in geohazard mapping saves lives`,11),
        src: 'ins4.png',
        id: 4
    },
    {
        link: 'https://grmi.hashnode.dev/mapathon',
        title: `All about GRMI hashnode mapathon`,
        formatTitle: truncate(`All about GRMI hashnode mapathon`,11),
        src: 'ins5.png',
        id: 5
    },
    {
        link: 'https://tasks.hotosm.org/organisations/geohazards-risk-mapping-initiative',
        title: `GEO Hazards Mapping Initiative`,
        formatTitle: truncate(`GEO Hazards Mapping Initiative`,11),
        src: 'ins6.png',
        id: 6
    },
    {
        link: 'https://storymaps.arcgis.com/stories/39d5b1d1e2114b74aebdf8fe73ecb993',
        title: `Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria`,
        formatTitle: truncate(`Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria`,11),
        src: 'ins7.png',
        id: 7
    },
    {
        link: 'https://www.icirnigeria.org/study-in-ibeju-lekki-32685-primary-school-pupils-are-at-risk-of-flooding/',
        title: `Study: In Ibeju-Lekki, 32,685 primary school pupils are at risk of flooding`,
        formatTitle: truncate(`Study: In Ibeju-Lekki, 32,685 primary school pupils are at risk of flooding`,11),
        src: 'ins8.png',
        id: 8
    },
    {
        link: 'https://www.preventionweb.net/news/gp2022-ignite-stage-improving-flood-preparedness-communities-nigeria-through-provision-flood',
        title: `GP2022 Ignite Stage: Improving flood preparedness for communities in Nigeria through the provision of flood early warning maps`,
        formatTitle: truncate(`GP2022 Ignite Stage: Improving flood preparedness for communities in Nigeria through the provision of flood early warning maps`,11),
        src: 'ins9.png',
        id: 9
    },
    {
        link: 'https://www.esri.com/en-us/lg/industry/natural-resources/stories/harnessing-geospatial-technology-to-support-early-flood-warning-in-nigeria',
        title: `Harnessing Geospatial Technology to Support Early Flood Warning in Nigeria`,
        formatTitle: truncate(`Harnessing Geospatial Technology to Support Early Flood Warning in Nigeria`,11),
        src: 'ins11.png',
        id: 11
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
                   Insights
                </div>
            </div>

            <div class="">
                <div class="">
                    <div class="grid grid-cols-2 mob:grid-cols-1 gap-6">
                        <a :href="card.link" v-for="card in insights" :key="card.id" class=" transition p-4 rounded-[0.5rem] cursor-pointer">
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
.custom-card {
    margin-bottom: 24px;
}

/* .our-team .pic img {
    width: 100%;
    height: auto;
} */
</style>
