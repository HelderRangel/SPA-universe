import { Router } from './router.js';

const router = new Router()
router.add('/', './pages/home.html')
router.add('/universe', './pages/universo.html')
router.add('/exploracao', './pages/exploracao.html')
router.add(404, './pages/error404.html')
        
router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()