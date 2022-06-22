<template>
  <div class="overflow-hidden">
    <section class="event py-10 md:py-16 relative">
      <div class="container">
        <img
          src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/caribarang-logo.png"
          alt="caribarang"
          class="mx-auto"
        />
        <p
          class="text-lg mt-3 font-bold text-center text-white md:text-6xl md:px-20 md:mt-7 leading-6"
        >
          Jadi Pedagang Online Internasional Dengan Amazon FBA, Belajar Langsung
          Dari Ahlinya
        </p>
        <p
          class="text-base md:text-xl font-bold text-center text-white md:px-20 mt-3 italic"
        >
          (It's your turn to become a worldwide online seller!
          <br />
          Start selling from all around the world with Amazon FBA. Learn more
          from the expert!)
        </p>
        <p
          class="text-base md:text-2xl text-center text-white md:px-20 mt-7 md:mt-14"
        >
          <span class="font-bold"> 5000+ orang</span>
          sudah mengikuti seminar ini yang diadakan di berbagai negara asia
          seperti Singapura, Filipina, Malaysia, Taiwan, dan Hongkong
        </p>
        <p
          class="text-base md:text-xl text-center text-white md:px-20 mt-7 italic md:mb-10"
        >
          (Be part of 5.000+ people who successfully join our seminar from
          Southeast Asia, such as Singapore, Malaysia, Taiwan, Hongkong, and
          Phillipines.)
        </p>

        <div
          class="grid grid-cols-1 lg:grid-cols-7 bg-white rounded-lg mt-3 w-full"
        >
          <div
            v-for="item in date_value"
            :key="item.id"
            class="md:border-r border-gray-900 md:last:border-r-0 py-2 md:py-5 pl-1 flex flex-col justify-center items-center"
          >
            <span class="text-red-600 text-base md:text-2xl lg:text-xl">{{
              item.hari
            }}</span>
            <span class="text-gray-800 text-sm md:text-3xl"
              ><strong>{{ item.tanggal }}</strong></span
            >
            <span class="mt-0 md:mt-2 text-gray-500 text-sm md:text-sm"
              >{{ item.bulan }} {{ item.tahun }}</span
            >
            <span class="mt-0 md:mt-2 font-bold text-sm md:text-sm">{{
              item.waktu
            }}</span>
            <span class="mt-0 md:mt-2 text-gray-700 text-sm md:text-sm">{{
              item.lokasi
            }}</span>
          </div>
        </div>
        <div class="block text-center mt-3 text-white">
          <a href="https://goo.gl/maps/wHDz3K6BsGopKqNGA" target="_blank">
            <b>Lokasi Seminar</b>: Aston Kemayoran City Hotel (Ruangan Mentawai
            dan Raja Ampat Lt.25) <br />
            Jl. HBR Motik No.4, RW.10, Gn. Sahari Sel., Kec. Kemayoran, Jakarta
            Pusat.
          </a>
        </div>
        <button
          type="button"
          class="absolute left-1/2 -translate-x-1/2 -bottom-5 md:-bottom-8 bg-red-500 text-white active:bg-red-600 font-bold capitalize text-sm md:text-lg px-6 md:px-12 py-2 md:py-4 rounded-xl shadow-md border border-white"
        >
          Register Now
        </button>
      </div>
    </section>
    <section class="container">
      <p class="font-bold text-3xl md:text-5xl mt-16 text-gray-700 text-center">
        Apa itu Amazon FBA?
      </p>
      <p
        class="italic text-center text-gray-400 text-base md:text-lg font-bold mt-2"
      >
        (What is Amazon FBA?)
      </p>
      <p class="text-base md:text-lg text-[#737373] text-center mt-6">
        Amazon FBA adalah singkatan dari Fullfilment By Amazon, yang bisa
        membantu kamu berjualan di <br />
        berbagai negara melalui marketplace Amazon
      </p>
      <p class="text-base md:text-lg text-[#737373]/80 text-center italic">
        (Amazon FBA stands for Fulfillment by Amazon, which can help you sell
        your product <br />
        by the most popular international marketplace, Amazon)
      </p>
      <p class="text-base md:text-lg text-center font-bold mt-6">
        Bagaimana cara kerja Amazon FBA?
      </p>
      <p
        class="text-base md:text-lg text-center font-bold text-[#A3A3A3] italic"
      >
        (How do Amazon FBA works?)
      </p>
      <ul class="w-full mt-12">
        <li
          v-for="item in step"
          :key="item.id"
          class="flex items-center my-10 gap-5"
          :class="{ 'flex-row-reverse': item.id % 2 === 0 }"
        >
          <div
            class="flex justify-center mb-auto md:mb-0 max-h-[380px] w-1/3 max-w-1/3 md:w-1/2 md:max-w-1/2"
          >
            <img :src="item.img" alt="" class="max-h-[380px] max-w-1/2" />
          </div>

          <div class="flex flex-col items-center flex-1">
            <div class="md:w-10/12">
              <div
                class="w-max bg-red-500 text-white px-3 py-2 rounded-lg text-sm md:text-base md:mt-5 italic"
              >
                Step {{ item.id }}
              </div>

              <p class="text-gray-700 text-sm md:text-3xl font-bold my-3">
                {{ item.title }}
              </p>
              <p class="text-gray-400 italic text-sm md:text-lg my-3">
                {{ item.title_english }}
              </p>
              <button
                type="button"
                class="w-max text-red-500 border border-red-500 hover:bg-red-500 hover:text-white text-sm font-semibold px-4 md:px-8 py-1.5 md:py-3 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 italic"
              >
                Register Now
              </button>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="mt-10 py-0 md:py-5 container">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-700 text-center">
        Master Trainer Andy
      </h1>
      <div class="w-full md:w-9/12 mx-auto py-3">
        <p class="text-gray-500 text-base md:text-lg text-center">
          Beliau ini berhasil mencetak ratusan pedagang online internasional
          dengan omset puluhan bahkan ratusan juta setiap bulannya, dan kali ini
          Master Trainer Andy datang ke Indonesia untuk berbagi ilmu dengan
          metode yang telah terbukti efektif untuk menjual di Amazon.
        </p>
      </div>
      <div class="w-full md:w-9/12 mx-auto py-3">
        <p class="text-gray-400 italic text-base md:text-lg text-center">
          (Coach Andy has succeed in teaching hundreds of international online
          merchants with a turnover of tens or even hundreds of millions rupiah
          every month, and this time Master Trainer Andy will come to Indonesia
          to share his knowledge and proven methods in selling on Amazon.)
        </p>
      </div>
      <div>
        <img
          src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/Foto%20master%20trainer%20andy.png"
          alt=""
          class="w-full"
        />
      </div>
      <button
        type="button"
        class="mx-auto my-4 md:my-0 text-center text-red-500 border border-red-500 hover:bg-red-500 hover:text-white text-sm font-bold italic px-20 py-3 rounded-lg duration-150 block"
      >
        Register Now
      </button>
    </section>
    <section class="bg-[#0284C7] text-white md:mt-10">
      <div class="max-w-2xl mx-auto lg:max-w-7xl py-6 px-3">
        <div class="w-full md:w-6/12 mx-auto text-center text-white md:py-6">
          <h1 class="text-xl md:text-5xl font-bold leading-tight">
            Apa yang akan kamu pelajari di seminar ini?
          </h1>
          <p
            class="text-white font-bold italic text-base mt-3 md:text-xl text-center"
          >
            (What will you learn from the seminar?)
          </p>
        </div>
        <div class="py-5 grid grid-cols-2 md:grid-cols-4 gap-2">
          <div class="w-8/12 md:w-3/5 mx-auto">
            <img
              src="https://storage.caribarang.id/banners/8a76eaed-1857-4959-b460-74767e6b10fa.png"
              alt=""
              class="w-full"
            />
            <p class="text-base font-bold md:text-xl text-center pt-3 pb-2">
              Cara berjualan di berbagai negara melalui marketplace Amazon
            </p>
            <p class="text-white italic text-base text-center md:text-lg">
              (How to sell in worldwide market with Amazon)
            </p>
          </div>
          <div class="w-8/12 md:w-3/5 mx-auto">
            <img
              src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/icon%202.png"
              alt=""
              class="w-full"
            />
            <p class="text-base font-bold md:text-xl text-center pt-3 pb-2">
              Cara menemukan produk yang laku untuk di jual
            </p>
            <p class="text-white italic text-base text-center md:text-lg">
              (How to find high demand products to sell)
            </p>
          </div>
          <div class="w-8/12 md:w-3/5 mx-auto">
            <img
              src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/events/icon-3.png"
              alt=""
              class="w-11/12"
            />
            <p class="text-base font-bold md:text-xl text-center pt-3 pb-2">
              Cara meningkatkan kunjungan calon pembeli ke marketplace toko kamu
            </p>
            <p class="text-white italic text-base text-center md:text-lg">
              (How to increase your online store traffic)
            </p>
          </div>
          <div class="w-8/12 md:w-3/5 mx-auto">
            <img
              src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/events/icon-4.png"
              alt=""
              class="w-full"
            />
            <p class="text-base font-bold md:text-xl text-center pt-3 pb-2">
              Tips dan trik berjualan online dipasar luar negeri
            </p>
            <p class="text-white italic text-base text-center md:text-lg">
              (Amazon online store tips and tricks)
            </p>
          </div>
        </div>
        <button
          type="button"
          class="mt-6 mx-auto text-center text-white border border-white hover:bg-gray-500 hover:text-white text-base font-bold italic px-20 py-3 rounded-lg duration-150 block"
        >
          Register Now
        </button>
      </div>
    </section>
    <section class="py-6 mb-5">
      <div class="max-w-2xl mx-auto lg:max-w-7xl lg:px-8">
        <div
          class="w-10/12 md:w-6/12 mx-auto text-center text-gray-700 md:py-6"
        >
          <h1 class="text-2xl md:text-5xl font-bold leading-tight">
            Mau Seperti Mereka? Daftar Sekarang
          </h1>
          <p
            class="text-gray-400 font-bold italic text-base md:text-lg text-center mt-2"
          >
            (Want to earn from your own international online store?<br />Register
            Now!)
          </p>
        </div>
      </div>
      <div class="relative flex flex-col">
        <div
          class="absolute bg-[#EF4444] h-[90%] md:h-[240px] top-1/2 -translate-y-1/2 w-screen left-0 z-0"
        ></div>
        <div class="grid md:grid-cols-4 container z-10 gap-12">
          <div
            v-for="item in testimoni"
            :key="item.id"
            class="bg-white rounded-t-lg shadow-lg rounded-b-lg overflow-hidden"
          >
            <img :src="item.img" />
            <div class="bg-white w-full text-center py-2 flex flex-col">
              <span class="text-2xl text-gray-700">{{ item.money }}</span>
              <span class="text-gray-400">per month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-200">
      <div class="py-8 container">
        <div class="w-full md:w-6/12 mx-auto text-center text-gray-700 mb-5">
          <h1 class="text-xl md:text-4xl font-bold leading-tight capitalize">
            Frequently asked question
          </h1>
        </div>
        <div class="py-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="item in asked" :key="item.id">
            <p class="text-gray-600 text-base md:text-xl font-bold">
              {{ item.ask_indo }}
            </p>
            <p class="text-gray-400 italic text-base md:text-lg font-bold">
              {{ item.ask_english }}
            </p>
            <div class="flex text-gray-500 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 mr-2 fill-[#737373] mt-1.5"
                viewBox="0 0 448 512"
                stroke=""
                fill=""
              >
                <path
                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  fill=""
                  stroke=""
                />
              </svg>
              <div class="flex-1">
                <p class="text-sm md:text-base">
                  {{ item.answer_indo }}
                </p>
                <p class="italic text-gray-500 text-sm md:text-base mt-4">
                  {{ item.answer_english }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="footer py-8">
      <div class="container">
        <div class="w-full grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-2 px-4">
          <div
            v-for="item in date_value"
            :key="item.id"
            class="bg-white shadow-lg md:py-4 md:px-2 py-4 px-4 rounded text-center"
          >
            <span
              class="bg-red-500 text-white px-3 py-2 rounded-lg text-base mt-5"
            >
              {{ item.hari }}
            </span>
            <div class="py-5 flex flex-col">
              <span class="text-2xl md:text-5xl font-bold text-gray-800">{{
                item.tanggal
              }}</span>
              <span class="text-gray-500 text-base md:text-1xl font-medium"
                >{{ item.bulan }} {{ item.tahun }}</span
              >
            </div>
            <div class="py-3 flex flex-col">
              <span class="text-gray-500 text-base md:text-1xl font-bold">{{
                item.waktu
              }}</span>
            </div>
            <div class="mt-5">
              <a
                href="/events/register?event=amazon-fba"
                class="block text-center bg-red-500 text-white active:bg-red-600 font-bold capitalize text-base md:text-sm px-2 md:px-3 py-4 md:py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div class="block text-center mt-10 mb-32 text-[#737377]">
          <a href="https://goo.gl/maps/wHDz3K6BsGopKqNGA" target="_blank">
            <b>Lokasi Seminar</b>: Aston Kemayoran City Hotel (Ruangan Mentawai
            dan Raja Ampat Lt.25) <br />
            Jl. HBR Motik No.4, RW.10, Gn. Sahari Sel., Kec. Kemayoran, Jakarta
            Pusat.
          </a>
        </div>
        <div class="mt-3 md:mt-6">
          <ul class="w-full flex justify-center">
            <li class="px-3">
              <a
                href="https://www.instagram.com/officialcaribarang.id"
                target="_blank"
                ><img
                  src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/icons8_instagram.png"
                  alt=""
                  class="w-8"
              /></a>
            </li>
            <li class="px-3">
              <a
                href="https://www.facebook.com/officialcaribarang.id"
                target="_blank"
                ><img
                  src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/icons8_facebook_1.png"
                  alt=""
                  class="w-8"
              /></a>
            </li>
            <li class="px-3">
              <a href="https://caribarang.id" target="_blank"
                ><img
                  src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/icons8_website.png"
                  alt=""
                  class="w-8"
              /></a>
            </li>
          </ul>
          <p
            class="text-center text-gray-400 py-2 font-semibold text-sm md:text-base"
          >
            © 2021 caribarang.id, All rights reserved.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      date_value: [
        {
          id: 1,
          hari: 'Tuesday',
          tanggal: 28,
          bulan: 'June',
          tahun: 2022,
          waktu: '14.00 - 17.00 WIB',
          lokasi: 'Hotel Aston Kemayoran',
        },
        {
          id: 2,
          hari: 'Wednesday',
          tanggal: 29,
          bulan: 'June',
          tahun: 2022,
          waktu: '14.00 - 17.00 WIB',
          lokasi: 'Hotel Aston Kemayoran',
        },
        {
          id: 3,
          hari: 'Wednesday',
          tanggal: 13,
          bulan: 'July',
          tahun: 2022,
          waktu: '14.00 - 17.00 WIB',
          lokasi: 'Hotel Aston Kemayoran',
        },
        {
          id: 4,
          hari: 'Thursday',
          tanggal: 14,
          bulan: 'July',
          tahun: 2022,
          waktu: '14.00 - 17.00 WIB',
          lokasi: 'Hotel Aston Kemayoran',
        },
        {
          id: 5,
          hari: 'Wednesday',
          tanggal: 27,
          bulan: 'July',
          tahun: 2022,
          waktu: '14.00 - 17.00 WIB',
          lokasi: 'Hotel Aston Kemayoran',
        },
        {
          id: 6,
          hari: 'Thursday',
          tanggal: 28,
          bulan: 'July',
          tahun: 2022,
          waktu: '14.00 - 17.00 WIB',
          lokasi: 'Hotel Aston Kemayoran',
        },
        {
          id: 7,
          hari: 'Tuesday',
          tanggal: 30,
          bulan: 'July',
          tahun: 2022,
          waktu: '14.00 - 17.00 WIB',
          lokasi: 'Hotel Aston Kemayoran',
        },
      ],
      testimoni: [
        {
          id: 1,
          img: 'https://caribarang.oss-ap-southeast-1.aliyuncs.com/banners/5.jpg',
          money: '78.58K USD',
        },
        {
          id: 2,
          img: 'https://caribarang.oss-ap-southeast-1.aliyuncs.com/banners/7.jpg',
          money: '120.1K USD',
        },
        {
          id: 3,
          img: 'https://caribarang.oss-ap-southeast-1.aliyuncs.com/banners/8.jpg',
          money: '102.6K USD',
        },
        {
          id: 4,
          img: 'https://caribarang.oss-ap-southeast-1.aliyuncs.com/banners/6.jpg',
          money: '48.12 USD',
        },
      ],
      asked: [
        {
          id: 1,
          ask_indo: 'Mengapa menjual barang di marketplace Amazon?',
          ask_english: '(Why sell on a Marketplace like Amazon?)',
          answer_indo:
            'Menjual di marketplace adalah tren bisnis E-Commerce yang sangat besar. Biaya operasional seperti tenaga kerja, logistik, iklan, dan biaya lain nya dalam e-Commerce dapat di tekan seminimal mungkin. Yang paling hebatnya, ini adalah bisnis yang dapat tumbuh dan di operasikan darimana saja di dunia.',
          answer_english:
            '(Selling on a Marketplace is a huge e-commerce business trend now. The whole business system is automated. Operating costs such as manpower logistics, advertising and other expenses in e-commerce can be kept to a minimum. The best part? This is a business that can grow and be operated from anywhere in the world.)',
        },
        {
          id: 2,
          ask_indo:
            'Apakah saya membutuhkan banyak modal untuk memulai bisnis online ini?',
          ask_english:
            '(Do I need a lot of capital to start this online business?)',
          answer_indo:
            'Tidak kok, Amazon FBA dapat berjalan dengan modal minimal karena sebagian besar layanannya gratis, kunci sebenarnya terletak pada pemilihan produk yang tepat dijual di platform ini.',
          answer_english:
            '(Unlike a brick-and-mortar business, an Amazon FBA can get up and running with minimal capital as most of the services are free. The key really lies in selecting the right products to sell on this platform.)',
        },
        {
          id: 3,
          ask_indo:
            'Dapatkah saya memulai bisnis Amazon FBA bahkan tanpa latar belakang TI dan perangkat lunak?',
          ask_english:
            '(Can I start an Amazon FBA business even with no IT and software background?)',
          answer_indo:
            'Amazon memudahkan penjual tanpa keahlian TI atau pengetahuan pengembangan perangkat lunak untuk mengoperasikan bisnis. Faktanya, kamu memiliki siswa berusia diatas 70 tahun yang menjual di platform ini. Hanya untuk menunjukkan bahwa itu mungkin bagi siapa saja yang mau berusaha.',
          answer_english:
            "(Amazon makes it easy for sellers without IT expertise or software development knowledge to operate the business in fact, we have students over the age of 70 selling on this platform.. just to show it's possible for anyone who's willing to put in some effort)",
        },
        {
          id: 4,
          ask_indo:
            'Bagaimana orang akan menemukan produk saya jika saya tidak beriklan?',
          ask_english:
            "(How would people find my products if I don't advertise?)",
          answer_indo:
            'Amazon memiliki ratusan juta pembeli yang secara aktif mencari dan membeli produk. ada banyak strategi yang bisa dilakukan tanpa mengeluarkan biaya untuk iklan. misalnya, memastikan bahwa deskripsi produk kami ditulis dengan cara yang benar. kami akan membahas ini dan strategi lainnya diseminar ini.',
          answer_english:
            "(Amazon has several hundred million buyers actively seeking and buying products on a regular basis. There are many strategies to get found without spending an ads... for example, making sure that our listings are written in the right way. We'll discuss this and other strategies in our upcoming webinar.)",
        },
        {
          id: 5,
          ask_indo: 'Dalam bahasa apa seminarnya akan dibawakan?',
          ask_english: '(In what language will the seminar be delivered?)',
          answer_indo:
            'Seminarnya akan dibawakan dalam bahasa inggris, tetapi tenang saja, akan ada terjemahan bahasa Indonesia pada setiap slide presentasi',
          answer_english:
            '(The seminar will be delivered in English, but don worry, there will be an Indonesian translation on each presentation slide. We make it easy for you!)',
        },
        {
          id: 6,
          ask_indo: 'Apakah seminar ini mengikuti protokol kesehatan?',
          ask_english: '(Is this event follow the health protocol?)',
          answer_indo:
            'Iya, kami mengikuti peraturan protokol kesehatan yang berlaku dengan memberi jarak antar peserta, membatasi kapasitas ruangan dan peraturan protokol kesehatan lainnya.',
          answer_english:
            '(Yes, we follow the applied health protocol regulation such as ; social distancing, limiting room capacity, and other health protocol regulations.)',
        },
      ],
      step: [
        {
          id: 1,
          img: 'https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/Ilustrasi-step-1.png',
          title: 'Kirimkan barang jualan kamu ke gudang FBA',
          title_english: '(Send your goods to the FBA warehouse)',
        },
        {
          id: 2,
          img: 'https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/Ilustrasi%20step%202.png',
          title: 'Jual produk kamu di marketplace Amazon',
          title_english: '(Sell your product in Amazon marketplace)',
        },
        {
          id: 3,
          img: 'https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/Ilustrasi%20step%203.png',
          title:
            'Amazon FBA akan mengurus stok dan mengirimkan produk ke customer kamu',
          title_english:
            '(Amazon FBA will take care of your products and deliver to your customers)',
        },
        {
          id: 4,
          img: 'https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/Ilustrasi%20step%204.png',
          title: 'Kamu tinggal duduk dan terima profit penjualan',
          title_english: '(You just chill and earn your profit)',
        },
      ],
    }
  },
  head: {
    title: 'Event Amazon FBA | Caribarang.id ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Caribarang.id adalah website untuk jual beli.',
      },
    ],
  },
}
</script>

<style scoped>
.event {
  background-image: url('https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/Background%20seminar(1).jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.footer {
  background-image: url('https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/Background%20world.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>
