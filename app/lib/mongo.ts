import mongoose from "mongoose";
import { log } from "./console";

const globalForMongo = globalThis as typeof globalThis & {
    __mongo?: {
        conn: typeof mongoose | null;
        logged: boolean;
        promise: Promise<typeof mongoose> | null;
    };
};

const cache = globalForMongo.__mongo ?? { conn: null, logged: false, promise: null };
globalForMongo.__mongo = cache;

/** Connect to the API's Mongo. Throws if `MongoUri` is missing or the connection fails. */
export async function connectMongo(): Promise<typeof mongoose> {
    const mongoUri = process.env.MongoUri;
    if (!mongoUri) {
        throw new Error("You need to define `MongoUri` in .env");
    }

    if (cache.conn) {
        return cache.conn;
    }

    cache.promise ??= mongoose.connect(mongoUri).then((conn) => {
        if (!cache.logged) {
            log.ok("Mongo connected");
            cache.logged = true;
        }
        return conn;
    });

    try {
        cache.conn = await cache.promise;
        return cache.conn;
    } catch (error) {
        cache.promise = null;
        log.error("Mongo connection failed", error);
        throw error;
    }
}
