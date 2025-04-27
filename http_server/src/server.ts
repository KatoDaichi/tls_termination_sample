import Fastify from 'fastify'
import { Type, type TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>()

fastify.post(
  '/echo',
  {
    schema: {
      body: Type.Object({
        text: Type.String(),
      }),
    },
  },
  (req) => {
    return req.body.text
  },
)

// サーバーの起動
const main = async () => {
  try {
    await fastify.listen({ host: '0.0.0.0', port: 3000 })
    console.log('Server is running on port 3000')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

main()
