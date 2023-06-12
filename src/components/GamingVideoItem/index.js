import ThemeContext from '../../context/ThemeContext'
import {Link, VideoItem, Image, Title, Views} from './styledComponents'

const GamingVideoItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details
  const renderLightMode = () => (
    <>
      <Link href={`/videos/${id}`}>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <Title color="black">{title}</Title>
        <Views color="#475569">{`${viewCount} Watching Worldwide`}</Views>
      </Link>
    </>
  )
  const renderDarkMode = () => (
    <>
      <Link href={`/videos/${id}`}>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <Title color="white">{title}</Title>
        <Views color="#475569">{`${viewCount} Watching Worldwide`}</Views>
      </Link>
    </>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        return (
          <VideoItem>
            {isDarkModeOn ? renderDarkMode() : renderLightMode()}
          </VideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingVideoItem
