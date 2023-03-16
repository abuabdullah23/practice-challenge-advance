const textArea = document.getElementById('text-area-field');

// get bold icon and function
function fBold(e) {
    if (textArea.style.fontWeight == 'bold') {
        textArea.style.fontWeight = 'normal';

    } else {
        textArea.style.fontWeight = 'bold';
    }
}


// get italic icon and function
function fItalic(e) {
    if (textArea.style.fontStyle == 'italic') {
        textArea.style.fontStyle = 'normal';

    } else {
        textArea.style.fontStyle = 'italic';
    }
}

// get underline icon and function
function fUnderline(e) {
    if (textArea.style.textDecoration == 'underline') {
        textArea.style.textDecoration = 'none';

    } else {
        textArea.style.textDecoration = 'underline';
    }
}

// get left icon and function
function fLeft(e){
    textArea.style.textAlign = 'left';
}

// get center icon and function
function fCenter(e){
    textArea.style.textAlign = 'center';
}

// get right icon and function
function fRight(e){
    textArea.style.textAlign = 'right';
}


// get justify icon and function
function fJustify(e){
    textArea.style.textAlign = 'justify';
}

// get font size icon and function
function fChange(e) {
    let value = e.value;
    textArea.style.fontSize = value + 'px';
}


// get font upperCase icon and function
function fUppercase(e) {
    if (textArea.style.textTransform == 'uppercase') {
        textArea.style.textTransform = 'lowercase';

    } else {
        textArea.style.textTransform = 'uppercase';
    }
}

// get font color icon and function
function fColor(e) {
    let value = e.value;
    textArea.style.color = value;
}

window.addEventListener('load'), () => {
    textArea.value = '';
}