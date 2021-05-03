(() => {
    let clicks = 0
    const rce = React.createElement
    const buttonElement = document.querySelector('#button');

    function onClick() {
        document.querySelector('#clicked').innerHTML = `Clicked ${clicks++} times`
    }
    onClick()

    ReactDOM.render(
        rce(
            acme$atoms.Button,
            {
                onClick
            },
            ["Hit me"],
        ), buttonElement);
})()
