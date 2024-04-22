<template>
  <section id="tinkoff-block">
    <div class="container">
      <div class="tinkoff-wrapper">
        <div class="tinkoff-wrapper__title">
          <my-image
            :alt="'Рассрочка'"
            :floder="'tinkoff'"
            :imgName="'title-img'"
            :mobile="false"
          />

          <div class="title-box">
            <h2>Бери сейчас — плати потом</h2>
            <p>
              с рассрочкой от Тинькофф на 4 месяца без первого взноса и переплат
            </p>
          </div>
        </div>
        <div class="tinkoff-wrapper__offer">
          <p>Х ХХХ РУБ. / МЕС.</p>
          <button class="button button-tinkoff">
            <my-image
              class="tinkoff-icon"
              :alt="'#'"
              :imgName="'tinkoff-icon'"
              :floder="'tinkoff'"
              :mobile="false"
            />
            Заказать
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#tinkoff-block {
  //   overflow: hidden;

  .tinkoff-wrapper {
    border-radius: 10px;
    background: #fceb0a;

    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    display: flex;
    padding: 50px;
    gap: 30px;
    align-items: center;

    @media (max-width: 1366px) {
      padding: 30px;
    }

    @media (max-width: 768px) {
      padding: 20px;
    }

    @media (max-width: 576px) {
      padding: 20px 10px;
    }

    @media (max-width: 1136px) {
      flex-direction: column;
      gap: 20px;
      * {
        text-align: center;
      }
    }

    &__title {
      display: flex;
      align-items: center;
      gap: 30px;

      @media (max-width: 1136px) {
        flex-direction: column;
        gap: 20px;
      }

      .title-box {
        h2 {
          color: #323232;
          font-family: "Gilroy";
          font-size: 52px;
          font-style: normal;
          font-weight: 600;
          line-height: 113.462%;
          text-transform: uppercase;
          margin-bottom: 20px;

          @media (min-width: 1137px) {
            @include fluidFontSize(38, 52, 992, 1920);
          }

          @media (max-width: 992px) {
            font-size: 38px;
            line-height: normal;
          }

          @media (max-width: 768px) {
            font-size: 26px;
            line-height: 33px;
          }

          @media (max-width: 576px) {
            font-size: 22px;
            line-height: 29px;
            margin-bottom: 5px;
          }
        }

        p {
          color: #646464;
          font-family: "Gilroy";
          font-size: 27px;
          font-style: normal;
          font-weight: 500;
          line-height: 125.926%;

          @media (min-width: 1137px) {
            max-width: 524px;
            @include fluidFontSize(20, 27, 992, 1920);
          }

          @media (max-width: 768px) {
            font-size: 20px;
            line-height: 27px;
          }

          @media (max-width: 576px) {
            font-size: 18px;
            line-height: 25px;
          }
        }
      }
    }

    &__offer {
      border-radius: 10px;
      background: #f9f9f9;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      padding: 30px;

      display: flex;
      gap: 30px;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (max-width: 576px) {
        padding: 10px;
        gap: 10px;
      }

      @media (max-width: 1136px) {
        flex-direction: row;
        @media (min-width: 577px) {
          .button-tinkoff {
            min-width: 280px;
          }
        }
      }

      @media (max-width: 768px) {
        flex-wrap: wrap;
      }

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 27px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        white-space: nowrap;
        @include fluidFontSize(24, 27, 992, 1920);

        @media (max-width: 768px) {
          font-size: 18px;
        }
      }
    }
  }
}
</style>