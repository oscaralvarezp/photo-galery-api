import { connect } from 'mongoose';

export async function mongoConnection() {
    await connect('mongodb://localhost/photo-api', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
}