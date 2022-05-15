import { Change, oBOX, oInput } from './magnifier-var.js';


// () => { } 兼容问题可大


oInput.addEventListener('keyup', function () {
    if (this.value == '') {
        oBOX.style.display = 'none';
    } else {
        oBOX.style.display = 'block';
        Change.textContent = this.value;
    }
});

oInput.addEventListener('blur', function () {
    oBOX.style.display = 'none';
});

oInput.addEventListener('focus', function () {
    if (this.value !== '') {
        oBOX.style.display = 'block';
    }

})
