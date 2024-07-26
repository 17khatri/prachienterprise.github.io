<template>
  <TheSlider />
  <!-- More About Us -->
  <div class="my-6 flex justify-center">
    <img src="../assets/wel-come-img.png" alt="" class="about" />
    <div class="w-[600px]">
      <p class="text-xl">More About Us</p>
      <h1 class="text-4xl underline text-[#c48b00] font-extrabold">
        FIRST-SEAL
      </h1>
      <p class="text-xl leading-8">
        First-Seal，Originated in India,. We insist on building better products
        step by step to adapt to the future and create strength for scientific
        and technological progress. <br />
        We are a high-tech enterprise which focus on thermal materials
        production and sales. We have become a strong team on development
        production and sales. And it helps us to establish stable and strategic
        partnership with many industries, such as communication, household
        appliances, L E D lighting, computer and other enterprises.
      </p>
      <button class="bg-[#c48b00] text-white rounded-md py-1 px-3 mt-3">
        <router-link to="/aboutus">Read More</router-link>
      </button>
    </div>
  </div>
  <!-- Our Popular Products -->
  <div
    class="bg-[#534c5b] text-white flex rounded-tl-[84px] rounded-br-[84px] p-12 pt-0 items-center flex-col justify-center my-6 mx-10"
  >
    <p class="text-4xl mt-3 mb-8 underline font-extrabold text-[#c48b00]">
      Our Popular Products
    </p>
    <div class="mt-4 flex justify-evenly w-full">
      <!-- OPP Thermal Grease -->
      <div class="relative product">
        <div
          class="w-92 content relative flex flex-col items-center duration-300 px-3 rounded-md bg-slate-50"
        >
          <h1 class="text-center my-2 text-2xl">DRIIL-BIT</h1>
          <p class="text-center">
            Incepted years ago in this domain, we are recognized as a leading manufacturer of Drill Bit which is a cutting tool used to create circular holes in materials such as wood, metal or plastic. Drill bits can be made from a variety of materials, including high-speed steel, cobalt, carbide, and diamond, to accommodate different drilling applications.They come in a variety of shapes and sizes, and are typically made from high-speed steel or tungsten carbide.
          </p>
          <button
            class="bg-[#c48b00] absolute bottom-2 text-white rounded-md py-1 px-3 mt-3"
          >
            Read More
          </button>
        </div>
        <p class="text-center text-2xl">DRIIL-BIT</p>
        <img
          class="thermal cursor-pointerr rounded-md"
          src="../assets/drill-bit.jpg"
          alt=""
        />
      </div>
      <!-- OPP Thermal Grease Plant -->
      <div class="relative product">
        <div
          class="w-92 content relative flex flex-col items-center duration-300 px-3 rounded-md bg-slate-50"
        >
          <h1 class="text-center my-2 text-2xl">POWER TOOL</h1>
          <p class="text-center">
            Empowered by a team of well-experienced professionals we at Maruti Engineering and Tools are engaged in manufacturing and supplying a wide range of Power Tools in Ahmedabad, Gujarat.A power tool is a tool that is driven by an additional power source, such as electricity, compressed air, hydraulic power, or a gasoline engine. Common examples of power tools include drills, saws, grinders, sanders, routers, and nail guns.
          </p>
          <button
            class="bg-[#c48b00] text-white rounded-md py-1 bottom-2 px-3 absolute"
          >
            Read More
          </button>
        </div>
        <p class="text-center text-2xl">POWER TOOL</p>

        <img
          class="thermal cursor-pointerr rounded-md"
          src="../assets/power-tool-04.jpg"
          alt=""
        />
      </div>
      <!-- OPP RTV Silicone Sealant -->
      <div class="relative product">
        <div
          class="w-92 content flex flex-col items-center duration-300 px-3 rounded-md bg-slate-50"
        >
          <h1 class="text-center my-2 text-2xl">HAND TOOL</h1>
          <p class="text-center">
            Maruti Engineering and Tools offers a wide range of hand tools for your home and work needs. We have an extensive selection of tools, including hammers, wrenches, screwdrivers, pliers, saws, and more. All of our tools are made from high-quality materials and built to last, so you can count on them to get the job done. Whether you’re a professional or a DIYer, our hand tools are sure to meet your needs.
          </p>
          <button
            class="bg-[#c48b00] text-white rounded-md py-1 bottom-2 px-3 absolute"
          >
            Read More
          </button>
        </div>
        <p class="text-center text-2xl">HAND TOOL</p>

        <img
          class="thermal cursor-pointerr rounded-md"
          src="../assets/hand-tool.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- About Us -->
  <div class="mx-10 justify-center flex flex-col items-center">
    <h1 class="text-4xl mt-3 mb-8 underline font-extrabold text-[#c48b00]">
      About Us
    </h1>
    <div class="grid grid-cols-3 gap-10">
      <!-- Our Mission -->
      <div
        class="flex flex-col border about2 border-black rounded-[30px] p-8 items-center"
      >
        <div class="border border-black px-2 py-1 rounded-md bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#534c5b"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path
                d="M7.214 18.804a3.429 3.429 0 1 0 0-6.858a3.429 3.429 0 0 0 0 6.858m-.571-9.429h1.143m-.572 0v2.571m3.839-1.218l.808.808m-.404-.404l-1.818 1.819m3.575 1.853v1.142m0-.571h-2.571m1.218 3.839l-.808.808m.404-.404l-1.818-1.819m-1.853 3.576H6.643m.571 0v-2.571m-3.838 1.218l-.808-.808m.404.404l1.818-1.819m-3.576-1.853v-1.142m0 .571h2.572m-1.218-3.839l.808-.808m-.404.404l1.818 1.819m17.996-6.826l-2.937-2.35a5.255 5.255 0 0 0-3.28-1.15h-6.033a1.749 1.749 0 0 0-1.237 2.987a1.75 1.75 0 0 0 1.237.513h4.52"
              ></path>
              <path
                d="M22.626 11.375h-3.5a5.25 5.25 0 0 1-2.914-.883l-2-1.333a1.634 1.634 0 0 1-.512-2.306v0a1.633 1.633 0 0 1 2.09-.555l2.625 1.577"
              ></path>
            </g>
          </svg>
        </div>
        <p class="tracking-wide">Our Mission</p>
        <p class="mt-4 text-center">
          Our mission is to empower eco-conscious consumers by providing them
          with sustainably organic silicone and sizing program R&D,
          manufacturing, sales and service We are dedicated to fair trade
          practices and minimizing our environmental impact.
        </p>
      </div>
      <!-- Our Vision -->
      <div
        class="flex flex-col border border-black rounded-[30px] p-8 items-center"
      >
        <div class="border border-black px-2 py-1 rounded-md bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#534c5b"
              d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.35 0-6.113-1.8t-4.362-4.75q-.125-.225-.187-.462t-.063-.488t.063-.488t.187-.462q1.6-2.95 4.363-4.75T12 4t6.113 1.8t4.362 4.75q.125.225.188.463t.062.487t-.062.488t-.188.462q-1.6 2.95-4.362 4.75T12 19"
            ></path>
          </svg>
        </div>
        <p class="tracking-wide">Our Vision</p>
        <p class="text-center mt-4">
          Our vision ibecome the go-to brand for high-quality yet affordable art
          supplies, empowering artists of all levels across India to unleash
          their creativity. And we strive to be a leader in the industry by
          providing world-class customer service.
        </p>
      </div>
      <!-- Our Goal -->
      <div
        class="flex flex-col border border-black rounded-[30px] p-8 items-center"
      >
        <div class="border border-black px-2 py-1 rounded-md bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
          >
            <path fill="#534c5b" d="M21 20v10l9-5z"></path>
            <circle cx="14" cy="14" r="2" fill="#534c5b"></circle>
            <path
              fill="#534c5b"
              d="M14 20a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"
            ></path>
            <path
              fill="#534c5b"
              d="M25.951 12.91h-.006A12.05 12.05 0 1 0 17 25.605v-2.066a9.981 9.981 0 1 1 6.624-6.81l1.924.544A12 12 0 0 0 26 14q0-.55-.049-1.09"
            ></path>
          </svg>
        </div>
        <p class="tracking-wide">Our Goal</p>
        <p class="mt-4 text-center">
          Our goal is we want to provide best product to our customer and we
          want become top in the industry. And through our commitment to
          excellence, we will continue to be a trusted partner of our customers,
          helping them to achieve their goals also.
        </p>
      </div>
    </div>
  </div>
  <!-- Catalogue -->
  <div
    class="bg-[#534c5b] text-white flex rounded-tl-[84px] rounded-br-[84px] p-12 justify-center items-center my-6 mx-10"
  >
    <img src="../assets/catlog.png" alt="" class="h-72" />
    <div class="flex flex-col w-[600px] justify-center ml-2 items-center">
      <h1 class="text-5xl mt-3 mb-8 font-bold tracking-wide text-[#c48b00]">
        Download Catalogue
      </h1>
      <p class="text-center">
        FIRST-SEAL offers its customers the opportunity to download directly a
        copy of our current catalogue in a PDF file format. Below are the six
        sections taken from our current catalogue.
      </p>
    </div>
  </div>
  <!-- Why Choose Us -->
  <div class="flex">
    <!-- Hexagone Shape -->
    <!-- <div
      class="border flex justify-center items-center relative border-black h-[450px] w-[450px] rotate-45 m-40 bg-[#534c5b]"
    >
      <h1 class="-rotate-45 text-3xl font-bold text-[#c48b00]">Why Choose Us?</h1>
    </div> -->
    <div class="flex relative flex-col justify-center">
      <svg
        class="-ml-28"
        xmlns="http://www.w3.org/2000/svg"
        width="780"
        height="780"
        viewBox="0 0 24 24"
      >
        <path fill="#534c5b" d="m21 12l-4.95 7H3V5h13.05z"></path>
      </svg>
      <h1 class="absolute left-16 text-5xl font-bold text-[#c48b00]">
        Why Choose Us?
      </h1>
    </div>
    <!-- List of why choose us -->
    <div class="flex flex-col w-[500px] justify-evenly items-center mx-12">
      <!-- Best Price -->
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="190px"
          height="190px"
          viewBox="0 0 14 14"
        >
          <path
            fill="#60d76e"
            fillRule="evenodd"
            d="M13.463 9.692C13.463 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-3.231 1.616-4.868 4.847-6.505L4.24 1.077A.7.7 0 0 1 4.843 0H9.41a.7.7 0 0 1 .603 1.023L8.616 3.208c3.23 1.615 4.847 3.252 4.847 6.484M4.957 6.5H6.64c.14.042.316.12.457.25a.81.81 0 0 1 .226.354H4.958a.5.5 0 1 0 0 1h2.207a1.507 1.507 0 0 1-.633.417a3.096 3.096 0 0 1-.977.187H5.54a.5.5 0 0 0-.328.877h.001l.001.002l.005.003l.013.012a3.446 3.446 0 0 0 .219.173a8.243 8.243 0 0 0 2.886 1.377a.5.5 0 1 0 .242-.97a7.166 7.166 0 0 1-1.75-.704l.054-.02c.338-.127.71-.329 1-.656c.175-.195.312-.428.397-.698h.762a.5.5 0 0 0 0-1h-.694A1.911 1.911 0 0 0 8.15 6.5h.892a.5.5 0 0 0 0-1H4.958a.5.5 0 0 0 0 1Zm.583 2.708l-.329.377z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div class="ml-2">
          <p class="text-3xl">Best Price</p>
          <p class="text-2xl">
            We provode best quality product with best price. that wise we no one
            in the market.
          </p>
        </div>
      </div>
      <!-- Exceptional Service -->
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="190px"
          height="190px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#6c5483"
            d="m14.02 13.97l1.7-2.94s-.09-.08-.23-.18l-1.47-1.16l-.01.02c.03-.24.05-.47.05-.71s-.02-.47-.06-.69l.01.01l1.71-1.34l-1.7-2.95l-2.01.81v.01c-.37-.28-.77-.52-1.2-.7h.01L10.52 2H7.11L6.8 4.15h.01c-.43.18-.83.42-1.2.7v-.01L3.6 4.03L1.9 6.98l1.7 1.34l.01-.01c-.03.22-.05.45-.05.69s.02.47.05.71l-.01-.02l-1.47 1.16c-.13.1-.23.18-.23.18l1.7 2.94l2.02-.8l-.02-.03c.37.29.77.53 1.21.71H6.8L7.11 16h3.4s.02-.13.04-.3l.27-1.85h-.01c.44-.18.84-.42 1.21-.71l-.02.03zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m12.17 6.94l-.01.01c.02-.15.03-.3.03-.45c0-.15-.01-.3-.04-.44l.01.01l1.1-.86l-1.09-1.9l-1.29.52v.01c-.24-.18-.49-.33-.77-.45h.01l-.2-1.39h-2.19l-.2 1.38h.01c-.28.12-.53.27-.77.45v-.01l-1.29-.52l-1.09 1.9l1.09.86l.01-.01c-.02.14-.03.29-.03.44c0 .15.01.3.03.46l-.01-.01l-.94.75c-.08.06-.15.12-.15.12l1.09 1.89l1.3-.51l-.01-.02c.24.19.5.34.78.46h-.01l.2 1.38h2.19s.01-.08.03-.19l.17-1.19h-.01c.28-.12.54-.27.78-.46l-.01.02l1.3.51l1.09-1.89s-.06-.05-.15-.12zm-3.35.85c-.71 0-1.29-.58-1.29-1.29s.58-1.29 1.29-1.29s1.29.58 1.29 1.29s-.58 1.29-1.29 1.29"
          ></path>
        </svg>
        <div class="ml-2">
          <p class="text-3xl">Exceptional Service</p>
          <p class="text-2xl">
            Our dedicated team is passionate about sustainability and here to
            provide best service.
          </p>
        </div>
      </div>
      <!-- Unwavering Quality -->
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="190px"
          height="190px"
          viewBox="0 0 32 32"
        >
          <g fill="#3341ff">
            <path
              d="M10.6 14.18a7.477 7.477 0 0 1 5.39-2.29c1.96 0 3.91.76 5.39 2.29c2.97 3.05 2.97 8.01 0 11.06a7.459 7.459 0 0 1-5.39 2.29c-2.03 0-3.95-.81-5.39-2.29a7.872 7.872 0 0 1-2.23-5.53c0-2.09.79-4.05 2.23-5.53m6.83 3.2l-.83-1.72c-.25-.52-.97-.52-1.24 0l-.83 1.72c-.1.21-.29.35-.51.38l-1.85.28c-.55.08-.77.78-.37 1.18l1.28 1.28c.19.19.26.47.17.73l-.59 1.71c-.2.57.37 1.11.91.87l2.14-.96c.17-.08.37-.08.54 0l2.14.96c.55.24 1.11-.3.91-.87l-.59-1.71a.724.724 0 0 1 .17-.73l1.28-1.28c.41-.4.18-1.1-.37-1.18l-1.85-.28a.687.687 0 0 1-.51-.38"
            ></path>
            <path
              d="m5.708 2.01l.003.005h6.235c.67 0 1.272.335 1.602.915L16 6.962l2.447-4.022c.34-.58.95-.93 1.62-.93h2.04l-.003.005h4.561c1.44 0 2.342 1.555 1.622 2.825a16.55 16.55 0 0 1-5.42 5.77c-.353.274-.743.49-1.157.643c2.61 1.858 4.32 4.953 4.32 8.457c0 5.683-4.496 10.29-10.04 10.29c-5.546 0-10.04-4.607-10.04-10.29c0-3.511 1.715-6.612 4.334-8.468a4.328 4.328 0 0 1-1.157-.642c-2.24-1.46-4.1-3.44-5.42-5.77c-.71-1.26.2-2.82 1.65-2.82zm6.93 7.998a9.773 9.773 0 0 1 1.793-.465l.144-.236L10.537 3h-4.25a25.29 25.29 0 0 0 6.1 6.79c.083.075.166.147.251.218M25.742 3h-4.27L17.3 9.507a9.779 9.779 0 0 1 2.061.507a6.64 6.64 0 0 0 .258-.224A25.313 25.313 0 0 0 25.742 3M9.76 26.11A8.638 8.638 0 0 0 16 28.76c2.35 0 4.57-.94 6.25-2.65c3.44-3.53 3.44-9.27 0-12.8a8.69 8.69 0 0 0-12.49 0a9.098 9.098 0 0 0-2.59 6.4c0 2.42.92 4.69 2.59 6.4"
            ></path>
          </g>
        </svg>
        <div class="ml-4">
          <p class="text-3xl">Unwavering Quality</p>
          <p class="text-2xl">
            We prioritize high-quality products that are built to last, offering
            lasting value and minimizing waste.
          </p>
        </div>
      </div>
      <!-- Positive Impcat -->
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="190px"
          height="190px"
          viewBox="0 0 48 48"
        >
          <path
            fill="#2F88FF"
            fillRule="evenodd"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div class="ml-4">
          <p class="text-3xl">Positive Impact</p>
          <p class="text-2xl">
            Choose First Seal India and join our mission to promote responsible
            practices and a healthier planet.
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import TheSlider from "./TheSlider.vue";

export default {
  name: "CovidTransmissionVirusVisible",
  components: {
    TheSlider: TheSlider,
  },
};
</script>

<style scoped>
.content:hover {
  top: 0;
  opacity: 1;
}

.content {
  position: absolute;
  top: -20px;
  opacity: 0;
  color: black;
  height: 100%;
}

.about {
  animation: aboutus 1.2s forwards;
}
.product {
  animation: products 1s forwards;
}

@keyframes aboutus {
  0% {
    margin-left: -1200px;
  }
  100% {
    margin-left: 0;
  }
}

@keyframes products {
  0% {
    margin-right: -900px;
  }
  100% {
    margin-right: 0px;
  }
}
</style>
