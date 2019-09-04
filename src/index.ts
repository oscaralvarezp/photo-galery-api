import app from './app';
import { mongoConnection } from './database';

async function bootstrap() {
    mongoConnection();
    await app.listen(app.get('port'));
    console.log('server on port ', app.get('port'));
}

bootstrap();