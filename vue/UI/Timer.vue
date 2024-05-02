<template>
  <div class="timer">
    <div class="timer-item">
      <p>
        {{ diff.days }}
        <span> д </span>
      </p>
    </div>

    <div class="timer-item">
      <p>
        {{ diff.hours }}
        <span> ч </span>
      </p>
    </div>

    <div class="timer-item">
      <p>
        {{ diff.minutes }}
        <span> м </span>
      </p>
    </div>

    <div class="timer-item">
      <p>
        {{ diff.seconds }}
        <span> с </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from "vue";

const props = defineProps({ targetDate: String });
const target = new Date(props.targetDate);

// вычисление значений таймера
const nullDiff = {
  days: "0",
  hours: "0",
  minutes: "0",
  seconds: "0",
};

const diff = reactive(nullDiff);

const updateDiff = () => {
  const now = new Date();
  const result = new Date(target.getTime() - now.getTime());

  if (result <= 0) {
    Object.assign(diff, nullDiff);
    return;
  }

  Object.assign(diff, {
    days: (result.getUTCDate() - 1).toString().padStart(2, "0"),
    hours: result.getUTCHours().toString().padStart(2, "0"),
    minutes: result.getUTCMinutes().toString().padStart(2, "0"),
    seconds: result.getUTCSeconds().toString().padStart(2, "0"),
  });
};

// обновление таймера
const UPDATE_INTERVAL = 1000; //ms
const timerID = 0;

onMounted(() => {
  const timerID = setInterval(updateDiff, UPDATE_INTERVAL);
  updateDiff();
});

onUnmounted(() => {
  clearInterval(timerID);
});
</script>

<style lang="scss">
.timer {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;

  &-item {
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 7px;
    width: 74px;

    @media (max-width: 576px) {
      padding: 15px 0;
      width: 56px;
    }

    p {
      color: #323232;
      text-align: center;
      font-family: "Stolzl";
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px; /* 128% */
      letter-spacing: 0.25px;

      span {
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 0.18px;
      }

      @media (max-width: 576px) {
        font-size: 20.44px;
        line-height: 26.164px; /* 128% */
        letter-spacing: 0.204px;

        span {
          font-size: 14.717px;
          line-height: 26.164px;
          letter-spacing: 0.147px;
        }
      }
    }
  }
}
</style>