const HelloWorldView = () => import('@/components/HelloWorld')

const HelloWorld = {
  path: '/',
  name: 'HelloWorld',
  component: HelloWorldView,
  meta: {
    isKeepAlive: true
  }
}

const routers = [HelloWorld]

export default routers
