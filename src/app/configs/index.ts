import dotenv from 'dotenv'
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });


export default {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    live_frontend_url: process.env.LIVE_FRONTEND_URL,
    local_frontend_url: process.env.LOCAL_FRONTEND_URL
}