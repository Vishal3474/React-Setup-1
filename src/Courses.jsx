import React from "react";
import Embed from "./Embed";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

function Courses() {
  return (
    <div>
      <div
        name="home"
        className="w-full h-screen bg-zinc-200 flex flex-col justify-between bg-cover bg-[url('https://cdn.discordapp.com/attachments/944189291427430421/999270894994206771/jeshoots-com-pUAM5hPaCRI-unsplash.jpg')]"
      >
        <div className="ml-auto mt-72 mr-96">
          <h1 className="text-4xl font-serif text-indigo-600">
            India's Largest
          </h1>
          <br />
          <h1 className="text-4xl font-serif text-indigo-600 font-bold">
            Learning Platform
          </h1>
        </div>
        <div className="text-center justify-center ml-auto  mr-64 mb-48 animate-underline">
          <button className="  text-2xl font-semibold text-white bg-indigo-600 px-3 py-2 inline-block font-mono rounded-md   mt-20">
            {" "}
            Start Learning
          </button>
        </div>
      </div>
      <div className="text-center justify-center">
        <h1 className="mb-2  text-4xl font-semibold text-white bg-blue-500 px-4 py-3 inline-block font-mono rounded-lg   mt-20">
          Available Courses
        </h1>
      </div>
      <div>
        <div>
          <div className="flex p-20 space-x-5">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-400 shadow-lg">
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg animate-bounce"
                src="https://store-images.s-microsoft.com/image/apps.36736.13898118890231671.27500cc3-3164-4991-bf71-0c71291c12fb.96720775-1459-4dde-8867-344ae2e74963?mode=scale&q=90&h=300&w=300"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-blue-500 text-xl font-medium mb-2">
                  HTML Crash Course
                </h5>
                <p class="text-white text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button class="text-pink-600 text-xl bg-white ">
                  Buy Now ₹499
                </button>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-400 shadow-lg">
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg animate-bounce"
                src="https://cdn.discordapp.com/attachments/944189291427430421/999008603610562580/unknown.png"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-blue-500 text-xl font-medium mb-2">
                  React full Course
                </h5>
                <p class="text-white text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button class="text-pink-600 text-xl bg-white ">
                  Buy Now ₹1999
                </button>
              </div>
            </div>
          </div>
          <div className="flex p-20 space-x-5">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-400 shadow-lg">
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg animate-bounce"
                src="https://sindhitutorials.com/images/mcqs/java.jpg"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-blue-500 text-xl font-medium mb-2">
                  Basic Java for beginners
                </h5>
                <p class="text-white text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button class="text-pink-600 text-xl bg-white ">
                  Buy Now ₹699
                </button>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-400 shadow-lg">
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg animate-bounce"
                src="https://lookatcourse.com/image/catalog/products/courses/c52.png"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-blue-500 text-xl font-medium mb-2">
                  Html + Css
                </h5>
                <p class="text-white text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button class="text-pink-600 text-xl bg-white ">
                  Buy Now ₹389
                </button>
              </div>
            </div>
          </div>
          <div className="p-20">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-400 shadow-lg ">
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg animate-bounce"
                src="https://images.velog.io/images/shyaoran/post/95718b64-710e-4495-8174-db4d6f739832/1_DF0g7bNW5e2z9XS9N2lAiw.jpeg"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-blue-500 text-xl font-medium mb-2">Node.js</h5>
                <p class="text-white text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button class="text-pink-600 text-xl bg-white  ">
                  Buy Now ₹1599
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials></Testimonials>
      <Embed></Embed>
      <Footer></Footer>
    </div>
  );
}

export default Courses;
