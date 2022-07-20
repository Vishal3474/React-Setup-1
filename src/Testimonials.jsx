import React from "react";

function Testimonials() {
  return (
    <div className="bg-gray-100 space-x-5 shadow-lg ">
      <div class="mb-8 text-center">
        <h2 class="mb-2  text-4xl font-semibold text-white bg-blue-500 px-4 py-3 inline-block font-mono rounded-lg   mt-20">
          Testimonials
        </h2>
        <p class="text-lg text-gray-600">What others say about us</p>
      </div>
      <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
        <div class="p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://assets.weforum.org/sf_account/image/eR6OL3TJn810Bg_oFBdQidWcB1BjnGOk7gxSSoaV3Lo.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-indigo-600">Sunder Pichai </h5>
              <p class="text-sm text-gray-600"> Marketing</p>
            </div>
          </div>
        </div>{" "}
        <div class="p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.discordapp.com/attachments/944189291427430421/999287914796163162/pexels-italo-melo-2379005.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-indigo-600"> John</h5>
              <p class="text-sm text-gray-600">Co - Founder</p>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.discordapp.com/attachments/944189291427430421/946420617199124500/vkjpg.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-indigo-600">Vishal</h5>
              <p class="text-sm text-gray-600">CEO / Founder</p>
            </div>
          </div>
        </div>{" "}
        <div class="p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-indigo-600">James</h5>
              <p class="text-sm text-gray-600">Designer</p>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-indigo-600">Elen Musk</h5>
              <p class="text-sm text-gray-600">Educator</p>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-indigo-600">michael james</h5>
              <p class="text-sm text-gray-600">App developer</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Testimonials;
