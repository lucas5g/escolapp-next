/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites(){
    return [
      {
        source:'/turmas',
        destination:'/groups'
      },
      {
        source:'/locais',
        destination:'/places'
      },
      {
        source:'/modalidades',
        destination:'/modalities'
      },
      {
        source:'/equipes',
        destination:'/teams'
      }
    ]
  }
}

module.exports = nextConfig
