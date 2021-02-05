

const div = document.createElement('div')
div.innerText = 'app entry'
document.getElementById('box').after(div)

const str = `
<div>
<div class="page1"></div>
<div class="page2"></div>
<div class="page3"></div>
</div>
`
const dev2 = document.createElement('div');
dev2.innerHTML = str;
document.getElementById('box').after(dev2)