"use client";

export default function HeroSection1() {
  return (
    <div className="w-screen h-screen bg-gray-700">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-2">
          <div
            className="text-3xl font-bold"
            style={{ fontFamily: "angelina" }}
          >
            Fight Club
          </div>
          <p className="text-neutral-300 text-center max-w-md">
            With insomnia nothing's real everything is a copy of a copy of a
            copy
          </p>
        </div>
      </div>
    </div>
  );
}
