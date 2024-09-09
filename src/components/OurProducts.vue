<template>
  <div class="relative flex-col flex items-center">
    <!-- Abrasive -->
    <div
      class="fixed w-[85%] bg-white z-10 h-96 overflow-auto rounded-lg"
      :class="isNotActive ? 'block' : 'hidden'"
    >
      <div class="bg-slate-100 flex justify-between sticky top-0">
        <h1 class="text-2xl ml-2">Abrasive</h1>
        <p class="mr-3 cursor-pointer text-2xl" @click="bluroff">X</p>
      </div>
      <hr class="font-bold h-1 bg-[#534c5b]" />
      <div class="flex px-2">
        <div class="w-[50%]">
          <p class="mt-2">
            Maruti Engineering and Tools is a leading manufacturer and supplier
            of Abrasive tool which is a tool that is used to wear away or remove
            material from a surface. The offered range of Abrasive tools can be
            used to grind, sand, polish, or otherwise shape a surface. Abrasive
            tools are typically made of materials such as diamond, carbon,
            silicon carbide, aluminium oxide, or ceramic.Abrasive tools are
            commonly used in metalworking, woodworking, and other manufacturing
            processes.The abrasive particles are bonded to the tool’s surface
            and used to grind, sand, hone, polish or cut the workpiece. These
            abrasive tools are accessible in different shapes and sizes and cab
            be used on a variety of materials from metal to wood. Further, we
            are constantly innovating and developing different types of products
            to meet the needs of the customers.
          </p>
          <p class="mt-2">
            Our manufactured tools are having its own specialty and unique
            features that make it the right choice for a particular job.The
            hardness of the abrasive particles can affect the tool’s durability
            and cutting ability. Harder particles are typically more durable,
            but may not cut as quickly as softer particles.Abrasive tools are
            often classified by a grading system that determines the size and
            uniformity of the abrasive particles.
          </p>
        </div>
        <div class="mt-2">
          <Trial></Trial>
        </div>
      </div>
    </div>
    <div
      class="grid gap-4 grid-cols-4"
      :class="isNotActive ? 'blur' : 'blur-none'"
    >
      <!-- Abrasive -->
      <div>
        <img
          src="../assets/abrasive-removebg-preview.png"
          class="border cursor-pointer border-black p-2"
          alt=""
          @click="blur"
        />
        <p class="bg-[#534c5b] text-white w-full text-center">ABRASIVE</p>
      </div>
      <!-- Drill Bit -->
      <div>
        <img
          src="../assets/drill-bit-removebg-preview.png"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">DRIIL-BIT</p>
      </div>
      <!-- Hand Tool -->
      <div>
        <img
          src="../assets/hand-tool.jpg"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">HAND-TOOL</p>
      </div>
      <!-- Breaking -->
      <div>
        <img
          src="../assets/bearing.jpg"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">BEARING</p>
      </div>
      <!-- CNC VMC -->
      <div>
        <img
          src="../assets/cnc-vmc-tooling.jpg"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">
          CNC & VMC TOOLING
        </p>
      </div>
      <!-- High Tamprature Grease -->
      <div>
        <img
          src="../assets/high-temperature-grease-05-removebg-preview.png"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">
          HIGH TAMPRATURE GREASE
        </p>
      </div>
      <!-- Measuring Instrument -->
      <div>
        <img
          src="../assets/measuring-instrument-04-removebg-preview.png"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">
          MEASURING INSTRUMENT
        </p>
      </div>
      <!-- Loctile -->
      <div>
        <img
          src="../assets/loctite.jpg"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">LOCTITE</p>
      </div>
      <!-- Power Tool -->
      <div>
        <img
          src="../assets/power-tool-02.jpg"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">POWER-TOOL</p>
      </div>
      <!-- Pneumatic Connector -->
      <div>
        <img
          src="../assets/pneumatic-connector-02.jpg"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">
          PNEUMATIC CONNECTOR
        </p>
      </div>
      <!-- Rubber Product -->
      <div>
        <img
          src="../assets/rubber-product-02.jpg"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">RUBBER PRODUCT</p>
      </div>
      <!-- Silicon -->
      <div>
        <img
          src="../assets/silicon-11.jpg"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">SILICONE</p>
      </div>
      <!-- Sweglock Fiting -->
      <div>
        <img
          src="../assets/swagelok-pipe-fitting-02.jpg"
          class="border cursor-pointer border-black p-2"
          alt=""
        />
        <p class="bg-[#534c5b] text-white w-full text-center">
          SWEGLOCK FITTINGS
        </p>
      </div>
    </div>
  </div>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 0px;
}
</style>

<script>
import Trial from "./trial.vue";

export default {
  components: { Trial },
  data() {
    return {
      isNotActive: false,
    };
  },
  methods: {
    blur() {
      this.isNotActive = true;
    },
    bluroff() {
      this.isNotActive = false;
    },
  },
};
</script>
