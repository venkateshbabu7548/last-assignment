import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItem,
  Link,
  Image,
  ContentCard,
  Title,
  Channel,
  ViewsCon,
  YearCon,
  Year,
  Publish,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, channel, viewCount, publishedAt} = details
  const {name} = channel
  const time = formatDistanceToNow(new Date(publishedAt))
  const renderLightView = () => (
    <ContentCard>
      <Title color="black">{title}</Title>
      <Channel>{name}</Channel>
      <ViewsCon>
        <Channel>{`${viewCount} views`}</Channel>
        <YearCon>
          <Year>
            <Publish>{time}</Publish>
          </Year>
        </YearCon>
      </ViewsCon>
    </ContentCard>
  )
  const renderDarkView = () => (
    <ContentCard>
      <Title color="white">{title}</Title>
      <Channel>{name}</Channel>
      <ViewsCon>
        <Channel>{`${viewCount} views`}</Channel>
        <YearCon>
          <Year>
            <Publish>{time}</Publish>
          </Year>
        </YearCon>
      </ViewsCon>
    </ContentCard>
  )
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        return (
          <VideoItem>
            <Link href={`/videos/${id}`}>
              <Image src={thumbnailUrl} alt="video thumbnail" />

              <div>{isDarkModeOn ? renderDarkView() : renderLightView()}</div>
            </Link>
          </VideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItem
