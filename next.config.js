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
      },
      {
        source:'/jogos',
        destination:'/games'
      }, 
      {
        source:'/pontos',
        destination:'/points'
      },
      {
        source:'/usuarios',
        destination:'/users'
      },
      {
        source:'/unidades',
        destination:'/unities'
      },
      {
        source:'/configuracoes',
        destination:'/setups'
      },
      {
        source:'/sair',
        destination:'/logout'
      }
    ]
  }
}

module.exports = nextConfig
