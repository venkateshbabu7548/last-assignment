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
          <Year>{time}</Year>
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
          <Year>{time}</Year>
        </YearCon>
      </ViewsCon>
    </ContentCard>
  )
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        return (
          <Link href={`/videos/${id}`}>
            <VideoItem>
              <Image src={thumbnailUrl} alt="thumbnail" />

              <div>{isDarkModeOn ? renderDarkView() : renderLightView()}</div>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItem
