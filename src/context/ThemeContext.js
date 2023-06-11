import React from 'react'

const ThemeContext = React.createContext({
  isDarkModeOn: true,
  changeTheme: () => {},
  savedVideos: [],
  onAddVideo: () => {},
})
export default ThemeContext
