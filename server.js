const { Service, dotenv, Static, Cors, Helmet } = require('@ulvimemmeedov/expressjsplus');
const path = require('path');
Service.use(Static(path.join(__dirname, 'views')));
Service.set('views', '/views');
Service.use(Cors());
Service.use(Helmet());
dotenv.config();
const port = process.env.PORT || 3000;
Service.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/', 'index.html'));
});

Service.listen(port, () => {
    console.log(`app running ${port}`)
});