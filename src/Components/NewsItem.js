import React, { Component } from "react";

export default class extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-md">
          <img class="w-full" src={imageUrl} alt="" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{title}</div>
            <p class="text-gray-700 text-base mb-2">{desc}</p>
            <a
              href={newsUrl}
              target="_blank"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
