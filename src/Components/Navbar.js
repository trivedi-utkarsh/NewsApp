import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='bg-gray-700 border-gray-200 dark:bg-gray-900 h-12'>
        <p className='text-white px-5 pt-2 text-2xl font-semibold'>DailyNews</p>
        <ul className='flex'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>    
      )
  }
}
