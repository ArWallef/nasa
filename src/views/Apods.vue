<template>
  <div class="apods">
    <h1> Astronomie Picture of the Day</h1>
    <h2>{{ apod.title }}</h2>
    <img :src="apod.hdurl" alt="lastApod">
    <p>{{ apod.explanation}}</p>
  </div>
</template>

<script>
import Apod from '@/models/Apod.js'
import moment from 'moment'

export default
{
  name: 'apods',
  mixins: [],
  components: {},
  props: {},
  data: () => ({
    toto: 'Yo'
  }),
  computed:
  {
    state()
    {
      return this.$store.state
    },
    apod()
    {
      // Apod
      //return Apod.find(1)
      //return Apod.query().first()
      //return Apod.query().last()

      return Apod.query().orderBy('date','desc').first()
    }
  },
  beforeCreate()
  {
    console.log('beforeCreate'),
    Apod.insert({
      data: {
        id: 1,
        copyrights: 'John Kraus',
        date: moment().format('YYYY-MM-DD'),
        explanation: "What's that on either side of the Moon? Starships. Specifically, they are launch-and-return reusable rockets being developed by SpaceX to lift cargo and eventually humans from the Earth's surface into space.  The two rockets pictured are SN9 (Serial Number 9) and SN10 which were captured near their Boca Chica, Texas launchpad last month posing below January's full Wolf Moon. The Starships house liquid-methane engines inside rugged stainless-steel shells. SN9 was test-launched earlier this month and did well with the exception of one internal rocket that failed to relight during powered descent.  SN10 continues to undergo ground tests and may be test-launched later this month.",
        hdurl: 'https://apod.nasa.gov/apod/image/2102/StarshipsMoon_Kraus_2048.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Moon Rising Between Starships',
        url: 'https://apod.nasa.gov/apod/image/2102/StarshipsMoon_Kraus_1080.jpg'
      }
    })
  },
  created()
  {
    console.log('created')
  },
  mounted()
  {
    console.log('mounted')
  },
  beforeDestroy()
  {
    console.log('b destory');
  },
  methods:
  {
  }
}

</script>
