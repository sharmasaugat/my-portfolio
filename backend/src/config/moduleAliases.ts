import moduleAlias from 'module-alias';
import path from 'path';

moduleAlias.addAliases({
    '@src': path.join(__dirname, '..'),
    '@api': path.join(__dirname, '..', 'api'),
    '@config': path.join(__dirname, '..', 'config'),
    '@controllers': path.join(__dirname, '..', 'api', 'controllers'),
    '@middlewares': path.join(__dirname, '..', 'api', 'middleware'),
    '@validators': path.join(__dirname, '..', 'api', 'validators'),
    '@routes': path.join(__dirname, '..', 'api', 'routes'),
    '@services': path.join(__dirname, '..', 'services'),
    '@utils': path.join(__dirname, '..', 'utils'),
    '@errors': path.join(__dirname, '..', 'utils','errors'),
    '@core': path.join(__dirname, '..', 'core'),
    '@entities': path.join(__dirname, '..', 'entities'), 
    '@interfaces': path.join(__dirname, '..', 'interfaces'),
    '@infrastructure': path.join(__dirname, '..', 'infrastructure'),
    '@providers': path.join(__dirname, '..', 'infrastructure','providers'),
    '@aws': path.join(__dirname, '..', 'infrastructure','providers', 'aws'),
    '@ratelimiter': path.join(__dirname, '..', 'core', 'ratelimiter'),
    '@types': path.join(__dirname, '..', 'types')
});