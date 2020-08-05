import '../assets/a.css';
import c1 from './c';

const a = {
    init () {
        console.log('AAA-')
        return 'AAA-'
    },
    cinit () {
        return c1.init();
    }
}

export default a;