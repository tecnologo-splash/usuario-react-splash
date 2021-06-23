import ContentLoader from 'react-content-loader'


const PerfilDataLoading = props => (
  <ContentLoader
    speed={2}
    width={520}
    height={210}
    viewBox="-50 0 400 170"
    backgroundColor="#bdc3c7"
    foregroundColor="#ecebeb"
    {...props}
  >
     <circle cx="75" cy="75" r="70" />
    
      <rect x="5" y="150" rx="3" ry="3" width="130" height="15" />
      <rect x="5" y="170" rx="3" ry="3" width="70" height="10" />
      <rect x="10" y="190" rx="3" ry="3" width="115" height="15" />
      <rect x="10" y="210" rx="3" ry="3" width="35" height="8" />
  </ContentLoader>
)

export default PerfilDataLoading