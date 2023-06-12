import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItemCon,
  Thumbnail,
  ContentCard,
  Title,
  Channel,
  Down,
  ChannelImage,
  Link,
  ViewsCon,
  Views,
  Year,
  List,
  Publish,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props
  const {title, id, channel, thumbnailUrl, viewCount, publishedAt} = details
  const {name, profileImageUrl} = channel
  const time = formatDistanceToNow(new Date(publishedAt))

  const renderDarkMode = () => (
    <Link href={`/videos/${id}`}>
      <VideoItemCon>
        <Thumbnail src={thumbnailUrl} alt="thumbnail" />

        <Down>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <ContentCard>
            <Title color="white">{title}</Title>
            <Channel>{name}</Channel>
            <ViewsCon>
              <Views>{`${viewCount} views `}</Views>
              <List>
                <Year>
                  <Publish>{time}</Publish>
                </Year>
              </List>
            </ViewsCon>
          </ContentCard>
        </Down>
      </VideoItemCon>
    </Link>
  )

  const renderLightMode = () => (
    <Link href={`/videos/${id}`}>
      <VideoItemCon>
        <Thumbnail src={thumbnailUrl} alt="thumbnail" />

        <Down>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <ContentCard>
            <Title color="#231f20">{title}</Title>
            <Channel>{name}</Channel>
            <ViewsCon>
              <Views>{`${viewCount} views `}</Views>
              <List>
                <Year>
                  <Publish>{time}</Publish>
                </Year>
              </List>
            </ViewsCon>
          </ContentCard>
        </Down>
      </VideoItemCon>
    </Link>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        return <div>{isDarkModeOn ? renderDarkMode() : renderLightMode()}</div>
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoItem
