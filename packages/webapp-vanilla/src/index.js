(() => {
    let clicks = 0
    const rce = React.createElement
    const buttonElement = document.querySelector('#button');
    const labelElement = document.querySelector('#label');


    function onClick() {
        document.querySelector('#clicked').innerHTML = `Clicked ${clicks++} times`
    }

    const button1 = rce(acme$atoms.Button, {onClick}, ['Button 1'])
    const button2 = rce(acme$atoms.Button, {onClick}, ['Button 2'])
    const button3 = rce(acme$atoms.Button, {onClick}, ['Button 3'])

    ReactDOM.render(
        rce(
            acme$molecules.ButtonSet,
            {
                label:'Hallo'
            },
            [button1, button2, button3]
        ), labelElement);

    ReactDOM.render(
        rce(
            acme$atoms.Button,
            {
                onClick
            },
            ['Hit me'],
        ), buttonElement);
})()
