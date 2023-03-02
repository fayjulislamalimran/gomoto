import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/0.jpg";
import Blog2 from "../../assets/00.JPG";
import Blog3 from "../../assets/000.JPG";

const Blog = () => {
  return (
    <div>
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
              <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={Blog1} alt="blog" />
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Best Chicken Katsu.</h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500 text-justify ">Katsu is a Japanese transliterated word, meaning cutlet. It comes from tonkatsu (pictured below), which is a pork cutlet, but there are also all other kinds of katsu, which has turned into a term for panko breaded items. You can find tofu katsu, beef katsu, and of course, chicken katsu.</p>{" "}
              <div class="mt-4">
                <Link href="#" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">
                  {" "}
                  Read More »{" "}
                </Link>
              </div>
            </div>
            <div class="p-6">
              <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={Blog2} alt="blog" />
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Huevos Rancheros</h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500 text-justify">Huevos rancheros is a Mexican breakfast that consists of lightly fried tortillas, refried beans, sunny side up eggs, and salsa. It can be spicy or mild and dressed up with cheese, avocados, cilantro, and all the extra toppings. Huevos rancheros means “ranch style eggs” and essentially.</p>{" "}
              <div class="mt-4">
                <Link href="#" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">
                  {" "}
                  Read More »{" "}
                </Link>
              </div>
            </div>
            <div class="p-6">
              <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={Blog3} alt="blog" />
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Grated Egg Toast</h1>
              <p class="mx-auto text-base leading-relaxed text-gray-500 text-justify">You can use any kind of grater! I used to love those rotary graters and that would be a good option for this because you’d be able to grate the whole egg without your fingers getting in the way. A regular box grater or a microplane will work wonders as well. </p>{" "}
              <div class="mt-4">
                <Link href="#" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">
                  {" "}
                  Read More »{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
