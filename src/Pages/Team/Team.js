import React from "react";
import { Link } from "react-router-dom";
import Team1 from "../../assets/team1.png";
import Team2 from "../../assets/team2.png";
import Team3 from "../../assets/team3.png";
import Team4 from "../../assets/team4.png";
const Team = () => {
  return (
    <div className="mt-20 mb-10">
      <h1 className="text-4xl font-bold text-center ">Meet Our Best Chef</h1>
      <h1 className="text-2xl font-bold text-yellow-500 text-center ">TEAM MEMBERS</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4">
        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src={Team1} alt="" class="h-full w-full" />
          </div>

          <h2 class="mt-4 font-bold text-xl">Alizeh Anderson</h2>
          <h6 class="mt-2 text-sm font-medium">Senior Chef</h6>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src={Team2} alt="" class="h-full w-full" />
          </div>

          <h2 class="mt-4 font-bold text-xl">Angelina John</h2>
          <h6 class="mt-2 text-sm font-medium">Master Chef</h6>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src={Team3} alt="" class="h-full w-full" />
          </div>

          <h2 class="mt-4 font-bold text-xl">Andre Smith</h2>
          <h6 class="mt-2 text-sm font-medium">Professor</h6>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src={Team4} alt="" class="h-full w-full" />
          </div>

          <h2 class="mt-4 font-bold text-xl">Christina Chi</h2>
          <h6 class="mt-2 text-sm font-medium">Psychologist</h6>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i class="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
