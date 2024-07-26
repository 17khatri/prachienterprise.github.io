<template>
  <div>
    <div class="bg-red-100 h-60 flex flex-col justify-center items-center">
      <h1 class="text-2xl font-semibold italic">Looking for an answer?</h1>
      <p>Fill free and ask us anything you want by feeling this form...</p>
    </div>
    <div class="flex justify-center">
      <form class="bg-white w-[80%] relative mb-3 -mt-6 px-36 py-10 rounded-md shadow-md flex flex-col">
        <p class="mt-1">Your Name</p>
        <input type="text" class="my-1 border border-black" />
        <p class="mt-1">Your Phone Number</p>
        <input type="number" class="my-1 border border-black" />
        <p class="mt-1">Your Email ID</p>
        <input type="email" class="my-1 border border-black" />
        <p class="mt-1">Type Your Message Here</p>
        <textarea rows="6" cols="36" class="border border-black mt-1 my-2"></textarea>
        <button class="absolute bottom-2 right-24 bg-red-200 px-3 cursor-pointer rounded-md">Submit</button>
      </form>
    </div>
  </div>
</template>
