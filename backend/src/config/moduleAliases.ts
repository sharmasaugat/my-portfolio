import moduleAlias from 'module-alias';
import path from 'path';

const rootDir = path.resolve(__dirname, '..');

const aliases: Record<string, string> = {
    '@api': path.join(rootDir, 'api'),
    '@config': path.join(rootDir, 'config'),
    '@controllers': path.join(rootDir, 'api/controllers'),
    '@middlewares': path.join(rootDir, 'api/middleware'),
    '@routes': path.join(rootDir, 'api/routes'),
    '@services': path.join(rootDir, 'services'),
    '@utils': path.join(rootDir, 'utils'),
    '@core': path.join(rootDir, 'core')
};

moduleAlias.addAliases(aliases);

export { aliases };