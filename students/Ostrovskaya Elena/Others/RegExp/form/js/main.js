window.addEventListener('load', () => {
    document.addEventListener('submit', (evt) => {           
        let control = new ControlForm (evt.target);
        control.submitHandler(evt);
    })   
})

