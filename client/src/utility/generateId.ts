import ObjectID from 'bson-objectid';

export function generateId(): string {
    return new ObjectID().toHexString();
}
