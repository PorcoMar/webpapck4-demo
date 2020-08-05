import ajs from './a.js';
import cjs from './c.js';
import '../assets/index.less'

const AAA = () => {
    // document.write('index entry')
    // document.write(ajs.init())
    // document.write(ajs.cinit())
    // document.write(cjs.init())

    const div = document.createElement('div')
    div.innerText = 'index entry | ' + ajs.init() + ajs.cinit() + cjs.init();
    document.getElementById('box').after(div)
}

AAA();

const videoContext = document.createElement('video');
videoContext.src = 'https://appfiles.beta.jojoread.tinman.cn/resource-file/content/v0/10009/subject_res/video/live_title_01.mp4';
videoContext.className = 'videoCs';
videoContext.autoplay = true;
document.getElementById('box').before(videoContext)