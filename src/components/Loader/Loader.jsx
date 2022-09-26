import { MagnifyingGlass } from 'react-loader-spinner'
import { LoaderContainer } from './Loader.styled'

export const Loader = () => {
    return (
        <LoaderContainer>
<MagnifyingGlass
  visible={true}
  height="90"
  width="90"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'/>
        </LoaderContainer>
    )
}