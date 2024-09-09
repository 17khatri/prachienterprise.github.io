<template>
    <div class="image-gallery">
      <!-- Large image display -->
      <div class="large-image">
        <img :src="selectedImage" alt="Large view" />
      </div>
  
      <!-- Small images for selection -->
      <div class="thumbnail-gallery">
        <img
          v-for="image in images"
          :key="image.id"
          :src="image.src"
          :alt="image.alt"
          class="thumbnail"
          @click="showLargeImage(image.src)"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedImage: '', // To store the currently selected large image
        images: [
          { id: 1, src: 'src/assets/power-tool-04.jpg', alt: 'Image 1' },
          { id: 2, src: 'src/assets/Silicone-Sealant-1-scaled.webp', alt: 'Image 2' },
          { id: 3, src: 'src/assets/thermal-paste-image.avif', alt: 'Image 3' },
          // Add more images as needed
        ]
      };
    },
    methods: {
      showLargeImage(src) {
        this.selectedImage = src;
      }
    },
    mounted() {
      // Set a default image for the large view when the component is mounted
      if (this.images.length > 0) {
        this.selectedImage = this.images[0].src;
      }
    }
  };
  </script>
  
  <style scoped>
  .image-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .large-image img {
    height: 260px;
    width: 500px;
  }
  
  .thumbnail-gallery {
    display: flex;
    margin-top: 10px;
  }
  
  .thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 0 5px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .thumbnail:hover {
    transform: scale(1.1);
  }
  </style>
  