const axios = require('axios').default;

(async () => {
    const res = await axios.get('http://www.thecolorapi.com/id', {
        params: {
            hex: '000000'
        }
    });
    console.log(res.data);
})();