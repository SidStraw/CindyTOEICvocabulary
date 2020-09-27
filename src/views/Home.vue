<template>
  <v-container class="home page-container">
    <v-row class="page-row">
      <template v-for="(item, index) in showData">
        <v-col :key="item.date" class="card d-flex align-center" cols="12" md="4">
          <v-card class="mx-auto" max-width="320" :class="index !== 1 && 'opacity'">
            <v-img
              v-if="$vuetify.breakpoint.mdAndUp || index === 1"
              height="250"
              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/YaGiJVrUTUWhPHUBlpuN"
            />

            <v-divider class="mx-4"></v-divider>

            <v-card-title class="justify-center"> {{ itemDayName(index) }}學習計畫 </v-card-title>

            <v-card-text class="pb-0">
              <div
                style="height: 170px"
                v-if="item.l0 || item.l1 || item.l2 || item.l3"
                class="d-flex flex-column justify-center"
              >
                <v-spacer></v-spacer>
                <h3 v-if="item.l3" class="mb-5 text-center">
                  {{ `第 ${item.l3} 堂課第三次複習 【練習自己造句或用自己的話解釋單字】` }}
                </h3>
                <h3 v-if="item.l2" class="mb-5 text-center">{{ `第 ${item.l2} 堂課第二次複習 【寫填空題】` }}</h3>
                <h3 v-if="item.l1" class="mb-5 text-center">{{ `第 ${item.l1} 堂課第一次複習 【寫是非題】` }}</h3>
                <h2 v-if="item.l0" class="mb-5 text-center">{{ `觀看影片學習第 ${item.l0} 堂課` }}</h2>
                <v-spacer></v-spacer>
              </div>
              <h2 style="height: 170px" v-else class="d-flex justify-center align-center">
                今天就好好休息一下吧
              </h2>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-chip class="ma-2" color="primary" outlined>
                {{ item.date }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import reviewData from '@/../CindyReviewSchedule.json'
const yesterday = new Date(Date.now() - 1000 * 60 * 60 * 24)

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      reviewData,
      yesterday: yesterday
        .toISOString()
        .replace(/-/g, '/')
        .replace(/T.*$/, ''),
    }
  },
  computed: {
    showData() {
      const yesterdayIndex = this.reviewData.findIndex(item => item.date === this.yesterday)
      const datas = [
        this.reviewData[yesterdayIndex],
        this.reviewData[yesterdayIndex + 1],
        this.reviewData[yesterdayIndex + 2],
      ]
      return datas
    },
  },
  methods: {
    itemDayName(index) {
      switch (index) {
        case 0:
          return '昨日'
        case 1:
          return '今日'
        case 2:
          return '明日'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.opacity {
  opacity: 0.6;
}
.page-container {
  min-height: calc(100vh - 64px);
}
.page-row {
  min-height: calc(100vh - 64px - 24px);
}
@media screen and (min-width: 960px) {
  .card {
    &:first-child,
    &:last-child {
      transform: scale(0.7);
    }
  }
}
</style>
