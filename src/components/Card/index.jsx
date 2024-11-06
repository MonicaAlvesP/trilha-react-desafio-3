import { FiThumbsUp } from 'react-icons/fi'
import Project from '../../assets/img/projects.svg'

import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from '../../styles/modules/_card'

export const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={Project} />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          <div>
            <h4>Pablo Henrique</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}
