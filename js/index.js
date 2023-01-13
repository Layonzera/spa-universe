import Router from './router.js'

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/aboutuniverse.html')
router.add('/explore', '/pages/exploration.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
