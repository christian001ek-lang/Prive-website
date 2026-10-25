import React from "react";

export default function Post() {
  return (
    <div>
      <div className="flex-col gap-7 flex mt-3.5 my-0 mx-auto w-3xl">
        <div className=" gap-7 flex justify-between border-b  border-amber-200 p-5 mt-3.5 my-0 mx-auto w-3xl">
          <h2 className="font-bold text-3xl">Latest Projects</h2>
          <p className="text-gray-800  font-semibold  hover:text-amber-400">
            View all
          </p>
        </div>

        <div className="flex gap-5 rounded-3xl">
          <div className="w-70 ">
            <img
              className="rounded-2xl"
              src="https://framerusercontent.com/images/jXqWW8QCPD0aqE9dmyJQkRTI.jpg?width=1920&height=1275"
              alt=""
            />
            <h3 className="hover:text-amber-400 font-bold ">Trail Type</h3>
            <p></p>
            <p>
              Modern design insprie by the <br /> greay outdoors.
            </p>
          </div>

          <div className="w-70">
            <img
              className="rounded-2xl"
              src="https://framerusercontent.com/images/70epA0P7vCPrUNNzfno4oMeq70.jpg?width=640&height=424"
              alt=""
            />
            <h3 className="hover:text-amber-400 font-bold">
              The spark Sessions
            </h3>
            <p>
              A podcast for Creators cjasing <br /> meaningful work.
            </p>
          </div>

          <div className="w-70 ">
            <img
              className="rounded-2xl"
              src="https://framerusercontent.com/images/iizk6LkELoUbbnIyvcDICbye6OE.jpg?width=640&height=427"
              alt=""
            />
            <h3 className="hover:text-amber-400 font-bold">Into the wild</h3>
            <p>
              A raw journey through nature's <br /> extremes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
